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
        <h2 style="font-family:sans-serif;margin:0 0 12px">Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name || '-'}</p>
        <p><strong>Teléfono:</strong> ${phone || '-'}</p>
        <p><strong>Email:</strong> ${email || '-'}</p>
        <p><strong>Empresa:</strong> ${company || '-'}</p>
        <p style="white-space:pre-wrap;margin-top:12px">${(message || '').replace(/\n/g, '<br/>')}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Error enviando correo:', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
