import { useState, useEffect } from "react";

const useFetch = (url)=>{
  const [data,  setData]= useState([])
  const [data2,  setData2]= useState([])
  const [data3,  setData3]= useState([])
  const [data4,  setData4]= useState([])
  const [forHer,  setforHer]= useState([])

    const getprod =(category)=>{
        fetch(url)
        .then((resp)=>resp.json())
        .then((data)=>{
          const getcategory = data.filter((prod)=> prod.category === category )
          const number = getcategory.slice()
          const number2 = getcategory.slice(0,6)
          const number3 = getcategory.slice(0, 5)
          const number4 = getcategory.slice(0,6)
          const forHer = getcategory.slice(5, 11)
          console.log(number)
          setData(number)
          setData2(number2)
          setData3(number3)
          setData4(number4)
          setforHer(forHer)
        }).catch((err)=>{
          console.log(err)
        })
      }
    
      useEffect(()=>{
        getprod("Tokonih" )
    }, [url])
    return {data, data2, data3, data4, forHer}
}
export default useFetch;