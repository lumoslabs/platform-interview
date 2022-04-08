import jwt from 'jsonwebtoken';
import { readFileSync } from 'fs';

let publicKey;
try {
  publicKey = readFileSync('./self_signed.cert');
} catch(err) {
  console.error(`Error reading file: ${err}`);
}

// Given the content of an HTTP Authorization header, determine if the
// request is authenticated. We use JWTs.
const isAuthenticated = async (bearerToken) => {
  if (!bearerToken) {
    return false;
  }

  const [tokenType, inputJwt] = bearerToken.split(' ') // ['Bearer', 'ey....']
  if (tokenType !== 'Bearer') {
    return false;
  }

  const verifyOptions = {
    // We expect tokens signed via the RS256 algo.
    algorithms: ['RS256']
  };
  try {
    const decoded = jwt.verify(inputJwt, publicKey, verifyOptions);
    return true;
  } catch(err) {
    console.error(`Failed to verify JWT: ${err}`);
    return false;
  }

  return false; // Safe default.
};

export { isAuthenticated };
