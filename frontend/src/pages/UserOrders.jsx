import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { ShoppingBag, Calendar, Package } from 'react-feather';

const UserOrders = () => {
    const [orders, setOrders] = useState([]);

    // Placeholder for when we have real API
    useEffect(() => {
        // In a real app, fetch orders here
        // setOrders([]); 
    }, []);

    if (!localStorage.getItem('userToken')) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="container py-5" style={{ marginTop: '100px' }}>
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <h2 className="mb-4">My Orders</h2>

                    {orders.length === 0 ? (
                        <div className="text-center py-5 bg-light rounded-3">
                            <div className="mb-3">
                                <ShoppingBag size={60} className="text-muted opacity-50" />
                            </div>
                            <h4 className="text-muted">No orders found</h4>
                            <p className="text-muted mb-4">You haven't placed any orders yet.</p>
                            <a href="/checkups" className="btn btn-primary">Browse Checkups</a>
                        </div>
                    ) : (
                        <div className="list-group">
                            {/* Map orders here */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserOrders;
