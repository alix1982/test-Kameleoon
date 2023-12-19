import styled from 'styled-components';

export const FinalizeStl = styled.section`
    height: calc(100vh - 90px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    .heading {
        width: 330px;
        background-color: green;
        margin: 0;
        color: #222;
        font-family: Montserrat;
        font-size: 26px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .text {
        margin: 10px 0 0 0;
        color: #222;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .buttonBack {
        padding: 0;
        border: none;
        background-color: transparent;
        color: #222;
        font-family: Nunito;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        transition: opacity 0.5s linear;
        cursor: pointer;
    }
    .buttonBack:hover {
        opacity: 0.7;
    }

    .imgButton {
        margin-right: 19px;
    }
`;