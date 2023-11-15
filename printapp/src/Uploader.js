import React, { useState } from 'react'
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'

const Uploader = () => {
  const [file, setFile] = useState(null)
  const [fileName, setFileName] = useState("No selected file")
  return (
    <div className="h-full w-full">
      <form 
        action="" 
        className="flex justify-center items-center border-2 border-dashed border-indigo-600 h-1/2 w-1/2 cursor-pointer"
        onClick={() => document.querySelector(".input-field").click()}  
      >
        <input type="file" accept="" className="input-field" hidden/>

        {file ? 
        (<div>{fileName}</div>) 
        : 
        <MdCloudUpload color='#1475cf' size={60} />
        }

      </form>
    </div>
  )
}

export default Uploader