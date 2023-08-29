
import React ,{useState,useEffect} from "react";
import './../styles/App.css';
import axios from "axios";

const App = () => {
  const [data,setData]=useState([]);


  function fetchData(){
    fetch("https://dummyjson.com/products")
    .then((response)=>response.json())
    .then((response)=>{setData(response)})
    .catch((err)=>{console.log(err);
            setData(`An error occured: ${err}`)
    }
    )
  }

  useEffect(()=>{
    fetchData();
  },[]);
  
  if(!data)
  {
    return <p>Loading product data ....</p>;
  }



  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Data Fetched from API</h1>
        <pre className="data">{JSON.stringify(data,null,2)}</pre>
    </div>
  )
}

export default App
