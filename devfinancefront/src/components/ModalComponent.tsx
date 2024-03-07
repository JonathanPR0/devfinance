import axios from "axios";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { ModalProps } from "./Interfaces";

Modal.setAppElement("#root");

function ModalComponent(props: ModalProps) {
  const jsonPost ={
    description: props.description,
    value: props.value,
    isOutflow: props.value?props.value < 0:undefined

  }
  const jsonPut={
    id: props.id,
    description: props.description,
    value: props.value,
    isOutflow: props.value?props.value < 0:undefined
  }

  const save = async () => {
    try {
      if (!props.id) {
          const response = await axios.post("http://localhost:8080/api", jsonPost);
          props.setApiJson(response.data);
          toast.success(response.data);
      } else {
          const response = await axios.put("http://localhost:8080/api", jsonPut);
          props.setApiJson(response.data);
          toast.success(response.data);
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      console.error('Erro desconhecido:', error);
    }
    props.closeModal();
  }
  return (

    <Modal
      isOpen={props.isActive}
      onRequestClose={props.closeModal}
      contentLabel="Example Modal"
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <h2 className="text-lg font-medium text-titleColor mb-4">Nova Transação</h2>
      <input className="p-4 bg-white rounded-sm mb-4" value={props.description} type="text" placeholder="Descrição" onChange={(e) => props.setDescription(e.target.value)} />
      <input className="p-4 bg-white rounded-sm mb-2" value={props.value !== undefined ? props.value : ''} type="number" placeholder="0,00" onChange={(e) => props.setValue(+e.target.value)} />
      <span className="text-xs text-textColor mb-4">Use o sinal - (negativo) para despesas e . (ponto) para casas decimais</span>
      <div className="grid grid-cols-2 items-center text-sm gap-4">
        <button className="rounded-sm py-3 text-outflowColor border-2 border-outflowColor" onClick={props.closeModal}>Cancelar</button>
        <button className="rounded-sm py-3 text-white bg-depositColor border-2 border-depositColor" onClick={save}>Salvar</button>
      </div>
    </Modal>
  )
}

export default ModalComponent
