// custom hooks - used to fetch data

import { useEffect,useState } from "react"
// const { useEffect, useState } = require("react")


const useFetch = (url) => {
    const [data, setData] = useState(null)
    useEffect(() => {

        // API
        fetch(url).then((result) => {
            result.json().then((response) => {
                setData(response.products);

            })
        })

    }, [])
    return data

}

export default useFetch