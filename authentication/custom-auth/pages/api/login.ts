import { serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next/types';
import { encodeJwt } from '../../lib/jwt/jwt';

const login = (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;
  const { password, email } = body;

  console.log({ method });

  if (method !== 'POST') {
    return res.status(404).end;
  }

  if (!email || !password) {
    return res.status(400).json({
      error: 'Missing required params',
    });
  }

  const user = authenticateUser(email, password);

  if (!user) {
    res.status(401).json({ success: false, error: 'Wrong email or password' });
    return;
  }

  const userJwt = encodeJwt(user);

  const headerCookie = serialize('my_auth', userJwt, {
    path: '/',
    httpOnly: true,
    maxAge: 60 * 60 * 12 * 7,
  });

  res.setHeader('Set-Cookie', headerCookie);
  res.status(200).json({ success: true });
};

export default login;

function authenticateUser(email: string, password: string) {
  const validEmail = 'karlo@karlo.com';
  const validPassword = 'pass';

  if (email === validEmail && password === validPassword) {
    return {
      id: 'f678f078-fcfe-43ca-9d20-e8c9a95209b6',
      name: 'Karlo',
      email: 'karlo@karlo.com',
    };
  }
  return null;
}
