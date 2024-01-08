'use server'

import { useState } from "react"
import { useTransporter } from "./useTransporter"
import Form from "../interfaces/form.interface"

export default async function useSendForm(props: Form): Promise<unknown> {
  const { firstName, lastName, email } = props
  
  return await useTransporter.sendMail({
      from: `"Seja Trader" <${process.env.EMAIL}>`,
      to: email,
      replyTo: email,
      subject: 'Participação confirmada!',
      html: `<p>Olá, ${firstName} ${lastName}!</p></br>
      <p>Para assistir às lives do evento <strong>Seja Trader</strong> acesse esse <a href="http://localhost:3000/">Link</a></p>
      `
    })
}