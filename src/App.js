
import React,{useState, useEffect} from "react"
import './App.css';
import Axios from "axios";
import Card from "./Card";


function App() {
  //my json file is a object, thats why default value {}
  const [details, setDetails] = useState({});

  //-------------- First Step -------------------
  // const fetchData = async () =>{
  //   const response = await Axios.get("https://randomuser.me/api/");
  //   console.log(response)
  // }
  const fetchData = async () =>{
    const response = await Axios.get("https://randomuser.me/api/");
    //after doing 1st step, In console we get object=> data => result => then 0 / info
    const newData = response.data;
    console.log(newData)
    //after this step we get only array where directly get result.

    // akhon amra JF theke results er [0] element ke accept korlam,
    // jekhane amader info ase, ta accept korlam.
    const detail = newData.results[0];
    setDetails(detail) //state update korlam.
  }
  //call the method
 useEffect(()=>{
   fetchData()
 },[])
  return (
    <div className="App">
     <Card detailsData={details} />
     {/* state er details ke props akare patalam. 
     now, result = detailData 
     */}
    </div>
  );
}

export default App;
