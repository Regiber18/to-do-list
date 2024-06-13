import Activities from "../components/organisms/Activitie";
import Style from "./ToDoList.module.css"
function ToDoList () {

    return(
        <div id={Style.cal_home}>
            <Activities></Activities>
        </div>
    )
}

export default ToDoList;