import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../Context/AuthProvider';
import OrderTable from './OrderTable';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('baking-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data)
            })
    }, [user?.email]);

    const handleDelete = id => {
        const procced = window.confirm('Do you want delete this item?')
        if (procced) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Successfully deleted');
                        const remaining = orders.filter(ord => ord._id !== id)
                        setOrders(remaining)
                    }
                })
        }
        // console.log(id);

    }
    return (
        <div>
            <h1>Total ordre is {orders.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                Delete
                            </th>
                            <th>Item</th>
                            <th>Customer Info</th>
                            <th>Price</th>
                            <th>Address</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderTable
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                            >
                            </OrderTable>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Orders;