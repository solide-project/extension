import { ChainID } from "./chain-id"

const data: { [key: string]: string } = {
  [ChainID.ETHEREUM_MAINNET]: "https://etherscan.io",
  [ChainID.ETHEREUM_GOERLI]: "https://goerli.etherscan.io",
  [ChainID.ETHEREUM_SEPOLIA]: "https://sepolia.etherscan.io",
  [ChainID.ETHEREUM_HOLESKY]: "https://holesky.etherscan.io",
  [ChainID.METIS_ANDROMEDA]: "https://andromeda-explorer.metis.io",
  [ChainID.METIS_SEPOLIA]: "https://sepolia.explorer.metisdevops.link",
  [ChainID.ARBITRUM_ONE]: "https://arbiscan.io",
  [ChainID.ARBITRUM_GOERLI]: "https://goerli.arbiscan.io",
  [ChainID.ARBITRUM_NOVA]: "https://nova.arbiscan.io",
  [ChainID.OASIS_EMERALD]: "https://explorer.emerald.oasis.dev",
  [ChainID.OASIS_SAPPHIRE]: "https://explorer.sapphire.oasis.io",
  [ChainID.OASIS_SAPPHIRE_TESTNET]:
    "https://testnet.explorer.sapphire.oasis.dev",
  [ChainID.IMMUTABLE_MAINNET]: "https://explorer.immutable.com",
  [ChainID.IMMUTABLE_TESTNET]: "https://explorer.testnet.immutable.com",
  [ChainID.AVALANCHE_MAINNET]: "https://snowtrace.io",
  [ChainID.AVALANCHE_FUJI]: "https://testnet.snowtrace.io",
  [ChainID.POLYGON_MAINNET]: "https://polygonscan.com",
  [ChainID.POLYGON_MUMBAI]: "https://mumbai.polygonscan.com",
  [ChainID.OPTIMISM_MAINNET]: "https://optimistic.etherscan.io",
  [ChainID.OPTIMISM_SEPOLIA]: "https://sepolia-optimism.etherscan.io",
  [ChainID.FANTOM_MAINNET]: "https://ftmscan.com",
  [ChainID.FANTOM_TESTNET]: "https://testnet.ftmscan.com",
  [ChainID.BASE_MAINNET]: "https://basescan.org",
  [ChainID.BASE_SEPOLIA]: "https://sepolia.basescan.org",
  [ChainID.BNB_MAINNET]: "https://bscscan.com",
  [ChainID.BNB_TESTNET]: "https://testnet.bscscan.com",
  [ChainID.LINEA_MAINNET]: "https://lineascan.build",
  [ChainID.LINEA_TESTNET]: "https://goerli.lineascan.build",
  [ChainID.MOONBEAM_MAINNET]: "https://moonbeam.moonscan.io",
  [ChainID.MOONBASE_ALPHA]: "https://moonbase.moonscan.io",
  [ChainID.MOONRIVER_MAINNET]: "https://moonriver.moonscan.io",
  [ChainID.CELO_MAINNET]: "https://celoscan.io",
  [ChainID.CELO_ALFAJORES]: "https://alfajores.celoscan.io",
  [ChainID.GNOSIS_MAINNET]: "https://gnosisscan.io",
  [ChainID.CRONOS_MAINNET]: "https://cronoscan.com",
  [ChainID.SCROLL_MAINNET]: "https://scrollscan.com",
  [ChainID.SCROLL_SEPOLIA]: "https://sepolia.scrollscan.com",
  [ChainID.MANTLE_MAINNET]: "https://explorer.mantle.xyz",
  [ChainID.MANTLE_TESTNET]: "https://explorer.testnet.mantle.xyz",
  [ChainID.BITTORRENT_MAINNET]: "https://bttcscan.com",
  [ChainID.BITTORRENT_TESTNET]: "https://testnet.bttcscan.com",
  [ChainID.XDC_MAINNET]: "https://explorer.xinfin.network",
  [ChainID.CANTO_MAINNET]: "https://tuber.build",
  [ChainID.CANTO_TESTNET]: "https://testnet.tuber.build",
  [ChainID.KAVA_MAINNET]: "https://kavascan.com",
  [ChainID.KAVA_TESTNET]: "https://testnet.kavascan.com",
  [ChainID.ROLLUX_MAINNET]: "https://explorer.rollux.com",
  [ChainID.ROLLUX_TESTNET]: "https://rollux.tanenbaum.io",
  [ChainID.SYSCOIN_MAINNET]: "https://explorer.syscoin.org",
  [ChainID.SYSCOIN_TESTNET]: "https://tanenbaum.io",
  [ChainID.BOBA_ETHEREUM]: "https://bobascan.com",
  [ChainID.MANTA_PACIFIC]: "https://pacific-explorer.manta.network",
  [ChainID.MANTA_TESTNET]: "https://pacific-explorer.testnet.manta.network",
  [ChainID.WEMIX_MAINNET]: "https://wemixscan.com",
  [ChainID.WEMIX_TESTNET]: "https://testnet.wemixscan.com",
  [ChainID.ASTAR_MAINNET]: "https://astar.blockscout.com",
  [ChainID.SHIDEN_MAINNET]: "https://shiden.blockscout.com",
  [ChainID.SHUBIYA_TESTNET]: "https://shibuya.blockscout.com",
  [ChainID.ZETACHAIN_MAINNET]: "",
  [ChainID.ZETACHAIN_TESTNET]: "https://zetachain-athens-3.blockscout.com",
  [ChainID.FLARE_MAINNET]: "https://flare-explorer.flare.network",
  [ChainID.FLARE_COSTON]: "https://coston-explorer.flare.network",
  [ChainID.FLARE_COSTON2]: "https://coston2-explorer.flare.network",
  [ChainID.FUSE_MAINNET]: "https://explorer.fuse.io",
  [ChainID.FUSE_SPARK]: "https://explorer.fusespark.io",
  [ChainID.SHIBARIUM_MAINNET]: "https://www.shibariumscan.io",
  [ChainID.PUPPYNET_TESTNET]: "https://puppyscan.shib.io",
  [ChainID.CONFLUX_MAINNET]: "https://evm.confluxscan.io",
  [ChainID.CONFLUX_TESTNET]: "https://evmtestnet.confluxscan.net",
  [ChainID.FILECOIN_MAINNET]: "https://fvm.starboard.ventures/explorer",
  [ChainID.FILECOIN_CALIBRATION]:
    "https://fvm.starboard.ventures/calibration/explorer",
  [ChainID.ENERGY_WEB_CHAIN]: "https://explorer.energyweb.org",
  [ChainID.ENERGY_WEB_CHAIN_TESTNET]: "https://explorer.testnet.energyweb.org",
  [ChainID.LUKSO_MAINNET]: "https://explorer.execution.mainnet.lukso.network",
  [ChainID.LUKSO_TESTNET]: "https://explorer.execution.testnet.lukso.network",
  [ChainID.ACALA_MAINNET]: "https://blockscout.acala.network",
  [ChainID.MANDALA_TESTNET]: "https://blockscout.mandala.aca-staging.network",
  [ChainID.REI_MAINNET]: "https://scan.rei.network",
  [ChainID.REI_TESTNET]: "https://scan-test.rei.network",
  [ChainID.ZORA_NETWORK_MAINNET]: "https://explorer.zora.energy",
  [ChainID.ZORA_NETWORK_TESTNET]: "https://sepolia.explorer.zora.energy",
  [ChainID.CALLISTO_MAINNET]: "https://explorer.callisto.network",
  [ChainID.ZKSYNC_MAINNET]: "https://explorer.zksync.io",
  [ChainID.ZKSYNC_SEPOLIA]: "https://sepolia.explorer.zksync.io",
  [ChainID.NEON_MAINNET]: "https://neon.blockscout.com",
  [ChainID.NEON_TESTNET]: "https://neon-devnet.blockscout.com",
  [ChainID.AURORA_MAINNET]: "https://explorer.mainnet.aurora.dev",
  [ChainID.AURORA_TESTNET]: "https://explorer.testnet.aurora.dev",
  [ChainID.RONIN_MAINNET]: "https://app.roninchain.com",
  [ChainID.RONIN_SAIGON_TESTNET]: "https://saigon-app.roninchain.com",
  [ChainID.TRON_MAINNET]: "https://tronscan.org/#",
  [ChainID.TRON_NILE_TESTNET]: "https://nile.tronscan.org/#",
  [ChainID.TRON_SHASTA_TESTNET]: "https://shasta.tronscan.org/#",
  [ChainID.BEAM_MAINNET]: "https://avascan.info/blockchain/beam",
  [ChainID.CARBON_EVM_MAINNET]: "https://evm-scan.carbon.network",
  [ChainID.CARBON_EVM_TESTNET]: "https://test-evm-scan.carbon.network",
  [ChainID.ARTELA_TESTNET]: "https://betanet-scan.artela.network",
  [ChainID.BERACHAIN_TESTNET]: "https://artio.beratrail.io",
  [ChainID.VICTION_MAINNET]: "https://www.vicscan.xyz",
  [ChainID.VICTION_TESTNET]: "https://testnet.vicscan.xyz",
  [ChainID.PALM_MAINNET]: "https://palm.chainlens.com",
  [ChainID.PALM_TESTNET]: "https://testnet.palm.chainlens.com",
  [ChainID.METER_MAINNET]: "https://scan.meter.io",
  [ChainID.METER_TESTNET]: "https://scan-warringstakes.meter.io",
  [ChainID.PUBLIC_GOOD_NETWORK]: "https://explorer.publicgoods.network",
  [ChainID.PUBLIC_GOOD_NETWORK_SEPOLIA]: "https://explorer.sepolia.publicgoods.network",
  [ChainID.ROOTSTOCK_MAINNET]: "https://rootstock.blockscout.com",
  [ChainID.ROOTSTOCK_TESTNET]: "https://rootstock-testnet.blockscout.com",
  [ChainID.LIGHTLINK_PHOENIX_MAINNET]: "https://phoenix.lightlink.io",
  [ChainID.LIGHTLINK_PEGASUS_TESTNET]: "https://pegasus.lightlink.io",
  [ChainID.ETHERLINK_TESTNET]: "https://testnet-explorer.etherlink.com",
  [ChainID.SHARDEUM_SPHINX_1_X]: "https://explorer-sphinx.shardeum.org",
  [ChainID.VELAS_MAINNET]: "https://evmexplorer.velas.com",
  [ChainID.MODE_MAINNET]: "https://explorer.mode.network",
  [ChainID.MODE_SEPOLIA]: "https://sepolia.explorer.mode.network",
  [ChainID.MORPH_TESTNET]: "https://explorer-testnet.morphl2.io",
  [ChainID.BLAST_MAINNET]: "https://api.blastscan.io",
  [ChainID.BLAST_SEPOLIA]: "https://api-sepolia.blastscan.io",
  [ChainID.SYNDICATE_FRAME_MAINNET]: "https://explorer-frame.syndicate.io",
  [ChainID.DOS_MAINNET]: "https://doscan.io",
  [ChainID.DOS_TESTNET]: "https://test.doscan.io",
  [ChainID.DEGEN_MAINNET]: "https://explorer.degen.tips",
  [ChainID.TAIKO_KATLA_TESTNET]: "https://explorer.katla.taiko.xyz",
  [ChainID.SHIMMER_MAINNET]: "https://explorer.evm.shimmer.network",
  [ChainID.SHIMMER_TESTNET]: "https://explorer.evm.testnet.shimmer.network",
  [ChainID.FRAXSCAN_MAINNET]: "https://fraxscan.com",
  [ChainID.FRAXSCAN_TESTNET]: "https://holesky.fraxscan.com",
  [ChainID.XRP_SIDECHAIN]: "https://evm-sidechain.xrpl.org",
  [ChainID.CORE_MAINNET]: "https://scan.coredao.org",
  [ChainID.ZKEVM_POLYGON]: "https://zkevm.polygonscan.com",
  [ChainID.ZKEVM_POLYGON_CARDONA]: "https://cardona-zkevm.polygonscan.com",
  [ChainID.BITLAYER_MAINNET]: "https://www.btrscan.com",
  [ChainID.BITLAYER_TESTNET]: "https://testnet-scan.bitlayer.org",
  [ChainID.ETHEREUM_CLASSIC_MAINNET]: "https://etc.blockscout.com",
  [ChainID.ETHEREUM_CLASSIC_TESTNET]: "https://etc-mordor.blockscout.com",
  [ChainID.STABILITY_MAINNET]: "https://stability.blockscout.com",
  [ChainID.STABILITY_TESTNET]: "https://stability-testnet.blockscout.com",
  [ChainID.ARBITRUM_SEPOLIA]: "https://sepolia.arbiscan.io",
  [ChainID.KROMA_MAINNET]: "https://kromascan.com",
  [ChainID.KROMA_SEPOLIA]: "https://sepolia.kromascan.com",
  [ChainID.POLYGON_AMOY]: "https://amoy.polygonscan.com",
  [ChainID.GNOSIS_CHIADO]: "https://gnosis-chiado.blockscout.com",
  [ChainID.COTI_DEVNET]: "https://explorer-devnet.coti.io",
  [ChainID.COTI_TESTNET]: "https://testnet.cotiscan.io",
  [ChainID.LISK_MAINNET]: "https://blockscout.lisk.com",
  [ChainID.LISK_SEPOLIA]: "https://sepolia-blockscout.lisk.com",
  [ChainID.REDSTONE_MAINNET]: "https://explorer.redstone.xyz",
  [ChainID.REDSTONE_GARNET_TESTNET]: "https://explorer.garnetchain.com",
  [ChainID.OPEN_CAMPUS_CODEX]: "https://opencampus-codex.blockscout.com",
  [ChainID.UNICHAIN_SEPOLIA]: "https://sepolia.uniscan.xyz",
  [ChainID.MOVEMENT_IMOLA]: "https://explorer.devnet.imola.movementnetwork.xyz",
}

