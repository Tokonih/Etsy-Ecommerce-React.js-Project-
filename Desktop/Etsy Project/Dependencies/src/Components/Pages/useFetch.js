import { useState, useEffect } from "react";

const useFetch = (url)=>{
  const [data,  setData]= useState([])
  const [data2,  setData2]= useState([])
  const [data3,  setData3]= useState([])

    const getprod =(category)=>{
        fetch(url)
        .then((resp)=>resp.json())
        .then((data)=>{
          const getcategory = data.filter((prod)=> prod.category === category )
          const number = getcategory.slice()
          const number2 = getcategory.slice(0,3)
          const number3 = getcategory.slice(0,6)
          console.log(number)
          setData(number)
          setData2(number2)
          setData3(number3)
        }).catch((err)=>{
          console.log(err)
        })
      }
    
      useEffect(()=>{
        getprod("Tokonih" )
    }, [url])
    return {data, data2, data3}
}
export default useFetch;