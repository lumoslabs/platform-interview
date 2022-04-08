import jwt from 'jsonwebtoken';
import { readFileSync } from 'fs';

let privateKey;
try {
  privateKey = readFileSync('self_signed.key');
} catch(err) {
  console.error(`Error reading key: ${err}`);
}

const jwtPayload = {
  aud: 'https://fake-api.lumosity.com',
  iss: 'https://accounts.lumosity.com',
  sub: 'lumos|1234'
};

const options = {
  algorithm: 'RS256',
  expiresIn: "1d"
};

const token = jwt.sign(jwtPayload, privateKey, options);
console.log(token);

// Double-check the JWT is valid.
const decoded = jwt.verify(token, privateKey, {algorithms: ['RS256']});
console.log(decoded);
