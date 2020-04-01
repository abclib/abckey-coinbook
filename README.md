## coinbook
A Variety of virtual currency information generator.

[![NPM version](https://img.shields.io/npm/v/@abckey/coinbook.svg)](https://www.npmjs.com/package/@abckey/coinbook)


## Install

```
npm i @abckey/coinbook
```

## Usage

```js
import Coinbook from '@abckey/coinbook'

Coinbook.get('btc')
```

## Command
### Compile Typescript filegroup with d.ts
```cmd
npm run build
```

### Ibid
```cmd
npm run build:ts
```

### Compile into a packaged js file
```cmd
npm run build:js
```

### Compile into a packaged json file
```cmd
npm run build:json
```


### Clean up the dist directory (For unpredictable errors)
```cmd
npm run clear
```

## References

* [List of address prefixes](https://en.bitcoin.it/wiki/List_of_address_prefixes)
* [SLIP-0132 : Registered HD version bytes for BIP-0032](https://github.com/satoshilabs/slips/blob/master/slip-0132.md)
* [SLIP-0173 : Registered human-readable parts for BIP-0173](https://github.com/satoshilabs/slips/blob/master/slip-0173.md)
