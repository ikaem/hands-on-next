import { NextApiHandler } from 'next';

const login: NextApiHandler = (req, res) => {
  const { method, body } = req;
  const { password, email } = body;

  if (method !== 'POST') {
    return res.status(404).end;
  }
};

export default login;
