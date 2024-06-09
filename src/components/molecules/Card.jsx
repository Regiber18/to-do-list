import Content from "../atoms/Content";
import Input from "../atoms/Input";
import Style from  "./Card.module.css"
import Button from "../atoms/Button"
import ActivitieContent from "../atoms/ActivitieContent";
import ButtonAdd from "../atoms/ButtonAdd"
import { useState } from "react";
import Swal from "sweetalert2"
function Card() {
    const [activitie, setActivitie] = useState("")
    const [values, setValues] = useState([])


    const save = () => {
        applyActivities(activitie)
    }


    const applyActivities = () => {
        if(!activitie) {
            Swal.fire({
                title: "not completed",
                icon: "error",
                text:  "the input is blank"
            })
        }else {
            Swal.fire({
                title: "Complete",
                icon: "success",
                text: "comple"
            })
            setValues([...values, {val: activitie}])
            setActivitie("")
        }
    }

    const showClcik = () => {
        console.log(values)
    }

    return(
        <Content onSumbit={save}>
            <div id={Style.cal_insert}>
                <Input placeholder={"actividad"} val={activitie} fnval={setActivitie}></Input>
                <ButtonAdd type={"sumbit"} title={"apply"} onClick={applyActivities}></ButtonAdd>
            </div>
            <div id={Style.cal_show}>
                <div id={Style.cal_activities}>
                 {
                    values.map(item =>  {
                    <ActivitieContent>
                        <div id={Style.cal_text}>
                            <Text text={item.val}></Text>
                        </div>
                        <div id={Style.cal_icon}>

                        </div>
                    </ActivitieContent>
                    })
                 }
                    
                </div>
                <div id={Style.cal_apply}>
                    <Button onClick1={showClcik}></Button>
                </div>
            </div>
        </Content>
    )
}

export default Card;