import { useParams } from "react-router-dom"  

export default function SingleUser({ users }) {
    const { userId } = useParams()

    const singleUser = users.find((user)=> user.id === +userId )

    return <article>
        <h1>{singleUser.name} </h1>
        <h2>User Id {userId}</h2>
    </article>
}