import React, { Component } from 'react';
import axios from 'axios';
import NewsComponent from './../NewsComponent.jsx';
import './news-sections.css';
import NewsPlaceholder from './../Images/news-placeholder.png';

export default class GeneralNews extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newsList: []
        }

    }


    componentDidMount() {

        axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9f4facc956ea46a588bd624555af94e2')
            .then(response => {
                let newsList = response.data.articles;
                this.setState({
                    newsList: newsList
                })
            })

    }


    render() {

        console.log(this.state.newsList)

        return (
            <div className="news-main">
                <h1>Tech News News</h1>
                <div className="News-sections-main">
                    {this.state.newsList.map(news =>
                        <NewsComponent image={news.urlToImage === null ? NewsPlaceholder : news.urlToImage}
                            newsHeading={news.author === null ? "Anonymous" : news.author}
                            title={news.title}
                            description={news.description}
                            link={news.url} />
                    )}
                </div>
            </div>
        );
    }
}

