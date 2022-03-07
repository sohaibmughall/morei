import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../app/layout';
import Dashboard from './../screens/Dashboard/Dashboard';

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        {/* <Route path="expenses" element={<Expenses />} />
                        <Route path="invoices" element={<Invoices />} /> */}
                    </Routes>

                </Layout>
            </BrowserRouter>

        </>
    );
}
