import React, {useState} from "react";
export type ManType ={
    name:string;
    age:number;
    lessons: Array<{title: string}>
    address: {street:{title:string}}
}
type PropsType={
    title:string
    man: ManType
    food: string

}

function UsestateKatyaMessage(message:string){
    return [message, function (){}]
}
export const ManComponent: React.FC<PropsType>=({title, man,...props})=>{
    // const {title, man}=props
    const [message, setMessage]=useState<string>('hello')

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>{man.name}</div>
        <div>{props.food}</div>
    </div>

}