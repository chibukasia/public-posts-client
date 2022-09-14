import React, { useEffect, useState } from "react";

function useGetMethod(url){
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    },[url])
    return {
        data,
        setData
    }
}


function usePostMethod(url, obj){
    const[data, setData] = useState([])

    fetch(url,{
        method: "POST", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(obj)
    })
    .then(res=>res.json())
    .then(data=> setData(data)) 

    return {
        data, setData
    }
    
}

function useDeleteMethod(url, id){
    const [data, setData] = useState([])

    fetch(url, {method: "DELETE"})
    .then(res=>res.json())
    .then(()=>{
        const newData = data.filter(item=>item.id !== id)
        setData(newData)
    })
}
export {usePostMethod, useDeleteMethod}

export default useGetMethod
