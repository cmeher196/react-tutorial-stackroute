import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import { filterOptions } from "../../config.json";

function DisplayCard(props) {
    const [newsData, setNewsData] = useState([]);
    let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=7dee10e8c7844bde81b49e2e4596d0ac&page=1`

    useEffect(() => {
        console.log('props.location.filteredAPI', props.location.filteredAPI)
        console.log('new url', url)
        if (props.location.filteredAPI && props.location.filteredAPI.length > 0) {
            axios.get(props.location.filteredAPI)
                .then(res => {
                    console.log(res.data.articles);
                    let data = res.data.articles;
                    setNewsData(data);
                    console.log('config', filterOptions)
                })
                .catch(err => console.error(err))
        }
        else {
            axios.get(url)
                .then(res => {
                    console.log(res.data.articles);
                    let data = res.data.articles;
                    setNewsData(data);
                    console.log('config', filterOptions)
                })
                .catch(err => console.error(err))
        }
        // eslint-disable-next-line
    }, [props.location.filteredAPI]);



    const dataReadLater = (title) => {
        let newArray = newsData.filter(data => data.title === title);
        console.log('after filter', newArray)
        let news = {
            title: newArray[0].title,
            description: newArray[0].description,
            link: newArray[0].url
        };

        axios.post(`http://localhost:3001/api/v1/news`, news, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
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
}

export default DisplayCard;