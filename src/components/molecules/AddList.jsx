import ButtonRegister from "../atoms/ButtonRegister";
import './AddList.css'; 

function AddList({ toregister }) {
    return (
        <div className="add-list">
            <ButtonRegister title={"Dar de alta"} onClick={toregister} />
        </div>
    );
}

export default AddList;
