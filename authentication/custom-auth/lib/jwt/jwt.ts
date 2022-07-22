import jwt from 'jsonwebtoken';

const JWT_SECRET = 'MY_JWT_PASSWORD';

export const encodeJwt = (payload: any) => {
  return jwt.sign(payload, JWT_SECRET);
};

export const decodeJwt = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
