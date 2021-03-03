import React from "react";

const NewsStory = ({children, loaded}) => {

    // if (!loaded){
    //     return <p>Loading...</p>
    //   }

    return(
        <>
            <h1>{children}</h1>
        </>
    )
}



export default NewsStory;