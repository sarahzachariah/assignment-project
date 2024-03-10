import { IxMenu, IxMenuItem } from "@siemens/ix-react";
import { useNavigate } from "react-router-dom";

function Menu() {
    const navigate = useNavigate();

    function onNavClick(path) {
        // console.log(path);
        navigate(path);
    }

    return (
        <IxMenu>
            <IxMenuItem tab-icon="home" onClick={() => onNavClick('/')}>
                Home
            </IxMenuItem>
            <IxMenuItem tab-icon="user-management" onClick={() => onNavClick('newuser')}>Users</IxMenuItem>
            <IxMenuItem tab-icon="info" slot="bottom">
                v1.0.0-Beta
            </IxMenuItem>
        </IxMenu>
    );
}

export default Menu;
