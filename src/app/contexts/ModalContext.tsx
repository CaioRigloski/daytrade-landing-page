import { createContext, useState } from "react"
import ModalContextInterface from "../interfaces/modalContext.interface"
import ModalProps from "../interfaces/modalProps.interface"


const modalContextValue: ModalContextInterface = {
 isModalOpen: false,
 setIsModalOpen: () => {}
}

const ModalContext = createContext<ModalContextInterface>(modalContextValue)


function ModalProvider({children}: ModalProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(modalContextValue.isModalOpen)
  
  const value: ModalContextInterface = {
    isModalOpen: isModalOpen,
    setIsModalOpen: (newValue: boolean) => setIsModalOpen(newValue)
  }

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  )
}

export { ModalContext, ModalProvider }