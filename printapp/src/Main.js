import React, { useContext } from 'react'
import UserContext from './assets/UserContext';
import History from './History'
import Printing from './Printing'
import Buying from './Buying'
import Form from './Form'
import { Route, Routes } from 'react-router-dom'
import NavBar from './NavBar';
import ErrorPage from './ErrorPage';

const Main = () => {
    const { token } = useContext(UserContext);

    if (token) {
        return(
            <div className="h-screen">
                <NavBar />
                <Routes>
                    <Route path="/" element={<Printing />} />
                    <Route path="/buying" element={<Buying />} />
                    <Route path="/history" element={<History />} />
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