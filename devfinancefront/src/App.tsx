import axios from "axios";
import { useEffect, useState } from "react";
import { SlPlus } from "react-icons/sl";
import Card from './components/Card';
import Header from './components/Header';
import { ApiJsonInterface, OpenModalProps } from "./components/Interfaces";
import ModalComponent from "./components/ModalComponent";
import TableData from './components/TableData';

function App() {
  const [apiJson, setApiJson] = useState<ApiJsonInterface[]>([])
  const [modalIsActive, setModalIsActive] = useState<boolean>(false)
  
  const [id, setId] = useState<number|undefined>()
  const [description, setDescription] = useState<string|undefined>();
  const [value, setValue] = useState<number|undefined>()

  const handleOpenModal = (id?: number, description?: string, value?: number) => {
    openModal({ id, description, value });
  };
  function openModal(props:OpenModalProps|undefined){
    if(props){
      setId(props.id);
      setDescription(props.description);
      setValue(typeof props.value === "number"? props.value:0);
    }
    setModalIsActive(true);
  }
  function closeModal() {
    setId(0);
    setDescription("");
    if (typeof value === "number") {
      setValue(undefined);
    }
    setModalIsActive(false);
  }

  useEffect(()=>{
    axios.get("http://localhost:8080/api")
    .then(resp => setApiJson(resp.data))
  }, [])
  
  return (
    <>
      <Header/>
      <main className='flex flex-col items-center justify-center p-4 md:p-8'>
        <section className='flex flex-wrap gap-6 md:gap-8 justify-center mt-[-8rem] w-full md:max-w-6xl'>
          <Card title='Entrada' json={apiJson} type="deposit"/>
          <Card title='Saída' json={apiJson} type="outflow"/>
          <Card title='Total' json={apiJson} type="total"/>
        </section>
        <table className='table-auto w-full md:max-w-6xl p-4 text-xs md:text-base'>
          <thead>
            <tr className='grid grid-cols-7 text-textColor text-left'>
              <th className='font-normal col-span-2'>Descrição</th>
              <th className='font-normal col-span-2'>Valor</th>
              <th className='font-normal col-span-2'>Data</th>
              <th className='font-normal'>Ação</th>
            </tr>
          </thead>
          <tbody className='flex flex-col gap-4'>
            {
              apiJson.map(element => {
                return <TableData key={element.id} id={element.id} description={element.description} value={element.value} isOutflow={element.isOutflow} updatedAt={element.updatedAt} openModal={handleOpenModal} apiJson={apiJson} setApiJson={setApiJson}/>
              })
            }
          </tbody>
        </table>
        <button onClick={()=>openModal(undefined)} className="flex items-center justify-center gap-2 py-4 rounded bg-primaryColor text-white mt-5 w-full max-w-6xl">
          <span>Adicionar</span>
          <SlPlus />
        </button>
        <ModalComponent isActive={modalIsActive} closeModal={closeModal} value={value} setValue={setValue} description={description} setDescription={setDescription} id={id} apiJson={apiJson} setApiJson={setApiJson}/>
      </main>
    </>
  )
}

export default App
