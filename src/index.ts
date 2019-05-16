import _0 from './btc'
import _2 from './ltc'
import _3 from './doge'
import _5 from './dash'
import _7 from './nmc'
import _20 from './dgb'
import _28 from './vtc'
import _133 from './zec'
import _145 from './bch'
import _156 from './btg'

const COINBOOK = [
  _0,
  _2,
  _3,
  _5,
  _7,
  _20,
  _28,
  _133,
  _145,
  _156
]

const get = (symbol: string) => {
  symbol = symbol.toLowerCase()
  for (let i = 0; i < COINBOOK.length; i++) {
    if (COINBOOK[i].symbol === symbol) return COINBOOK[i]
  }
  return COINBOOK[0]
}

export default {
  get
}
