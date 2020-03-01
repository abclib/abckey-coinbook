export default {
  market_id: 'bitcoin-gold',
  slip44: 156,
  name: 'Bitcoin Gold',
  symbol: 'btg',
  address_crypto: 'sha256',
  address_length: 50,
  address_prefix: {
    mainnet: {
      p2pkh: '26',
      p2sh: '17'
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
    ],
    '49': [ // P2WPKH in P2SH
      0x049d7878, // yprv
      0x049d7cb2 // ypub
    ]
  },
  blocktime: 600, // seconds
  blockbook: [
    'https://btg1.trezor.io',
    'https://btg2.trezor.io',
    'https://btg3.trezor.io',
    'https://btg4.trezor.io',
    'https://btg5.trezor.io'
  ],
  bitcore: [],
  network: {
    coin: 'btg',
    bech32: 'btg',
    bip32: {
      private: 76066276, // xprv_magic
      public: 77429938 // xpub_magic_segwit_p2sh
    },
    dustThreshold: 0, // doesn't matter, for type correctness,
    messagePrefix: 'Bitcoin Gold Signed Message:\n',
    pubKeyHash: 38, // address_type
    scriptHash: 23, // address_type_p2sh
    wif: 128 // doesn't matter, for type correctness
  }
}
