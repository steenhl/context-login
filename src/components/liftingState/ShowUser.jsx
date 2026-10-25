

export default function ShowUser({ user }) {

    return (
        <>
            <h2>Velkommen {user ? user.name : 'Gæst'}</h2>
        </>
    )
}