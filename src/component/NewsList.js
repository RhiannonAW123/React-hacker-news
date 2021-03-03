import React from 'react';
import NewsStory from './NewsStory';

const NewsList = ({stories, loaded}) => {
    if (!loaded){
        return <p>Loading...</p>
      }


    const storyNodes = stories.map((story)=> {
        
        return(
            <>
                <NewsStory key={story.id} url={story.url}>{story.title}</NewsStory>
            </>
         )
     });

    return (
        <>
            <h2>Story List</h2>
            {storyNodes}
        </>
    )
}

export default NewsList;