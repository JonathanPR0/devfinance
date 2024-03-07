import { PiPiggyBank } from "react-icons/pi";
import { SlArrowDownCircle, SlArrowUpCircle } from "react-icons/sl";

interface CardProps{
    title: string;
    json: JsonProps[];
    type: "deposit"|"outflow"|"total";
}
interface JsonProps{
    id: number,
    description: string,
    value: number,
    isOutflow: boolean,
    createdAt: null|string,
    updatedAt: string,
}

function Card(props:CardProps){
    const filtradoOutflow = props.json?.filter((value)=>value.isOutflow).reduce((acc, obj)=> acc + Math.abs(obj.value), 0);
    const filtradoDeposit = props.json?.filter((value)=>!value.isOutflow).reduce((acc, obj)=> acc + Math.abs(obj.value), 0);
    const total = Math.abs(filtradoDeposit) - Math.abs(filtradoOutflow);
    
    function valueCard(){
        if(props.type==="deposit")
            return filtradoDeposit.toFixed(2).toString().replace(".",",")
        else if(props.type === "outflow")
            return filtradoOutflow.toFixed(2).toString().replace(".",",")
        else
            return total.toFixed(2).toString().replace(".",",")
    }

    function icon(){
        if(props.type === "deposit")
            return <SlArrowUpCircle className="text-depositColor text-3xl"/>
        else if(props.type === "outflow")
            return <SlArrowDownCircle className="text-outflowColor text-3xl"/>
        else
            return <PiPiggyBank className="text-white text-3xl"/>
    }

    return (
        <div className={`${props.type === "total"?"bg-depositColor":"bg-white"} px-8 py-6 rounded w-full md:max-w-xs`}>
            <span className="flex items-center justify-between">
                <h3 className={`${props.type === "total"?"text-white":"text-titleColor"}`}>{props.title}</h3>
                {icon()}
            </span>
            <p className={`text-2xl md:text-4xl mt-4 ${props.type==="total"?"text-white":"text-titleColor"}`}>
                <span className="mr-2 font-light">R$</span>
                {valueCard()}
            </p>

        </div>
    )
}

export default Card
