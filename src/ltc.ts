export default {
  slip44: 2,
  name: 'Litecoin',
  symbol: 'ltc',
  address_crypto: 'sha256',
  address_length: 50,
  address_prefix: {
    mainnet: {
      p2pkh: '30',
      p2sh: '32' // 05 is deprecated
    },
    testnet: {
      p2pkh: '6f',
      p2sh: '3a' // c4 is deprecated
    }
  },
  bip: {
    '44': [ // P2PKH or P2SH
      0x019d9cfe, // xprv
      0x019da462  // xpub
    ],
    '49': [ // P2WPKH in P2SH
      0x01b26792, // yprv
      0x01b26ef6  // ypub
    ]
  },
  blocktime: 150, // seconds
  bitcore: [],
  network: {
    coin: 'ltc',
    bech32: 'ltc',
    bip32: {
      private: 27106558, // xprv_magic
      public: 28471030 // xpub_magic_segwit_p2sh
    },
    dustThreshold: 0, // doesn't matter, for type correctness,
    messagePrefix: 'Litecoin Signed Message:\n',
    pubKeyHash: 48, // address_type
    scriptHash: 50, // address_type_p2sh
    wif: 128 // doesn't matter, for type correctness
  }
}
