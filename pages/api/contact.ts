import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const sendEmailHandler = async (req: NextApiRequest, res: NextApiResponse) => {

  const body = JSON.parse(req.body);
  const contactMail = body.email

  // 'info@blanco-brand.com',

  const data = {
    to: [ 'dsanchez@blanco-brand.com'],
    from: 'info@blanco-brand.com',
    subject: 'Nuevo contacto blanco-brand website',
    text: `Email de contacto: ${contactMail}`
  }

  try {

    await sgMail.send(data);
    res.status(200).json({ message: 'Email sent successfully' });


  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }

};

export default sendEmailHandler;
