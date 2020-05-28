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

const __LIST__ = [
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
]

// const HD_HARDENED: number = 0x80000000;
// const fromHardened = (n: number): number => (n & ~HD_HARDENED) >>> 0;

const get = (pathOrName: number | string) => {
  if (typeof pathOrName === 'string') {
    const name = pathOrName.toLowerCase()
    return __LIST__.find(n => n.name.toLowerCase() === name || n.symbol.toLowerCase() === name) || __LIST__[0]
  } else {
    return __LIST__.find(n => n.slip44 === pathOrName) || __LIST__[0]
  }
}

export default {
  get,
  __LIST__
}
