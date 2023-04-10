module.exports = function(hexString) {
  // Split the hex string into individual fields
  const version = hexString.slice(0, 8);
  const inputCount = parseCompactSize(hexString.slice(8));
  let index = 10;
  const inputs = [];
  for (let i = 0; i < inputCount; i++) {
    const input = {
      txid: hexString.slice(index, index + 64),
      vout: hexString.slice(index + 64, index + 72),
      scriptSigSize: parseCompactSize(hexString.slice(index + 72)),
      scriptSig: hexString.slice(index + 74, index + 74 + (parseCompactSize(hexString.slice(index + 72)) * 2)),
      sequence: hexString.slice(index + 74 + (parseCompactSize(hexString.slice(index + 72)) * 2), index + 82 + (parseCompactSize(hexString.slice(index + 72)) * 2)),
    };
    inputs.push(input);
    index += 82 + (parseCompactSize(hexString.slice(index + 72)) * 2);
  }
  const outputCount = parseCompactSize(hexString.slice(index));
  index += (outputCount.length * 2);
  const outputs = [];
  for (let i = 0; i < outputCount; i++) {
    const output = {
      amount: hexString.slice(index, index + 16),
      scriptPubKeySize: parseCompactSize(hexString.slice(index + 16)),
      scriptPubKey: hexString.slice(index + 18, index + 18 + (parseCompactSize(hexString.slice(index + 16)) * 2)),
    };
    outputs.push(output);
    index += 18 + (parseCompactSize(hexString.slice(index + 16)) * 2);
  }
  const locktime = hexString.slice(-8);

  // Construct and return the parsed representation
  return {
    version,
    input_count: inputCount,
    inputs,
    output_count: outputCount,
    outputs,
    locktime,
  };
}

function parseCompactSize(hexString) {
  const sizeByte = hexString.slice(0, 2);
  let size;
  switch (sizeByte) {
    case 'fd':
      size = hexString.slice(2, 4) + hexString.slice(0, 2);
      break;
    case 'fe':
      size = hexString.slice(2, 6) + hexString.slice(0, 2);
      break;
    case 'ff':
      size = hexString.slice(2, 10) + hexString.slice(0, 2);
      break;
    default:
      size = sizeByte;
  }
  return size;
}


// function(rawTx) {
//   const tx = {
//     version: '',
//     input_count: '',
//     inputs: [],
//     output_count: '',
//     outputs: [],
//     locktime: '',
//   };

//   let pos = 0;

//   // parse version
//   tx.version = rawTx.substr(pos, 8);
//   pos += 8;

//   // parse input count
//   const inputCount = parseInt(rawTx.substr(pos, 2), 16);
//   tx.input_count = inputCount.toString();
//   pos += 2;

//   // parse inputs
//   for (let i = 0; i < inputCount; i++) {
//     const input = {
//       txid: '',
//       vout: '',
//       scriptSig: '',
//       sequence: '',
//     };

//     // parse txid
//     input.txid = rawTx.substr(pos, 64);
//     pos += 64;

//     // parse vout
//     input.vout = rawTx.substr(pos, 8);
//     pos += 8;

//     // parse scriptSig size
//     const scriptSigSize = parseInt(rawTx.substr(pos, 2), 16);
//     pos += 2;

//     // parse scriptSig
//     input.scriptSig = rawTx.substr(pos, scriptSigSize * 2);
//     pos += scriptSigSize * 2;

//     // parse sequence
//     input.sequence = rawTx.substr(pos, 8);
//     pos += 8;

//     tx.inputs.push(input);
//   }

//   // parse output count
//   const outputCount = parseInt(rawTx.substr(pos, 2), 16);
//   tx.output_count = outputCount.toString();
//   pos += 2;

//   // parse outputs
//   for (let i = 0; i < outputCount; i++) {
//     const output = {
//       amount: '',
//       scriptPubKey: '',
//     };

//     // parse amount
//     output.amount = rawTx.substr(pos, 16);
//     pos += 16;
//     console.log('output:', output.amount)
//     output.amount = output.amount
//       .match(/.{2}/g)
//       .reverse()
//       .join('');
//     output.amount = BigInt(`0x${output.amount}`).toString();

//     // parse scriptPubKey size
//     const scriptPubKeySize = parseInt(rawTx.substr(pos, 2), 16);
//     pos += 2;

