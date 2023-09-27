// import sgMail from '@sendgrid/mail';

// sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// export const sendEmail = async (to: string, subject: string, text: string) => {

//   const msg = {
//     to,
//     from: 'derkysan19@gmail.com',
//     subject,
//     text,
//   };

//   try {
    
//     await sgMail.send(msg);
//     console.log(`Email sent to ${to}`);
//   } catch (error) {
//     console.error(error);
//   }
// };