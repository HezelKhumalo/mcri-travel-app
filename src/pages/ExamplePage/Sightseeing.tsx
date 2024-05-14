import { useEffect, useState } from "react";
import Header from "../../reusables/Header/Header";

const Sightseeing = () => {
  const[allSightSeeing, setAllSightSeeing] = useState([])
  useEffect(() => 
 { fetch("http://localhost:3000/Sights", {
  method:"GET"
 }).then(response => {
  return response.json();
 }) .then (data =>{
   console.log("data", data)
   return setAllSightSeeing(data)
 })
 },[])
  console.log("allSightSeeing", allSightSeeing)
  if (allSightSeeing.length> 0){
    return (
    <>
      <Header />

      <div className="page-content">
        <h1>SightSeeing</h1>

        <p>This is an example page. Use this example to create your own pages</p>
      <button> show me sights</button>
      <div>
      <p>{allSightSeeing[0].name}</p>
      </div>
      </div>

      


    </>
  )
}
}
export default Sightseeing;