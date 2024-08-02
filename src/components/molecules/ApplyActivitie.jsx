import Input from "../atoms/Input";
import ButtonAdd from "../atoms/ButtonAdd";
import './ApplyActivitie.css';

function ApplyActivitie({ apply, activitie, setActivitie }) {
    return (
        <div className="apply-activitie">
            <div id="cal_title">
                <h4>TO-DO-LIST</h4>
            </div>
            <div id="cal_content">
                <Input
                    type="text"
                    placeholder="Actividad"
                    value={activitie}
                    fnval={setActivitie}
                />
                <ButtonAdd onClick={apply} type="submit" title="Apply" />              
            </div>
        </div>
    );
}

export default ApplyActivitie;
