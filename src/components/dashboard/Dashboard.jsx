import { useEffect, useState } from "react";
import { getSites, getTests } from "../../api";
import { transformRegister, addStatusId, searchSiteId, sortList } from "../../helpers";
import { DashboardStl } from "./dashboard.styled";
import { DashboardList } from "./DashboardList";
import { DashboardSearch } from "./DashboardSearch";

export const Dashboard = () => {
    const [sites, setSites] = useState([]);
    const [tests, setTests] = useState([]);
    const [testsRender, setTestsRender] = useState([]);
    const [testsRenderSort, setTestsRenderSort] = useState([]);

    const [isSortName, setIsSortName] = useState(false);
    const [isSortType, setIsSortType] = useState(false);
    const [isSortSite, setIsSortSite] = useState(false);
    const [isSortStatus, setIsSortStatus] = useState(false);

    const [inputValue, setInputValue] = useState('');

    useEffect(()=> {
        getSites()
            .then((res)=>
                setSites(res)
            )
            .then(()=>{
                getTests()
                    .then((res)=>
                        setTests(res)
                    );
            })
    },[]);

    useEffect(()=> {
        setTestsRender([]);
        let testsArr= [];
        tests.forEach((test) => {
            testsArr.push({
                ...test,
                url: searchSiteId(test.siteId, sites),
                type: transformRegister(test.type),
                statusId: addStatusId(test.status),
                status: transformRegister(test.status)
            })
            setTestsRender(testsArr);
            setTestsRenderSort(testsArr);
        })
    }, [tests]);

    const searchTest = (e) => {
        setInputValue(e.target.value);
        let sortArr = [];
        sortArr = testsRender.filter((test) => test.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setTestsRenderSort(sortArr);
    }

    const sortListRender = (idButton) => {
        sortList(
            idButton,
            isSortName, setIsSortName,
            isSortType, setIsSortType,
            isSortSite, setIsSortSite,
            isSortStatus, setIsSortStatus,
            testsRenderSort, setTestsRenderSort
        )
    };

    const reset = () => {
        setInputValue('');
        setTestsRenderSort(testsRender);
    };

    return (
        <DashboardStl>
            <h1 className="dashboard__heading">Dashboard</h1>
            <DashboardSearch
                countTests={testsRenderSort.length}
                searchTest={searchTest}
                inputValue={inputValue}
            />
            <DashboardList
                sortListRender={sortListRender}
                testsRenderSort={testsRenderSort}
                reset={reset}
            />
        </DashboardStl>
    )
}