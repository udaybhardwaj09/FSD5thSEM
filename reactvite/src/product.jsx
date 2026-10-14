import React, {useEffect, useState} from "react";

function Products(){
const [data,setdata] = useState;
    useEffect(() => {
        async function getData(){
            try{
                const res = await fetch('https://dummyjson.com/products');
                const jsonData = await res.json();
            }catch(e){
                console.log(e);
            }
            finally{
                console.log("All done");
            }
        }
        getData();
    },[])

    return {
        <div>Product</div>
    }
}