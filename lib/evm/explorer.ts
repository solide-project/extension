// Server side code

import { createPublicClient, http, keccak256, toHex } from "viem"
import { getSource } from "web3-plugin-contracts"

import { ChainID, getAPIKey, getRPC, getTronRPC } from "@/lib/chains"
import { metadataUtil } from "@/lib/evm"
import { getCode } from "@/lib/server/tron"
import { BTFSGateway, GlacierService } from "@/lib/solidity-db"
import { solcVersion } from "@/lib/versions"

import { SolidityDatabaseRegistry } from "../solidity-db/tron-contract"

export interface EthGetSourceCodeInterface {
  status: string
  message: string
  result: ContractInfo[] | string
}

export interface ContractInfo {
  SourceCode: string
  ABI: string
  ContractName: string
  CompilerVersion: string
  OptimizationUsed: string
  Runs: string
  ConstructorArguments: string
  EVMVersion: string
  Library: string
  LicenseType: string
  Proxy: string
  Implementation: string
  SwarmSource: string

  // This is addon for Solide
  BytcodeContract?: string // This is the id of the contract provided by Solide
}

export const getSourceCode = async (
  chain: string,
  address: string
): Promise<EthGetSourceCodeInterface> => {
  let data = {
    result: "API Endpoint not found",
  } as EthGetSourceCodeInterface
  try {
    data = await getSource(address, {
      chainId: chain,
      apiKey: getAPIKey(chain),
    })
  } catch (error) {
    console.error(error)
    // This is an error in the plugin, we will continue to use the Solidity DB
  }

  // NEW: Solide Smart Contract Database Service to load unverified contracts
  if (typeof data.result !== "string") {
    const source = (data.result[0] as ContractInfo).SourceCode
    const abi = (data.result[0] as ContractInfo).ABI
    if (!source || !abi) {
      let contractBytecode: string = ""
      if (isTronNetwork(chain)) {
        const rpc = getTronRPC(chain)
        if (rpc) {
          contractBytecode = await getCode(address, rpc)
        }
      } else {
        const rpc = getRPC(chain)
        if (rpc) {
          const web3 = createPublicClient({
            transport: http(rpc),
          })
          const code = await web3.getCode({ address: address as `0x${string}` })
          contractBytecode = code?.toString() || ""
        }
      }

      if (contractBytecode && contractBytecode !== "0x") {
        const hash = keccak256(toHex(contractBytecode.slice(2))) || ""

        const databaseService = new SolidityDatabaseRegistry({})
        await databaseService.load()
        const results = await databaseService.find(hash)
        if (!results || !results.id) {
          console.log("address not found in database")
          return data
        }
        const response = await fetch(`${BTFSGateway}/${results.id}`)
        const metadata = await response.json()

        const contractName = metadataUtil.contractName(metadata)
        const compilerVersion = metadataUtil.compilerVersion(metadata)

        const result = {
          SourceCode: `{${JSON.stringify(metadata)}}`,
          ABI: "",
          ContractName: contractName,
          CompilerVersion: compilerVersion || solcVersion,
          OptimizationUsed: "0",
          Runs: "200",
          ConstructorArguments: "",
          EVMVersion: "default",
          Library: "",
          LicenseType: "0",
          Proxy: "",
          Implementation: "",
          SwarmSource: "",
          BytcodeContract: results.id,
        }

        data.result = [result]
      }
    }
  } else if (
    data.result === "API Endpoint not found" ||
    data.result === "Contract not verified"
  ) {
    let contractBytecode: string = ""
    const rpc = getRPC(chain)
    if (rpc) {
      const web3 = createPublicClient({
        transport: http(rpc),
      })
      const code = await web3.getCode({ address: address as `0x${string}` })
      contractBytecode = code?.toString() || ""
    }

    if (contractBytecode && contractBytecode !== "0x") {
      const hash = keccak256(toHex(contractBytecode.slice(2))) || ""
      console.log("hash", hash)
      const databaseService = new SolidityDatabaseRegistry({})
      await databaseService.load()
      const results = await databaseService.find(hash)
      if (!results || !results.id) {
        console.log("address not found in database")
        return data
      }
      const response = await fetch(`${BTFSGateway}/${results.id}`)
      const metadata = await response.json()

      const contractName = metadataUtil.contractName(metadata)
      const compilerVersion = metadataUtil.compilerVersion(metadata)

      const result = {
        SourceCode: `{${JSON.stringify(metadata)}}`,
        ABI: "",
        ContractName: contractName,
        CompilerVersion: compilerVersion || solcVersion,
        OptimizationUsed: "0",
        Runs: "200",
        ConstructorArguments: "",
        EVMVersion: "default",
        Library: "",
        LicenseType: "0",
        Proxy: "",
        Implementation: "",
        SwarmSource: "",
        BytcodeContract: results.id,
      }

      data.result = [result]
    }
  }

  return data
}

const isTronNetwork = (chain: string): boolean => {
  return (
    chain === ChainID.TRON_MAINNET ||
    chain === ChainID.TRON_NILE_TESTNET ||
    chain === ChainID.TRON_SHASTA_TESTNET
  )
}
