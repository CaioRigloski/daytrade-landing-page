'use server'

import nodemailer, { SentMessageInfo } from 'nodemailer'

export const useTransporter: SentMessageInfo = nodemailer.createTransport({
  service: 'Hotmail',
  //host: "",
  //port: 587,
  //secure: false, // `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSMAIL,
  },
})