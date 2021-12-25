import React, {FC, useState} from "react";

interface Props{
    sort?: () => void;
    icon: any;
}

export const NavItem: React.FC<Props> = (props) =>{
    const [open, setOpen] = useState(false);

    return(
        <li className="nav-item">
            <div className="icon-button"
             onClick={() => {
                    if(props.sort){
                        props.sort();
                    }
                    setOpen(!open)}
            }>
                {props.icon}
            </div>

            {open && props.children}
        </li>
    )
}

export default NavItem;