import React from 'react';
import NewsStory from './NewsStory';

const NewsList = ({stories, loaded}) => {
    if (!loaded){
        return <p>Loading...</p>
    }

    //const storyTitles = stories.forEach(story in stories: {story.title.add()))

    // const sortByTitle = () => {
    //     storyTitles.sort();
    // }

    const storyNodes = stories.map((story)=> {
        
        return(
            
            <div id='everything'>
            <>
                <NewsStory key={story.id} url={story.url}>{story.title}</NewsStory>
            </>
            </div>
         )
     });

    return (
        <>
            {/* <button onClick={sortByTitle()}>Sort stories into alphabetical order</button> */}
            
            {storyNodes}
        </>
    )
}

export default NewsList;