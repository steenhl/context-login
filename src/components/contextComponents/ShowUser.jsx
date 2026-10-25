import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function ShowUser() {

    const { user } = useContext(GlobalContext);

    return (
        <>
            <h2>Velkommen {user ? user.name : 'Gæst'}</h2>
        </>
    )
}