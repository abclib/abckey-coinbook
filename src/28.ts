export default {
  market_id: 'vertcoin',
  name: 'Vertcoin',
  symbol: 'vtc',
  address_crypto: 'sha256',
  address_prefix: {
    mainnet: [
      0x47, // P2PKH
      0x05 // P2SH
    ],
    testnet: [
      0x6f, // P2PKH
      0xc4 // P2SH
    ]
  },
  bip: {
    '44': [ // P2PKH or P2SH
      0x0488ade4, // xprv
      0x0488b21e  // xpub
    ],
    '49': [ // P2WPKH in P2SH
      0x049d7878, // yprv
      0x049d7cb2 // ypub
    ]
  },
  blocktime: 150, // seconds
  blockbook: [
    'https://vtc1.trezor.io',
    'https://vtc2.trezor.io',
    'https://vtc3.trezor.io',
    'https://vtc4.trezor.io',
    'https://vtc5.trezor.io'
  ],
  bitcore: [],
  network: {
    coin: 'vtc',
    bech32: 'vtc',
    bip32: {
      private: 76066276, // xprv_magic
      public: 77429938 // xpub_magic_segwit_p2sh
    },
    dustThreshold: 0, // doesn't matter, for type correctness,
    messagePrefix: 'Vertcoin Signed Message:\n',
    pubKeyHash: 71, // address_type
    scriptHash: 5, // address_type_p2sh
    wif: 128 // doesn't matter, for type correctness
  }
}