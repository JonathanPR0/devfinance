import axios from "axios";
import { SlNote, SlTrash } from "react-icons/sl";
import { toast } from "react-toastify";
import { TableDataProps } from "./Interfaces";



function TableData (props:TableDataProps){
    const dataISO = new Date(props.updatedAt);
    const day = String(dataISO.getUTCDate()).padStart(2, '0');
    const month = String(dataISO.getUTCMonth() + 1).padStart(2, '0');
    const year = dataISO.getUTCFullYear();
    const dataFormatada = `${day}/${month}/${year}`;

    const handleDelete = async (id:number) => {
        await axios
          .delete("http://localhost:8080/api/" + id)
          .then(({ data }) => {
            const json = props.apiJson.filter((resp) => resp.id !== id);
            props.setApiJson(json);
            toast.success(data);
          })
          .catch(({ data }) => toast.error(data));
    };

    return (
    <tr className="grid grid-cols-7 rounded bg-white text-left items-center">
        <td className="text-titleColor col-span-2">{props.description}</td>
        <td className={`${props.isOutflow?"text-outflowColor":"text-depositColor"} col-span-2`}>{props.isOutflow?`- R$ ${Math.abs(+props.value)}`: `R$ ${Math.abs(+props.value)}`}</td>
        <td className="text-textColor col-span-2">{dataFormatada}</td>
        <td className="flex gap-2 md:gap-4 items-center justify-center">
            <button onClick={()=>props.openModal(props.id, props.description, props.value)}><SlNote /></button>
            <button onClick={()=>handleDelete(props.id)}><SlTrash /></button>
        </td>
    </tr>
  )
}

export default TableData
