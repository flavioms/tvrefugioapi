import { Response, Request } from 'express';
import * as MercadoPago from 'mercadopago';

const getFullUrl = (req: Request) => {
  const url = req.protocol + '://' + req.get('host');
  return url;
};

export const checkout = async (req: Request, res: Response) => {
  console.log(req.body);
  MercadoPago.configure({
    sandbox: process.env.SANDBOX == 'true' ? true : false,
    access_token: process.env.MP_ACCESS_TOKEN,
  });

  const { id, email, description, amount } = req.body;

  const purchaseOrder = {
    items: [
      {
        id: id,
        title: description,
        description: description,
        quantity: 1,
        currency_id: 'BRL',
        unit_price: parseFloat(amount),
      },
    ],
    payer: {
      email: email,
    },
    auto_return: 'all',
    external_reference: id,
    back_urls: {
      success: getFullUrl(req) + '/success',
      pending: getFullUrl(req) + '/pending',
      failure: getFullUrl(req) + '/failure',
    },
  };

  //Generate init_point to checkout
  try {
    const preference = await MercadoPago.preferences.create(purchaseOrder);
    console.log(preference.body.init_point);
    return res.redirect(`${preference.body.init_point}`);
  } catch (err) {
    console.log(err);
    return res.send(err.message);
  }
};
