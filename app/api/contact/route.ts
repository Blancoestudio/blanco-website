import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// export async function GET(Request: NextApiRequest) {
//   // return new Response("This is a new GET API route");
//   const res = await fetch(
//     "https://api.github.com/search/users?q=derky&per_page=5"
//   );
//   const data = await res.json();
//   return NextResponse.json(data);

// }

export async function POST(req: Request) {
  
  const body = await req.json();

  if (body.email === '') {
    return Response.json({
      error: "Internal Server Error ////////////"
    });
  }
  
  const msg = {
      to: [ 'dsanchez@blanco-brand.com'],
      from: 'info@blanco-brand.com',
      subject: 'Nuevo contacto blanco-brand website',
      text: `Email de contacto: ${body.email}`
    }
    
  try {
    const resp = await sgMail.send(msg);
    return Response.json({ 
      status: 'ok',
      message: 'Email sent successfully *' 
    });
    
  } catch (error) {
    console.error(error);
    return Response.json({
      error: "Internal Server Error !"
    });
  }
}

// export async function POST(request: Request, response: Response) {

  // const resp = await request.json();
  // const contactMail = resp.email;
  
  // const data = {
  //   to: [ 'dsanchez@blanco-brand.com'],
  //   from: 'info@blanco-brand.com',
  //   subject: 'Nuevo contacto blanco-brand website',
  //   text: `Email de contacto: ${contactMail}`
  // }

  // try {

  //   await sgMail.send(data);
  //   return Response.json({ message: 'Email sent successfully' });


  // } catch (error) {

  //   throw(error)
  //   // console.error('Error al enviar el correo:', error);
  //   // return Response.json({ message: 'Internal Server Error' });
    
  // }

// }