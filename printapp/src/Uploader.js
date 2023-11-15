import React, { useState } from 'react'
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'

const Uploader = ({ step, setStep }) => {
  const [file, setFile] = useState(null)
  const [fileName, setFileName] = useState("No selected file")

  function handleSubmit(e){
    e.preventDefault()
    setStep(step + 1)
  }

  return (
    <div className="h-1/2 w-1/2 absolute top-1/4 left-1/4 bg-gray-100">
        <div className="h-1/6 w-full bg-white shadow-lg drop-shadow-xl rounded-lg flex flex-row justify-center">
            <button className="h-3/5 w-32 text-lg font-semibold text-white bg-indigo-600 rounded-full">Tải file mới</button>
            <button className="h-3/5 w-32 bg-white rounded-full">File đã tải</button> 
        </div>
        <form 
            action="" 
            className="flex justify-center items-center border-2 border-dashed border-indigo-600 h-4/6 w-full cursor-pointer"
            onClick={() => document.querySelector(".input-field").click()}  
        >
            <input 
            type="file" 
            accept="" 
            className="input-field" 
            hidden
            onChange={({target: {files}}) => {
                files[0] && setFileName(files[0].name)
                if (files){
                setFile(URL.createObjectURL(files[0]))
                }
            }}
            />

            {file ? 
            (<div>{fileName}</div>) 
            : 
            <>
            <MdCloudUpload color='#1475cf' size={60} />
            <br />
            <p>Bấm vào để tải file</p>
            </>
            }
        </form>
        <div className="bg-white h-1/6 w-full flex items-center justify-center">
            <button 
            onClick={e => handleSubmit(e)}
            className="bg-indigo-600 h-1/2 w-1/4 text-xl font-semibold text-white rounded-2xl">
            Tiếp tục
            </button>
        </div>
    </div>
  )
}

export default Uploader