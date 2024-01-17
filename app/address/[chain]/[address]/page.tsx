import { EthGetSourceCodeInterface } from "@/lib/explorer/chains"
import { getSourceCode } from "@/lib/explorer/src/api"
import { InvalidMessage } from "@/components/invalid-message"
import { SolideIDE } from "@/components/main/solide-ide"

export default async function Page({
  params,
}: {
  params: { chain: string; address: string }
}) {
  const data: EthGetSourceCodeInterface = await getSourceCode(
    params.chain,
    params.address
  )

  if (typeof data.result === "string") {
    return (
      <InvalidMessage>
        {data.result} {JSON.stringify(data)}
      </InvalidMessage>
    )
  }

  return (
    <SolideIDE
      url={params.address}
      chainId={params.chain}
      title={data.result[0].ContractName}
      content={data.result[0].SourceCode}
      version={data.result[0].CompilerVersion}
    />
  )
}
