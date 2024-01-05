'use server'

import { useState } from "react"
import { useTransporter } from "./useTransporter"
import Form from "../interfaces/form.interface"

export default async function useSendForm(props: Form): Promise<unknown> {
  const { firstName, lastName, email } = props
  console.log(props)
  return await useTransporter.sendMail({
      from: `"Seja Trader" <${process.env.EMAIL}>`,
      to: email,
      replyTo: email,
      subject: 'Participação confirmada!',
      html: `<p>test ${firstName + lastName + email}</p>`
    })
}