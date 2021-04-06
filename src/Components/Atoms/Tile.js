import styled from "styled-components";
import PropTypes from "prop-types";

const Tile = styled.div`
    
    border-radius: 20px;
    box-shadow: 0px 5px 17px rgba(0, 0, 0, 0.4);
    background: ${(props) => `url(${props.projectImg}) no-repeat center`};
    height: 500px;

    &:hover {
        border-radius: 20px;
        transform: scale(1.025);
        transition: .5s ease;
        border: 6px solid #107CDC;
        box-shadow: 0px 5px 17px #107CDC;
    }
`;

Tile.defaultProps = {
    projectImg: ""
}

Tile.propTypes = {
    projectImg: PropTypes.string
}


export default Tile;