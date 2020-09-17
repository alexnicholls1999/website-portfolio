import React from 'react';
import styled from "styled-components";
import {Row} from 'react-bootstrap';

const Book = {
    Sprint: "https://images-na.ssl-images-amazon.com/images/I/71Z1HWsH4fL.jpg",
    Design_Of_Everday_Things: "https://images-na.ssl-images-amazon.com/images/I/71T0PJT2F1L.gif",
    Universal_Principles_Of_Design: "https://images-na.ssl-images-amazon.com/images/I/41NRT1nGnSL._SX418_BO1,204,203,200_.jpg"
}


const StyledBook = styled.div`
    height: 277px;
    width: 186px;
    margin: 1%;
    margin-bottom: 5%;
    box-shadow: 0px 5px 17px rgba(117,117,117,.42);


    background-image: url(${props => props.Book});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;


function Bookshelf(){
    return(
        <>
            <h2 className="p-5 text-center" style={{color: "#107CDC"}}>Inspirational Books</h2>
            <Row className="justify-content-center">
                <StyledBook Book={Book.Sprint}/>
                <StyledBook Book={Book.Design_Of_Everday_Things}/>
                <StyledBook Book={Book.Universal_Principles_Of_Design} style={{backgroundPositionX: "-46px"}}/>
            </Row>
        </>
    )
}


export default Bookshelf;
