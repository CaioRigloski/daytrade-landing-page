import Link from 'next/link'
import styles from '../styles/modules/form.module.css'
import { FormEvent, useContext, useState } from 'react'
import { ModalContext } from '../contexts/ModalContext'
import ModalContextInterface from '../interfaces/modalContext.interface'

export default function Form() {
  const { isModalOpen, setIsModalOpen } = useContext<ModalContextInterface>(ModalContext)
  const [ isTermsAccepted, setisTermsAccepted ] = useState<boolean>(false)
  const [ isFormSent, setIsFormSent ] = useState<boolean>(false)
  const [ email, setEmail ] = useState<string>('')

  function setTerms(e: any): void {
    const target = e.target as HTMLInputElement
    if(!target.checked) {
      setisTermsAccepted(false)
    } else {
      setisTermsAccepted(true)
    }
  }

  async function formOnSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault()
    
    const formData: FormData = new FormData(e.currentTarget)
    
    await fetch('/api/formSubmit', {
      method: 'POST',
      body: formData,
    }).then(response => {
      response.json().then(data => {
        setIsFormSent(true)
        setEmail(data.email)
      })
    }).catch(err => {
      console.log(err)
    })
  }

  function closeModal(): void {
    setIsModalOpen(false)
  }

  return (
    <div className={styles.formModal}>
      <form className={styles.formContainer} onSubmit={formOnSubmit}>
        <svg  className={styles.closeModal} xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 1024 1024" fill="#000000" onClick={closeModal}>
          <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
          <g id="SVGRepo_iconCarrier">
          <path fill="#FFF" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/>
          </g>
        </svg>
        {
          isFormSent ?
            <>
              <div className={styles.succesfulSubmit}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.checkmark} width="120" height="120" viewBox="0 0 24 24">
                  <path d="M0 11c2.761.575 6.312 1.688 9 3.438 3.157-4.23 8.828-8.187 15-11.438-5.861 5.775-10.711 12.328-14 18.917-2.651-3.766-5.547-7.271-10-10.917z"/>
                </svg>
              </div>
              {email ? <p className={styles.emailReturn}>Um e-mail de confirmação foi enviado para <strong>{email}</strong></p> : null}
            </>
          :
          <>
            <fieldset className={styles.formFields}>
              <label htmlFor="firstName">Nome: <span>*</span></label>
              <input name="firstName" className={styles.formInput} autoFocus type="text" required minLength={2}></input>
              <label htmlFor="lastName">Sobrenome: <span>*</span></label>
              <input name="lastName" className={styles.formInput} type="text" required minLength={2}></input>
              <label htmlFor="email">Email: <span>*</span></label>
              <input name="email" className={styles.formInput} type="email" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required></input>
            </fieldset>
            <fieldset className={styles.termsContainer}>
              <div className={styles.termsBox}>
                <input name="terms" type='checkbox' onClick={(e) => setTerms(e)}></input>
                <label htmlFor="terms" className={styles.terms}>Eu concordo com os <Link href={'#'} className={styles.termsLink}>termos</Link></label>
              </div>
              <div>
                <input type='submit' disabled={isTermsAccepted ? false : true} className={styles.formSubmit} value={'Inscrever-se'} title={isTermsAccepted ? 'Enviar formulário.' : 'Para continuar é necessário aceitar os termos.'}></input>
              </div>
            </fieldset>
          </>
        }
      </form>
    </div>
  )
}