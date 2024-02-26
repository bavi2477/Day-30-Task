import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Edit = ({ id }) => {
    const navigate = useNavigate()
    const [editData, setEditData] = useState({
        name:'',
        email:'',
        phone:'',
    })
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        await axios.get(`https://65dabbf4bcc50200fcdd21db.mockapi.io/api/profiles/${id}`)
            .then(res => {
                const { name, email, phone } = res.data;
                setEditData({ name, email, phone });
            })
            .catch((err) => { console.log(err) })
    }

    const handleChange = (e) => {
        const{name, value} = e.target;
        setEditData((preData) =>({
            ...preData, [name]:value
        }))
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        await axios.put(`https://65dabbf4bcc50200fcdd21db.mockapi.io/api/profiles/${id}`, editData)
        .then( res => {console.log(res.data)})
        .catch((err) => console.log(err))
        navigate('/products')
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className='pt-5 pb-5 display-3 text-right'>
                    <label >Edit Form</label>
                </div>
                    <div class="form-group col-md-6 pb-5">
                        <label for="inputEmail4">Name</label>
                        <input type="text" class="form-control" name='name' placeholder="Name" value={editData.name} onChange={handleChange} />
                    </div>
                    <div class="form-group col-md-6 pb-5">
                        <label for="inputPassword4">Email</label>
                        <input type="email" class="form-control" name='email' placeholder="Email" value={editData.email} onChange={handleChange} />
                    </div>
                <div class="form-group col-md-6 pb-5">
                    <label for="inputAddress2">Phone Number</label>
                    <input type="text" class="form-control" name='phone' placeholder="Contact Number" value={editData.phone} onChange={handleChange} />
                </div>
                <button type="submit" class="btn btn-primary" >Update</button>
            </form>
        </div>
    );
};

export default Edit;