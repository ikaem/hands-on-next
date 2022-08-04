import { loadStripe, Stripe } from '@stripe/stripe-js';

const key = process.env.NEXT_PUBLIC_STRIPE_SHARABLE_KEY;

let stripePromise: Promise<Stripe>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(key);
  }

  return stripePromise;
};
