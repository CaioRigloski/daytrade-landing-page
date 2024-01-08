import { Dispatch, SetStateAction } from "react"

export default interface ModalContext {
  isModalOpen: boolean,
  setIsModalOpen: (isModalOpen: boolean ) => void,
}