import { useContext } from "react"
import Bookmark from "./Bookmark"
import Person from "./Person"
import styles from './postContainer.module.css'
import { PersonContext } from "./PersonContext"
import PersonContextInterface from "../interfaces/personContext.interface"

export default function TextBox() {
  const { id, setId } = useContext<PersonContextInterface>(PersonContext)

  function setNewPerson(elementId: number): void | null {
    if(elementId === id) {
      return null
    } else {
      setId(elementId)
    }
  }

  return (
    <div className={styles.postContainer}>
      <div/>
      <div className={styles.textBox}>
        <p>Faça parte de um dos maiores eventos online relacionados à investimentos do Brasil!</p><br/>
        <p>Junto aos investidores <span className={styles.personName} onClick={() => {setNewPerson(0)}}>William Slaviero</span>, <span className={styles.personName} onClick={() => {setNewPerson(1)}}>Marcio Campos</span> e <span className={styles.personName} onClick={() => {setNewPerson(2)}}>Maurício Scheder</span> aprenda tudo sobre day trade.</p><br/>
        <p>É para todo mundo!</p>
        <p>Seja você</p><br/>
        <p>
          <span className={styles.level}>iniciante</span>,<br/>
          <span className={styles.level}>intermediário</span><br/>
          ou<br/>
          <span className={styles.level}>avançado</span>
        </p>
        <Bookmark/>
      </div>
      <Person/>
    </div>
  )
}