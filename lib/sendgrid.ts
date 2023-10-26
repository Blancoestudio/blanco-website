import sgMail from '@sendgrid/mail';

export const sendEmail = async (
  to: any = "dsanchez@blanco-brand.com", 
  subject: any = "Nuevo contacto", 
  text: any
  ) => {
  if (process.env.SENDGRID_API_KEY) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

  const msg = {
    to,
    from: 'dsanchez@blanco-brand.com',
    subject,
    text,
  };

  try {
    await sgMail.send(msg);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error(error);
  }
};