// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, phone, email, company, subject, message, hp } = await req.json();

    // Si el honeypot viene lleno, ignoramos
    if (hp) return NextResponse.json({ ok: true });

    // Configura tu SMTP (usa el de tu hosting o proveedor de correo)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,     // p.ej. "smtp.zoho.com"
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,                    // true para 465, false para 587
      auth: {
        user: process.env.SMTP_USER,   // p.ej. "atencionalcliente@htl-cs.com"
        pass: process.env.SMTP_PASS,   // contraseña o app password
      },
    });

    // Verifica la conexión
    await transporter.verify();


    const to = 'atencionalcliente@htl-cs.com';

    await transporter.sendMail({
      from: `"Web Contacto HTL" <${process.env.SMTP_USER}>`,
      to,
      replyTo: email,
      subject: `📩 Correo de pagina:  ${subject || 'Nuevo mensaje de contacto'}`,
      text: `
Nombre: ${name}
Teléfono: ${phone}
Email: ${email}
Empresa: ${company}

Mensaje:
${message}
      `.trim(),
html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e6ef; border-radius: 8px; background-color: #f9fbfd;">
    <h2 style="color: #2c3e50; border-bottom: 3px solid #91ACD6; padding-bottom: 8px; margin-bottom: 20px;">
      📩 Nuevo mensaje de contacto
    </h2>

    <table style="width:100%; border-collapse: collapse; font-size: 14px;">
      <tr>
        <td style="padding: 10px; font-weight: bold; color: #34495e; width: 120px; background-color:#ecf2fa;">Nombre:</td>
        <td style="padding: 10px; color: #2c3e50;">${name || '-'}</td>
      </tr>
      <tr>
        <td style="padding: 10px; font-weight: bold; color: #34495e; background-color:#f5f8fc;">Teléfono:</td>
        <td style="padding: 10px; color: #2c3e50;">${phone || '-'}</td>
      </tr>
      <tr>
        <td style="padding: 10px; font-weight: bold; color: #34495e; background-color:#ecf2fa;">Email:</td>
        <td style="padding: 10px; color: #2c3e50;">${email || '-'}</td>
      </tr>
      <tr>
        <td style="padding: 10px; font-weight: bold; color: #34495e; background-color:#f5f8fc;">Empresa:</td>
        <td style="padding: 10px; color: #2c3e50;">${company || '-'}</td>
      </tr>
    </table>

    <div style="margin-top: 20px; padding: 15px; background: #fff; border-left: 5px solid #91ACD6; color: #2c3e50; line-height: 1.6; border-radius: 4px;">
      <strong style="color:#2c3e50;">Mensaje:</strong><br/>
      ${(message || '').replace(/\n/g, '<br/>')}
    </div>

    <p style="margin-top: 25px; font-size: 12px; color: #7f8c8d; text-align: center;">
      ✨ Este correo fue generado automáticamente desde el formulario de contacto.
    </p>
  </div>
`

    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Error enviando correo:', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
