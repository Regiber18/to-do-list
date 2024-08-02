import Card from "../molecules/Card";
import Style from "./Activitie.module.css";
import ApplyActivitie from "../molecules/ApplyActivitie";
import AddList from "../molecules/AddList";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from 'uuid';

function Activitie() {
    const [activitie, setActivitie] = useState("");
    const [value, setValue] = useState([]);
    const [activities, setActivities] = useState([]);
    const [one, setOne] = useState(false);

    useEffect(() => {
        const completedActivities = value.filter(item => item.status).length;
        if (completedActivities === value.length && value.length > 0) {
            setValue([]);
            setOne(false);
            Swal.fire({
                title: "Agregar",
                text: "Se ha vaciado el array",
                icon: "info"
            });
        }
    }, [value]);

    const apply = () => {
        if (!activitie) {
            Swal.fire({
                title: "Agregar",
                icon: "error",
                text: "Error al agregar",
            });
        } else {
            Swal.fire({
                title: "Agregar",
                icon: "success",
                text: "Se agregó la actividad",
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
            if (item.id === id && item.status) {
                return { ...item, editing: !item.editing };
            }
            return item;
        }));
    };

    const toregister = () => {
        if (!one) {
            const updatedActivities = value.map(activity => ({ ...activity, status: true }));
            setActivities([...activities, ...updatedActivities]);
            Swal.fire({
                title: "Alta",
                text: "Actividades realizadas",
                icon: "success"
            });
            setValue([]);
            setOne(true);
        } else {
            Swal.fire({
                title: "Alta",
                text: "Ya se dio de alta",
                icon: "info"
            });
        }
    };

    return (
        <div className={Style.cal_activities}>
            <div className={Style.container}>
                <ApplyActivitie
                    apply={apply}
                    activitie={activitie}
                    setActivitie={setActivitie}
                />
                <Card
                    value={value}
                    setValue={setValue}
                    delate={delate}
                    update={update}
                />
                <AddList toregister={toregister} />
            </div>
        </div>
    );
}

export default Activitie;
