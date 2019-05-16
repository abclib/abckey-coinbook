import _0 from './0'
import _2 from './2'
import _3 from './3'
import _5 from './5'
import _7 from './7'
import _20 from './20'
import _28 from './28'
import _133 from './133'
import _145 from './145'
import _156 from './156'

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
