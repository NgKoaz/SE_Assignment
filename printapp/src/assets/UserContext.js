import axios from 'axios';
import {createContext, useEffect, useState} from 'react';

const UserContext = createContext({});

export function UserContextProvider({children}){
    const [username, setUsername] = useState('')
    const [token, setToken] = useState('')
    const [isContainToken, setIsContainToken] = useState(false)
    const [userInfo, setUserInfo] = useState(null)
    const [fileList, setFileList] = useState([])
    const [printerList, setPrinterList] = useState([])
    const [printHistList, setPrintHistList] = useState([])
    const [buyHistList, setBuyHistList] = useState([])

    const fileListDef = [
        {
            id: 1,
            fileName: "cc.pdf",
            fileType: "pdf"
        },
        {
            id: 2,
            fileName: "haha.docx",
            fileType: "docx"
        },
        {
            id: 3,
            fileName: "vatli.doc",
            fileType: "doc"
        },
    ]

    
    
    // const printerList = [
    //     {
    //         id: "H6-101-1",
    //         isActive: true,
    //         paperEstimate: 20,
    //         numUsing: 10
    //     },
    //     {
    //         id: "H6-101-2",
    //         isActive: true,
    //         paperEstimate: 50,
    //         numUsing: 3 
    //     },
    //     {
    //         id: "H6-101-3",
    //         isActive: false,
    //         paperEstimate: 100,
    //         numUsing: 2 
    //     },
    //     {
    //         id: "H6-101-4",
    //         isActive: false,
    //         paperEstimate: 10,
    //         numUsing: 1
    //     },
    //     {
    //         id: "H6-101-5",
    //         isActive: false,
    //         paperEstimate: 100,
    //         numUsing: 2 
    //     },
    //     {
    //         id: "H6-101-6",
    //         isActive: true,
    //         paperEstimate: 10,
    //         numUsing: 1
    //     },
    // ]

    // const printHistList = [
    //     {
    //         timestamp: "11:56:27 18/11/2023",
    //         fileName: "cc.docx",
    //         copies: 20,
    //         printedPaper: 40,
    //         remainingPaper: 20
    //     },
    //     {
    //         timestamp: "11:56:27 18/11/2023",
    //         fileName: "cc.docx",
    //         copies: 20,
    //         printedPaper: 40,
    //         remainingPaper: 20
    //     },
    //     {
    //         timestamp: "11:56:27 18/11/2023",
    //         fileName: "cc.docx",
    //         copies: 20,
    //         printedPaper: 40,
    //         remainingPaper: 20
    //     },
    //     {
    //         timestamp: "11:56:27 18/11/2023",
    //         fileName: "cc.docx",
    //         copies: 20,
    //         printedPaper: 40,
    //         remainingPaper: 20
    //     },
    //     {
    //         timestamp: "11:56:27 18/11/2023",
    //         fileName: "cc.docx",
    //         copies: 20,
    //         printedPaper: 40,
    //         remainingPaper: 20
    //     },
    //     {
    //         timestamp: "11:56:27 18/11/2023",
    //         fileName: "cc.docx",
    //         copies: 20,
    //         printedPaper: 40,
    //         remainingPaper: 20
    //     },
    // ]

    // const buyHistList = [
    //     {
    //         timestamp: "11:56:27 18/11/2023",
    //         quantity: 20,
    //         cost: 12000
    //     },
    //     {
    //         timestamp: "11:56:27 11/11/2023",
    //         quantity: 20,
    //         cost: 12000
    //     },
    //     {
    //         timestamp: "11:56:27 12/11/2023",
    //         quantity: 20,
    //         cost: 12000
    //     },
    //     {
    //         timestamp: "11:56:37 18/11/2023",
    //         quantity: 20,
    //         cost: 12000
    //     },
    //     {
    //         timestamp: "11:06:27 18/11/2023",
    //         quantity: 20,
    //         cost: 12000
    //     },
    //     {
    //         timestamp: "11:56:37 18/11/2023",
    //         quantity: 20,
    //         cost: 12000
    //     },
    //     {
    //         timestamp: "11:06:27 18/11/2023",
    //         quantity: 20,
    //         cost: 12000
    //     },
    // ]

    useEffect(()=>{
        setToken(localStorage.getItem('accessToken'))
        
    }, [])

    useEffect(() => {
        if (!token) return;
        let isError = false;
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
            }
            console.log("Get user Info success");
        })
        .catch(error => {
            isError = true;
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
        if (isError) return;




        // Load file List
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
            }
            console.log("File list success");
        })
        .catch(error => {
            if (error.response) {
                console.error('Cannot load file list', error.message)
            }
        })



        // Load printer list
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
            }
            console.log("File list success");
        })
        .catch(error => {
            if (error.response) {
                console.error('Cannot load file list', error.message)
            }
        })




        // Load printing history list
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
            }
            console.log("Get printing list success");
        })
        .catch(error => {
            if (error.response) {
                console.error('Cannot load printing list', error.message);
            }
        })





        // Load buying history list
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
            }
            console.log("Get buying list success");
        })
        .catch(error => {
            if (error.response) {
                console.error('Cannot load purchasing list', error.message);
            }
        })
    }, [token]);

    return(
        <UserContext.Provider value={{ username, setUsername, fileList, setFileList, printerList, printHistList, buyHistList, isContainToken, setIsContainToken, token, setToken }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;