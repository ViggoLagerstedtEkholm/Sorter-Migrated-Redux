import {Algorithms} from "./Algorithms/Algorithms";
import React from "react";
import {setActiveAlgorithm} from "../Actions";
import {useDispatch} from "react-redux";

export const DropdownMenu: React.FC = () => {
    const dispatch = useDispatch();

    interface Props{
        algorithm: string
    }

    const DropdownItem: React.FC<Props> = (props) =>{
        const {algorithm} = props;

        const setAlgo = () =>{
            dispatch(setActiveAlgorithm(algorithm));
        }

        return(
            <button className="menu-item" onClick={setAlgo}>
                {props.children}
            </button>
        )
    }

    return (
        <div className="dropdown scroll">
            {Algorithms.map(function (algorithm, index) {
                return (<DropdownItem algorithm={algorithm} key={index}>{algorithm}</DropdownItem>)
            })}
        </div>
    );
}

export default DropdownMenu;
