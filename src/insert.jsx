import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Insrt(){
 

    let [frmdata,setfrmdata]=useState({name:"",age:"",contect:"",city:""})
    let nav = useNavigate()
    function inputdata(e){
        const{name,value}=e.target
        setfrmdata({...frmdata,[name]:value})

    }

        
    function submit(e){
        e.preventDefault()
        axios.post("http://localhost:3000/userdata",frmdata)
        .then(() => {
            alert("success")
            nav("/Fetch")
        })
    }

    return(

        <>
        <h1> insert data </h1>


        <form action="" onSubmit={submit}>
             <label htmlFor=""> Name </label> <br />
            <input type="text" name="name" onChange={inputdata}/><br />


               <label htmlFor=""> age </label> <br /> 
            <input type="text" name="age" onChange={inputdata}/> <br />
          

            <label htmlFor=""> contect </label> <br /> 
            <input type="text" name="contect" onChange={inputdata}/><br />
          

            <label htmlFor=""> city </label>  <br />
            <input type="text" name="city" onChange={inputdata}/> <br />
          
            <input type="submit" />




          







        </form>
        
        
          </>
    )
}
export default Insrt
