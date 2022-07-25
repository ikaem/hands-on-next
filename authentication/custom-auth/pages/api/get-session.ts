import { parse } from 'cookie';
import { NextApiHandler } from 'next';
import { decodeJwt } from '../../lib/jwt/jwt';

const login: NextApiHandler = async (req, res) => {
  if (req.method !== 'GET') return res.status(404).end;

  // we get all cookies here as stirng
  const cookies = req.headers.cookie;
  // parse will parse all cookies, and return the my auth one - it is just a key

  // here, he also has afallback of empty string, i guess in case the cookei string is undefined
  const { my_auth } = parse(cookies || '');

  if (!my_auth)
    return res.json({
      loggedIn: false,
    });

  const decodedUser = decodeJwt(my_auth);

  // TODO this is theoretically logged in - what if the token expired?
  res.json({
    loggedIn: true,
    user: decodedUser,
  });
};

export default login;
