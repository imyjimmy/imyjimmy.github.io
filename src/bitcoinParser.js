function parseRawTx(rawTx) {
  const tx = {};
  let offset = 0;

  // parse version
  tx.version = String(parseInt(flipEndianness(rawTx.slice(offset, offset + 8), 16)));
  offset += 8;

  // parse input count
  const inputCount = String(decodeCompactSize(rawTx.slice(offset)));
  tx.inputCount = inputCount;

  let realOffset = offset + compactSizeOffset(rawTx.slice(offset));

  // could be inaccurate
  offset += (inputCount < 0xfd) ? 2 : (inputCount === 0xfd) ? 4 : 6;

  console.log('offset vs realOffset:', offset, realOffset)

  // parse inputs
  tx.inputs = [];
  for (let i = 0; i < inputCount; i++) {
    const input = {};
    input.txid = flipEndianness(rawTx.slice(offset, offset + 64));
    offset += 64;
    input.vout = parseInt(flipEndianness(rawTx.slice(offset, offset + 8), 16));
    offset += 8;
    const scriptSigLength = decodeCompactSize(rawTx.slice(offset));
    input.scriptSigLength = scriptSigLength;
    offset += (scriptSigLength < 0xfd) ? 2 : (scriptSigLength === 0xfd) ? 4 : 6;
    input.scriptSig = rawTx.slice(offset, offset + (scriptSigLength * 2));
    offset += (scriptSigLength * 2);
    input.sequence = String(rawTx.slice(offset, offset + 8), 16);
    offset += 8;
    tx.inputs.push(input);
  }

  // parse output count
  const outputCount = decodeCompactSize(rawTx.slice(offset));
  tx.outputCount = outputCount;
  offset += (outputCount < 0xfd) ? 2 : (outputCount === 0xfd) ? 4 : 6;

  // parse outputs
  tx.outputs = [];
  for (let i = 0; i < outputCount; i++) {
    const output = {};
    output.value = parseInt(flipEndianness(rawTx.slice(offset, offset + 16)), 16);
    offset += 16;
    const scriptPubKeyLength = decodeCompactSize(rawTx.slice(offset));
    output.scriptPubKeyLength = scriptPubKeyLength;
    offset += (scriptPubKeyLength < 0xfd) ? 2 : (scriptPubKeyLength === 0xfd) ? 4 : 6;
    output.scriptPubKey = rawTx.slice(offset, offset + (scriptPubKeyLength * 2));
    offset += (scriptPubKeyLength * 2);
    tx.outputs.push(output);
  }

  // parse locktime
  tx.locktime = rawTx.slice(offset, offset + 8), 16

  return tx;
}

/* */
// function parseRawTxReact(rawTx) {
//   const tx = {};
//   let offset = 0;

//   // parse version
//   // String(parseInt(flipEndianness(rawTx.slice(offset, offset + 8), 16)));
//   tx.version = (<div className="btc version">{rawTx.slice(offset, offset + 8)}</div>)
//   offset += 8;

//   let compactSize = decodeCompactSize(rawTx.slice(offset))
//   let compactSizeOffset = compactSizeOffset(rawTx.slice(offset))

// }

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

function compactSizeOffset(hex) {
  const marker = parseInt(hex.slice(0, 2), 16);
  if (marker < 0xfd) { // 1 byte or 2 characters
    return 2;
  } else if ( marker === 0xfd) { // 1 byte marker + next 2 bytes
    return 6;
  } else if ( marker === 0xfe) { // 1 byte marker + next 4 bytes
    return 10;
  } else if (marker === 0xff) { // 1 byte marker + next 8 bytes
    return 18;
  }
}

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

module.exports = { parseRawTx }