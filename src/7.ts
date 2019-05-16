export default {
  market_id: 'namecoin',
  name: 'Namecoin',
  symbol: 'dgb',
  address_crypto: 'sha256',
  address_prefix: {
    mainnet: [
      0x34, // P2PKH
      0x0d // P2SH
    ],
    testnet: [
      0x6f, // P2PKH
      0xc4 // P2SH
    ]
  },
  bip: {
    '44': [ // P2PKH or P2SH
      0x0488ade4, // xprv
      0x0488b21e // xpub
    ]
  },
  blocktime: 600, // seconds
  blockbook: [
    'https://nmc1.trezor.io',
    'https://nmc2.trezor.io'
  ],
  bitcore: [],
  network: {
    coin: 'nmc',
    bip32: {
      private: 76066276, // xprv_magic
      public: 76067358 // xpub_magic
    },
    dustThreshold: 0, // doesn't matter, for type correctness,
    messagePrefix: 'Namecoin Signed Message:\n',
    pubKeyHash: 52, // address_type
    scriptHash: 5, // address_type_p2sh
    wif: 128 // doesn't matter, for type correctness
  }
}
