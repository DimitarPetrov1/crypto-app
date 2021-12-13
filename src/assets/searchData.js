const searchData = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "btc",
    image:
      "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579",
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "eth",
    image:
      "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880",
  },
  {
    id: "binancecoin",
    name: "Binance Coin",
    symbol: "bnb",
    image:
      "https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png?1547034615",
  },
  {
    id: "tether",
    name: "Tether",
    symbol: "usdt",
    image:
      "https://assets.coingecko.com/coins/images/325/small/Tether-logo.png?1598003707",
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "sol",
    image:
      "https://assets.coingecko.com/coins/images/4128/small/Solana.jpg?1635329178",
  },
  {
    id: "cardano",
    name: "Cardano",
    symbol: "ada",
    image:
      "https://assets.coingecko.com/coins/images/975/small/cardano.png?1547034860",
  },
  {
    id: "ripple",
    name: "XRP",
    symbol: "xrp",
    image:
      "https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png?1605778731",
  },
  {
    id: "polkadot",
    name: "Polkadot",
    symbol: "dot",
    image:
      "https://assets.coingecko.com/coins/images/12171/small/aJGBjJFU_400x400.jpg?1597804776",
  },
  {
    id: "dogecoin",
    name: "Dogecoin",
    symbol: "doge",
    image:
      "https://assets.coingecko.com/coins/images/5/small/dogecoin.png?1547792256",
  },
  {
    id: "usd-coin",
    name: "USD Coin",
    symbol: "usdc",
    image:
      "https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389",
  },
  {
    id: "shiba-inu",
    name: "Shiba Inu",
    symbol: "shib",
    image:
      "https://assets.coingecko.com/coins/images/11939/small/shiba.png?1622619446",
  },
  {
    id: "terra-luna",
    name: "Terra",
    symbol: "luna",
    image:
      "https://assets.coingecko.com/coins/images/8284/small/luna1557227471663.png?1567147072",
  },
  {
    id: "avalanche-2",
    name: "Avalanche",
    symbol: "AVAX",
    image:
      "https://assets.coingecko.com/coins/images/12559/small/coin-round-red.png?1604021818",
  },
  {
    id: "litecoin",
    name: "Litecoin",
    symbol: "ltc",
    image:
      "https://assets.coingecko.com/coins/images/2/small/litecoin.png?1547033580",
  },
  {
    id: "chainlink",
    name: "Chainlink",
    symbol: "link",
    image:
      "https://assets.coingecko.com/coins/images/877/small/chainlink-new-logo.png?1547034700",
  },
  {
    id: "wrapped-bitcoin",
    name: "Wrapped Bitcoin",
    symbol: "wbtc",
    image:
      "https://assets.coingecko.com/coins/images/7598/small/wrapped_bitcoin_wbtc.png?1548822744",
  },
  {
    id: "binance-usd",
    name: "Binance USD",
    symbol: "busd",
    image:
      "https://assets.coingecko.com/coins/images/9576/small/BUSD.png?1568947766",
  },
  {
    id: "uniswap",
    name: "Uniswap",
    symbol: "uni",
    image:
      "https://assets.coingecko.com/coins/images/12504/small/uniswap-uni.png?1600306604",
  },
  {
    id: "bitcoin-cash",
    name: "Bitcoin Cash",
    symbol: "bch",
    image:
      "https://assets.coingecko.com/coins/images/780/small/bitcoin-cash-circle.png?1594689492",
  },
  {
    id: "algorand",
    name: "Algorand",
    symbol: "algo",
    image:
      "https://assets.coingecko.com/coins/images/4380/small/download.png?1547039725",
  },
  {
    id: "matic-network",
    name: "Polygon",
    symbol: "matic",
    image:
      "https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png?1624446912",
  },
  {
    id: "crypto-com-chain",
    name: "Crypto.com Coin",
    symbol: "cro",
    image:
      "https://assets.coingecko.com/coins/images/7310/small/cypto.png?1547043960",
  },
  {
    id: "vechain",
    name: "VeChain",
    symbol: "vet",
    image:
      "https://assets.coingecko.com/coins/images/1167/small/VeChain-Logo-768x725.png?1547035194",
  },
  {
    id: "axie-infinity",
    name: "Axie Infinity",
    symbol: "axs",
    image:
      "https://assets.coingecko.com/coins/images/13029/small/axie_infinity_logo.png?1604471082",
  },
  {
    id: "stellar",
    name: "Stellar",
    symbol: "xlm",
    image:
      "https://assets.coingecko.com/coins/images/100/small/Stellar_symbol_black_RGB.png?1552356157",
  },
  {
    id: "cosmos",
    name: "Cosmos",
    symbol: "atom",
    image:
      "https://assets.coingecko.com/coins/images/1481/small/cosmos_hub.png?1555657960",
  },
  {
    id: "internet-computer",
    name: "Internet Computer",
    symbol: "icp",
    image:
      "https://assets.coingecko.com/coins/images/14495/small/Internet_Computer_logo.png?1620703073",
  },
  {
    id: "dai",
    name: "Dai",
    symbol: "dai",
    image:
      "https://assets.coingecko.com/coins/images/9956/small/4943.png?1636636734",
  },
  {
    id: "tron",
    name: "TRON",
    symbol: "trx",
    image:
      "https://assets.coingecko.com/coins/images/1094/small/tron-logo.png?1547035066",
  },
  {
    id: "ftx-token",
    name: "FTX Token",
    symbol: "ftt",
    image:
      "https://assets.coingecko.com/coins/images/9026/small/F.png?1609051564",
  },
  {
    id: "filecoin",
    name: "Filecoin",
    symbol: "fil",
    image:
      "https://assets.coingecko.com/coins/images/12817/small/filecoin.png?1602753933",
  },
  {
    id: "compound-ether",
    name: "cETH",
    symbol: "ceth",
    image:
      "https://assets.coingecko.com/coins/images/10643/small/ceth2.JPG?1581389598",
  },
  {
    id: "ethereum-classic",
    name: "Ethereum Classic",
    symbol: "etc",
    image:
      "https://assets.coingecko.com/coins/images/453/small/ethereum-classic-logo.png?1547034169",
  },
  {
    id: "okb",
    name: "OKB",
    symbol: "okb",
    image:
      "https://assets.coingecko.com/coins/images/4463/small/okb_token.png?1548386209",
  },
  {
    id: "theta-token",
    name: "Theta Network",
    symbol: "theta",
    image:
      "https://assets.coingecko.com/coins/images/2538/small/theta-token-logo.png?1548387191",
  },
  {
    id: "staked-ether",
    name: "Lido Staked Ether",
    symbol: "steth",
    image:
      "https://assets.coingecko.com/coins/images/13442/small/steth_logo.png?1608607546",
  },
  {
    id: "hedera-hashgraph",
    name: "Hedera",
    symbol: "hbar",
    image:
      "https://assets.coingecko.com/coins/images/3688/small/mqTDGK7Q.png?1566256777",
  },
  {
    id: "fantom",
    name: "Fantom",
    symbol: "ftm",
    image:
      "https://assets.coingecko.com/coins/images/4001/small/Fantom.png?1558015016",
  },
  {
    id: "elrond-erd-2",
    name: "Elrond",
    symbol: "egld",
    image:
      "https://assets.coingecko.com/coins/images/12335/small/elrond3_360.png?1626341589",
  },
  {
    id: "near",
    name: "Near",
    symbol: "near",
    image:
      "https://assets.coingecko.com/coins/images/10365/small/near_icon.png?1601359077",
  },
  {
    id: "helium",
    name: "Helium",
    symbol: "hnt",
    image:
      "https://assets.coingecko.com/coins/images/4284/small/Helium_HNT.png?1612620071",
  },
  {
    id: "the-graph",
    name: "The Graph",
    symbol: "grt",
    image:
      "https://assets.coingecko.com/coins/images/13397/small/Graph_Token.png?1608145566",
  },
  {
    id: "tezos",
    name: "Tezos",
    symbol: "xtz",
    image:
      "https://assets.coingecko.com/coins/images/976/small/Tezos-logo.png?1547034862",
  },
  {
    id: "terrausd",
    name: "TerraUSD",
    symbol: "ust",
    image:
      "https://assets.coingecko.com/coins/images/12681/small/UST.png?1601612407",
  },
  {
    id: "monero",
    name: "Monero",
    symbol: "xmr",
    image:
      "https://assets.coingecko.com/coins/images/69/small/monero_logo.png?1547033729",
  },
  {
    id: "eos",
    name: "EOS",
    symbol: "eos",
    image:
      "https://assets.coingecko.com/coins/images/738/small/eos-eos-logo.png?1547034481",
  },
  {
    id: "cdai",
    name: "cDAI",
    symbol: "cdai",
    image:
      "https://assets.coingecko.com/coins/images/9281/small/cDAI.png?1576467585",
  },
  {
    id: "pancakeswap-token",
    name: "PancakeSwap",
    symbol: "cake",
    image:
      "https://assets.coingecko.com/coins/images/12632/small/pancakeswap-cake-logo_%281%29.png?1629359065",
  },
  {
    id: "decentraland",
    name: "Decentraland",
    symbol: "mana",
    image:
      "https://assets.coingecko.com/coins/images/878/small/decentraland-mana.png?1550108745",
  },
  {
    id: "aave",
    name: "Aave",
    symbol: "aave",
    image:
      "https://assets.coingecko.com/coins/images/12645/small/AAVE.png?1601374110",
  },
  {
    id: "ecash",
    name: "eCash",
    symbol: "xec",
    image:
      "https://assets.coingecko.com/coins/images/16646/small/Logo_final-22.png?1628239446",
  },
  {
    id: "flow",
    name: "Flow",
    symbol: "flow",
    image:
      "https://assets.coingecko.com/coins/images/13446/small/5f6294c0c7a8cda55cb1c936_Flow_Wordmark.png?1631696776",
  },
  {
    id: "loopring",
    name: "Loopring",
    symbol: "lrc",
    image:
      "https://assets.coingecko.com/coins/images/913/small/LRC.png?1572852344",
  },
  {
    id: "kusama",
    name: "Kusama",
    symbol: "ksm",
    image:
      "https://assets.coingecko.com/coins/images/9568/small/m4zRhP5e_400x400.jpg?1576190080",
  },
  {
    id: "klay-token",
    name: "Klaytn",
    symbol: "klay",
    image:
      "https://assets.coingecko.com/coins/images/9672/small/CjbT82vP_400x400.jpg?1570548320",
  },
  {
    id: "thorchain",
    name: "THORChain",
    symbol: "rune",
    image:
      "https://assets.coingecko.com/coins/images/6595/small/RUNE.png?1614160507",
  },
  {
    id: "olympus",
    name: "Olympus",
    symbol: "ohm",
    image:
      "https://assets.coingecko.com/coins/images/14483/small/token_OHM_%281%29.png?1628311611",
  },
  {
    id: "iota",
    name: "IOTA",
    symbol: "miota",
    image:
      "https://assets.coingecko.com/coins/images/692/small/IOTA_Swirl.png?1604238557",
  },
  {
    id: "compound-usd-coin",
    name: "cUSDC",
    symbol: "cusdc",
    image:
      "https://assets.coingecko.com/coins/images/9442/small/Compound_USDC.png?1567581577",
  },
  {
    id: "kadena",
    name: "Kadena",
    symbol: "kda",
    image:
      "https://assets.coingecko.com/coins/images/3693/small/djLWD6mR_400x400.jpg?1591080616",
  },
  {
    id: "quant-network",
    name: "Quant",
    symbol: "qnt",
    image:
      "https://assets.coingecko.com/coins/images/3370/small/5ZOu7brX_400x400.jpg?1612437252",
  },
  {
    id: "arweave",
    name: "Arweave",
    symbol: "ar",
    image:
      "https://assets.coingecko.com/coins/images/4343/small/oRt6SiEN_400x400.jpg?1591059616",
  },
  {
    id: "neo",
    name: "NEO",
    symbol: "neo",
    image:
      "https://assets.coingecko.com/coins/images/480/small/NEO_512_512.png?1594357361",
  },
  {
    id: "bitcoin-cash-sv",
    name: "Bitcoin SV",
    symbol: "bsv",
    image:
      "https://assets.coingecko.com/coins/images/6799/small/BSV.png?1558947902",
  },
  {
    id: "bitcoin-cash-abc-2",
    name: "Bitcoin Cash ABC",
    symbol: "bcha",
    image:
      "https://assets.coingecko.com/coins/images/13120/small/Logo_final-21.png?1624892810",
  },
  {
    id: "harmony",
    name: "Harmony",
    symbol: "one",
    image:
      "https://assets.coingecko.com/coins/images/4344/small/Y88JAze.png?1565065793",
  },
  {
    id: "chiliz",
    name: "Chiliz",
    symbol: "chz",
    image:
      "https://assets.coingecko.com/coins/images/8834/small/Chiliz.png?1561970540",
  },
  {
    id: "magic-internet-money",
    name: "Magic Internet Money",
    symbol: "mim",
    image:
      "https://assets.coingecko.com/coins/images/16786/small/mimlogopng.png?1624979612",
  },
  {
    id: "enjincoin",
    name: "Enjin Coin",
    symbol: "enj",
    image:
      "https://assets.coingecko.com/coins/images/1102/small/enjin-coin-logo.png?1547035078",
  },
  {
    id: "amp-token",
    name: "Amp",
    symbol: "amp",
    image:
      "https://assets.coingecko.com/coins/images/12409/small/amp-200x200.png?1599625397",
  },
  {
    id: "leo-token",
    name: "LEO Token",
    symbol: "leo",
    image:
      "https://assets.coingecko.com/coins/images/8418/small/leo-token.png?1558326215",
  },
  {
    id: "maker",
    name: "Maker",
    symbol: "mkr",
    image:
      "https://assets.coingecko.com/coins/images/1364/small/Mark_Maker.png?1585191826",
  },
  {
    id: "huobi-btc",
    name: "Huobi BTC",
    symbol: "hbtc",
    image:
      "https://assets.coingecko.com/coins/images/12407/small/Unknown-5.png?1599624896",
  },
  {
    id: "the-sandbox",
    name: "The Sandbox",
    symbol: "sand",
    image:
      "https://assets.coingecko.com/coins/images/12129/small/sandbox_logo.jpg?1597397942",
  },
  {
    id: "bittorrent-2",
    name: "BitTorrent",
    symbol: "btt",
    image:
      "https://assets.coingecko.com/coins/images/7595/small/BTT_Token_Graphic.png?1555066995",
  },
  {
    id: "holotoken",
    name: "Holo",
    symbol: "hot",
    image:
      "https://assets.coingecko.com/coins/images/3348/small/Holologo_Profile.png?1547037966",
  },
  {
    id: "dash",
    name: "Dash",
    symbol: "dash",
    image:
      "https://assets.coingecko.com/coins/images/19/small/dash-logo.png?1548385930",
  },
  {
    id: "blockstack",
    name: "Stacks",
    symbol: "stx",
    image:
      "https://assets.coingecko.com/coins/images/2069/small/Stacks_logo_full.png?1604112510",
  },
  {
    id: "waves",
    name: "Waves",
    symbol: "waves",
    image:
      "https://assets.coingecko.com/coins/images/425/small/waves.png?1548386117",
  },
  {
    id: "zcash",
    name: "Zcash",
    symbol: "zec",
    image:
      "https://assets.coingecko.com/coins/images/486/small/circle-zcash-color.png?1547034197",
  },
  {
    id: "iotex",
    name: "IoTeX",
    symbol: "iotx",
    image:
      "https://assets.coingecko.com/coins/images/3334/small/iotex-logo.png?1547037941",
  },
  {
    id: "safemoon",
    name: "SafeMoon",
    symbol: "safemoon",
    image:
      "https://assets.coingecko.com/coins/images/14362/small/174x174-white.png?1617174846",
  },
  {
    id: "sushi",
    name: "Sushi",
    symbol: "sushi",
    image:
      "https://assets.coingecko.com/coins/images/12271/small/512x512_Logo_no_chop.png?1606986688",
  },
  {
    id: "compound-governance-token",
    name: "Compound",
    symbol: "comp",
    image:
      "https://assets.coingecko.com/coins/images/10775/small/COMP.png?1592625425",
  },
  {
    id: "radio-caca",
    name: "Radio Caca",
    symbol: "raca",
    image:
      "https://assets.coingecko.com/coins/images/17841/small/ez44_BSs_400x400.jpg?1629464170",
  },
  {
    id: "celsius-degree-token",
    name: "Celsius Network",
    symbol: "cel",
    image:
      "https://assets.coingecko.com/coins/images/3263/small/CEL_logo.png?1609598753",
  },
  {
    id: "celo",
    name: "Celo",
    symbol: "celo",
    image:
      "https://assets.coingecko.com/coins/images/11090/small/icon-celo-CELO-color-500.png?1592293590",
  },
  {
    id: "havven",
    name: "Synthetix Network Token",
    symbol: "snx",
    image:
      "https://assets.coingecko.com/coins/images/3406/small/SNX.png?1598631139",
  },
  {
    id: "theta-fuel",
    name: "Theta Fuel",
    symbol: "tfuel",
    image:
      "https://assets.coingecko.com/coins/images/8029/small/1_0YusgngOrriVg4ZYx4wOFQ.png?1553483622",
  },
  {
    id: "nexo",
    name: "NEXO",
    symbol: "nexo",
    image:
      "https://assets.coingecko.com/coins/images/3695/small/nexo.png?1548086057",
  },
  {
    id: "kucoin-shares",
    name: "KuCoin Token",
    symbol: "kcs",
    image:
      "https://assets.coingecko.com/coins/images/1047/small/sa9z79.png?1610678720",
  },
  {
    id: "qtum",
    name: "Qtum",
    symbol: "qtum",
    image:
      "https://assets.coingecko.com/coins/images/684/small/qtum.png?1547034438",
  },
  {
    id: "nem",
    name: "NEM",
    symbol: "xem",
    image:
      "https://assets.coingecko.com/coins/images/242/small/NEM_Logo_256x256.png?1598687029",
  },
  {
    id: "ecomi",
    name: "ECOMI",
    symbol: "omi",
    image:
      "https://assets.coingecko.com/coins/images/4428/small/ECOMI.png?1557928886",
  },
  {
    id: "basic-attention-token",
    name: "Basic Attention Token",
    symbol: "bat",
    image:
      "https://assets.coingecko.com/coins/images/677/small/basic-attention-token.png?1547034427",
  },
  {
    id: "omisego",
    name: "OMG Network",
    symbol: "omg",
    image:
      "https://assets.coingecko.com/coins/images/776/small/OMG_Network.jpg?1591167168",
  },
  {
    id: "icon",
    name: "ICON",
    symbol: "icx",
    image:
      "https://assets.coingecko.com/coins/images/1060/small/icon-icx-logo.png?1547035003",
  },
  {
    id: "huobi-token",
    name: "Huobi Token",
    symbol: "ht",
    image:
      "https://assets.coingecko.com/coins/images/2822/small/huobi-token-logo.png?1547036992",
  },
  {
    id: "decred",
    name: "Decred",
    symbol: "dcr",
    image:
      "https://assets.coingecko.com/coins/images/329/small/decred.png?1547034093",
  },
  {
    id: "curve-dao-token",
    name: "Curve DAO Token",
    symbol: "crv",
    image:
      "https://assets.coingecko.com/coins/images/12124/small/Curve.png?1597369484",
  },
  {
    id: "spell-token",
    name: "Spell Token",
    symbol: "spell",
    image:
      "https://assets.coingecko.com/coins/images/15861/small/abracadabra-3.png?1622544862",
  },
  {
    id: "livepeer",
    name: "Livepeer",
    symbol: "lpt",
    image:
      "https://assets.coingecko.com/coins/images/7137/small/logo-circle-green.png?1619593365",
  },
  {
    id: "wonderland",
    name: "Wonderland",
    symbol: "time",
    image:
      "https://assets.coingecko.com/coins/images/18126/small/time.PNG?1630621941",
  },
  {
    id: "mina-protocol",
    name: "Mina Protocol",
    symbol: "mina",
    image:
      "https://assets.coingecko.com/coins/images/15628/small/JM4_vQ34_400x400.png?1621394004",
  },
  {
    id: "osmosis",
    name: "Osmosis",
    symbol: "osmo",
    image:
      "https://assets.coingecko.com/coins/images/16724/small/osmo.png?1632763885",
  },
  {
    id: "ravencoin",
    name: "Ravencoin",
    symbol: "rvn",
    image:
      "https://assets.coingecko.com/coins/images/3412/small/ravencoin.png?1548386057",
  },
  {
    id: "zilliqa",
    name: "Zilliqa",
    symbol: "zil",
    image:
      "https://assets.coingecko.com/coins/images/2687/small/Zilliqa-logo.png?1547036894",
  },
  {
    id: "audius",
    name: "Audius",
    symbol: "audio",
    image:
      "https://assets.coingecko.com/coins/images/12913/small/AudiusCoinLogo_2x.png?1603425727",
  },
  {
    id: "true-usd",
    name: "TrueUSD",
    symbol: "tusd",
    image:
      "https://assets.coingecko.com/coins/images/3449/small/tusd.png?1618395665",
  },
  {
    id: "link",
    name: "LINK",
    symbol: "ln",
    image:
      "https://assets.coingecko.com/coins/images/6450/small/linklogo.png?1547042644",
  },
  {
    id: "nxm",
    name: "Nexus Mutual",
    symbol: "nxm",
    image:
      "https://assets.coingecko.com/coins/images/11810/small/nexus-mutual.jpg?1594547726",
  },
  {
    id: "wax",
    name: "WAX",
    symbol: "waxp",
    image:
      "https://assets.coingecko.com/coins/images/1372/small/WAX_Coin_Tickers_P_512px.png?1602812260",
  },
  {
    id: "yearn-finance",
    name: "yearn.finance",
    symbol: "yfi",
    image:
      "https://assets.coingecko.com/coins/images/11849/small/yfi-192x192.png?1598325330",
  },
  {
    id: "bitcoin-gold",
    name: "Bitcoin Gold",
    symbol: "btg",
    image:
      "https://assets.coingecko.com/coins/images/1043/small/bitcoin-gold-logo.png?1547034978",
  },
  {
    id: "secret",
    name: "Secret",
    symbol: "scrt",
    image:
      "https://assets.coingecko.com/coins/images/11871/small/Secret.png?1595520186",
  },
  {
    id: "xdce-crowd-sale",
    name: "XDC Network",
    symbol: "xdc",
    image:
      "https://assets.coingecko.com/coins/images/2912/small/xdc-icon.png?1633700890",
  },
  {
    id: "gatechain-token",
    name: "GateToken",
    symbol: "gt",
    image:
      "https://assets.coingecko.com/coins/images/8183/small/gt.png?1556085624",
  },
  {
    id: "rally-2",
    name: "Rally",
    symbol: "rly",
    image:
      "https://assets.coingecko.com/coins/images/12843/small/image.png?1611212077",
  },
  {
    id: "telcoin",
    name: "Telcoin",
    symbol: "tel",
    image:
      "https://assets.coingecko.com/coins/images/1899/small/tel.png?1547036203",
  },
  {
    id: "zencash",
    name: "Horizen",
    symbol: "zen",
    image:
      "https://assets.coingecko.com/coins/images/691/small/horizen.png?1555052241",
  },
  {
    id: "convex-finance",
    name: "Convex Finance",
    symbol: "cvx",
    image:
      "https://assets.coingecko.com/coins/images/15585/small/convex.png?1621256328",
  },
  {
    id: "iostoken",
    name: "IOST",
    symbol: "iost",
    image:
      "https://assets.coingecko.com/coins/images/2523/small/IOST.png?1557555183",
  },
  {
    id: "renbtc",
    name: "renBTC",
    symbol: "renbtc",
    image:
      "https://assets.coingecko.com/coins/images/11370/small/Bitcoin.jpg?1628072791",
  },
  {
    id: "bancor",
    name: "Bancor Network Token",
    symbol: "bnt",
    image:
      "https://assets.coingecko.com/coins/images/736/small/bancor-bnt.png?1628822309",
  },
  {
    id: "0x",
    name: "0x",
    symbol: "zrx",
    image:
      "https://assets.coingecko.com/coins/images/863/small/0x.png?1547034672",
  },
  {
    id: "ethereum-name-service",
    name: "Ethereum Name Service",
    symbol: "ens",
    image:
      "https://assets.coingecko.com/coins/images/19785/small/acatxTm8_400x400.jpg?1635850140",
  },
  {
    id: "paxos-standard",
    name: "Pax Dollar",
    symbol: "usdp",
    image:
      "https://assets.coingecko.com/coins/images/6013/small/Pax_Dollar.png?1629877204",
  },
  {
    id: "uma",
    name: "UMA",
    symbol: "uma",
    image:
      "https://assets.coingecko.com/coins/images/10951/small/UMA.png?1586307916",
  },
  {
    id: "ankr",
    name: "Ankr",
    symbol: "ankr",
    image:
      "https://assets.coingecko.com/coins/images/4324/small/U85xTl2.png?1608111978",
  },
  {
    id: "immutable-x",
    name: "Immutable X",
    symbol: "imx",
    image:
      "https://assets.coingecko.com/coins/images/17233/small/imx.png?1636691817",
  },
  {
    id: "siacoin",
    name: "Siacoin",
    symbol: "sc",
    image:
      "https://assets.coingecko.com/coins/images/289/small/siacoin.png?1548386465",
  },
  {
    id: "perpetual-protocol",
    name: "Perpetual Protocol",
    symbol: "perp",
    image:
      "https://assets.coingecko.com/coins/images/12381/small/60d18e06844a844ad75901a9_mark_only_03.png?1628674771",
  },
  {
    id: "ontology",
    name: "Ontology",
    symbol: "ont",
    image:
      "https://assets.coingecko.com/coins/images/3447/small/ONT.png?1583481820",
  },
  {
    id: "frax",
    name: "Frax",
    symbol: "frax",
    image:
      "https://assets.coingecko.com/coins/images/13422/small/frax_logo.png?1608476506",
  },
  {
    id: "dogelon-mars",
    name: "Dogelon Mars",
    symbol: "elon",
    image:
      "https://assets.coingecko.com/coins/images/14962/small/6GxcPRo3_400x400.jpg?1619157413",
  },
  {
    id: "serum",
    name: "Serum",
    symbol: "srm",
    image:
      "https://assets.coingecko.com/coins/images/11970/small/serum-logo.png?1597121577",
  },
  {
    id: "digibyte",
    name: "DigiByte",
    symbol: "dgb",
    image:
      "https://assets.coingecko.com/coins/images/63/small/digibyte.png?1547033717",
  },
  {
    id: "republic-protocol",
    name: "REN",
    symbol: "ren",
    image:
      "https://assets.coingecko.com/coins/images/3139/small/REN.png?1589985807",
  },
  {
    id: "dydx",
    name: "dYdX",
    symbol: "dydx",
    image:
      "https://assets.coingecko.com/coins/images/17500/small/hjnIm9bV.jpg?1628009360",
  },
  {
    id: "skale",
    name: "SKALE",
    symbol: "skl",
    image:
      "https://assets.coingecko.com/coins/images/13245/small/SKALE_token_300x300.png?1606789574",
  },
  {
    id: "woo-network",
    name: "WOO Network",
    symbol: "woo",
    image:
      "https://assets.coingecko.com/coins/images/12921/small/w2UiemF__400x400.jpg?1603670367",
  },
  {
    id: "moonriver",
    name: "Moonriver",
    symbol: "movr",
    image:
      "https://assets.coingecko.com/coins/images/17984/small/9285.png?1630028620",
  },
  {
    id: "xsushi",
    name: "xSUSHI",
    symbol: "xsushi",
    image:
      "https://assets.coingecko.com/coins/images/13725/small/xsushi.png?1612538526",
  },
  {
    id: "raydium",
    name: "Raydium",
    symbol: "ray",
    image:
      "https://assets.coingecko.com/coins/images/13928/small/PSigc4ie_400x400.jpg?1612875614",
  },
  {
    id: "nervos-network",
    name: "Nervos Network",
    symbol: "ckb",
    image:
      "https://assets.coingecko.com/coins/images/9566/small/Nervos_White.png?1608280856",
  },
  {
    id: "bitclout",
    name: "Decentralized Social",
    symbol: "deso",
    image:
      "https://assets.coingecko.com/coins/images/16310/small/k-h6Wead_400x400.jpg?1623726134",
  },
  {
    id: "rocket-pool",
    name: "Rocket Pool",
    symbol: "rpl",
    image:
      "https://assets.coingecko.com/coins/images/2090/small/rocket.png?1563781948",
  },
  {
    id: "compound-usdt",
    name: "cUSDT",
    symbol: "cusdt",
    image:
      "https://assets.coingecko.com/coins/images/11621/small/cUSDT.png?1592113270",
  },
  {
    id: "jasmycoin",
    name: "JasmyCoin",
    symbol: "jasmy",
    image:
      "https://assets.coingecko.com/coins/images/13876/small/JASMY200x200.jpg?1612473259",
  },
  {
    id: "fei-usd",
    name: "Fei USD",
    symbol: "fei",
    image:
      "https://assets.coingecko.com/coins/images/14570/small/ZqsF51Re_400x400.png?1617082206",
  },
  {
    id: "klima-dao",
    name: "Klima DAO",
    symbol: "klima",
    image:
      "https://assets.coingecko.com/coins/images/19169/small/klima-logo.png?1634606729",
  },
  {
    id: "nano",
    name: "Nano",
    symbol: "nano",
    image:
      "https://assets.coingecko.com/coins/images/756/small/nano-coin-logo.png?1547034501",
  },
  {
    id: "liquity-usd",
    name: "Liquity USD",
    symbol: "lusd",
    image:
      "https://assets.coingecko.com/coins/images/14666/small/Group_3.png?1617631327",
  },
  {
    id: "xyo-network",
    name: "XYO Network",
    symbol: "xyo",
    image:
      "https://assets.coingecko.com/coins/images/4519/small/XYO_Network-logo.png?1547039819",
  },
  {
    id: "1inch",
    name: "1inch",
    symbol: "1inch",
    image:
      "https://assets.coingecko.com/coins/images/13469/small/1inch-token.png?1608803028",
  },
  {
    id: "velas",
    name: "Velas",
    symbol: "vlx",
    image:
      "https://assets.coingecko.com/coins/images/9651/small/velas.png?1607999828",
  },
  {
    id: "origintrail",
    name: "OriginTrail",
    symbol: "trac",
    image:
      "https://assets.coingecko.com/coins/images/1877/small/TRAC.jpg?1635134367",
  },
  {
    id: "chromaway",
    name: "Chromia",
    symbol: "chr",
    image:
      "https://assets.coingecko.com/coins/images/5000/small/Chromia.png?1559038018",
  },
  {
    id: "frax-share",
    name: "Frax Share",
    symbol: "fxs",
    image:
      "https://assets.coingecko.com/coins/images/13423/small/frax_share.png?1608478989",
  },
  {
    id: "illuvium",
    name: "Illuvium",
    symbol: "ilv",
    image:
      "https://assets.coingecko.com/coins/images/14468/small/ILV.JPG?1617182121",
  },
  {
    id: "swissborg",
    name: "SwissBorg",
    symbol: "chsb",
    image:
      "https://assets.coingecko.com/coins/images/2117/small/YJUrRy7r_400x400.png?1589794215",
  },
  {
    id: "starlink",
    name: "StarLink",
    symbol: "starl",
    image:
      "https://assets.coingecko.com/coins/images/16824/small/ZxJbRWJ.png?1625177900",
  },
  {
    id: "gnosis",
    name: "Gnosis",
    symbol: "gno",
    image:
      "https://assets.coingecko.com/coins/images/662/small/logo_square_simple_300px.png?1609402668",
  },
  {
    id: "gala",
    name: "Gala",
    symbol: "gala",
    image:
      "https://assets.coingecko.com/coins/images/12493/small/GALA-COINGECKO.png?1600233435",
  },
  {
    id: "wazirx",
    name: "WazirX",
    symbol: "wrx",
    image:
      "https://assets.coingecko.com/coins/images/10547/small/WazirX.png?1580834330",
  },
  {
    id: "nucypher",
    name: "NuCypher",
    symbol: "nu",
    image:
      "https://assets.coingecko.com/coins/images/3318/small/photo1198982838879365035.jpg?1547037916",
  },
  {
    id: "coin98",
    name: "Coin98",
    symbol: "c98",
    image:
      "https://assets.coingecko.com/coins/images/17117/small/logo.png?1626412904",
  },
  {
    id: "mdex",
    name: "Mdex",
    symbol: "mdx",
    image:
      "https://assets.coingecko.com/coins/images/13775/small/mdex.png?1611739676",
  },
  {
    id: "celer-network",
    name: "Celer Network",
    symbol: "celr",
    image:
      "https://assets.coingecko.com/coins/images/4379/small/Celr.png?1554705437",
  },
  {
    id: "dent",
    name: "Dent",
    symbol: "dent",
    image:
      "https://assets.coingecko.com/coins/images/1152/small/gLCEA2G.png?1604543239",
  },
  {
    id: "render-token",
    name: "Render Token",
    symbol: "rndr",
    image:
      "https://assets.coingecko.com/coins/images/11636/small/uTDd98ZN_400x400.jpg?1592200150",
  },
  {
    id: "e-radix",
    name: "e-Radix",
    symbol: "exrd",
    image:
      "https://assets.coingecko.com/coins/images/13145/small/exrd_logo.png?1605662677",
  },
  {
    id: "ufo-gaming",
    name: "UFO Gaming",
    symbol: "ufo",
    image:
      "https://assets.coingecko.com/coins/images/16801/small/ufo_logo.jpg?1630078847",
  },
  {
    id: "wink",
    name: "WINkLink",
    symbol: "win",
    image:
      "https://assets.coingecko.com/coins/images/9129/small/WinK.png?1564624891",
  },
  {
    id: "metahero",
    name: "Metahero",
    symbol: "hero",
    image:
      "https://assets.coingecko.com/coins/images/16911/small/icon200x200.png?1625618542",
  },
  {
    id: "anchor-protocol",
    name: "Anchor Protocol",
    symbol: "anc",
    image:
      "https://assets.coingecko.com/coins/images/14420/small/anchor_protocol_logo.jpg?1615965420",
  },
  {
    id: "constellation-labs",
    name: "Constellation",
    symbol: "dag",
    image:
      "https://assets.coingecko.com/coins/images/4645/small/DAG.png?1626339160",
  },
  {
    id: "fetch-ai",
    name: "Fetch.ai",
    symbol: "fet",
    image:
      "https://assets.coingecko.com/coins/images/5681/small/Fetch.jpg?1572098136",
  },
  {
    id: "baby-doge-coin",
    name: "Baby Doge Coin",
    symbol: "babydoge",
    image:
      "https://assets.coingecko.com/coins/images/16125/small/Baby_Doge.png?1623044048",
  },
  {
    id: "convex-crv",
    name: "Convex CRV",
    symbol: "cvxcrv",
    image:
      "https://assets.coingecko.com/coins/images/15586/small/convex-crv.png?1621255952",
  },
  {
    id: "digitalbits",
    name: "DigitalBits",
    symbol: "xdb",
    image:
      "https://assets.coingecko.com/coins/images/8089/small/digitalbits-logo.jpg?1554454902",
  },
  {
    id: "polymath",
    name: "Polymath",
    symbol: "poly",
    image:
      "https://assets.coingecko.com/coins/images/2784/small/inKkF01.png?1605007034",
  },
  {
    id: "tribe-2",
    name: "Tribe",
    symbol: "tribe",
    image:
      "https://assets.coingecko.com/coins/images/14575/small/tribe.PNG?1617487954",
  },
  {
    id: "kava",
    name: "Kava",
    symbol: "kava",
    image:
      "https://assets.coingecko.com/coins/images/9761/small/Kava-icon.png?1585636197",
  },
  {
    id: "neutrino",
    name: "Neutrino USD",
    symbol: "usdn",
    image:
      "https://assets.coingecko.com/coins/images/10117/small/78GWcZu.png?1600845716",
  },
  {
    id: "yield-guild-games",
    name: "Yield Guild Games",
    symbol: "ygg",
    image:
      "https://assets.coingecko.com/coins/images/17358/small/le1nzlO6_400x400.jpg?1632465691",
  },
  {
    id: "reserve-rights-token",
    name: "Reserve Rights Token",
    symbol: "rsr",
    image:
      "https://assets.coingecko.com/coins/images/8365/small/Reserve_Rights.png?1557737411",
  },
  {
    id: "mask-network",
    name: "Mask Network",
    symbol: "mask",
    image:
      "https://assets.coingecko.com/coins/images/14051/small/Mask_Network.jpg?1614050316",
  },
  {
    id: "cartesi",
    name: "Cartesi",
    symbol: "ctsi",
    image:
      "https://assets.coingecko.com/coins/images/11038/small/cartesi.png?1592288021",
  },
  {
    id: "zelcash",
    name: "Flux",
    symbol: "flux",
    image:
      "https://assets.coingecko.com/coins/images/5163/small/Flux_symbol_blue-white.png?1617192144",
  },
  {
    id: "golem",
    name: "Golem",
    symbol: "glm",
    image:
      "https://assets.coingecko.com/coins/images/542/small/Golem_Submark_Positive_RGB.png?1606392013",
  },
  {
    id: "injective-protocol",
    name: "Injective Protocol",
    symbol: "inj",
    image:
      "https://assets.coingecko.com/coins/images/12882/small/Secondary_Symbol.png?1628233237",
  },
  {
    id: "alpha-finance",
    name: "Alpha Finance",
    symbol: "alpha",
    image:
      "https://assets.coingecko.com/coins/images/12738/small/AlphaToken_256x256.png?1617160876",
  },
  {
    id: "lisk",
    name: "Lisk",
    symbol: "lsk",
    image:
      "https://assets.coingecko.com/coins/images/385/small/Lisk_Symbol_-_Blue.png?1573444104",
  },
  {
    id: "keep-network",
    name: "Keep Network",
    symbol: "keep",
    image:
      "https://assets.coingecko.com/coins/images/3373/small/IuNzUb5b_400x400.jpg?1589526336",
  },
  {
    id: "synapse-2",
    name: "Synapse",
    symbol: "syn",
    image:
      "https://assets.coingecko.com/coins/images/18024/small/syn.png?1635002049",
  },
  {
    id: "fx-coin",
    name: "Function X",
    symbol: "fx",
    image:
      "https://assets.coingecko.com/coins/images/8186/small/47271330_590071468072434_707260356350705664_n.jpg?1556096683",
  },
  {
    id: "reef-finance",
    name: "Reef Finance",
    symbol: "reef",
    image:
      "https://assets.coingecko.com/coins/images/13504/small/Group_10572.png?1610534130",
  },
  {
    id: "verge",
    name: "Verge",
    symbol: "xvg",
    image:
      "https://assets.coingecko.com/coins/images/203/small/verge-symbol-color_logo.png?1561543281",
  },
  {
    id: "swipe",
    name: "Swipe",
    symbol: "sxp",
    image:
      "https://assets.coingecko.com/coins/images/9368/small/swipe.png?1566792311",
  },
  {
    id: "superfarm",
    name: "SuperFarm",
    symbol: "super",
    image:
      "https://assets.coingecko.com/coins/images/14040/small/6YPdWn6.png?1613975899",
  },
  {
    id: "lukso-token",
    name: "LUKSO Token",
    symbol: "lyxe",
    image:
      "https://assets.coingecko.com/coins/images/11423/small/1_QAHTciwVhD7SqVmfRW70Pw.png?1590110612",
  },
  {
    id: "dvision-network",
    name: "Dvision Network",
    symbol: "dvi",
    image:
      "https://assets.coingecko.com/coins/images/13020/small/WGAhHOLv_400x400.png?1604396086",
  },
  {
    id: "persistence",
    name: "Persistence",
    symbol: "xprt",
    image:
      "https://assets.coingecko.com/coins/images/14582/small/512_Light.png?1617149658",
  },
  {
    id: "rari-governance-token",
    name: "Rari Governance Token",
    symbol: "rgt",
    image:
      "https://assets.coingecko.com/coins/images/12900/small/Rari_Logo_Transparent.png?1613978014",
  },
  {
    id: "bonfida",
    name: "Bonfida",
    symbol: "fida",
    image:
      "https://assets.coingecko.com/coins/images/13395/small/fida-dark.png?1608112224",
  },
  {
    id: "coti",
    name: "COTI",
    symbol: "coti",
    image:
      "https://assets.coingecko.com/coins/images/2962/small/Coti.png?1559653863",
  },
  {
    id: "tokemak",
    name: "Tokemak",
    symbol: "toke",
    image:
      "https://assets.coingecko.com/coins/images/17495/small/tokemak-avatar-200px-black.png?1628131614",
  },
  {
    id: "hathor",
    name: "Hathor",
    symbol: "htr",
    image:
      "https://assets.coingecko.com/coins/images/12718/small/hathor_logo.png?1601978023",
  },
  {
    id: "oxygen",
    name: "Oxygen",
    symbol: "oxy",
    image:
      "https://assets.coingecko.com/coins/images/13509/small/8DjBZ79V_400x400.jpg?1609236331",
  },
  {
    id: "trust-wallet-token",
    name: "Trust Wallet Token",
    symbol: "twt",
    image:
      "https://assets.coingecko.com/coins/images/11085/small/Trust.png?1588062702",
  },
  {
    id: "zenon",
    name: "Zenon",
    symbol: "znn",
    image:
      "https://assets.coingecko.com/coins/images/8177/small/kC-sx49e_400x400.jpg?1555989643",
  },
  {
    id: "ergo",
    name: "Ergo",
    symbol: "erg",
    image:
      "https://assets.coingecko.com/coins/images/2484/small/Ergo.png?1574682618",
  },
  {
    id: "vethor-token",
    name: "VeThor Token",
    symbol: "vtho",
    image:
      "https://assets.coingecko.com/coins/images/5230/small/vethor-token.png?1548760043",
  },
  {
    id: "nkn",
    name: "NKN",
    symbol: "nkn",
    image:
      "https://assets.coingecko.com/coins/images/3375/small/nkn.png?1548329212",
  },
  {
    id: "origin-protocol",
    name: "Origin Protocol",
    symbol: "ogn",
    image:
      "https://assets.coingecko.com/coins/images/3296/small/op.jpg?1547037878",
  },
  {
    id: "thorstarter",
    name: "Thorstarter",
    symbol: "xrune",
    image:
      "https://assets.coingecko.com/coins/images/16835/small/thorstarter.jpg?1625279004",
  },
  {
    id: "titanswap",
    name: "TitanSwap",
    symbol: "titan",
    image:
      "https://assets.coingecko.com/coins/images/12606/small/nqGlQzdz_400x400.png?1601019805",
  },
  {
    id: "bakerytoken",
    name: "BakerySwap",
    symbol: "bake",
    image:
      "https://assets.coingecko.com/coins/images/12588/small/bakerytoken_logo.jpg?1600940032",
  },
  {
    id: "dodo",
    name: "DODO",
    symbol: "dodo",
    image:
      "https://assets.coingecko.com/coins/images/12651/small/dodo_logo.png?1601433025",
  },
  {
    id: "sovryn",
    name: "Sovryn",
    symbol: "sov",
    image:
      "https://assets.coingecko.com/coins/images/16248/small/sov.PNG?1623380748",
  },
  {
    id: "vectorspace",
    name: "Vectorspace AI",
    symbol: "vxv",
    image:
      "https://assets.coingecko.com/coins/images/2063/small/vectorspace-ai-logo.jpeg?1547036362",
  },
  {
    id: "energy-web-token",
    name: "Energy Web Token",
    symbol: "ewt",
    image:
      "https://assets.coingecko.com/coins/images/10886/small/R9gQTJV__400x400.png?1585604557",
  },
  {
    id: "platon-network",
    name: "PlatON Network",
    symbol: "lat",
    image:
      "https://assets.coingecko.com/coins/images/15430/small/PlatON-Black.png?1623852513",
  },
  {
    id: "mobox",
    name: "Mobox",
    symbol: "mbox",
    image:
      "https://assets.coingecko.com/coins/images/14751/small/mobox.PNG?1618146979",
  },
  {
    id: "ocean-protocol",
    name: "Ocean Protocol",
    symbol: "ocean",
    image:
      "https://assets.coingecko.com/coins/images/3687/small/ocean-protocol-logo.jpg?1547038686",
  },
  {
    id: "keep3rv1",
    name: "Keep3rV1",
    symbol: "kp3r",
    image:
      "https://assets.coingecko.com/coins/images/12966/small/kp3r_logo.jpg?1607057458",
  },
  {
    id: "orchid-protocol",
    name: "Orchid Protocol",
    symbol: "oxt",
    image:
      "https://assets.coingecko.com/coins/images/3916/small/download_%285%29.png?1576624060",
  },
  {
    id: "seth",
    name: "sETH",
    symbol: "seth",
    image:
      "https://assets.coingecko.com/coins/images/8843/small/sETH.png?1616150207",
  },
  {
    id: "playdapp",
    name: "PlayDapp",
    symbol: "pla",
    image:
      "https://assets.coingecko.com/coins/images/14316/small/54023228.png?1615366911",
  },
  {
    id: "medibloc",
    name: "Medibloc",
    symbol: "med",
    image:
      "https://assets.coingecko.com/coins/images/1374/small/medibloc_basic.png?1570607623",
  },
  {
    id: "bitcoin-diamond",
    name: "Bitcoin Diamond",
    symbol: "bcd",
    image:
      "https://assets.coingecko.com/coins/images/1254/small/bitcoin-diamond.png?1547035280",
  },
  {
    id: "pundi-x-2",
    name: "Pundi X",
    symbol: "pundix",
    image:
      "https://assets.coingecko.com/coins/images/14571/small/vDyefsXq_400x400.jpg?1617085003",
  },
  {
    id: "vulcan-forged",
    name: "Vulcan Forged",
    symbol: "pyr",
    image:
      "https://assets.coingecko.com/coins/images/14770/small/1617088937196.png?1619414736",
  },
  {
    id: "doge-army-token",
    name: "Doge Army Token",
    symbol: "dgat",
    image:
      "https://assets.coingecko.com/coins/images/19412/small/pfeuRgb.png?1635212477",
  },
  {
    id: "samoyedcoin",
    name: "Samoyedcoin",
    symbol: "samo",
    image:
      "https://assets.coingecko.com/coins/images/15051/small/IXeEj5e.png?1619560738",
  },
  {
    id: "sapphire",
    name: "Sapphire",
    symbol: "sapp",
    image:
      "https://assets.coingecko.com/coins/images/8478/small/Sapphire-logo-transparent-no-text.jpg?1614674409",
  },
  {
    id: "asd",
    name: "AscendEx Token",
    symbol: "asd",
    image:
      "https://assets.coingecko.com/coins/images/5003/small/bitmax.png?1621310871",
  },
  {
    id: "status",
    name: "Status",
    symbol: "SNT",
    image:
      "https://assets.coingecko.com/coins/images/779/small/status.png?1548610778",
  },
  {
    id: "band-protocol",
    name: "Band Protocol",
    symbol: "band",
    image:
      "https://assets.coingecko.com/coins/images/9545/small/Band_token_blue_violet_token.png?1625881431",
  },
  {
    id: "mango-markets",
    name: "Mango Markets",
    symbol: "mngo",
    image:
      "https://assets.coingecko.com/coins/images/14773/small/token-mango.png?1628171237",
  },
  {
    id: "pundi-x",
    name: "Pundi X [OLD]",
    symbol: "npxs",
    image:
      "https://assets.coingecko.com/coins/images/2170/small/pundi-x.png?1548386366",
  },
  {
    id: "orbs",
    name: "Orbs",
    symbol: "orbs",
    image:
      "https://assets.coingecko.com/coins/images/4630/small/Orbs.jpg?1547039896",
  },
  {
    id: "ultra",
    name: "Ultra",
    symbol: "uos",
    image:
      "https://assets.coingecko.com/coins/images/4480/small/Ultra.png?1563356418",
  },
  {
    id: "conflux-token",
    name: "Conflux",
    symbol: "cfx",
    image:
      "https://assets.coingecko.com/coins/images/13079/small/3vuYMbjN.png?1631512305",
  },
  {
    id: "pirate-chain",
    name: "Pirate Chain",
    symbol: "arrr",
    image:
      "https://assets.coingecko.com/coins/images/6905/small/Pirate_Chain.png?1560913844",
  },
  {
    id: "alchemix",
    name: "Alchemix",
    symbol: "alcx",
    image:
      "https://assets.coingecko.com/coins/images/14113/small/Alchemix.png?1614409874",
  },
  {
    id: "electroneum",
    name: "Electroneum",
    symbol: "etn",
    image:
      "https://assets.coingecko.com/coins/images/1109/small/electroneum.png?1547224846",
  },
  {
    id: "allianceblock",
    name: "AllianceBlock",
    symbol: "albt",
    image:
      "https://assets.coingecko.com/coins/images/12392/small/alliance_block_logo.jpg?1599546617",
  },
  {
    id: "star-atlas",
    name: "Star Atlas",
    symbol: "atlas",
    image:
      "https://assets.coingecko.com/coins/images/17659/small/Icon_Reverse.png?1628759092",
  },
];

export { searchData };
