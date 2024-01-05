import { createContext, useState } from "react"
import PersonProps from "../interfaces/personProps.interface"
import PersonContextInterface from "../interfaces/personContext.interface"


const personContextValue: PersonContextInterface = {
 id: 0,
 setId: () => {}
}

const PersonContext = createContext<PersonContextInterface>(personContextValue)


function PersonProvider({children}: PersonProps) {
  const [id, setId] = useState<number>(personContextValue.id)
  
  const value: PersonContextInterface = {
    id: id,
    setId: (newId: number) => setId(newId)
  }

  return (
    <PersonContext.Provider value={value}>
      {children}
    </PersonContext.Provider>
  )
}

export { PersonContext, PersonProvider }