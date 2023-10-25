import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

type ResponseData = {
  status?: string;
  message?: string;
};

export async function POST(req: Request, res: Response) {
  
  let response: ResponseData = {};

  const { email } = await req.json();

  const message = `
    Email: ${email}\r\n
  `;

  const data = {
    to: [ 'dsanchez@blanco-brand.com'],
    from: 'info@blanco-brand.com',
    subject: 'Nuevo contacto blanco-brand website',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  };

  await sgMail
    .send(data)
    .then(() => {
      response = {
        status: 'success',
        message: "Tu mensaje fue enviado. Estaremos contactandote.",
      };
    })
    .catch((error) => {
      response = {
        status: 'error',
        message: `Message failed to send with error, ${error}`,
      };
    });

  return NextResponse.json(response);
  
}

