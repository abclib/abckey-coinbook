export default {
  market_id: 'namecoin',
  index: 7,
  name: 'Namecoin',
  symbol: 'nmc',
  address_crypto: 'sha256',
  address_length: 50,
  address_prefix: {
    mainnet: {
      p2pkh: '34',
      p2sh: '0d'
   },
    testnet: {
      p2pkh: '6f',
      p2sh: 'c4'
    }
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
