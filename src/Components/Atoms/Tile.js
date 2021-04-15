import styled from "styled-components";

const Tile = styled.div`
    
    border-radius: 20px;
    box-shadow: 0px 5px 17px rgba(0, 0, 0, 0.4);
    
    img {
        position: relative;
        border-radius: 20px;
        width: 100%;
    
        :hover {
          transform: scale(1.025);
          transition: 0.5s ease;
          box-shadow: 0px 5px 17px ${({ theme }) => theme.colors.blue};
          border: 4px solid ${({ theme }) => theme.colors.blue};
        }
    }
`;

export default Tile;