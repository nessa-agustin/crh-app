import { useState, useEffect } from "react";

function UserList() {

    const [userData, setUserdata] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                let users = data.map((user) => {
                    return (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.phone}</td>
                            <td>{user.company.name}</td>
                        </tr>
                    )
                })
                setUserdata(users);
            })
    }, [])





    return (

        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Phone</th>
                        <th>Company Name</th>
                    </tr>
                </thead>
                <tbody>
                    {userData}
                </tbody>
            </table>
        </div>
    )
}

export default UserList