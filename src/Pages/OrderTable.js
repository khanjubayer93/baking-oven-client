import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OrderTable = ({ order, handleDelete }) => {
    const { serviceName, price, address, customar, phone, email, service, _id } = order;
    const [serviceiInfo, setServiceInfo] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/products/${service}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServiceInfo(data);

            })
    }, [service]);

    
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-square btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-24 rounded">
                            <img src={serviceiInfo?.photoURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                    </div>
                </div>
            </td>
            <td>
                {customar}
                <br />
                {phone}
                <br />
                {email}
            </td>
            <td>
                ${price}
            </td>
            <td>{address}</td>
            <th>
                <Link to={`/payment/${_id}`}>
                    <button className="btn btn-ghost btn-xs">Pay</button>
                </Link>
            </th>
        </tr>
    );
};

export default OrderTable;