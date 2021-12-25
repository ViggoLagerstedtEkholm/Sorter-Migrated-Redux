import React from "react";

import NavItem from "./NavItem";
import DropdownMenu from "./DropdownMenu";
import {useSelector, RootStateOrAny} from "react-redux";
import {NavBar} from "./NavBar";

// @ts-ignore
import {ReactComponent as Play} from "../Images/play-button-svgrepo-com.svg";
// @ts-ignore
import {ReactComponent as Graph} from "../Images/bar-chart-676.svg";

interface Props{
    sort: () => void;
}

export const Nav: React.FC<Props> = (props) =>{
    const {sort} = props;

    const play = useSelector((state: RootStateOrAny) => state.play);

    return (
        <NavBar>
            {!play ?
                <>
                    <NavItem icon={<Graph/>}>
                        <DropdownMenu/>
                    </NavItem>

                    <NavItem icon={<Play/>} sort={sort}/>
                </> : null
            }
        </NavBar>
    );
}

export default Nav;
