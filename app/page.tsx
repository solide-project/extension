import { getSolidityContract } from "@/lib/server/source-loader"
import { compilerVersions, solcVersion } from "@/lib/versions"
import { InvalidMessage } from "@/components/core/components/invalid-message"
import { EVMProvider } from "@/components/evm/evm-provider"
import { EvmIDE } from "@/components/evm/ide"

interface SearchParams {
  params: { slug: string }
  searchParams?: { [key: string]: string | undefined }
}
export default async function IndexPage({ searchParams }: SearchParams) {
  let url = ""
  searchParams?.url && (url = searchParams.url)

  let version = solcVersion
  searchParams?.version &&
    compilerVersions.includes(searchParams?.version) &&
    (version = searchParams?.version)

  let remappings: Record<string, string> = {}
  if (searchParams?.remappings) {
    searchParams?.remappings.split(",").forEach((remapping: string) => {
      const [to, from] = remapping.split("=")
      if (!to || !from)
        return <InvalidMessage>{"Remapping Issue"}</InvalidMessage>
      console.log(remapping, to, from)
      remappings[to] = from
    })
  }

  const data = await getSolidityContract(url, remappings)
  if (typeof data === "string") {
    return <InvalidMessage>{data}</InvalidMessage>
  }

  return (
    <EVMProvider>
      <EvmIDE
        url={url}
        content={JSON.stringify(data)}
        version={version}
        title={url.replace(
          /https:\/\/raw.githubusercontent.com\/[a-zA-Z0-9\-]+\/[a-zA-Z0-9\-]+\/[a-zA-Z0-9\-]+\//,
          ""
        )}
      />
    </EVMProvider>
  )
}
