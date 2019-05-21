import btc from './btc'
import ltc from './ltc'
import doge from './doge'
import dash from './dash'
import nmc from './nmc'
import dgb from './dgb'
import vtc from './vtc'
import zec from './zec'
import bch from './bch'
import btg from './btg'

const COINBOOK = {
  btc,
  ltc,
  doge,
  dash,
  nmc,
  dgb,
  vtc,
  zec,
  bch,
  btg
}

const get = (symbol: string) => {
  try {
    return JSON.parse(JSON.stringify(COINBOOK[symbol.toLowerCase()]))
  } catch {
    return JSON.parse(JSON.stringify(COINBOOK['btc']))
  }
}

export default {
  get
}
