import React from 'react';

export default class FilterService extends React.Component {

    getFilteredApi(data) {
        console.log(data);
        // return `https://newsapi.org/v2/top-headlines?category=business&apikey=7dee10e8c7844bde81b49e2e4596d0ac&page=1`
        switch (data.endPoint) {
            case 'top-headlines':
                if (data.type === 'category')
                    return `https://newsapi.org/v2/${data.endPoint}?${data.type}=${data.category}&apikey=7dee10e8c7844bde81b49e2e4596d0ac&pageSize=${data.pageSize}&page=${data.page}`
                else if (data.type === 'country')
                    return `https://newsapi.org/v2/${data.endPoint}?${data.type}=${data.country}&apikey=7dee10e8c7844bde81b49e2e4596d0ac&pageSize=${data.pageSize}&page=${data.page}`
                else
                    return `https://newsapi.org/v2/${data.endPoint}?country=${data.countryCode}&category=${data.category}&apikey=7dee10e8c7844bde81b49e2e4596d0ac&pageSize=${data.pageSize}&page=${data.page}`

            case 'sources':
                if (data.type === 'category')
                    return `https://newsapi.org/v2/${data.endPoint}?${data.type}=${data.category}&apikey=7dee10e8c7844bde81b49e2e4596d0ac&pageSize=${data.pageSize}&page=${data.page}`
                else if (data.type === 'country')
                    return `https://newsapi.org/v2/${data.endPoint}?${data.type}=${data.countryCode}&apikey=7dee10e8c7844bde81b49e2e4596d0ac&pageSize=${data.pageSize}&page=${data.page}`
                else
                    return `https://newsapi.org/v2/${data.endPoint}?country=${data.countryCode}&category=${data.category}&apikey=7dee10e8c7844bde81b49e2e4596d0ac&pageSize=${data.pageSize}&page=${data.page}`

            case 'everything':
                return `https://newsapi.org/v2/${data.endPoint}?q=${data.searchText}&apikey=7dee10e8c7844bde81b49e2e4596d0ac&pageSize=${data.pageSize}&page=${data.page}`
            default:
                break;
        }
    }
}