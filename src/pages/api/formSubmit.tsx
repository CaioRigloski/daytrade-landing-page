'use server'

import type { NextApiRequest, NextApiResponse } from 'next'
import formidable from "formidable"
import useSendForm from '@/app/hooks/useSendForm'
import Form from '@/app/interfaces/form.interface'
import IncomingForm from 'formidable/Formidable'

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  function sendForm(data: Form) {
    try {
      useSendForm({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email
      })
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  await new Promise((resolve, reject) => {
    const form = formidable(req.body)
    
    form.parse(req, (err, fields, files) => {
      if (err) reject({ err })
      resolve({ err, fields, files })
    })
  }).then((data: any) => {
    const firstName: string = data.fields.firstName[0]
    const lastName: string = data.fields.lastName[0]
    const email: string = data.fields.email[0]
    
    sendForm({firstName, lastName, email})
  }).catch(err => {
    res.status(500).json(err)
  })
}