//     // parse scriptPubKey
//     output.scriptPubKey = rawTx.substr(pos, scriptPubKeySize * 2);
//     pos += scriptPubKeySize * 2;
//     console.log('output to push: ', output)
//     tx.outputs.push(output);
//   }

//   // parse locktime
//   tx.locktime = rawTx.substr(pos, 8);

//   return tx;
// }


// function(rawTx) {
//   const tx = {};

//   // Parse the transaction version
//   tx.version = rawTx.slice(0, 8);

//   // Parse the number of inputs
//   const inputCountStart = 8;
//   const inputCountEnd = inputCountStart + 2;
//   tx.input_count = parseInt(rawTx.slice(inputCountStart, inputCountEnd), 16).toString();

//   // Parse the inputs
//   const inputs = [];
//   let inputStart = inputCountEnd;
//   for (let i = 0; i < tx.input_count; i++) {
//     const input = {};
//     input.txid = rawTx.slice(inputStart, inputStart + 64);
//     input.vout = rawTx.slice(inputStart + 64, inputStart + 72);
//     const scriptSigSize = parseInt(rawTx.slice(inputStart + 72, inputStart + 74), 16) * 2;
//     input.scriptSig = rawTx.slice(inputStart + 74, inputStart + 74 + scriptSigSize);
//     input.sequence = rawTx.slice(inputStart + 74 + scriptSigSize, inputStart + 74 + scriptSigSize + 8);
//     inputs.push(input);
//     inputStart += 74 + scriptSigSize + 8;
//   }
//   tx.inputs = inputs;

//   // Parse the number of outputs
//   const outputCountStart = inputStart;
//   const outputCountEnd = outputCountStart + 2;
//   tx.output_count = parseInt(rawTx.slice(outputCountStart, outputCountEnd), 16).toString();

//   // Parse the outputs
//   const outputs = [];
//   let outputStart = outputCountEnd;
//   for (let i = 0; i < tx.output_count; i++) {
//     const output = {};
//     output.amount = parseInt(rawTx.slice(outputStart, outputStart + 16), 16).toString();
//     const scriptPubKeySize = parseInt(rawTx.slice(outputStart + 16, outputStart + 18), 16) * 2;
//     output.scriptPubKey = rawTx.slice(outputStart + 18, outputStart + 18 + scriptPubKeySize);
//     outputs.push(output);
//     outputStart += 18 + scriptPubKeySize;
//   }
//   tx.outputs = outputs;

//   // Parse the transaction locktime
//   const locktimeStart = outputStart;
//   const locktimeEnd = locktimeStart + 8;
//   tx.locktime = rawTx.slice(locktimeStart, locktimeEnd);

//   return tx;
// }


// function(hex) {
//   const tx = {};
//   let offset = 0;

//   // Parse version
//   tx.version = hex.substr(offset, 8);
//   offset += 8;

//   // Parse input count
//   const inputCount = parseInt(hex.substr(offset, 2), 16);
//   tx.input_count = inputCount.toString();
//   offset += 2;

//   // Parse inputs
//   tx.inputs = [];
//   for (let i = 0; i < inputCount; i++) {
//     const input = {};
//     input.txid = hex.substr(offset, 64);
//     offset += 64;

//     input.vout = hex.substr(offset, 8);
//     offset += 8;

//     const scriptSigSize = parseInt(hex.substr(offset, 2), 16) * 2;
//     offset += 2;

//     input.scriptSig = hex.substr(offset, scriptSigSize);
//     offset += scriptSigSize;

//     input.sequence = hex.substr(offset, 8);
//     offset += 8;

//     tx.inputs.push(input);
//   }

//   // Parse output count
//   const outputCount = parseInt(hex.substr(offset, 2), 16);
//   tx.output_count = outputCount.toString();
//   offset += 2;

//   // Parse outputs
//   tx.outputs = [];
//   for (let i = 0; i < outputCount; i++) {
//     const output = {};
//     output.amount = parseInt(hex.substr(offset, 16), 16).toString();
//     offset += 16;

//     const scriptPubKeySize = parseInt(hex.substr(offset, 2), 16) * 2;
//     offset += 2;

//     output.scriptPubKey = hex.substr(offset, scriptPubKeySize);
//     offset += scriptPubKeySize;

//     tx.outputs.push(output);
//   }

//   // Parse locktime
//   tx.locktime = hex.substr(offset, 8);

//   return tx;
// }
