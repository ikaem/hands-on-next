import { PaymentRequestShippingOption } from '@stripe/stripe-js';
import { graphql } from 'graphql';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { Product } from '../..';
import { graphqlClient } from '../../../lib/graphql';
import { GET_PRODUCT_BY_ID } from '../../../lib/graphql/queries/get-product-by-id';

const SHIPPING_ADDRESS_COLLECTION = {
  allowed_countries: ['IT', 'US'],
};

const SHIPPING_OPTIONS = [
  {
    shipping_rate_data: {
      type: 'fixed_amount',
      fixed_amount: {
        amount: 0,
        currency: 'EUR',
      },
      display_name: 'Free Shipping',
      delivery_estimate: {
        minimum: {
          unit: 'business_day',
          value: 3,
        },
        maximum: {
          unit: 'business_day',
          value: 5,
        },
      },
    },
  },
  {
    shipping_rate_data: {
      type: 'fixed_amount',
      fixed_amount: {
        amount: 499,
        currency: 'EUR',
      },
      display_name: 'Next day air',
      delivery_estimate: {
        minimum: {
          unit: 'business_day',
          value: 1,
        },
        maximum: {
          unit: 'business_day',
          value: 1,
        },
      },
    },
  },
];

// TODO should we configure this somewhere else though
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-08-01',
});

const checkoutApiHandler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  // TODO this should probably be validated somewhoe

  console.log("req body", req.body)

  const { cartItems } = req.body;

  const { products } = await graphqlClient.request<{ products: Product[] }>(
    GET_PRODUCT_BY_ID,
    {
      ids: Object.keys(cartItems),
    }
  );

  const lineItems = products.map((product) => {
    const item = {
      adjustable_quantity: {
        enabled: true,
        minimum: 1,
      },
      price_data: {
        // of course, it can be any currency of your choice
        currency: 'EUR',
        product_data: {
          name: product.name,
          images: product.images.map((img) => img.url),
        },
        // please note that GraphCMS already returns the price in the
        // format required by Strapi: €4.99, for instance, should be
        // passed to Stripe as 499.
        unit_amount: product.price,
      },
      quantity: cartItems[product.id],
    };

    return item;
  });

  console.log("success", process.env.URL)

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: lineItems,
    payment_method_types: ['card', 'sepa_debit'],
    success_url: `${process.env.URL}/success`,
    cancel_url: `${process.env.URL}/cancel`,
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 0,
            currency: 'EUR',
          },
          display_name: 'Free Shipping',
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 3,
            },
            maximum: {
              unit: 'business_day',
              value: 5,
            },
          },
        },
      },
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 499,
            currency: 'EUR',
          },
          display_name: 'Next day air',
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 1,
            },
            maximum: {
              unit: 'business_day',
              value: 1,
            },
          },
        },
      },
    ],
    shipping_address_collection: {
      allowed_countries: ['IT', 'US'],
    },
  });

  res.status(201).json({ session });
};

export default checkoutApiHandler;
