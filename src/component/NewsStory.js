import React from "react";

const NewsStory = ({url, children, loaded}) => {

    // if (!loaded){
    //     return <p>Loading...</p>
    //   }

    return(
        <div id='url'>
        <>
            <ul>
                <li>
                    <a href={url}>{children}</a>
                    
                </li>
            </ul>
        </>
        </div>
    )
}



export default NewsStory;