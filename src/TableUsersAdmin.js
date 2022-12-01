import { requestHTTPGetUsersAdmin } from './requests';
import React, { useEffect, useState } from "react";

const tokenAccess = localStorage.getItem('loginToken');

export const TableUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        requestHTTPGetUsersAdmin(tokenAccess).then((res) => {
            setUsers(res)
        })
    }, [])


    return (
        <div>
            <table>
                <tbody>
                    {users.map((user, index) =>
                        <tr key={index}>
                            <td>{user.email}</td>
                            <td>{user.email}</td>
                            <td>{user.email}</td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    )
}