import Input from "../atoms/Input";
import Style from "./Card.module.css";
import ButtonAdd from "../atoms/ButtonAdd";
import { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import Text from "../atoms/Text";
import { v4 as uuidv4 } from 'uuid';
import ActivitieContent from "../atoms/ActivitieContent";
import Icon from "../atoms/IconDelete";
import IconUpdate from "../atoms/IconUpdate";
import ButtonRegister from "../atoms/ButtonRegister";
import Title from "../atoms/Title"

const StyledContent = styled.div`
  width: 60%;
  height: 600px;
  border-radius: 10px;
  background-color: #ffffff; 
  &: hover {
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75); 
  } 
`;

function Card() {
  const [activitie, setActivitie] = useState("");
  const [value, setValue] = useState([]);
  const [activities, setActivities] = useState([]);
  const [one, setOne] = useState(false);
  const [flag, setFlag] = useState(false)
  
  const apply = () => {
    if (!activitie) {
      Swal.fire({
        title: "Agregar",
        icon: "error",
        text: "Erro al agregar",
      });
    } else {
      Swal.fire({
        title: "Agregar",
        icon: "success",
        text: "Se agrego la actividad",
      });
      setValue([...value, { task: activitie, id: uuidv4(), status: false, editing: false }]);
      setActivitie("");
    }
  };

  const delate = (id) => {
    setValue(value.filter(item => item.id !== id));
  };

  const update = (id) => {
    setValue(value.map(item => {
      if (item.id === id && item.status === true) {
        return { ...item, editing: !item.editing };
        setFlag(true)
      }
      
      if(!flag) {
        Swal.fire({
          title: "change",
          text: "No se ha realizado",
          icon: "error"
        })
      }

      return item;
    }));
  };


  const toregister = () => {
    if(!one) {
      for(let i=0;i<value.length;i++) {
        value[i].status = true;  
        activities.push(value[i])
      }
      Swal.fire({
        title: "Alta",
        text: "Se dio de alta",
        icon: "success"
      })
      console.log(activities)
      setOne(true)
   }else {
      Swal.fire({
        title: "Alta",
        text: "Ya se dio de alta",
        icon: "info"

      })
   }
  }

  return (
    <StyledContent>
      <div id={Style.cal_title}>
        <Title title={"To-do-list"}></Title>
      </div>

      <div id={Style.cal_insert}>
        <Input type={"text"} placeholder={"actividad"} value={activitie} fnval={setActivitie} />
        <ButtonAdd onClick={apply} type="submit" title={"apply"} />
      </div>

      <div id={Style.cal_show}>
        <div id={Style.cal_activities}>

          {value.map(item => (
            <ActivitieContent key={item.id}>
              <div id={Style.cal_text}>
                {item.editing ? (
                  <Input
                    type="text"
                    placeholder="Edit activitie"
                    value={item.task}
                    fnval={(newTask) => setValue(value.map(v => v.id === item.id ? { ...v, task: newTask} : v,      
                    ))}
                  />
                ) : (
                  <Text text={item.task} />
                )}
              </div>
              <div id={Style.cal_icon}>
                <Icon onClickdelate={() => delate(item.id)} />
              </div>
              <div id={Style.cal_icon_update}>
                <IconUpdate onClickupdate={() => update(item.id)} />
              </div>
            </ActivitieContent>
          ))}

        </div>
        <div id={Style.cal_apply}>
          <ButtonRegister title={"Dar de alta"} onClick={toregister} />
        </div>
      </div>
    </StyledContent>
  );
}

export default Card;
