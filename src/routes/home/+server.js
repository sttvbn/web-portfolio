import { Resend } from 'resend';
import dotenv from 'dotenv';
dotenv.config();

const resend = new Resend(process.env.RESEND_APIKEY);

export async function POST({request}) {
  const {name, email, message } = await request.json();

  const { error } = await resend.emails.send({
    from: 'Acme <noreply@resend.dev>',
    to: ['sttvn@csu.fullerton.edu'],
    subject: 'Portfolio Form',
    html:`<p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
          `,
  });

  if (error) {
    return console.error( "Resend Error: ", error);
  }
  

  // return new Response(
  //   JSON.stringify({message: "Successfully Submitted. Thank You for your submission."})
  // )

  return new Response(null)

};