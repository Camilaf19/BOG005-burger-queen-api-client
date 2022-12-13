import { requestHTTPGetUsersAdmin } from './requests';
import React, { useEffect, useState } from "react";
import { ModalCreateUser } from './Modals';
import Table from 'react-bootstrap/Table';
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
            <Table className="tableAdmin" striped>
                <tbody>
                    <tr>
                        <th>Role</th>
                        <th>Email</th>
                    </tr>
                    {users.map((user, index) =>
                        <tr key={index}>
                            <td>{user.role}</td>
                            <td>{user.email}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <ModalCreateUser />

        </div>
    )
}
