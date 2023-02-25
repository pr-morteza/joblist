import React from "react";
import ListContext from "../Context/context";
import { useContext } from "react";

export default function Header(){
    const {lan,setLan}=useContext(ListContext)
    return (
        <div style={{position:'sticky', top:0, zIndex:3}} className="container-fluid bg-light rounded d-flex align-items-center justify-content-between shadow ">
            <div>
                {lan.map((x,index)=>{
                return (
                    <span className="me-3 my-2 bg-info badge " key={index}>
                        {x}<button onClick={()=>setLan(t=>t.filter(i=>i!==x))} type="button" className="ms-1 btn-close"></button>
                    </span>
                )
                })}
            </div>
            {lan.length>0 && <button className="btn " onClick={()=>setLan([])}>Clear</button>}
        </div>
    )
}


