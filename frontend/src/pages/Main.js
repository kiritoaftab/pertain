import React, { useEffect, useState } from "react";
import axios from "axios";

function Main() {
  //Make api call
  async function getData() {
    try {
      let res = await axios({
        url: "http://localhost:3069/getPosts",
        method: "POST",
        timeout: 8000,
        headers: {
          "Content-Type": "application/json",
        },
      });

      //   console.log(res.data);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
  const [events, setEvents] = useState('');
  //store the data in a state
  useEffect(() => {
    getData().then((res) => {
      //   console.log(res);
      setEvents(res);
    });
  }, []);
  //first loading -- DONE

  //Make api call to next events 
  async function getNextData(){
    try {
        let res = await axios({
            url: "http://localhost:3069/getPostsNext",
            method: "POST",
            timeout: 8000,
            headers: {
              "Content-Type": "application/json",
            },
          });
    
            // console.log(res.data);
          return res.data;
    } catch (error) {
        console.log(error)
    }
  }

  //on clicking the next button api call
const nextEventsHandler = () => {
    
    
        getNextData().then((res) => {
            console.log(res);
            setEvents(current => [...current, ...res]);
        });
      
    
    console.log(`Call next events`)
}
  //updating the data in the state
  return (<>
    <div>
        All Events 
        
        <div>
            {Array.isArray(events) ? 
            events.map((event,index) => {
                const eventId = Object.keys(event)[0]
                return (
                    <div key={index}>
                        {JSON.stringify()}
                        Event {index}
                        <div key={index}>
                            <p>Event id -- {eventId}</p>
                            <p>Time -- {event[eventId].time ? event[eventId].time : ``}</p>
                            <p>Description -- {event[eventId].desc ? event[eventId].desc : ``}</p>
                            <p>Event Name -- {event[eventId].eventName ? event[eventId].eventName : ``}</p>
                            <p>Image url -- {event[eventId].imgUrl[0] ? event[eventId].imgUrl[0] : `` }</p>
                            <p>Image   -- <img src={event[eventId].imgUrl ? event[eventId].imgUrl : ``} height={750}/></p>
                            <p>Organizer Name -- {event[eventId].organizerName ? event[eventId].organizerName : ``}</p>
                            <p>Genre -- {event[eventId].genre ? event[eventId].genre : ``}</p>
                            <p>Location -- {event[eventId].location? event[eventId].location : ``}</p>
                            <p>Date -- {event[eventId].date ? event[eventId].date : ``} </p>
                        </div>
                    </div>
                )
            })
            :"loading"}
            <button onClick={nextEventsHandler}>Next events</button>
        </div>
    </div>
  </>);
}

export default Main;
