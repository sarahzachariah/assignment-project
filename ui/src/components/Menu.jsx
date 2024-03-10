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
            <IxMenuItem icon="home" onClick={() => onNavClick('/')}>
                Home
            </IxMenuItem>
            <IxMenuItem icon="user-management" onClick={() => onNavClick('users')}>Users</IxMenuItem>
            <IxMenuItem icon="add-user" onClick={() => onNavClick('user/new')}>New User</IxMenuItem>
            <IxMenuItem icon="info" slot="bottom">
                v1.0.0-Beta
            </IxMenuItem>
        </IxMenu>
    );
}

export default Menu;
