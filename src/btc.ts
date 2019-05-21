export default {
  market_id: 'bitcoin',
  index: 0,
  name: 'Bitcoin',
  symbol: 'btc',
  address_crypto: 'sha256',
  address_length: 50,
  address_prefix: {
    mainnet: {
      hrp: 'bc',
      p2pkh: '00',
      p2sh: '05'
    },
    testnet: {
      hrp: 'tb',
      p2pkh: '6f',
      p2sh: 'c4'
    }
  },
  bip: {
    '44': [ // P2PKH or P2SH
      0x0488ade4, // xprv
      0x0488b21e // xpub
    ],
    '49': [ // P2WPKH in P2SH
      0x049d7878, // yprv
      0x049d7cb2 // ypub
    ],
    '84': [ // P2WPKH
      0x04b2430c, // zprv
      0x04b24746 // zpub
    ]
  },
  blocktime: 600, // seconds
  blockbook: [
    'https://btc1.trezor.io',
    'https://btc2.trezor.io',
    'https://btc3.trezor.io',
    'https://btc4.trezor.io',
    'https://btc5.trezor.io'
  ],
  bitcore: [],
  network: {
    coin: 'btc',
    bech32: 'bc',
    bip32: {
      private: 76066276, // xprv_magic
      public: 77429938 // xpub_magic_segwit_p2sh
    },
    dustThreshold: 0, // doesn't matter, for type correctness,
    messagePrefix: 'Bitcoin Signed Message:\n',
    pubKeyHash: 0, // address_type
    scriptHash: 5, // address_type_p2sh
    wif: 128 // doesn't matter, for type correctness
  }
}
