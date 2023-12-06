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

    function setCookie(name, value, daysToExpire) {
        const date = new Date();
        date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }
        
    function getCookie(name) {
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookies = decodedCookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
            }
            if (cookie.indexOf(name + "=") === 0) {
            return cookie.substring(name.length + 1, cookie.length);
            }
        }
        return null;
    }

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
                console.log("Get user Info success");
            }
        })
        .catch(error => {
            if (error.response){
                switch (error.response.status){
                    case 404:
                        setCookie('token', '', 1)
                        setToken('')
                        break
                    default:
                        console.log("Lỗi từ server!")
                }
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
                setFileList(response.data.list.reverse());
                console.log(response.data.list) 
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
        axios.get('/printer/list', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            if (!response.data.list) {
                console.log("Printer list hasn't found!")
            } else {
                setPrinterList([...response.data.list].sort((a, b) => b.ActiveStatus - a.ActiveStatus))
                console.log(printerList)
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
                console.log("Get buying list success");
            }
        })
        .catch(error => {
            if (error.response) {
                console.error('Cannot load purchasing list', error.message);
            }
        })
    }

    async function loadAllList(){
        // Load file List
        loadFileList()
        // Load printer list
        loadPrinterList()
        // Load printing history list
        loadPrintingHistList()
        // Load buying history list
        loadBuyingHistList()
    }

    useEffect(()=>{
        setToken(getCookie("token"))
    }, [])

    useEffect(() => {
        getUserInfo()

        loadAllList()
    }, [token]);

    return(
        <UserContext.Provider value={{ 
            username, setUsername, fileList, setFileList, 
            printerList, printHistList, buyHistList, 
            token, setToken, loadPrintingHistList,
            loadPrinterList, 
            loadFileList, loadBuyingHistList,
            loadAllList,
            paper, getUserInfo, setCookie,
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;