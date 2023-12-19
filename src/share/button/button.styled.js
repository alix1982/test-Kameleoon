import styled from 'styled-components';

export const ButtonRouteStl = styled.button`
    width: 95px;
    height: 30px;
    padding: 5px;
    border: none;
    border-radius: 10px;
    color: #FFF;
    text-align: center;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    background: ${props => props.color};
    transition: opacity 0.5s linear;
    cursor: pointer;
    
    &:hover {
        opacity: 0.7;
    }
`;
