import React, { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom";
import { Navbar } from '../components/Navbar'
import { SecondaryNavbar } from '../components/SecondaryNavbar';
import { Login } from './components/Login';
import { Signup } from './components/Signup';

const OAuthMessage={
    "GOOGLE_AUTH_FAILED":"Google authentication failed. Please try again.",
    "SERVER_ERROR":"Sorry! Problem at out end! Please try again after sometime.",
    "EMAIL_IS_NOT_REGISTERED":"Kindly Signup first!",
    "GOOGLE_ACCOUNT_MISMATCH":"Sorry your google account doesn't match, Raise a support ticker!"
}
export const Auth = () => {
    const [current, setCurrent] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();

    const secondaryNavItems = ["Login", "Signup"];

    const handleQueryParams = () => {
        const error = searchParams.get("error");
        const token = searchParams.get("token");

        if (error) {
            alert(OAuthMessage[error]);
            setSearchParams({}, { replace: true });
            return;
        }

        if (token) {
            console.log("TOKEN: ",token);
            sessionStorage.setItem("googleTempToken", token);
            setSearchParams({}, { replace: true });
            return;
        }
    };

    useEffect(() => {
        handleQueryParams();
    }, []);
    return (
        <>
            <div className='flex flex-col justify-center h-[100vh] w-[100vw] p-[1rem]'>
                <div className='h-[10vh]'>
                    <Navbar />
                </div>
                <div className='p-[1rem]'>
                    <SecondaryNavbar List={secondaryNavItems} current={current} setCurrent={setCurrent} />
                </div>
                <div className='flex-1 w-full h-full p-[1rem]'>
                    {current === 0 && (
                        <Login />
                    )}
                    {current === 1 && (
                        <Signup />
                    )}
                </div>
            </div>
        </>
    )
}
