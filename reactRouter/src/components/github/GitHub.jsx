import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){

    const data = useLoaderData();

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch("https://api.github.com/users/vansh-0108")
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setData(data);
    //     })
    // })

    return (
        <>
            <div className="text-center m-4 bg-gray-500 text-white">GitHub Followers: {data.followers}
                <img className = "p-4 " src={data.avatar_url} alt="Git_Img" width={200}/>
            </div>
        </>
    )
}

export default Github

// loader optimizes the system by starting the process of fetching and loading the response slightly earlier, like when the mouse hovers over the github option reducing any lag
export const gitHubInfoLoader = async () => {
    const response = await (fetch('https://api.github.com/users/vansh-0108'))

    return response.json();
}