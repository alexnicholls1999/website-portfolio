import React from 'react';
import {Row, Col} from 'react-bootstrap';

function BulletPoint(props) {

    return (
        <>
            <Row className="p-5">
                <ul>
                    {data.map(function(d, idx){
                        return (<li key={idx}>{props.data}</li>)
                    })}
                </ul>
            </Row>
        </>
    )
}

export default BulletPoint;