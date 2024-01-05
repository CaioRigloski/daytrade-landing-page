import Link from 'next/link'
import styles from './form.module.css'
import { FormEvent, useState } from 'react'

export default function Form() {
  const [ isTermsAccepted, setisTermsAccepted ] = useState<boolean>(false)
  const [ email, setEmail ] = useState<string>('')

  function setTerms(e: any) {
    if(!e.target.checked) {
      setisTermsAccepted(false)
    } else {
      setisTermsAccepted(true)
    }
  }

  async function formOnSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    
    const formData = new FormData(e.currentTarget)
    
    await fetch('/api/formSubmit', {
      method: 'POST',
      body: formData,
    }).then(response => {
      response.json().then(data => {
        setEmail(data.email)
      })
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className={styles.formModal}>
      <form className={styles.formContainer} onSubmit={formOnSubmit}>
        <fieldset className={styles.formFields}>
          <label htmlFor="firstName">Nome: <span>*</span></label>
          <input name="firstName" className={styles.formInput} autoFocus type="text" required></input>
          <label htmlFor="lastName">Sobrenome: <span>*</span></label>
          <input name="lastName" className={styles.formInput} type="text" required></input>
          <label htmlFor="email">Email: <span>*</span></label>
          <input name="email" className={styles.formInput} type="email" required></input>
        </fieldset>
        <fieldset className={styles.termsContainer}>
          <div className={styles.termsBox}>
            <input name="terms" type='checkbox' onClick={(e) => setTerms(e)}></input>
            <label htmlFor="terms" className={styles.terms}>Eu concordo com os <Link href={'#'} className={styles.termsLink}>termos</Link></label>
          </div>
          <div>
            <input type='submit' className={styles.formSubmit} value={'Inscrever-se'}></input>
          </div>
          { email ? <p>{email}</p> : null}
        </fieldset>
      </form>
    </div>
  )
}