import React from 'react'

function Video(props) {
    return (
        <>
            <video style={{width: '100%'}} autoPlay="true" loop>
                <source src={props.video} type="video/mp4"/>
            </video>   
        </>
    )
}
export default Video;