import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { LoginPage } from '../components/login/LoginPage';
import { DashboardRouters } from './DashboardRouters';
import { AuthContext } from '../auth/AuthContext';

export const AppRouter = () => {

    const {user} = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={LoginPage} 
                        isAuthenticated={user.logged}
                    />

                    <PrivateRoute 
                        path="/" 
                        component={DashboardRouters} 
                        isAuthenticated={user.logged}
                    />
                </Switch>
            </div>
        </Router>
    )
}
