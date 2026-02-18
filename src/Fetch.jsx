import { useEffect, useState } from "react";
import axios from "axios";

function Fetch() {
    const [rows, setRows] = useState([]);
    const [show, setShow] = useState(false);
    const [showData, setShowData] = useState({
        id: "",
        name: "",
        age: "",
        contect: "",
        city: "",
    });

    const fetchData = () => {
        axios
            .get("http://localhost:3000/userdata")
            .then((res) => setRows(res.data))
            .catch((err) => console.error("Fetch failed:", err));
    };

    useEffect(() => {
        fetchData();
    }, []);

    function mydelete(id) {
        axios
            .delete(`http://localhost:3000/userdata/${id}`)
            .then(() => {
                alert("Deleted successfully");
                fetchData();
            })
            .catch((err) => console.error("Delete failed:", err));
    }

    function editinput(e) {
        const { name, value } = e.target;
        setShowData((prev) => ({ ...prev, [name]: value }));
    }

    function finalsubmit(e) {
        e.preventDefault();
        axios
            .put(`http://localhost:3000/userdata/${showData.id}`, showData)
            .then(() => {
                alert("Updated successfully");
                setShow(false);
                fetchData();
            })
            .catch((err) => console.error("Update failed:", err));
    }

    return (
        <>
            <h1>Fetch Data</h1>

            <table border="1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Contact</th>
                        <th>City</th>
                        <th>Delete</th>
                        <th>Edit</th>
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
                            <td>
                                <button onClick={() => mydelete(row.id)}>Delete</button>
                            </td>
                            <td>
                                <button
                                    onClick={() => {
                                        setShow(true);
                                        setShowData(row);
                                    }}
                                >
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {show && (
                <form onSubmit={finalsubmit}>
                    <label>Name</label> <br />
                    <input type="text" name="name" value={showData.name} onChange={editinput} />
                    <br />

                    <label>Age</label> <br />
                    <input type="text" name="age" value={showData.age} onChange={editinput} />
                    <br />

                    <label>Contect</label> <br />
                    <input type="text" name="contect" value={showData.contect} onChange={editinput} />
                    <br />

                    <label>City</label> <br />
                    <input type="text" name="city" value={showData.city} onChange={editinput} />
                    <br />
                    <br />

                    <input type="submit" />
                </form>
            )}
        </>
    );
}

export default Fetch;
