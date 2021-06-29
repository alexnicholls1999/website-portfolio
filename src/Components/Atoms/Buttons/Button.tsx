import { CSSProperties } from "react";
import styled from "styled-components";

interface ButtonProps {
    onClick: () => void,
    menuButton: boolean,
    mailToButton: boolean,
    text: string,
    mailTo: string,
    style: CSSProperties
}

const StyledButton = styled.button`
    height: 45px;
    background: #107CDC;
    border-radius: 7px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    width: 100%;
    font-size: 15px;
    font-weight: 700;
`;

function Button({onClick, menuButton, mailToButton, mailTo, text, style} : ButtonProps) {
    
    const handleContactClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        window.location = mailTo;
        e.preventDefault();
    }
    
    return (
        <>
            {mailToButton ? (
                <StyledButton onClick={handleContactClick}>Contact</StyledButton>
            )}
        </>
    )
}

export default Button
