import { useEffect, useState } from "react";
import axios from "axios";

function Fetch() {

    const [rows, setRows] = useState([]);



    function mydelete(id){
        axios.delete(`http://localhost:3000/userdata/${id}`)
        .then((e)=>alert("delete ............."))
    }

    useEffect(() => {
        axios.get("http://localhost:3000/userdata")
            .then((res) => {
                setRows(res.data);
            });
    }, [mydelete]);



    return (
        <>
            <h1>Fetch Data</h1>

            <table border="1" >
                <thead>
                    <tr>
                        
                        <th>id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Contact</th>
                        <th>City</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i}>
                            
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.age}</td>
                            <td>{row.contect}</td>
                            <td>{row.city}</td>
                            <td><button onClick={()=>mydelete(row.id)}>delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Fetch;
