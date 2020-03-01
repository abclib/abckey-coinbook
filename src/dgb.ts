export default {
  market_id: 'digibyte',
  slip44: 20,
  name: 'DigiByte',
  symbol: 'dgb',
  address_crypto: 'sha256',
  address_length: 50,
  address_prefix: {
    mainnet: {
      p2pkh: '1e',
      p2sh: '3f'
    },
    testnet: {}
  },
  bip: {
    '44': [ // P2PKH or P2SH
      0x0488ade4, // xprv
      0x0488b21e // xpub
    ],
    '49': [ // P2WPKH in P2SH
      0x049d7878, // yprv
      0x049d7cb2 // ypub
    ]
  },
  blocktime: 15, // seconds
  blockbook: [
    'https://dgb1.trezor.io',
    'https://dgb2.trezor.io'
  ],
  bitcore: [],
  network: {
    coin: 'dgb',
    bip32: {
      private: 76066276, // xprv_magic
      public: 77429938 // xpub_magic_segwit_p2sh
    },
    dustThreshold: 0, // doesn't matter, for type correctness,
    messagePrefix: 'DigiByte Signed Message:\n',
    pubKeyHash: 30, // address_type
    scriptHash: 63, // address_type_p2sh
    wif: 128 // doesn't matter, for type correctness
  }
}
