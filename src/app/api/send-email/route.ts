// app/api/send-email/route.ts
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { google } from "googleapis"
import fs from "fs"
import path from "path"

export async function POST(req: Request) {
  try {
    const { name, email, phone } = await req.json()

    if (!name || !email)
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })

    // 1️⃣ --- Create mail transporter ---
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "weathersportifyteam@gmail.com",
        pass: "stnyiaraqnatomgs", // Gmail App Password
      },
    })

    // 2️⃣ --- Email to YOU (admin) ---
    await transporter.sendMail({
      from: `"Athlecure Waitlist" <weathersportifyteam@gmail.com>`,
      to: "hamzaadam.imtiaz@gmail.com",
      subject: "New Athlecure Waitlist Submission",
      html: `
        <h2>New Waitlist Entry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      `,
    })

    // 3️⃣ --- Branded Confirmation Email to Sender ---
    const confirmationHTML = `
      <div style="font-family: Arial, sans-serif; background-color: #f8f8f8; padding: 40px 0;">
        <table align="center" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.08);">
          <tr>
            <td style="background: linear-gradient(90deg, #4C2FFC, #8F57FF); padding: 20px 0; text-align: center;">
              <img src="https://res.cloudinary.com/diml90c1y/image/upload/v1761520947/1_Transparent_Image_dq1uba.png" alt="Athlecure" style="width: 150px; height: auto;" />
            </td>
          </tr>
          <tr>
            <td style="padding: 30px; text-align: center;">
              <h2 style="color: #222; margin-bottom: 10px;">Welcome to Athlecure, ${name}! 🎉</h2>
              <p style="color: #555; font-size: 15px; line-height: 1.6;">
                Thank you for joining our waitlist! We’re excited to have you onboard.<br/>
                You’ll be among the first to experience Athlecure’s revolutionary sports recovery solutions.
              </p>
              <p style="color: #777; font-size: 14px; margin-top: 25px;">
                <em>Stay tuned — we’ll keep you updated when we launch!</em>
              </p>
              <a href="https://athlecure.com" style="display:inline-block; margin-top:30px; background:#4C2FFC; color:white; text-decoration:none; padding:12px 24px; border-radius:6px; font-weight:600;">
                Visit Our Website
              </a>
            </td>
          </tr>
          <tr>
            <td style="background-color:#f2f2f2; padding: 15px; text-align:center; font-size:12px; color:#999;">
              © ${new Date().getFullYear()} Athlecure. All rights reserved.
            </td>
          </tr>
        </table>
      </div>
    `

    await transporter.sendMail({
      from: `"Athlecure Team" <weathersportifyteam@gmail.com>`,
      to: email,
      subject: "Welcome to Athlecure 🎉",
      html: confirmationHTML,
    })

    // 4️⃣ --- Add to Google Sheet ---
    const filePath = path.join(process.cwd(), "google-credentials.json")
    const credentials = JSON.parse(fs.readFileSync(filePath, "utf8"))
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })
    const sheets = google.sheets({ version: "v4", auth })
    const SHEET_ID = "1VYAbsr8NgvJDGZurY6OZIz7aBC5xxAxgOZeeqa6PRkY"

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "Sheet1!A:D",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, email, phone || "N/A", new Date().toLocaleString()]],
      },
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Error sending email or writing to sheet:", error.message, error)
    return NextResponse.json({ error: error.message || "Failed to send email" }, { status: 500 })
  }
}
