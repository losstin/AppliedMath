import React from "react";
import Feedback from "../../components/Feedback";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NewsCard from "../../components/Cards/NewsCard";

const News = ()=>{

    return(
        <div className={'off-canvas-wrap'}>
            <Header/>

            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>

            <Feedback/>
            <Footer/>
        </div>
    )
}

export default News;