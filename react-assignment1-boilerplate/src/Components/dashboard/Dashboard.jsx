import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../card/Card';
import '../dashboard/dashboard.style.css';

const Dashboard = () => {

    const [newsData, setNewsData] = useState([]);
    let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=7dee10e8c7844bde81b49e2e4596d0ac&page=1`
    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log(res.data.articles);
                let data = res.data.articles;
                setNewsData(data);
            })
            .catch(err => console.error(err))
        // eslint-disable-next-line
    }, []);


    const dataReadLater = (title) => {
        // console.log('I am parent',data)
        let newArray = newsData.filter(data => data.title === title);
        console.log('after filter', newArray)
        let dataToRead = {
            description: newArray[0].description,
            link: newArray[0].url
        };

        axios.post(`http://localhost:3001/posts`, dataToRead)
            .then(res => {
                if (res.status === 200 || 201)
                    alert(`"${title}" is added to read later`)
            }).catch(err => {
                alert(err + 'could add, internal server error')
            });

    }
    return (
        <div className="container">
            <div className="row">
                {
                    newsData.map(data =>
                        data.author != null ?
                            <div className="col-lg-3 mb-4 display-card" key={data.publishedAt}>
                                <Card
                                    {...data}
                                    readLater={dataReadLater} />
                            </div>
                            : ""
                    )
                }
            </div>
        </div>
    );
};

export default Dashboard;