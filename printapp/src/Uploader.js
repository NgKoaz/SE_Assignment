import React, { useContext, useState } from 'react'
import { MdCloudUpload } from 'react-icons/md'
import UserContext from './assets/UserContext'
import axios from 'axios'

const Uploader = ({ step, setStep, file, setFile, selectedId, setSelectedId }) => {
    
    
    const [error, setError] = useState("")
    const [deleteId, setDeleteId] = useState(null)
    const { fileList, token, loadFileList } = useContext(UserContext)

    function handleSelection(e, id){
        e.preventDefault()
        setSelectedId(id)
    }

    function handleDeletion(e, id){
        e.preventDefault()
        e.stopPropagation()
        setDeleteId(id)
    }

    async function requestDeletion(e){
        e.preventDefault()
        axios.delete(`/file/delete?id=${deleteId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            console.log(`Delete file ${deleteId} successfully!`)
            loadFileList()
        })
        .catch((err) => {
            if (err.status === 404) {
                console.log("File not found")
            } else {
                console.log("Server's error")
            }
        })
        setSelectedId(null)
        setDeleteId(null)
    }

    function handleUpload(e){
        e.preventDefault();
        if (!e.target.files[0]) return;

        const formData = new FormData();
        formData.append('file', e.target.files[0])

        axios.post('/file/upload', formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data
            },
        })
        .then((res) => {
            console.log("File uploaded successfully")
            loadFileList()
        })
        .catch((err) => {
            console.error("Error uploading file:", err);
        })
    }

    function handleClick(e){
        e.preventDefault()
        if (!selectedId) {
            setError("Vui lòng chọn file.")
            return
        }
        //Move to next step
        setStep(step + 1)
    }


    function FileBox({ id, fileName, fileType }){
        return(
            <div 
                id={id} 
                onClick={e => handleSelection(e, id)}
                className={`flex justify-between items-center p-3 mt-2 mb-2 border-2 ${selectedId === id ? "border-dashed border-blue-500" : "" }`}
            >
                <div className="left flex items-center gap-3">
                    <span className="bg-blue-500 w-12 px-1 py-1 rounded-xl text-white text-base text-center font-semibold">{fileType}</span>
                    <h3 className="text-base font-semibold">{fileName}</h3>
                </div>
                <div className="right flex items-center">
                    <button 
                    onClick={e => handleDeletion(e, id)}
                    className="w-6 h-6 bg-blue-500 text-white text-24px inline-block text-center  font-bold rounded-sm cursor-pointer hover:bg-red-500">&#215;</button>
                </div>
            </div>
        )
    }

    function Modal(){
        return(
            <div className="w-100vw h-100vh fixed flex justify-center">
                <div className="absolute bg-black w-full h-full opacity-60"></div>
                <div className="h-250px w-400px mx-auto mt-20 bg-white rounded flex flex-col items-center justify-around z-20">
                    <div>
                        <h2 id="title-modal" className="text-2xl font-semibold">Xác nhận xóa</h2>
                    </div>
                    <div>
                        <p id="body-modal" className="text-xl">Bạn có muốn xóa file này không?</p>
                    </div>
                    <div id="footer-modal" className="flex gap-12">
                        <button
                            onClick={e => setDeleteId(null)}
                            className="bg-red-500 text-base font-bold text-white py-2 px-3 rounded-lg"
                        >
                            Không xóa
                        </button>
                        <button
                            className="bg-blue-500 text-base font-bold text-white py-2 px-3 rounded-lg"
                            onClick={requestDeletion}
                        >
                            Xác nhận xóa
                        </button>
                    </div>
                </div>
            </div>
        )
    }


  return (
    <div className="mx-auto w-500px flex justify-center">
        <div className="mt-10 w-full bg-white shadow-2xl p-3 rounded-xl">
            <div>
                <h2 className="text-center mb-5 text-xl font-semibold">
                    Tải file mới để in
                </h2>
                <form onChange={e => handleUpload(e)}>
                    <input type="file" id="upload" accept=".doc,.docx,.pdf" hidden />
                    <label  
                        htmlFor="upload"
                        className="w-full min-h-100px border-3 border-dashed border-indigo-500 flex flex-col justify-center items-center cursor-pointer"
                    >
                        <span className="text-50px text-indigo-500">
                            <MdCloudUpload />
                        </span>
                        <p className="text-indigo-500 text-lg font-semibold">Click vào để tải file</p>
                    </label>
                </form>
                <div id="filewrapper">
                    <h3 className="text-xl text-gray-500 font-semibold mt-5 mb-3">File đã tải lên</h3>
                    <div className="pl-2 pr-2 h-80 overflow-y-auto border-2 border-gray-400 rounded-lg">
                        {fileList.length > 0 && fileList.map(fileInfo => (
                            <FileBox key={fileInfo.id} id={fileInfo.id} fileName={fileInfo.fileName} fileType={fileInfo.fileName.split(".").pop()} />
                        ))}
                    </div>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <div className="mt-4 w-full flex items-center justify-center">
                    <button 
                    onClick={e => handleClick(e)}  
                    className="bg-indigo-600 h-10 w-full text-xl font-semibold text-white rounded-2xl hover:opacity-70">
                        Tiếp tục
                    </button>
                </div>
            </div>
        </div>

        {deleteId && <Modal />}
    </div>
  )
}

export default Uploader