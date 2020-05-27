export default {
  market_id: 'dogecoin',
  slip44: 3,
  name: 'Dogecoin',
  symbol: 'doge',
  address_crypto: 'sha256',
  address_length: 50,
  address_prefix: {
    mainnet: {
      p2pkh: '1e',
      p2sh: '16'
    },
    testnet: {
      p2pkh: '71',
      p2sh: 'c4'
    }
  },
  bip: {
    '44': [ // P2PKH or P2SH
      0x2fac398, // xprv
      0x2facafd // xpub
    ]
  },
  blocktime: 60, // seconds
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
