export default {
  slip44: 5,
  name: 'Dash',
  symbol: 'dash',
  address_crypto: 'sha256',
  address_length: 50,
  address_prefix: {
    mainnet: {
      p2pkh: '4C',
      p2sh: '10'
   },
    testnet: {
      p2pkh: '8C',
      p2sh: '13'
    }
  },
  bip: {
    '44': [ // P2PKH or P2SH
      0x02fe52f8, // xprv
      0x02fe52cc // xpub
    ]
  },
  blocktime: 150, // seconds
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
