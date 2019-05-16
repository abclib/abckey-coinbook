export default {
  market_id: 'dogecoin',
  name: 'Dogecoin',
  symbol: 'doge',
  address_crypto: 'sha256',
  address_prefix: {
    mainnet: [
      0x1e, // P2PKH
      0x16 // P2SH
    ],
    testnet: [
      0x71, // P2PKH
      0xc4 // P2SH
    ]
  },
  bip: {
    '44': [ // P2PKH or P2SH
      0x2fac398, // xprv
      0x2facafd // xpub
    ]
  },
  blocktime: 60, // seconds
  blockbook: [
    'https://doge1.trezor.io',
    'https://doge2.trezor.io',
    'https://doge3.trezor.io',
    'https://doge4.trezor.io',
    'https://doge5.trezor.io'
  ],
  bitcore: [],
  network: {
    coin: 'doge',
    bip32: {
      private: 49988504, // xprv_magic
      public: 49990397 // xpub_magic
    },
    dustThreshold: 0, // doesn't matter, for type correctness,
    messagePrefix: 'Bitcoin Signed Message:\n',
    pubKeyHash: 30, // address_type
    scriptHash: 22, // address_type_p2sh
    wif: 128 // doesn't matter, for type correctness
  }
}
