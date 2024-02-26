import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductPage = ({setId}) => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        await axios.get('https://65dabbf4bcc50200fcdd21db.mockapi.io/api/profiles')
            .then(res => setProducts(res.data))
            .catch((err) => { console.log(err); })
    }

    const handleEdit = (id) => {
        setId(id)
        navigate(`/edit/${id}`)
    }

    const handleDelete = async(id) => {
        await axios.delete(`https://65dabbf4bcc50200fcdd21db.mockapi.io/api/profiles/${id}`)
        fetchData()
        .catch((err) => {console.log(err);})
    }
    return (
        <div>
            <table className="table table-striped text-center">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile Number</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, index) => {
                        return (
                            <>
                                <tr key={index}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td><button type="button" className="btn btn-outline-warning" onClick={()=>{handleEdit(item.id)}}>Edit</button></td>
                                    <td><button type="button" className="btn btn-outline-danger" onClick={() => {handleDelete(item.id)}}>Delete</button></td>
                                </tr>
                            </>
                        )
                    })}

                </tbody>
            </table>
            <button type="button" className="btn btn-outline-info" onClick={() => {navigate('/create')}} >Create</button>
        </div>
    );
};

export default ProductPage;