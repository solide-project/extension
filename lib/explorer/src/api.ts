import { EthGetSourceCodeInterface, ExplorerInterface } from "../chains"
import { getScanner } from "../chains/get-scanner"
import { generateSourceCodeError } from "../chains/get-source-code"

export const getSourceCode = async (
  chain: string,
  address: string
): Promise<EthGetSourceCodeInterface> => {
  const scanner: ExplorerInterface | undefined = getScanner(chain)
  if (!scanner) {
    return generateSourceCodeError("Invalid chain or chain not supported")
  }

  return await scanner.getSourceCode(address)

  // const apiUrl: string = getAPI(chain);
  // if (!apiUrl) {
  //     return generateSourceCodeError("Invalid chain or chain not supported")
  // }
  // let uri = `${apiUrl}/${getSourceCodeEndpoint(chain, address)}`;
  // const apiKey = getAPIKey(chain);
  // if (apiKey) {
  //     uri = uri.concat(`&apikey=${apiKey}`)
  // }

  // // console.log(uri)
  // try {
  //     let response: Response;
  //     switch (chain) {
  //         case ChainID.TRON_MAINNET:
  //         case ChainID.TRON_SHASTA_TESTNET:
  //             var myHeaders = new Headers();
  //             myHeaders.append("Content-Type", "application/json");

  //             var raw = JSON.stringify({
  //                 "contractAddress": address
  //             });
  //             var requestOptions: any = {
  //                 method: 'POST',
  //                 headers: myHeaders,
  //                 body: raw,
  //                 redirect: 'follow'
  //             };

  //             response = await fetch(uri, requestOptions)
  //             break;
  //         default:
  //             response = await fetch(uri)
  //             break;
  //     }

  //     if (!response || !response.ok) {
  //         return generateSourceCodeError("Error fetching contract")
  //     }

  //     switch (chain) {
  //         case ChainID.METIS_ANDROMEDA:
  //         case ChainID.METIS_SEPOLIA:
  //         case ChainID.MANTLE_MAINNET:
  //         case ChainID.MANTLE_TESTNET:
  //         case ChainID.KAVA_MAINNET:
  //         case ChainID.KAVA_TESTNET:
  //         case ChainID.ROLLUX_MAINNET:
  //         case ChainID.ROLLUX_TESTNET:
  //         case ChainID.CANTO_TESTNET:
  //         case ChainID.ASTAR_MAINNET:
  //         case ChainID.ACALA_MAINNET:
  //         case ChainID.MANDALA_TESTNET:
  //         case ChainID.REI_MAINNET:
  //         case ChainID.REI_TESTNET:
  //         case ChainID.CALLISTO_MAINNET:
  //         case ChainID.OASIS_EMERALD:
  //         case ChainID.OASIS_SAPPHIRE:
  //         case ChainID.OASIS_SAPPHIRE_TESTNET:
  //             const data = await response.json() as any;
  //             if (data.result && data.result[0]) {
  //                 if (data.result[0].AdditionalSources) {
  //                     let sources: any = {}

  //                     const sourceName = data.result[0].FileName || data.result[0].ContractName as string;
  //                     sources[sourceName] = {
  //                         "content": data.result[0].SourceCode as string,
  //                     };
  //                     (data.result[0].AdditionalSources).forEach((element: { Filename: string, SourceCode: string }) => {
  //                         if (element.Filename.startsWith("/")) {
  //                             element.Filename = element.Filename.slice(1);
  //                         }

  //                         sources[element.Filename] = {
  //                             "content": element.SourceCode
  //                         }
  //                     })

  //                     if (data.result[0].CompilerSettings) {
  //                         if (data.result[0].CompilerSettings.compilationTarget) {
  //                             delete data.result[0].CompilerSettings.compilationTarget;
  //                         }

  //                         if (data.result[0].CompilerSettings.Libraries) {
  //                             delete data.result[0].CompilerSettings.Libraries;
  //                         }
  //                     }

  //                     const input: any = {
  //                         settings: data.result[0].CompilerSettings,
  //                         sources: sources,
  //                     }
  //                     input.language = "Solidity";

  //                     data.result[0].SourceCode = `{${JSON.stringify(input)}}`
  //                 }
  //             }

  //             return data;
  //         case ChainID.IMMUTABLE_MAINNET:
  //         case ChainID.IMMUTABLE_TESTNET:
  //         case ChainID.CANTO_MAINNET:
  //         case ChainID.MANTA_PACIFIC:
  //         case ChainID.MANTA_TESTNET:
  //         case ChainID.ZETACHAIN_TESTNET:
  //         case ChainID.FUSE_MAINNET:
  //         case ChainID.FUSE_SPARK:
  //         // case ChainID.ASTAR_MAINNET:
  //         // case ChainID.SHIDEN_MAINNET:
  //         // case ChainID.SHUBIYA_TESTNET:
  //         case ChainID.LUKSO_MAINNET:
  //         case ChainID.LUKSO_TESTNET:
  //         case ChainID.ZORA_NETWORK_MAINNET:
  //         case ChainID.NEON_MAINNET:
  //         case ChainID.NEON_TESTNET:
  //         case ChainID.AURORA_MAINNET:
  //         case ChainID.AURORA_TESTNET:
  //             return await cantoConvert(await response.json(), address, chain);
  //         case ChainID.XDC_MAINNET:
  //             return xdcConvert(await response.json());
  //         case ChainID.FILECOIN_MAINNET:
  //         case ChainID.FILECOIN_CALIBRATION:
  //             return filecoinConvert(await response.json());
  //         case ChainID.RONIN_MAINNET:
  //         case ChainID.RONIN_SAIGON_TESTNET:
  //             return await roninConvert(await response.json(), address, chain);
  //         case ChainID.TRON_MAINNET:
  //         case ChainID.TRON_SHASTA_TESTNET:
  //             return await tronConvert(await response.json(), address, chain);
  //     }
  //     let data = await response.json() as GetSourceCodeSchema;
  //     // console.log(uri)
  //     return data;
  // }
  // catch (error) {
  //     return {
  //         status: "0",
  //         message: "NOTOK",
  //         result: "Invalid contract address"
  //     };
  // }
}
