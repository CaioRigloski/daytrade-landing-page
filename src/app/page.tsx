'use client'

import Main from './components/Main'
import { ModalProvider } from './contexts/ModalContext'
import { PersonProvider } from './contexts/PersonContext'


export default function Home() {

  return (
    <ModalProvider>
      <PersonProvider>
        <Main/>
      </PersonProvider>
    </ModalProvider>
  )
}
