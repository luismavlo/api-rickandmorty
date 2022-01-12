import React from 'react'

const ShowEpisodes = ({url}) => {

    const epiArr = url.split('/');
    const episode = epiArr[5];


    return (
        <div>{episode},</div>
    )
}

export default ShowEpisodes