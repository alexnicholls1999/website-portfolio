import styled from "styled-components";

const StyledLogo = styled.svg`
    height: 6rem;
    fill: white !important;
    margin: 0 auto;
`;

function Logo() {
    return (
        <StyledLogo id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 149.47 94.6">
            <text x="-326.05" y="-203.33"/><polygon className="cls-1" points="48.91 58.76 66.98 58.38 45.19 94.31 79.16 94.31 85.84 80.33 72.09 80.16 93.84 43.96 42 44.31 48.91 58.76"/><path className="cls-1" d="M483.59,237.38" transform="translate(-326.05 -203.33)"/><polygon className="cls-1" points="81.07 80.09 102.79 43.96 114.96 43.96 122.9 60.71 140.15 43.96 149.28 43.96 128.06 94.21 116.34 94.21 104.06 76.56 95.51 94.21 74.38 94.21 81.07 80.09"/><polygon className="cls-1" points="0.2 94.11 24.1 44.31 45.12 44.31 56.13 77.88 45 94.31 34.36 57.91 16.99 94.11 0.2 94.11"/>
        </StyledLogo>
    )
}

export default Logo
