import React, {useState, useEffect} from "react";
import NewsList from "../component/NewsList";

const NewsContainer = () => {

    const [stories, setStories] = useState([])
    const [loaded, setLoaded] = useState(false);



    useEffect(() => {
        getStories();
    }, [])

    const getStories = () => {
        console.log('retrieving stories');
         fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then(res => res.json())
        .then(data => {
            const slicedData = data.slice(0,20)
            const ipromise = slicedData.map(storyId => {
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
                .then(res => res.json())
                //.then(() => setLoaded(true))
            });

            Promise.all(ipromise).then(data => setStories(data));
            setLoaded(true)
        })
    }


    return(
        <>
        <p>News Container Here</p>
            <NewsList
                stories={stories}
                loaded={loaded}
            />       
        </>
    )
}


export default NewsContainer;


/// fetch the big list of article numbers, put them in an array (arrayX)
//for each item in arrayx, put that item as the id in the second url -> arrayY
// f