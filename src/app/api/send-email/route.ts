// app/api/send-email/route.ts
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, phone } = await req.json()

    if (!name || !email)
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "weathersportifyteam@gmail.com",
        pass: "stnyiaraqnatomgs", // app password, not your main Gmail password
      },
    })

    const mailOptions = {
      from: `"Waitlist Form" <weathersportifyteam@gmail.com>`,
      to: "hamzaadam.imtiaz@gmail.com",
      subject: "Athlecure Waitlist Submission",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}`,
      html: `
        <h2>New Waitlist Entry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
