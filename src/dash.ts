export default {
  market_id: 'dash',
  index: 5,
  name: 'Dash',
  symbol: 'dash',
  address_crypto: 'sha256',
  address_prefix: {
    mainnet: [
      0x4C, // P2PKH
      0x10 // P2SH
    ],
    testnet: [
      0x8C, // P2PKH
      0x13 // P2SH
    ]
  },
  bip: {
    '44': [ // P2PKH or P2SH
      0x02fe52f8, // xprv
      0x02fe52cc // xpub
    ]
  },
  blocktime: 150, // seconds
  blockbook: [
    'https://dash1.trezor.io',
    'https://dash2.trezor.io',
    'https://dash3.trezor.io',
    'https://dash4.trezor.io',
    'https://dash5.trezor.io'
  ],
  bitcore: [],
  network: {
    coin: 'dash',
    bip32: {
      private: 50221816, // xprv_magic
      public: 50221772 // xpub_magic
    },
    dustThreshold: 0, // doesn't matter, for type correctness,
    messagePrefix: 'DarkCoin Signed Message:\n',
    pubKeyHash: 76, // address_type
    scriptHash: 16, // address_type_p2sh
    wif: 128 // doesn't matter, for type correctness
  }
}
