
import React, {useContext } from "react";
import ListContext from "../Context/context";


export default function Card({info}){
    const x = info
    const buttons=[x.role, x.level, ...x.languages]
    const pcl = [x.postedAt,x.contract,x.location]
    const {utl}=useContext(ListContext)

    return (
        <div className={`my-sm-3 my-5 ps-2 card shadow ${x.featured && 'border-0 border-start border-5 border-info'}`}>
            <div className="d-md-flex justify-content-between align-items-center text-info card-body">
                <div className="d-sm-flex">
                    <div id="img1" className="mb-sm-0 mb-3">
                        <img src={x.logo} alt='logo'/>
                    </div>
                    <div className="ms-sm-3 d-md-flex flex-column justify-content-between text-body">
                        <div style={{fontWeight:'500'}} >
                            <span className="me-2 text-info" >{x.company}</span>
                            {x.new && <span className="badge rounded-pill me-1 bg-info">NEW!</span>}
                            {x.featured && <span className="badge rounded-pill bg-secondary">FEATURED</span>}
                        </div>    
                        <h5 className="hover m-sm-0 my-2" style={{fontWeight:'700'}}>{x.position}</h5>            
                        <div style={{fontWeight:'500'}} className="text-secondary m-md-0 mb-3">
                            {pcl.join(' . ')}
                        </div>
                    </div>
                </div>
                {/* buttons */}
                <div className="pt-md-0 pt-3 brd">                  
                    {buttons.map((x,index)=>{
                        return <button key={index} type="button" className="btn btn-sm btn-light m-2 ms-0 me-3 text-info" onClick={()=>utl(x)} style={{fontWeight:'700'}}>{x}</button>
                    })}                   
                </div>
            </div>
        </div>
    )
}
