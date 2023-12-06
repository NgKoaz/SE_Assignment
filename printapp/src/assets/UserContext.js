import axios from 'axios';
import {createContext, useEffect, useState} from 'react';

const UserContext = createContext({});

export function UserContextProvider({children}){
    const [username, setUsername] = useState('')
    const [paper, setPaper] = useState(0)
    const [token, setToken] = useState('')
    const [userInfo, setUserInfo] = useState(null)
    const [fileList, setFileList] = useState([])
    const [printerList, setPrinterList] = useState([])
    const [printHistList, setPrintHistList] = useState([])
    const [buyHistList, setBuyHistList] = useState([])


    useEffect(() => {
        if (!userInfo) {
            setUsername('') 
            setPaper('')
            return
        }
        setUsername(userInfo.userName) 
        setPaper(userInfo.paper) 
    }, [userInfo])

    async function getUserInfo(){
        if (!token) {
            setUserInfo(null)
            return
        }
        axios.get('/user/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            if (!response.data.user) {
                setUserInfo(null);
            } else {
                setUserInfo(response.data.user);
                console.log(response.data.user)
                console.log("Get user Info success");
            }
        })
        .catch(error => {
            if (error.response) {
            // Request đã được gửi, và server trả về status code không 2xx
                console.error('Error response:', error.response.data);
                console.error('Status code:', error.response.status);
            } else if (error.request) {
            // Request đã được gửi nhưng không có phản hồi từ server
                console.error('No response received:', error.request);
            } else {
            // Có lỗi xảy ra khi thiết lập request
                console.error('Error setting up the request:', error.message);
            }
        })
    }

    async function loadFileList(){
        if (!token) return
        axios.get('/file/get/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            if (!response.data.list) {
                console.log("File list hasn't found!")
            } else {
                setFileList(response.data.list);
                console.log(response.data.list);
                console.log("File list success");
            }
        })
        .catch(error => {
            if (error.response) {
                console.error('Cannot load file list', error.message)
            }
        })
    }


    async function loadPrinterList(){
        if (!token) return
        axios.get('/printer/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            if (!response.data.list) {
                console.log("Printer list hasn't found!")
            } else {
                setPrinterList(response.data.list);
                console.log(response.data.list);
                console.log("Get printer successfully!")
            }
        })
        .catch(error => {
            if (error.response) {
                console.error('Cannot load printer list', error.message)
            }
        })
    }


    async function loadPrintingHistList(){
        if (!token) return
        axios.get('/order/history/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            if (!response.data.list) {
                console.log("Printing history list hasn't found!")
            } else {
                setPrintHistList(response.data.list);
                console.log(response.data.list);
                console.log("Get printing list success");
            }
        })
        .catch(error => {
            if (error.response) {
                console.error('Cannot load printing list', error.message);
            }
        })
    }

    async function loadBuyingHistList(){
        if (!token) return
        axios.get('/user/purchase-history/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            if (!response.data.list) {
                console.log("Buying history list hasn't found!")
            } else {
                setBuyHistList(response.data.list);
                console.log(response.data.list);
                console.log("Get buying list success");
            }
        })
        .catch(error => {
            if (error.response) {
                console.error('Cannot load purchasing list', error.message);
            }
        })
    }

    useEffect(()=>{
        setToken(localStorage.getItem('accessToken'))
        
    }, [])

    useEffect(() => {
        getUserInfo()

        // Load file List
        loadFileList()
        // Load printer list
        loadPrinterList()
        // Load printing history list
        loadPrintingHistList()
        // Load buying history list
        loadBuyingHistList()
    }, [token]);

    return(
        <UserContext.Provider value={{ 
            username, setUsername, fileList, setFileList, 
            printerList, printHistList, buyHistList, 
            token, setToken,
            loadFileList, loadBuyingHistList,
            paper, getUserInfo
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;