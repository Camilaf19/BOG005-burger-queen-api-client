import Table from 'react-bootstrap/Table';

export const Cart = ({order}) => {
    
    return (
        <Table striped>
            <tbody>
                <tr>
                    <th>Products</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td>{order.name}</td>
                    <td>${order.price}</td>
                </tr>
                <tr>
                    <td>el precio total totalismo</td>
                    <td>el precio total en numbers</td>
                </tr>
            </tbody>
            </Table>
    )
}

