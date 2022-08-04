import React from 'react';

const Dashboard = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="chartjs-size-monitor">
                            <div className="chartjs-size-monitor-expand">
                                <div className=""></div>
                            </div>
                            <div className="chartjs-size-monitor-shrink">
                                <div className=""></div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Dashboard</h1>
                        </div>
                        <h2>Section title</h2>

                    </div>

                    <nav id="sidebarMenu" className="col-md-2 col-lg-2 d-md-block bg-light sidebar " >
                        <div className="position-sticky pt-3 sidebar-sticky" >
                            <div class="d-flex flex-column flex-shrink-0 p-0 bg-light">
                                <h3 class="text-center">DASHBOARD</h3>
                                <hr />
                                <ul class="nav nav-pills flex-column mb-auto">
                                    <li class="nav-item">
                                        <a href="#1" class="nav-link active" aria-current="page">
                                            <svg class="bi pe-none me-2" width="16" height="16"><use xlink="#home"></use></svg>
                                            Dashboard Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#1" class="nav-link link-dark">
                                            <svg class="bi pe-none me-2" width="16" height="16"><use xlink="#speedometer2"></use></svg>
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#1" class="nav-link link-dark">
                                            <svg class="bi pe-none me-2" width="16" height="16"><use xlink="#speedometer2"></use></svg>
                                            My Order
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#1" class="nav-link link-dark">
                                            <svg class="bi pe-none me-2" width="16" height="16"><use xlink="#speedometer2"></use></svg>
                                            Manage Orders
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#1" class="nav-link link-dark">
                                            <svg class="bi pe-none me-2" width="16" height="16"><use xlink="#table"></use></svg>
                                            Manage Products
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#1" class="nav-link link-dark">
                                            <svg class="bi pe-none me-2" width="16" height="16"><use xlink="#grid"></use></svg>
                                            Add Product
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#1" class="nav-link link-dark">
                                            <svg class="bi pe-none me-2" width="16" height="16"><use xlink="#people-circle"></use></svg>
                                            Add Review
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#1" class="nav-link link-dark">
                                            <svg class="bi pe-none me-2" width="16" height="16"><use xlink="#people-circle"></use></svg>
                                            Customers
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#1" class="nav-link link-dark">
                                            <svg class="bi pe-none me-2" width="16" height="16"><use xlink="#people-circle"></use></svg>
                                            Analysis
                                        </a>
                                    </li>
                                </ul>
                                <hr />
                                <div class="">
                                    <strong>User Name</strong>
                                </div>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
        </>
    );
};

export default Dashboard;