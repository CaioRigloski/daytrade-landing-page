import { Dispatch, SetStateAction } from "react"

export default interface PersonContext {
  id: number,
  setId: (id: number) => void,
}