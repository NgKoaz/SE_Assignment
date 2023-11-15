import React, { useContext } from 'react'
import UserContext from './assets/UserContext';
import HomePage from './HomePage'
import Printing from './Printing'
import Buying from './Buying'
import Form from './Form'
import { Route, Routes } from 'react-router-dom'
import NavBar from './NavBar';
import axios from 'axios';
import ErrorPage from './ErrorPage';

const Main = () => {
    const {username, setUsername} = useContext(UserContext);

    if (username !== '') {
        return(
            <div className="h-screen">
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/printing" element={<Printing />} />
                    <Route path="/buying" element={<Buying />} />
                    <Route path="/*" element={<ErrorPage />} />
                </Routes>
            </div>
        )
    } else {
        return (
            <Form />
        )
    }   
}

export default Main