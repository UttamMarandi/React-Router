import React from 'react'

const Post = ({match}) => {
    //destructuring params and accesing match.params.id to get the passed id
    return (
        <h2>
            ID is = {match.params.id}
        </h2>
    )
}

export default Post
