import React from 'react'
import {Outlet} from "react-router-dom";

const AuthLayout = ()=> {

    return (
        <div className= 'bg-gray-300 min-h-screen flex items-center justify-center p-6'>
            <Outlet/>
        </div>
    )
}

export default AuthLayout