import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  
  const { email } = await request.json()
  
  if (!email) {
    return Response.json({
      error: "el campo es requerido"
    })
  }

  const message = `
    Email: ${email}\r\n
  `;

  const content = {
    to: [ 'dsanchez@blanco-brand.com'],
    from: 'info@blanco-brand.com',
    subject: 'Nuevo contacto blanco-brand website',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  };

  try {
    const resp = await sgMail.send(content);
    // console.log('Email sent successfully:', resp);
    
    return new Response(JSON.stringify({ 
      message: 'Message sent successfully.'
    }), { status: 200 })  

  } catch (error) {

    // console.log('Error:', error);
    return new Response(JSON.stringify({ 
      error: 'Message not sent.'
    }), { status: 500 })  

  }
  
}

