import { GlobalProvider } from "../../context/GlobalContext";
import Header from "./Header";
import UserName from "./UserName";

export default function LoginContext() {

    return (
        <GlobalProvider>
            <Header />
            <UserName />
        </GlobalProvider>
    )
}

// CREATE CONTEXT
// import { GlobalProvider } from "../../context/GlobalContext";
// import Header from "./Header";
// import UserName from "./UserName";
// <GlobalProvider>
//   <Header />
//   <UserName />
// </GlobalProvider>