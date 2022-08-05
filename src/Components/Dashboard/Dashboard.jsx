import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
// import auth from '../../Firebase/Firebase.init';

const Dashboard = () => {
    // const [user] = useAuthState(auth)
    return (
        <>
            <div className="container-fluid">
                <div className="drawer drawer-end drawer-mobile">
                    <div className="row">
                        <div className="col-10">
                            <div className="drawer-content">
                                <h2 className='text-2xl font-bold text-center my-2 py-2'>DASHBOARD</h2>
                                <hr />
                                <Outlet />
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="drawer-side bg-light p-3">
                                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                                <h4 className='text-center'>E B Com</h4>
                                <hr />
                                <ul className="menu p-lg-4 overflow-y-auto text-base-content">
                                    {/* {user && <> */}
                                    <li><Link to='/dashboard' class="nav-link">My Profile</Link></li>
                                    <li><Link to='/dashboard/myOrders' class="nav-link">My Orders</Link></li>
                                    <li><Link to='/dashboard/addReview' class="nav-link">Add Review</Link></li>
                                    {/* </>} */}

                                    {/* {admin && <> */}
                                    <li><Link to='/dashboard/manageProducts' class="nav-link">Manage Products</Link></li>
                                    <li><Link to='/dashboard/manageOrders' class="nav-link">Manage Orders</Link></li>
                                    <li><Link to='/dashboard/addProduct' class="nav-link">Add Product</Link></li>
                                    <li><Link to='/dashboard/addBlog' class="nav-link">Add Blog</Link></li>
                                    <li><Link to='/dashboard/customers' class="nav-link">Customers</Link></li>
                                    <li><Link to='/dashboard/makeAdminPanel' class="nav-link">Make Admin</Link></li>
                                    <li><Link to='/dashboard/analysis' class="nav-link">Analysis</Link></li>
                                    {/* </>} */}

                                </ul>
                                <hr />
                                <div class="">
                                    <strong>User Name</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Dashboard;