export const getExplorer = (network: string): string => data[network] || ""

export const getContractExplorer = (network: string, contract: string): string => {
  const explorer = getExplorer(network)
  let addressPath = ""

  switch (network) {
    case ChainID.TRON_MAINNET:
    case ChainID.TRON_SHASTA_TESTNET:
    case ChainID.COTI_DEVNET:
      addressPath = `contract/${contract}`
    case ChainID.PALM_MAINNET:
    case ChainID.PALM_TESTNET:
      addressPath = `contracts/${contract}`
      break
    case ChainID.SHARDEUM_SPHINX_1_X:
      addressPath = `account/${contract}`
      break
    case ChainID.MOVEMENT_IMOLA:
      addressPath = `#/txn/${contract}`
      break
    default:
      addressPath = `address/${contract}`
      break
  }

  return `${explorer}/${addressPath}`
}

export const getTransactionExplorer = (network: string, tx: string): string => {
  const explorer = getExplorer(network)
  if (!explorer) {
    return ""
  }

  let path = ""

  switch (network) {
    case ChainID.TRON_MAINNET:
    case ChainID.TRON_SHASTA_TESTNET:
    case ChainID.COTI_DEVNET:
      path = `transaction/${tx}`
    default:
      path = `tx/${tx}`
      break
  }

  return `${explorer}/${path}`
}
