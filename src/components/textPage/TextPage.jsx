import { TextPageStl } from "./textPage.styled";

export const TextPage = ({text}) => {
    
    return (
        <TextPageStl>
            <h1 className="heading">{text}</h1>
        </TextPageStl>
    )
}