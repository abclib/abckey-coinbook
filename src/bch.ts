export default {
  slip44: 145,
  name: 'Bitcoin Cash',
  symbol: 'bch',
  address_crypto: 'sha256',
  address_length: 50,
  address_prefix: {
    mainnet: {
      p2pkh: '00',
      p2sh: '05'
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
  bitcore: [],
  network: {
    coin: 'bch',
    bech32: 'bch',
    bip32: {
      private: 76066276, // xprv_magic
      public: 76067358 // xpub_magic
    },
    dustThreshold: 0, // doesn't matter, for type correctness,
    messagePrefix: 'Bitcoin Signed Message:\n',
    pubKeyHash: 0, // address_type
    scriptHash: 5, // address_type_p2sh
    wif: 128 // doesn't matter, for type correctness
  }
}
