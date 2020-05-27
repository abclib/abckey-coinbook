import test from 'ava'
import Coinbook from '../dist/index'

test('[0] btc', t => {
  t.is(Coinbook.get('btc').symbol, 'btc')
  t.is(Coinbook.get(0).symbol, 'btc')
})

test('[3] dogecoin', t => {
  t.is(Coinbook.get('doge').symbol, 'doge')
})
