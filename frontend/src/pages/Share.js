import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Share() {
    const [event, setEvent] = useState();
    async function getData() {
        try {
            let res = await axios({
                url: 'http://localhost:3069/getPost',
                method: 'GET',
                timeout: 8000,
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            console.log(res.data.data)
            return res.data.data
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