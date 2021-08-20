import React from 'react'
import { useLocation, useParams } from 'react-router-dom'


const People = () => {
    useParams()
    console.log("useParams",useParams());
    const id2 = useParams().id //normal way
    const {id} = useParams() //destructuring

    useLocation()
    //URLSearchParams is an inbuilt API of browser that helps us get the searched values
    //first initialize the URLSearchParams and store it in a variable
    //then access the values using variable.get("search-parmater")
    const query = new URLSearchParams(useLocation().search)
    console.log("query from URLSearchParams", query);
    console.log("useLocation",useLocation());


    return (
        <>
            <h2>Passed value :- {id2}</h2>
            <h2>Passes value destructuring : {id}</h2>
            <h2>First searched : {query.get("first")}</h2>
            <h2>Last searched : {query.get("last")}</h2>
        </>
    )
}

export default People
