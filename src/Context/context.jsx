import {createContext, useState} from "react";

const ListContext = createContext()

export function ListProvider({children}){
    const [lan, setLan]=useState([])
    const utl=(x)=>{
       lan.includes(x) ? setLan(prevState=>[...prevState.filter(t=>t!==x)]) : setLan((prevState)=>[...prevState,x])
    }
    return (
        <ListContext.Provider value={{lan,utl,setLan}}>
            {children}
        </ListContext.Provider> 
    ) 
}


export default ListContext;