var { parseRawTx } = require('./bitcoinParser.js')
const rawTx = '0100000001c997a5e56e104102fa209c6a852dd90660a20b2d9c352423edce25857fcd3704000000004847304402204e45e16932b8af514961a1d3a1a25fdf3f4f7732e9d624c6c61548ab5fb8cd410220181522ec8eca07de4860a4acdd12909d831cc56cbbac4622082221a8768d1d0901ffffffff0200ca9a3b00000000434104ae1a62fe09c5f51b13905f07f06b99a2f7159b2225f374cd378d71302fa28414e7aab37397f554a7df5f142c21c1b7303b8a0626f1baded5c72a704f7e6cd84cac00286bee0000000043410411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3ac00000000'
const result = parseRawTx(rawTx)
console.log(result)

function flipEndianness(hex) {
  if (hex.length % 2 !== 0) {
    throw new Error('Hex string must have an even number of characters');
  }

  let flipped = '';
  for (let i = hex.length - 2; i >= 0; i -= 2) {
    flipped += hex.substr(i, 2);
  }

  return flipped;
}

// function decodeCompactSize(hex) {
//   const marker = parseInt(hex.slice(0, 2), 16);
//   console.log('marker,', marker)
//   if (marker < 0xfd) {
//     return marker;
//   } else if (marker === 0xfd) {
//     console.log('equals 0xfd')
//     console.log('slice: ', hex.slice(2, 6))
//     return parseInt(flipEndianness(hex.slice(2, 6)), 16);
//   } else if (marker === 0xfe) {
//     return parseInt(hex.slice(2, 10), 16);
//   } else {
//     return parseInt(hex.slice(2, 18), 16);
//   }
// }

function decodeCompactSize(hex) {
  const marker = parseInt(hex.slice(0, 2), 16);
  if (marker < 0xfd) {
    return marker;
  } else if (marker === 0xfd) {
    const littleEndianHex = hex.slice(2, 6);
    const bigEndianHex = flipEndianness(littleEndianHex);
    return parseInt(bigEndianHex, 16);
  } else if (marker === 0xfe) {
    return parseInt(flipEndianness(hex.slice(2, 10)), 16);
  } else {
    return parseInt(flipEndianness(hex.slice(2, 18)), 16);
  }
}

const hex = '43';
const length = decodeCompactSize(hex);
console.log(length); // Output: 253
