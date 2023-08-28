import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom'

function Share() {
    const [event, setEvent] = useState();
    const {username , eventId} = useParams()
    console.log(`${username} -- ${eventId}`)
    async function getData() {
        try {
            let res = await axios({
                url: 'http://localhost:3069/getPost',
                method: 'GET',
                params :{
                    "username" : username,
                    "postId" : eventId
                },
                timeout: 8000,
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            console.log(res.data)
            return res.data
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData().then(res => {
            setEvent(res);
            console.log("This is my post in share page"+event)
        });
    }, []);

    return (
        <>
        <h1>
            {JSON.stringify(event)}
        </h1>
        </>
    )
}

export default Share