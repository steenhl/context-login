import { useState } from "react";
import Header from "./Header";
import UserName from "./UserName";

export default function LoginProps() {

    const [user, setUser] = useState(null)

    return (
        <>
            <Header user={user} />
            <UserName user={user} setUser={setUser} />
        </>
    )
}

// PASSING STATE DOWN / LIFTING THE STATE
// import Header from './components/liftingState/Header'
// import UserName from './components/liftingState/UserName'
// const [user, setUser] = useState(null)
// <Header user={user} />
// <UserName user={user} setUser={setUser} />
