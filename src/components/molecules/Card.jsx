import Input from "../atoms/Input";
import './Card.css';
import Icon from "../atoms/IconDelete";
import IconUpdate from "../atoms/IconUpdate";
import { useState } from "react";

function Card({ value, setValue, delate, update }) {
    return (
        <div id="content">
            <div id="cal_show">
                <div id="cal_activities">
                    {value.map(item => (
                        <div className="activitieContent" key={item.id}>
                            <div id="cal_text">
                                {item.editing ? (
                                    <Input
                                        type="text"
                                        placeholder="Edit"
                                        value={item.task}
                                        fnval={(newTask) =>
                                            setValue(value.map(v =>
                                                v.id === item.id ? { ...v, task: newTask } : v
                                            ))
                                        }
                                    />
                                ) : (
                                    <p>{item.task}</p>
                                )}
                            </div>
                            <div id="cal_icon">
                                <Icon onClickdelate={() => delate(item.id)} />
                            </div>
                            <div id="cal_icon_update">
                                <IconUpdate onClickupdate={() => update(item.id)} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card;
