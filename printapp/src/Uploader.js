import React, { useState } from 'react'
import { MdCloudUpload } from 'react-icons/md'

const Uploader = ({ step, setStep }) => {
    const [file, setFile] = useState(null)
    const [fileName, setFileName] = useState("No selected file")

    const [slideButton, setSlideButton] = useState(0) //0 - Upload | 1 - already uploaded file

    function handleClick(e){
        e.preventDefault()
        const clickedButton = e.target
        const otherButton = clickedButton.nextElementSibling || clickedButton.previousElementSibling
        clickedButton.className = "w-32 text-lg text-white bg-indigo-600 font-semibold rounded-full"
        otherButton.className = "w-32 bg-white text-indigo-600 text-lg font-semibold rounded-full"
        if (clickedButton.id === "upload") setSlideButton(0)
        else setSlideButton(1)
    }


    function handleSubmit(e){
        e.preventDefault()
        setStep(step + 1)
    }

  return (
    <div className="w-full bg-blue-400">
        <div className="h-1/2 w-1/2 absolute top-1/4 left-1/4 bg-white shadow-inner">
            <div className="h-1/6 w-full shadow-lg drop-shadow-xl flex flex-row justify-center items-center rounded-xl">
                <div className="bg-gray-400 shadow-inner h-16 w-80 flex justify-center rounded-full">
                    <div className="h-full items-center">
                        <button id="upload" className="w-36 pt-3 pb-3 text-lg text-white bg-indigo-600 font-semibold rounded-full" onClick={e => handleClick(e)}>Tải file mới</button>
                        <button id="oldfile" className="w-36 pt-3 pb-3 bg-white text-indigo-600 text-lg font-semibold rounded-full" onClick={e => handleClick(e)}>File đã tải</button> 
                    </div>
                </div>
            </div>
            
            
            {slideButton ? 
                (<></>)
            :
                (<form 
                    action="" 
                    className="flex justify-center items-center border-2 border-dashed border-indigo-600 h-4/6 w-full cursor-pointer"
                    onSubmit={() => document.querySelector(".input-field").click()}  
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
                        console.log(file)
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
                </form>)
            }


            <div className="bg-white h-1/6 w-full flex items-center justify-center">
                <button 
                onClick={e => handleSubmit(e)}  
                className="bg-indigo-600 h-1/2 w-1/4 text-xl font-semibold text-white rounded-2xl">
                    Tiếp tục
                </button>
            </div>
        </div>
    </div>
  )
}

export default Uploader