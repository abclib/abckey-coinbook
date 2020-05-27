export default {
  market_id: 'zcash',
  slip44: 133,
  name: 'Zcash',
  symbol: 'zec',
  address_crypto: 'sha256',
  address_length: 50,
  address_prefix: {
    mainnet: {
      p2pkh: '1cb8',
      p2sh: '1cbd'
   },
    testnet: {
      p2pkh: '1d50',
      p2sh: '1cba'
    }
  },
  bip: {
    '44': [ // P2PKH or P2SH
      0x0488ade4, // xprv
      0x0488b21e // xpub
    ]
  },
  blocktime: 150, // seconds
  bitcore: [],
  network: {
    coin: 'zec',
    bip32: {
      private: 76066276, // xprv_magic
      public: 76067358 // xpub_magic_segwit_p2sh
    },
    dustThreshold: 0, // doesn't matter, for type correctness,
    messagePrefix: 'Zcash Signed Message:\n',
    pubKeyHash: 7352, // address_type
    scriptHash: 7357, // address_type_p2sh
    wif: 128 // doesn't matter, for type correctness
  }
}
