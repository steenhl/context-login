import { useState } from "react"

export default function Login() {

    const [user, setUser] = useState(null)

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const name = formData.get("name")

        // hvis der ikke er nogen bruger og der ikke er et navn: STOP 
        if (!name && !user) {
            return
        }
        // Hvis der ikker er nogen bruger, opret en bruger
        if (!user) {
            setUser({ name })

        } else {
            setUser(null)
        }
        // Slet hvad der stå i formens felter
        const form = event.target
        form.reset()
    }

    return (
        <div>
            <header>
                <h1>Login / Logout</h1>
                <h2>Velkommen {user ? user.name : 'Gæst'}</h2>
            </header>

            <form onSubmit={handleSubmit}>
                {!user && <input type='text' name='name' placeholder='Skriv dit navn' />}
                <button>{user ? "logout" : "login"}</button>
            </form>
        </div>
    )
}