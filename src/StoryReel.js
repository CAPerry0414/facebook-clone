import React from 'react'
import "./StoryReel.css"
import Story from "./Story";

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800"
                profileSrc="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
                title="Sonny Sangha" />
            <Story 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlYgyTRpq0cxuH8DESwEasrLKTpDxGqnjuLMs3dqJRwDSrgNb9ApZODI9g&s=10"
                profileSrc="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Rafeh Qazi" />
            <Story 
                image="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                profileSrc="https://image.cnbcfm.com/api/v1/image/106569797-1591649109683gettyimages-1032942656.jpeg?v=1597932630"
                title="Frankie" />
            <Story 
                image="https://media.tenor.com/9I2Nj8pyaoAAAAAe/19dollar-fortnite-card-who-wants-it.png"
                profileSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Aaron Bernath" />
            <Story 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5GhD9NWRx4rdlVJD2I6abul5-nlf5hsodr-kub8u5_lRDTZCRxiJYngY&s=10"
                profileSrc="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Naz" />
        </div>
    )
}

export default StoryReel
