const kudosSigner = require("kudos-signer");
require('dotenv').config();

kudosSigner.getSignature("0x5b7789a67c868855505b342dcf07a176898958d6", "ben@letskedaddle.com").then((signature) => {
  console.log(signature);
});