import React from 'react'
import { useEffect } from 'react';
import axios from 'axios'

function EventsDiv() {
    const requestBody ={
        "username": "user61122"
    }
    const options = {
        method: 'POST',
        url: 'http://localhost:3069/eventsForUser',
        data: requestBody
    };
    
    useEffect(()=>{
        axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            
        })
        .catch(function (error) {
            console.error(error);
        })
    },[])


  return (
    <div>
        Testing for user id user61122


    </div>
  )
}

export default EventsDiv