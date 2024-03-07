export interface ApiJsonInterface {
    id: number
    description: string
    value: number
    isOutflow: boolean
    createdAt: string|null
    updatedAt: string
  }

export interface TableDataProps {
  id: number
  description: string
  value: number
  isOutflow: boolean
  updatedAt: string
  openModal: (id?: number, description?: string, value?: number) => void
  apiJson: ApiJsonInterface[]
  setApiJson: (param:ApiJsonInterface[])=>void
}

export interface ModalProps{
  isActive: boolean
  closeModal: ()=>void
  id?:number
  description?: string
  setDescription: (param:string)=>void
  value?: number
  setValue: (param:number)=>void 
  isOutflow?: boolean
  apiJson: ApiJsonInterface[]
  setApiJson: (param:ApiJsonInterface[])=>void
}

export interface OpenModalProps{
  id?: number
  description?: string
  value?: number
}