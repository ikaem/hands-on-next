import axios from 'axios';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const singlePerson: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  // const id = req.query.id;
  const API_TOKEN = process.env.API_TOKEN;

  console.log("does it get here")

  const response = await axios.get(`https://swapi.dev/api/people/${3}`, {
    headers: {
      authorization: API_TOKEN,
    },
  });

  console.log({response})

  res.status(200).json([response.data]);
};

export default singlePerson;
