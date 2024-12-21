import { ChainID } from "./chain-id"

export const data: { [key: string]: string } = {
    [ChainID.ETHEREUM_MAINNET]: "https://eth.drpc.org",
    [ChainID.ETHEREUM_GOERLI]: "wss://goerli.gateway.tenderly.co",
    [ChainID.ETHEREUM_SEPOLIA]: "https://ethereum-sepolia-rpc.publicnode.com",
    [ChainID.ETHEREUM_HOLESKY]: "https://holesky.drpc.org",
    [ChainID.METIS_ANDROMEDA]: "https://metis.drpc.org",
    [ChainID.METIS_SEPOLIA]: "https://sepolia.metisdevops.link",
    [ChainID.ARBITRUM_ONE]: "https://arb1.arbitrum.io/rpc",
    // [ChainID.ARBITRUM_GOERLI]: "https://api-goerli.arbiscan.io",
    [ChainID.ARBITRUM_NOVA]: "https://nova.arbitrum.io/rpc",
    [ChainID.OASIS_EMERALD]: " https://emerald.oasis.dev",
    [ChainID.OASIS_SAPPHIRE]: "https://sapphire.oasis.io",
    [ChainID.OASIS_SAPPHIRE_TESTNET]: "https://testnet.sapphire.oasis.dev",
    [ChainID.IMMUTABLE_MAINNET]: "https://rpc.immutable.com",
    [ChainID.IMMUTABLE_TESTNET]: "https://rpc.testnet.immutable.com",
    [ChainID.AVALANCHE_MAINNET]: "https://avalanche.drpc.org",
    [ChainID.AVALANCHE_FUJI]: "https://rpc.ankr.com/avalanche_fuji",
    [ChainID.POLYGON_MAINNET]: "https://polygon-pokt.nodies.app",
    [ChainID.POLYGON_MUMBAI]: "https://polygon-mumbai-bor-rpc.publicnode.com",
    [ChainID.OPTIMISM_MAINNET]: "https://optimism-rpc.publicnode.com",
    [ChainID.OPTIMISM_SEPOLIA]: "https://sepolia.optimism.io",
    [ChainID.FANTOM_MAINNET]: "https://rpcapi.fantom.network",
    [ChainID.FANTOM_TESTNET]: "https://rpc.testnet.fantom.network",
    [ChainID.BASE_MAINNET]: "https://base.llamarpc.com",
    [ChainID.BASE_SEPOLIA]: "https://base-sepolia-rpc.publicnode.com",
    [ChainID.BNB_MAINNET]: "https://bsc-dataseed1.binance.org",
    [ChainID.BNB_TESTNET]: "https://bsc-testnet-rpc.publicnode.com",
    [ChainID.LINEA_MAINNET]: "https://rpc.linea.build",
    [ChainID.LINEA_TESTNET]: "https://rpc.goerli.linea.build",
    [ChainID.MOONBEAM_MAINNET]: "https://rpc.api.moonriver.moonbeam.network",
    [ChainID.MOONBASE_ALPHA]: "https://rpc.testnet.moonbeam.network",
    [ChainID.MOONRIVER_MAINNET]: "https://api-moonriver.moonscan.io",
    [ChainID.CELO_MAINNET]: "https://1rpc.io/celo",
    [ChainID.CELO_ALFAJORES]: "https://alfajores-forno.celo-testnet.org",
    [ChainID.GNOSIS_MAINNET]: "https://rpc.ankr.com/gnosis",
    [ChainID.CRONOS_MAINNET]: "https://evm.cronos.org",
    [ChainID.SCROLL_MAINNET]: "https://rpc.scroll.io",
    [ChainID.SCROLL_SEPOLIA]: "https://scroll-sepolia.drpc.org",
    [ChainID.MANTLE_MAINNET]: "https://mantle.drpc.org",
    [ChainID.MANTLE_TESTNET]: "https://rpc.testnet.mantle.xyz",
    [ChainID.BITTORRENT_MAINNET]: "https://rpc.bt.io",
    [ChainID.BITTORRENT_TESTNET]: "https://pre-rpc.bt.io",
    [ChainID.XDC_MAINNET]: "https://rpc.ankr.com/xdc",
    [ChainID.CANTO_MAINNET]: "https://canto.gravitychain.io",
    [ChainID.CANTO_TESTNET]: "https://testnet-archive.plexnode.wtf",
    [ChainID.KAVA_MAINNET]: "https://kava.drpc.org",
    [ChainID.KAVA_TESTNET]: "https://kava-testnet.drpc.org",
    [ChainID.ROLLUX_MAINNET]: "https://rpc.rollux.com",
    [ChainID.ROLLUX_TESTNET]: "https://rpc-tanenbaum.rollux.com",
    [ChainID.SYSCOIN_MAINNET]: "https://syscoin.public-rpc.com",
    [ChainID.SYSCOIN_TESTNET]: "https://syscoin-tanenbaum-evm.publicnode.com",
    [ChainID.BOBA_ETHEREUM]: "https://1rpc.io/boba/eth",
    [ChainID.MANTA_PACIFIC]: "https://1rpc.io/manta",
    [ChainID.MANTA_TESTNET]: "https://manta-pacific-testnet.drpc.org",
    [ChainID.WEMIX_MAINNET]: "https://api.wemix.com",
    [ChainID.WEMIX_TESTNET]: "https://api.test.wemix.com",
    [ChainID.ASTAR_MAINNET]: "https://1rpc.io/astr",
    [ChainID.SHIDEN_MAINNET]: "https://shiden.api.onfinality.io/public",
    [ChainID.SHUBIYA_TESTNET]: "https://evm.shibuya.astar.network",
    [ChainID.ZETACHAIN_MAINNET]: "https://zetachain-evm.blockpi.network/v1/rpc/public",
    [ChainID.ZETACHAIN_TESTNET]: "https://zetachain-athens-evm.blockpi.network/v1/rpc/public",
    [ChainID.FLARE_MAINNET]: "https://flare-api.flare.network/ext/bc/C/rpc",
    [ChainID.FLARE_COSTON]: "https://coston-api.flare.network/ext/C/rpc",
    [ChainID.FLARE_COSTON2]: "https://coston2-api.flare.network/ext/C/rpc",
    [ChainID.FUSE_MAINNET]: "https://fuse.drpc.org",
    [ChainID.FUSE_SPARK]: "https://rpc.fusespark.io",
    [ChainID.SHIBARIUM_MAINNET]: "https://www.shibrpc.com",
    [ChainID.PUPPYNET_TESTNET]: "https://puppynet.shibrpc.com",
    [ChainID.CONFLUX_MAINNET]: "https://evm.confluxrpc.com",
    [ChainID.CONFLUX_TESTNET]: "https://evmtestnet.confluxrpc.com",
    [ChainID.FILECOIN_MAINNET]: "https://api.node.glif.io/rpc/v1",
    [ChainID.FILECOIN_CALIBRATION]: "https://api.calibration.node.glif.io/rpc/v1",
    [ChainID.ENERGY_WEB_CHAIN]: "https://rpc.energyweb.org",
    [ChainID.ENERGY_WEB_CHAIN_TESTNET]: "https://volta-rpc.energyweb.org",
    [ChainID.LUKSO_MAINNET]: "https://rpc.mainnet.lukso.network",
    [ChainID.LUKSO_TESTNET]: "https://rpc.testnet.lukso.network",
    [ChainID.ACALA_MAINNET]: "https://eth-rpc-acala.aca-staging.network",
    [ChainID.MANDALA_TESTNET]: "https://eth-rpc-tc9.aca-staging.network",
    [ChainID.REI_MAINNET]: "https://rpc.rei.network",
    [ChainID.REI_TESTNET]: "https://rpc-testnet.rei.network",
    [ChainID.ZORA_NETWORK_MAINNET]: "https://rpc.zora.energy",
    [ChainID.ZORA_NETWORK_TESTNET]: "https://sepolia.rpc.zora.energy",
    [ChainID.CALLISTO_MAINNET]: "https://rpc.callisto.network",
    [ChainID.ZKSYNC_MAINNET]: "https://mainnet.era.zksync.io",
    [ChainID.ZKSYNC_SEPOLIA]: "https://sepolia.era.zksync.dev",
    [ChainID.NEON_MAINNET]: "https://neon-proxy-mainnet.solana.p2p.org",
    [ChainID.NEON_TESTNET]: "https://devnet.neonevm.org",
    [ChainID.AURORA_MAINNET]: "https://1rpc.io/aurora",
    [ChainID.AURORA_TESTNET]: "https://testnet.aurora.dev",
    [ChainID.RONIN_MAINNET]: "https://api.roninchain.com/rpc",
    [ChainID.RONIN_SAIGON_TESTNET]: "https://saigon-testnet.roninchain.com/rpc",
    [ChainID.BEAM_MAINNET]: "https://build.onbeam.com/rpc",
    [ChainID.CARBON_EVM_MAINNET]: "https://evm-api.carbon.network",
    [ChainID.CARBON_EVM_TESTNET]: "https://test-evm-api.carbon.network",
    [ChainID.ARTELA_TESTNET]: "https://betanet-rpc1.artela.network",
    [ChainID.BERACHAIN_TESTNET]: "https://artio.rpc.berachain.com",
    [ChainID.VICTION_MAINNET]: "https://rpc.viction.xyz",
    [ChainID.VICTION_TESTNET]: "https://rpc-testnet.viction.xyz",
    [ChainID.PALM_MAINNET]: "https://palm-mainnet.public.blastapi.io",
    [ChainID.PALM_TESTNET]: "https://palm-testnet.public.blastapi.io",
    [ChainID.METER_MAINNET]: "https://rpc.meter.io",
    [ChainID.METER_TESTNET]: "https://rpctest.meter.io",
    [ChainID.PUBLIC_GOOD_NETWORK]: "https://rpc.publicgoods.network",
    [ChainID.PUBLIC_GOOD_NETWORK_SEPOLIA]: "https://sepolia.publicgoods.network",
    [ChainID.ROOTSTOCK_MAINNET]: "https://public-node.rsk.co",
    [ChainID.ROOTSTOCK_TESTNET]: "https://public-node.testnet.rsk.co",
    [ChainID.LIGHTLINK_PHOENIX_MAINNET]: "https://replicator.phoenix.lightlink.io/rpc/v1",
    [ChainID.LIGHTLINK_PEGASUS_TESTNET]: "https://replicator.pegasus.lightlink.io/rpc/v1",
    [ChainID.ETHERLINK_MAINNET]: "https://node.mainnet.etherlink.com",
    [ChainID.ETHERLINK_TESTNET]: "https://node.ghostnet.etherlink.com",
    [ChainID.SHARDEUM_SPHINX_1_X]: "https://sphinx.shardeum.org",
    [ChainID.VELAS_MAINNET]: "https://evmexplorer.velas.com/rpc",
    [ChainID.MODE_MAINNET]: "https://mainnet.mode.network",
    [ChainID.MODE_SEPOLIA]: "https://sepolia.mode.network",
    [ChainID.MORPH_TESTNET]: "https://rpc-testnet.morphl2.io",
    [ChainID.BLAST_MAINNET]: "https://rpc.blast.io",
    [ChainID.BLAST_SEPOLIA]: "https://sepolia.blast.io",
    [ChainID.SYNDICATE_FRAME_MAINNET]: "https://rpc-frame.syndicate.io",
    [ChainID.DOS_MAINNET]: "https://main.doschain.com",
    [ChainID.DOS_TESTNET]: "https://test.doschain.com",
    [ChainID.DEGEN_MAINNET]: "https://rpc.degen.tips",
    [ChainID.TAIKO_MAINNET]: "https://rpc.mainnet.taiko.xyz",
    [ChainID.TAIKO_HEKLA_TESTNET]: "https://rpc.hekla.taiko.xyz/",
    [ChainID.TAIKO_KATLA_TESTNET]: "https://taiko-katla.drpc.org",
    [ChainID.SHIMMER_MAINNET]: "https://json-rpc.evm.shimmer.network",
    [ChainID.SHIMMER_TESTNET]: "https://json-rpc.evm.testnet.shimmer.network",
    [ChainID.FRAXSCAN_MAINNET]: "https://rpc.frax.com",
    [ChainID.FRAXSCAN_TESTNET]: "https://rpc.testnet.frax.com",
    [ChainID.XRP_SIDECHAIN]: "https://rpc-evm-sidechain.xrpl.org",
    [ChainID.CORE_MAINNET]: "https://rpc.coredao.org",
    [ChainID.ZKEVM_POLYGON]: "https://zkevm-rpc.com",
    [ChainID.ZKEVM_POLYGON_CARDONA]: "https://etherscan.cardona.zkevm-rpc.com",
    [ChainID.BITLAYER_MAINNET]: "https://rpc.bitlayer.org",
    [ChainID.BITLAYER_TESTNET]: "https://testnet-rpc.bitlayer.org",
    [ChainID.ETHEREUM_CLASSIC_MAINNET]: "https://geth-de.etc-network.info",
    [ChainID.ETHEREUM_CLASSIC_TESTNET]: "https://rpc.mordor.etccooperative.org",
    [ChainID.STABILITY_MAINNET]: "https://gtn.stabilityprotocol.com",
    [ChainID.STABILITY_TESTNET]: "https://free.testnet.stabilityprotocol.com",
    [ChainID.ARBITRUM_SEPOLIA]: "https://arbitrum-sepolia.drpc.org",
    [ChainID.KROMA_MAINNET]: "https://api.kroma.network",
    [ChainID.KROMA_SEPOLIA]: "https://api.sepolia.kroma.network",
    [ChainID.POLYGON_AMOY]: "https://rpc-amoy.polygon.technology",
    [ChainID.GNOSIS_CHIADO]: "https://gnosis-chiado-rpc.publicnode.com/",
    [ChainID.COTI_DEVNET]: "https://devnet.coti.io/rpc",
    [ChainID.COTI_TESTNET]: "https://testnet.coti.io/rpc",
    [ChainID.LISK_MAINNET]: "https://rpc.api.lisk.com",
    [ChainID.LISK_SEPOLIA]: "https://rpc.sepolia-api.lisk.com",
    [ChainID.REDSTONE_MAINNET]: "https://rpc.garnetchain.com",
    [ChainID.REDSTONE_GARNET_TESTNET]: "https://rpc.garnetchain.com",
    [ChainID.OPEN_CAMPUS_CODEX]: "https://rpc.open-campus-codex.gelato.digital",
    [ChainID.UNICHAIN_SEPOLIA]: "https://sepolia.unichain.org",
    [ChainID.MOVEMENT_IMOLA]: "	https://mevm.devnet.imola.movementnetwork.xyz",
    [ChainID.XAI_GAMES_MAINNET]: "https://xai-chain.net/rpc",
    [ChainID.XAI_ARB_TESTNET]: "https://testnet-v2.xai-chain.net/rpc",
    [ChainID.SONEIUM_TESTNET]: "https://rpc.minato.soneium.org",
    [ChainID.BLACKFORT_MAINNET]: "https://mainnet.blackfort.network/rpc",
    [ChainID.BLACKFORT_TESTNET]: "https://testnet.blackfort.network/rpc",
    [ChainID.APECHAIN_MAINNET]: "https://curtis.rpc.caldera.xyz/http",
    [ChainID.APECHAIN_CURTIS_TESTNET]: "https://curtis.rpc.caldera.xyz/http",
    [ChainID.EDUCHAIN]: "https://rpc.edu-chain.raas.gelato.cloud",
    [ChainID.SHAPE_MAINNET]: "https://shape-mainnet.g.alchemy.com/public",
    [ChainID.SHAPE_SEPOLIA]: "https://shape-sepolia.g.alchemy.com/public",
    [ChainID.WORLD_MAINNET]: "https://worldchain-mainnet.g.alchemy.com/public",
    [ChainID.WORLD_SEPOLIA]: "https://worldchain-sepolia.g.alchemy.com/public",
    [ChainID.CHILIZ]: "https://rpc.chiliz.com",
    [ChainID.CHILIZ_SPICY_TESTNET]: "https://spicy-rpc.chiliz.com",
    [ChainID.SONIC]: "https://rpc.soniclabs.com",
    [ChainID.SONIC_TESTNET]: "https://rpc.blaze.soniclabs.com",
    [ChainID.INK]: "https://rpc-gel.inkonchain.com",
    [ChainID.INK_SEPOLIA]: "https://rpc-gel-sepolia.inkonchain.com",
    [ChainID.ABSTRACT_TESTNET]: "https://api.testnet.abs.xyz",
}