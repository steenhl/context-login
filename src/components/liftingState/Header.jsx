import ShowUser from "./ShowUser";

export default function Header({ user }) {

    return (
        <header>
            <h1>Login</h1>
            <ShowUser user={user} />
        </header>
    )

}