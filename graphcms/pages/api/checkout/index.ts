import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-08-01',
});

const checkoutApiHandler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  // TODO this should probably be validated somewhoe 
  const { cartItems } = req.body;


  const {}
};
