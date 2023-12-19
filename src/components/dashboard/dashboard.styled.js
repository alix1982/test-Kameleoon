import styled from 'styled-components';

export const DashboardStl = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    
    .dashboard__heading {
        margin: 0 0 10px 0;
        color: #222;
        font-family: Montserrat;
        font-size: 26px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
`;

export const DashboardListStl = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    list-style: none;
    margin: 0;
    padding: 0;

    .buttonSort {
        border: none;
        background-color: transparent;
        padding: 0;
        text-align: left;
        color: #999;
        font-family: Roboto;
        font-size: 11px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: uppercase;
        transition: opacity 0.5s linear;
        cursor: pointer;
        
        &:hover {
            opacity: 0.7;
        }
    }
    
    .point {
        width: calc(100% - 12px);
        padding: 15px 12px 15px 0;
        height: 40px;
        display: flex;
        align-items: center;
        gap: 25px;
        border-radius: 3px;
        background: #FFF;
        border-left: 4px solid #2EE5AC;

        &-heading {
            width: calc(100% - 12px);
            padding: 15px 12px 15px 0;
            display: flex;
            gap: 25px;
            margin-bottom: 5px;
        }

        @media (max-width: 800px) {
            gap: 10px;
            &-heading {
                gap: 10px;
            }
        }
    }
    .point:hover {
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
    }

    .name {
        margin: 0;
        width: 40.8%;
        margin-left: 11px;
        color: #474747;
        font-family: Roboto;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        
        &-heading {
            margin: 0;
            width: 40.8%;
            margin-left: 15px;
        }

        @media (max-width: 1000px) {
            width: 30%;
            &-heading {
                width: 30%;
            }
        }
    }
    
    .type {
        margin: 0;
        width: 10.5%;
        color: #5C5C5C;
        font-family: Roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        
        &-heading {
            margin: 0;
            width: 10.5%;
            display: flex;
            align-items: center;
            gap: 8px;
        }
    }
    
    .status {
        margin: 0;
        width: 9.5%;
        color: #5C5C5C;
        font-family: Roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        overflow: hidden;
        text-overflow: ellipsis;

        &-heading {
            margin: 0;
            width: 9.5%;
        }
    }

    .site {
        margin: 0;
        width: 16%;
        color: #5C5C5C;
        font-family: Roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        
        &-heading {
            margin: 0;
            width: 16%;
        }

        @media (max-width: 1000px) {
            width: 25%;
            &-heading {
                width: 25%;
            }
        }
    }
    
    .buttonRoute {
        width: 95px;
        height: 30px;
        border: none;
        border-radius: 10px;
        background: #2EE5AC;
    }

    .colorText {
        &-Stopped {
            color: var(--color-text-stop);
        }
        &-Paused {
            color: var(--color-text-pause);
        }
        &-Online {
            color: var(--color-text-onlain);
        }
        &-Draft {
            color: var(--color-text-draft);
        }
    }

    .borderColor {
        &-1 {
            border-color: var(--color-border-1);
        }
        &-2 {
            border-color: var(--color-border-2);
        }
        &-3 {
            border-color: var(--color-border-3);
        }
    }

    .blockReset {
        margin: 13vw auto 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .blockRese__text {
        margin: 0 0 60px 0;
        color: #222;
        text-align: center;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
`;

export const DashboardSearchStl = styled.article`
    width: calc(100% - 26px);
    height: 15px;
    padding: 15px 13px;
    display: flex;
    align-items: center;
    gap: 11px;
    border-radius: 15px;
    border: 1px solid #EBEBEB;
    background: #FFF;
    transition: opacity 0.5s linear;
    cursor: pointer;

    .inputImg {

    }
    .input {
        width: 90%;
        border: none;
        padding: 0;
        margin-right: auto;
        &:focus {
            outline: none;
        }
    }
    .inputComment {
        margin: 0;
        white-space: nowrap;
        color: #D1D1D1;
        text-align: right;
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;