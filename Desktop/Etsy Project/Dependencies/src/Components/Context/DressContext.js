import { useEffect, createContext, useState } from "react";

export const DressContext = createContext()

function DressProvider(props){
    const [cart, setCart]= useState([])
    const localData = JSON.parse(localStorage.getItem('user-cart'))
    useEffect(()=>{
        if(localData){
            setCart(localData)
        }
    }, [])

    return(
        <DressContext.Provider value={{cart, setCart}}>
            {props.children}
        </DressContext.Provider>
    )
}

export default DressProvider;