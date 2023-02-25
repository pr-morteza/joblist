import { useContext, useEffect, useState } from 'react';
import ListContext from '../Context/context';
import DATA from '../data.json'; 

export default function useFilter () {  
    const {lan}=useContext(ListContext)
    const [data, setData]=useState(DATA)
 
    useEffect(()=>{
        if(lan.length>0){     
        setData(DATA.filter(p => lan.every(element => { return p.languages.indexOf(element) !== -1 || p.role===element || p.level===element})))
        }else{
        setData(DATA)
        }
    },[lan])

    return data;
}