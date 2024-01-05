import styles from './person.module.css'
import williamImage from '../../../public/william.png'
import marcioImage from '../../../public/marcio.png'
import mauricioImage from '../../../public/mauricio.png'
import Image from 'next/image'
import { useContext, useState } from 'react'
import { PersonContext } from './PersonContext'
import Person from '../interfaces/person.interface'
import PersonContextInterface from '../interfaces/personContext.interface'


export default function Person() {
  const { id } = useContext<PersonContextInterface>(PersonContext)
  const [ persons ] = useState<Person[]>([
    {
      id: 0,
      firstName: 'William',
      lastName: 'Slaviero',
      role: 'Especialista',
      imageSrc: williamImage
    },
    {
      id: 1,
      firstName: 'Marcio',
      lastName: 'Campos',
      role: 'CEO',
      imageSrc: marcioImage
    },
    {
      id: 2,
      firstName: 'Maurício',
      lastName: 'Scheder',
      role: 'Trader',
      imageSrc: mauricioImage
    }
  ])

  return (
    <div className={styles.personContainer}>
      {
        persons.map(person => {
          if(person.id === id) {
            return (
              <span key={id}>
                <div className={styles.personBox}>
                  <Image className={styles.personImage} src={person.imageSrc} fill priority sizes="(max-width: 13.1875rem) 100vw" alt="Palestrante"/>
                </div>
                <div className={styles.personDetails}>
                  {person.role}<br/>
                  <span className={styles.personName}>{person.firstName}<br/>{person.lastName}</span>
                </div>  
              </span>
            )
          } else {
            return null
          }
        })
      }
    </div>
  )
}