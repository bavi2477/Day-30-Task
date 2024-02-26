import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        await axios.get('https://65dabbf4bcc50200fcdd21db.mockapi.io/api/profiles')
            .then(res => setProducts(res.data))
            .catch((err) => { console.log(err); })
    }
    return (
        <div className='container'>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {products.map((item, index) => {
                    return (
                        <>
                            <div key={index}>
                                <div class="col">
                                <div class="card text-center mb-3 mt-3" style={{ width: '18rem' }}>
                                        <div class="card-body">
                                            <h5 class="card-title">{item.name}</h5>
                                            <p class="card-text">{item.email}</p>
                                            <p class="card-text">{item.phone}</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}

            </div>
        </div>
    );
};

export default Home;