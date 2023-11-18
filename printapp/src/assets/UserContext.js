import axios from 'axios';
import {createContext, useEffect, useState} from 'react';

const UserContext = createContext({});

export function UserContextProvider({children}){
    const [username, setUsername] = useState('');

    

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

    const [fileList, setFileList] = useState(fileListDef);
    
    const printerList = [
        {
            id: "H6-101-1",
            isActive: true,
            paperEstimate: 20,
            numUsing: 10
        },
        {
            id: "H6-101-2",
            isActive: true,
            paperEstimate: 50,
            numUsing: 3 
        },
        {
            id: "H6-101-3",
            isActive: false,
            paperEstimate: 100,
            numUsing: 2 
        },
        {
            id: "H6-101-4",
            isActive: false,
            paperEstimate: 10,
            numUsing: 1
        },
        {
            id: "H6-101-5",
            isActive: false,
            paperEstimate: 100,
            numUsing: 2 
        },
        {
            id: "H6-101-6",
            isActive: true,
            paperEstimate: 10,
            numUsing: 1
        },
    ]

    const printHistList = [
        {
            timestamp: "11:56:27 18/11/2023",
            fileName: "cc.docx",
            copies: 20,
            printedPaper: 40,
            remainingPaper: 20
        },
        {
            timestamp: "11:56:27 18/11/2023",
            fileName: "cc.docx",
            copies: 20,
            printedPaper: 40,
            remainingPaper: 20
        },
        {
            timestamp: "11:56:27 18/11/2023",
            fileName: "cc.docx",
            copies: 20,
            printedPaper: 40,
            remainingPaper: 20
        },
        {
            timestamp: "11:56:27 18/11/2023",
            fileName: "cc.docx",
            copies: 20,
            printedPaper: 40,
            remainingPaper: 20
        },
        {
            timestamp: "11:56:27 18/11/2023",
            fileName: "cc.docx",
            copies: 20,
            printedPaper: 40,
            remainingPaper: 20
        },
        {
            timestamp: "11:56:27 18/11/2023",
            fileName: "cc.docx",
            copies: 20,
            printedPaper: 40,
            remainingPaper: 20
        },
    ]

    const buyHistList = [
        {
            timestamp: "11:56:27 18/11/2023",
            quantity: 20,
            cost: 12000
        },
        {
            timestamp: "11:56:27 11/11/2023",
            quantity: 20,
            cost: 12000
        },
        {
            timestamp: "11:56:27 12/11/2023",
            quantity: 20,
            cost: 12000
        },
        {
            timestamp: "11:56:37 18/11/2023",
            quantity: 20,
            cost: 12000
        },
        {
            timestamp: "11:06:27 18/11/2023",
            quantity: 20,
            cost: 12000
        },
        {
            timestamp: "11:56:37 18/11/2023",
            quantity: 20,
            cost: 12000
        },
        {
            timestamp: "11:06:27 18/11/2023",
            quantity: 20,
            cost: 12000
        },
    ]

    useEffect(() => {
        axios.get('/profile').then(response => {
            if (!response.data.username){
                setUsername('');
            } else {
                setUsername(response.data.username);
            }
            console.log(username);
        })
    }, []);

    return(
        <UserContext.Provider value={{ username, setUsername, fileList, setFileList, printerList, printHistList, buyHistList }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;