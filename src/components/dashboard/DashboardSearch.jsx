import { DashboardSearchStl } from "./dashboard.styled";
import loupe from '../../images/loupe.svg';

export const DashboardSearch = ({countTests, searchTest, inputValue}) => {
    
    return (
        <DashboardSearchStl>
            <img className="inputImg" src={loupe} alt='поиск'/>
            <input className="input" placeholder="What test are you looking for?" maxLength={130} onChange={searchTest} value={inputValue}/>
            <p className="inputComment">{`${countTests} tests`}</p>
        </DashboardSearchStl>
    )
}