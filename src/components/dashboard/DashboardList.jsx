import { DashboardListStl } from "./dashboard.styled";
import { ButtonRoute, ButtonReset } from "../../share/button/ButtonRoute";
import arrowSort from '../../images/arrowSort.svg';
import { buttonHeading } from "../../constants";

export const DashboardList = ({ testsRenderSort, sortListRender, reset }) => {

    return (
        <DashboardListStl>
            {testsRenderSort.length > 0 ? 
                <>
                    <li className='point-heading'>
                        {buttonHeading.map((button, index) =>
                            <button className={`buttonSort ${button.class}`} key={index} onClick={()=>{sortListRender(button.id)}}>
                                {button.content}
                                {button.class === 'type-heading' && <img className='type-heading-arrow' src={arrowSort} alt='сортировка'/>}
                            </button>
                        )}
                    </li>
                    {testsRenderSort.map(test =>
                        <li className={`point borderColor-${test.siteId}`} key={test.id}>
                            <p className='name'>{test.name}</p>
                            <p className='type'>{test.type}</p>
                            <p className={`status colorText-${test.status}`}>{test.status}</p>
                            <p className='site'>{test.url}</p>
                            <ButtonRoute status={test.status} id={test.id}/>
                        </li>
                    )}
                </> :
                <div className='blockReset' >
                    <p className='blockRese__text'>Your search did not match any results.</p>
                    <ButtonReset text="Reset" reset={reset}/>
                </div>
            }
        </DashboardListStl>
    )
}