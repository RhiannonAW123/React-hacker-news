import React from 'react';
// import NewsStory from './NewsStory';

const NewsList = ({stories}) => {

    // const storyIDArray = [26326639, 26323852, 26326599, 26326795, 26324347]
    
    



    // const storyNodes = stories.map(story => {
    //     return(
    //         <>
            /* <NewsStory getStories={fetch("https://hacker-news.firebaseio.com/v0/item/{storyIDArray}.json")} />
                <NewsStory title={story.title} />
            </> */
    //     )
    // })

        return (
            <>
                <h2>Story List</h2>
                {/* <p>{storyNodes}</p> */}
            </>
        )
}

export default NewsList;