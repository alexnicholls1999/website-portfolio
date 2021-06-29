import styled from "styled-components";

interface BackButtonProps {
    onClick: () => void
}

const BackBtn = styled.h6`
    text-align: center;
    padding: 10px;
    padding-bottom: 20px;
    color: white;
    cursor: pointer;
`;

function BackButton({onClick} : BackButtonProps) {
    return <BackBtn onClick={onClick}>CLOSE</BackBtn>
}

export default BackButton
