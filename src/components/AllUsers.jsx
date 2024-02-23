import { useNavigate } from "react-router-dom"

export default function AllUsers ({ users }) {
    const navigate = useNavigate()


    return <article>
        {users.map((user)=> {
            return <h2 className="user-link" key={user.id} onClick={()=>navigate(`/users/`+ user.id)}>{user.name}</h2>
        })}
    </article>
}