export default {
  market_id: 'litecoin',
  name: 'Litecoin',
  symbol: 'ltc',
  address_crypto: 'sha256',
  address_prefix: {
    mainnet: [
      0x30, // P2PKH
      0x32 // P2SH
      // 0x05 // deprecated
    ],
    testnet: [
      0x6f, // P2PKH
      0x3a // P2SH
      // 0xc4 // deprecated
    ]
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
  blockbook: [
    'https://ltc1.trezor.io',
    'https://ltc2.trezor.io',
    'https://ltc3.trezor.io',
    'https://ltc4.trezor.io',
    'https://ltc5.trezor.io'
  ],
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
