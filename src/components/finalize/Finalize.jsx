import { FinalizeStl } from "./finalize.styled";
import arrowBack from '../../images/arrowBack.svg';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTestId, getSiteId } from "../../api";

export const Finalize = () => {
    const [site, setSite] = useState([]);
    const [test, setTest] = useState([]);

    const navigate = useNavigate();
    let { id } = useParams();

    useEffect(() => {
        getTestId(id)
            .then((res)=> {
                setTest(res);
                return res;
            })
            .then((res)=>{
                res[0]?.siteId &&
                getSiteId(res[0].siteId)
                    .then((res)=>
                        setSite(res)
                    );
            })
    },[]);

    useEffect(()=>{
        console.log(test);
    },[test]);
    useEffect(()=>{
        console.log(site);
    },[site]);

    return (
        <FinalizeStl>
            <article className="content">
                <h1 className="heading">Finalize</h1>
                <p className="text">Spring promotion</p>    
            </article>
            <button className="buttonBack" onClick={()=>{navigate(-1)}}>
                <img className="imgButton" src={arrowBack} alt='назад'/>
                Back
            </button>
        </FinalizeStl>
    )
}