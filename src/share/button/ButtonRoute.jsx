import { ButtonRouteStl } from "./button.styled";
import { useNavigate } from "react-router-dom";

export const ButtonRoute = ({status, id}) => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        status === 'Draft' ? navigate(`/finalize/${id}`, { relative: "path" }) : navigate(`/results/${id}`, { relative: "path" })
    }

    return (
        <ButtonRouteStl onClick={handleNavigate} color = {status === 'Draft' ? '#7D7D7D' : '#2EE5AC'}>
            {status === 'Draft' ? 'Finalize' : 'Results'}
        </ButtonRouteStl >
    )
}

export const ButtonReset = ({text, reset}) => {

    return (
        <ButtonRouteStl onClick={reset} color = {'#2EE5AC'}>
            {text}
        </ButtonRouteStl >
    )
}