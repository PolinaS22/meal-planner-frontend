import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";


export const MyMeals = ({ text, updatingInInput, deleteMeal }) => {
    return (
        <div className="flex">            
            <CiEdit onClick={ updatingInInput }></CiEdit>
            <MdDeleteOutline onClick={ deleteMeal }></MdDeleteOutline>
            <p> { text }</p>
        </div>
    )
}