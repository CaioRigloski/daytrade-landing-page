'use client'

import styles from './page.module.css'
import Background from './components/Background'
import { PersonProvider } from './components/PersonContext'
import TextBox from './components/PostContainer'
import Form from './components/Form'


export default function Home() {
  
  return (
    <PersonProvider>
      <Form/>
      <main className={styles.main}>
        <Background/>
        <div>
          <h1 className={styles.title}>Seja <strong>EXPERT</strong> em <strong>DAY TRADE</strong></h1>
        </div>
        <TextBox/>
        <button type='button' className={styles.subscribeBtn}>Desejo participar!</button>
        <div className={styles.stamp}>3ª <br/>edição</div>
      </main>
    </PersonProvider>
  )
}
