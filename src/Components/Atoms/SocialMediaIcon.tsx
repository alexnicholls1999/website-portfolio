import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core"


interface SocialMediaProps {
    smlink: String,
    socialmedia: IconProp
}

const SocialMediaLink = styled.div`
    &:hover {
        transform: scale(1.5);
        transition: 0.5s ease-in-out;
    }
`;

function SocialMediaIcon({socialmedia, smlink} : SocialMediaProps) {

    const handleSocialMediaLink = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        window.open(`${smlink}`);
        e.preventDefault();
    }

    return (
        <SocialMediaLink onClick={handleSocialMediaLink}>
            <FontAwesomeIcon className="fab px-2" size="3x" icon={socialmedia}/>
        </SocialMediaLink>
    )
}

export default SocialMediaIcon
