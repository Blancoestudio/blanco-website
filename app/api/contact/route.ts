import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {

  const resp = await request.json();
  const contactMail = resp.email;
  
  const data = {
    to: [ 'dsanchez@blanco-brand.com'],
    from: 'info@blanco-brand.com',
    subject: 'Nuevo contacto blanco-brand website',
    text: `Email de contacto: ${contactMail}`
  }

  try {

    await sgMail.send(data);
    return Response.json({ message: 'Email sent successfully' });


  } catch (error) {

    throw(error)
    // console.error('Error al enviar el correo:', error);
    // return Response.json({ message: 'Internal Server Error' });
    
  }

}