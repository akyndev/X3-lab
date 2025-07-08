import { NextRequest } from "next/server"
import * as React from "react"
import { Resend } from "resend"
import { EmailTemplate } from "../../../components/email-template"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { name, message, email, interest } = await req.json()
  try {
    const { data, error } = await resend.emails.send({
      from: "x3LAB website <onboarding@resend.dev>",
      to: ["akinladeirede@gmail.com"],
      subject: `Enqiring about becoming ${interest}`,
      react: EmailTemplate({ interest, message, name, email }) as React.ReactElement
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json({ data })
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
