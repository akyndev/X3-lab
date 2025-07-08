import * as React from "react"

interface EmailTemplateProps {
  name: string
  message: string
  email: string
  interest: "Mentor" | "Partner" | "Donate" | "Others"
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, message, email, interest }) => (
  <div>
    <h3>I am, {name}!</h3>

    <h3>I am interested in becoming a {interest}</h3>

    <h2>{message}</h2>

    <h3>my email: {email}</h3>
  </div>
)

export default EmailTemplate
