import { getAPI, getAPIKey } from "@/lib/chains"
import { solcVersion } from "@/lib/utils"

import {
  generateSourceCodeError,
  getSourceCodeEndpoint,
} from "../get-source-code"
import { EthGetSourceCodeInterface } from "../get-source-code-interface"

/**
 * Base of Etherscan implementation, other scanner will have these overrides
 */
export class BaseScan {
  chainId: string

  constructor(chainId: string) {
    this.chainId = chainId
  }

  generateDefaultResult = (): any => {
    return {
      SourceCode: "",
      ABI: "",
      ContractName: "",
      CompilerVersion: solcVersion,
      OptimizationUsed: "0",
      Runs: "200",
      ConstructorArguments: "",
      EVMVersion: "default",
      Library: "",
      LicenseType: "0",
      Proxy: "",
      Implementation: "",
      SwarmSource: "",
    }
  }

  //#region getSoureCode implementation
  getSourceCodeEndpoint(address: string): string {
    return `api?module=contract&action=getsourcecode&address=${address}`
  }

  getsourcecodeURL(address: string): string {
    const apiUrl: string = getAPI(this.chainId)
    if (!apiUrl) {
      return ""
    }
    let uri = `${apiUrl}/${this.getSourceCodeEndpoint(address)}`
    const apiKey = getAPIKey(this.chainId)
    if (apiKey) {
      uri = uri.concat(`&apikey=${apiKey}`)
    }

    return uri
  }

  async getSourceCode(address: string): Promise<EthGetSourceCodeInterface> {
    const apiUrl: string = this.getsourcecodeURL(address)
    if (!apiUrl) {
      return generateSourceCodeError("API Endpoint not found")
    }

    const response = await fetch(apiUrl)
    if (!response || !response.ok) {
      return generateSourceCodeError("Error fetching contract")
    }

    let data = (await response.json()) as EthGetSourceCodeInterface
    return data
  }
  //#endregion

  //#region utils

  /**
   * Append a given extension to string if it doesn't already have it.
   * Sometimes we want to turn the contract source into a .sol path
   * @param payload
   * @param extension
   * @returns
   */
  appendExtension = (payload: string, extension: string = ".sol"): string => {
    if (!payload.endsWith(extension)) {
      return payload.concat(extension)
    }

    return payload
  }
  //#endregion

  //#region metadata implementation

  async metadataGetSources(metadata: any): Promise<any> {
    let sources: Record<string, { content: string }> = {}
    let fileUrls: { [key: string]: string } = {}

    if (metadata.sources) {
      Object.entries(metadata.sources).forEach(([key, val]: any) => {
        if (val.urls) {
          // Currently only support IPFS
          const ipfsFile: string =
            val.urls.find((element: string) => element.includes("ipfs")) || ""
          const cidV0 = /Qm[1-9A-HJ-NP-Za-km-z]{44,}/
          const extractedCID = ipfsFile.match(cidV0)
          if (!extractedCID) {
            throw new Error("Sorry the contract is not supported yet.")
          }
          fileUrls[
            `https://api.universalprofile.cloud/ipfs/${extractedCID[0]}`
          ] = key
        }
        // console.log(element);
      })

      const fetchData = (url: string) => {
        return (
          fetch(url)
            .then((response) => response.text())
            // .then(content => console.log(`${content} success`))
            .then((content) => {
              if (content.trim() === "Not Found") {
                console.log(`${fileUrls[url]} not found`)
              }
              return [url, content]
            })
            .catch((error) => console.error("Error fetching data:", error))
        )
      }

      const dataArray = await Promise.all(
        Object.keys(fileUrls).map((url: string) => fetchData(url))
      )
      // All fetch operations are complete, and dataArray contains the results
      dataArray.forEach((element: any) => {
        sources[fileUrls[element[0]]] = {
          content: element[1],
        }
      })
    }

    return sources
  }
  //#endregion
}
