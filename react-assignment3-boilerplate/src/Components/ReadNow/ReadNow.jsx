import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ReadNow(props) {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/api/v1/news`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            setNews(res.data)
        })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="container">
            <div className="row" style={{padding:'10px',width:'inherit'}}>

                {
                    news.map(data =>
                        <div className="card" key={data.id} style={{margin:'20px',width:'inherit'}} >
                            <div className="card-header">
                                {data.title}
                            </div>
                            <div className="card-body">
                                <p className="card-text">{data.description}</p>
                            </div>
                        </div>
                    )}

            </div>
        </div >
    );
}

export default ReadNow;