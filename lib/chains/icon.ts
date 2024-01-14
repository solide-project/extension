import { ChainID } from "./chain-id";

export const getIconByChainId = (chainId: string): string => {
    switch (chainId) {
        case ChainID.ETHEREUM_MAINNET:
        case ChainID.ETHEREUM_GOERLI:
        case ChainID.ETHEREUM_SEPOLIA:
        case ChainID.ETHEREUM_HOLESKY:
            return "https://www.ankr.com/rpc/static/media/eth.4ca298ae.svg";
        case ChainID.METIS_ANDROMEDA:
        case ChainID.METIS_SEPOLIA:
            return "https://www.ankr.com/rpc/static/media/metis.77fe8764.svg";
        case ChainID.ARBITRUM_ONE:
        case ChainID.ARBITRUM_GOERLI:
            return "https://www.ankr.com/rpc/static/media/arbitrum.5e332f88.svg";
        case ChainID.ARBITRUM_NOVA:
            return "https://www.ankr.com/rpc/static/media/arbitrum-nova.b93b7dfa.svg";
        case ChainID.OASIS_EMERALD:
        case ChainID.OASIS_SAPPHIRE:
        case ChainID.OASIS_SAPPHIRE_TESTNET:
            return "/icons/rose.svg";
        case ChainID.IMMUTABLE_MAINNET:
        case ChainID.IMMUTABLE_TESTNET:
            return "https://assets-global.website-files.com/646557ee455c3e16e4a9bcb3/646557ee455c3e16e4a9bed1_immutable-icon-grey.svg";

        case ChainID.AVALANCHE_FUJI:
        case ChainID.AVALANCHE_MAINNET:
            return "https://www.ankr.com/rpc/static/media/avax.04d124b0.svg";
        case ChainID.POLYGON_MAINNET:
        case ChainID.POLYGON_MUMBAI:
            return "https://www.ankr.com/rpc/static/media/polygon-zkevm.8c6d01fe.svg";
        case ChainID.OPTIMISM_MAINNET:
        case ChainID.OPTIMISM_SEPOLIA:
            return "https://www.ankr.com/rpc/static/media/optimism.53b7f574.svg";
        case ChainID.FANTOM_MAINNET:
        case ChainID.FANTOM_TESTNET:
            return "https://www.ankr.com/rpc/static/media/ftm.c92e9c29.svg";
        case ChainID.BASE_MAINNET:
        case ChainID.BASE_SEPOLIA:
            return "/icons/base.svg";
        case ChainID.BNB_MAINNET:
        case ChainID.BNB_TESTNET:
            return "https://www.ankr.com/rpc/static/media/bsc.e1bfba92.svg";
        case ChainID.LINEA_MAINNET:
        case ChainID.LINEA_TESTNET:
            return "https://www.ankr.com/rpc/static/media/linea.9d7e0cfa.svg";
        case ChainID.MOONBEAM_MAINNET:
        case ChainID.MOONBASE_ALPHA:
            return "https://www.ankr.com/rpc/static/media/moonbeam.3983fccc.svg";
        case ChainID.MOONRIVER_MAINNET:
            return "/icons/moonriver.jpg";
        case ChainID.CELO_MAINNET:
        case ChainID.CELO_ALFAJORES:
            return "https://www.ankr.com/rpc/static/media/celo.11c5d71f.svg";
        case ChainID.GNOSIS_MAINNET:
            return "https://www.ankr.com/rpc/static/media/gnosis.682dc52c.svg";
        case ChainID.CRONOS_MAINNET:
            return "/icons/cronos.svg";
        case ChainID.SCROLL_MAINNET:
        case ChainID.SCROLL_SEPOLIA:
            return "/icons/scroll.svg";
        case ChainID.MANTLE_MAINNET:
        case ChainID.MANTLE_TESTNET:
            return "https://www.ankr.com/rpc/static/media/mantle.23c992b8.svg";
        case ChainID.BITTORRENT_MAINNET:
        case ChainID.BITTORRENT_TESTNET:
            return "https://www.ankr.com/rpc/static/media/bttc.0f8fb66b.svg";
        case ChainID.XDC_MAINNET:
            return "/icons/xdc.svg";
        case ChainID.CANTO_MAINNET:
        case ChainID.CANTO_TESTNET:
            return "/icons/canto.svg";
        case ChainID.KAVA_MAINNET:
        case ChainID.KAVA_TESTNET:
            return "https://www.ankr.com/rpc/static/media/kava.241a8db1.svg";
        case ChainID.ROLLUX_MAINNET:
        case ChainID.ROLLUX_TESTNET:
            return "https://www.ankr.com/rpc/static/media/rollux.284a0151.svg";
        case ChainID.SYSCOIN_MAINNET:
        case ChainID.SYSCOIN_TESTNET:
            return "https://www.ankr.com/rpc/static/media/syscoin.b8d43b12.svg";
        case ChainID.BOBA_ETHEREUM:
            return "/icons/boba.svg";
        case ChainID.MANTA_PACIFIC:
        case ChainID.MANTA_TESTNET:
            return "/icons/manta.svg";
        case ChainID.WEMIX_MAINNET:
        case ChainID.WEMIX_TESTNET:
            return "/icons/wemix.svg";
        case ChainID.ASTAR_MAINNET:
            return "/icons/astar.svg";
        case ChainID.ZETACHAIN_MAINNET:
        case ChainID.ZETACHAIN_TESTNET:
            return "https://www.ankr.com/rpc/static/media/zetachain.380fd8f3.svg";
        default:
            return "";
    }
};