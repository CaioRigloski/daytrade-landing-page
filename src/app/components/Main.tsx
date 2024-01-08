import { useContext } from "react"
import ModalContextInterface from "../interfaces/modalContext.interface"
import { ModalContext } from "../contexts/ModalContext"
import Form from "./Form"
import styles from '../styles/modules/main.module.css'
import Background from "./Background"
import TextBox from "./PostContainer"

export default function Main() {
  const { isModalOpen, setIsModalOpen } = useContext<ModalContextInterface>(ModalContext)

  function openModal(): void {
    setIsModalOpen(true)
  }

  return (
      <main className={styles.main}>
        {isModalOpen ? <Form/> : null}
        <Background/>
        <div>
          <h1 className={styles.title}>Seja <strong>EXPERT</strong> em <strong>DAY TRADE</strong></h1>
        </div>
        <TextBox/>
        <button type='button' className={styles.subscribeBtn} onClick={openModal}>Desejo participar!</button>
        <div className={styles.stamp}>3ª <br/>edição</div>
      </main>
  )
}