import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from './assets/UserContext'

const PrintingConfirm = ({step, setStep, numCopies, orientation, size, selectedId, selectedPrinter, side, setSide }) => {
    const [openConfModal, setOpenConfModal] = useState(false)
    const [openSucModal, setOpenSucModal] = useState(false)
    const [error, setError] = useState('')
    const { token, loadPrintingHistList, getUserInfo, loadPrinterList, fileList, paper  } = useContext(UserContext)

    const [file, setFile] = useState(fileList.filter(file => file.id === selectedId)[0])

    const navigate = useNavigate()

    function handleConfirmation(event){
        setOpenConfModal(false)
        //console.log(selectedId)
        axios.post('/order/create/', {
            printerId: selectedPrinter.id,
            fileId: selectedId,
            copies: numCopies,
            side: side,
            isPortrait: ((orientation === 'portrait') ? true : false),
            isA4: ((size === 'A4') ? true : false)
        },
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            console.log("Print success")
            setTimeout(() => {
                loadPrintingHistList()
                loadPrinterList()
                getUserInfo()
            }, 700)
            setOpenSucModal(true)
        })
        .catch(error => {
            if (error.response){
                switch(error.response.status){
                    case 400:
                        setError("Lỗi file hoặc không đủ giấy!")
                        break
                    case 404:
                        setError("Không File hoặc máy in không tồn tại!")
                        break
                    default:
                        setError("Lỗi server")
                }
            }
        })
    }

    function lineLayout(left_str, right_str){
        return(
            <>
                <div className="flex justify-between mb-1">
                    <label className="text-base text-gray-500 font-mono">{left_str}</label>
                    <label className="text-base font-mono font-semibold">{right_str}</label>
                </div>
            </>
        )
    }

    function ConfirmationModal(){
        return(
            <div className="w-100vw h-100vh fixed flex justify-center">
                <div className="absolute bg-black w-full h-full opacity-90"></div>
                <div className="h-250px w-400px mx-auto mt-20 bg-white rounded flex flex-col items-center justify-around z-20">
                    <div>
                        <h2 id="title-modal" className="text-2xl font-semibold">Xác nhận in</h2>
                    </div>
                    <div>
                        <p id="body-modal" className="text-xl">Bạn có muốn in không?</p>
                    </div>
                    <div id="footer-modal" className="flex gap-12">
                        <button
                            onClick={e => setOpenConfModal(false)}
                            className="bg-red-500 text-base font-bold text-white py-2 px-3 rounded-lg"
                        >
                            Không in
                        </button>
                        <button
                            className="bg-blue-500 text-base font-bold text-white py-2 px-3 rounded-lg"
                            onClick={handleConfirmation}
                        >
                            Xác nhận in
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    function SuccessNotification(){
        return(
            <div className="w-100vw h-100vh fixed flex justify-center">
                <div className="absolute bg-black w-full h-full opacity-90"></div>
                <div className="h-250px w-400px mx-auto mt-20 bg-white rounded flex flex-col items-center justify-around z-20">
                    <div className='text-xl text-center font-semibold'>
                        <p id="body-modal">Hệ thống đã tiếp nhận yêu cầu</p>
                        <p id="body-modal">Vui lòng đến máy in "{selectedPrinter.name}"</p>
                    </div>
                    <div id="footer-modal" className="flex gap-12">
                        <button
                            className="bg-blue-500 text-base font-bold text-white py-2 px-3 rounded-lg"
                            onClick={e => {
                                setOpenSucModal(false)
                                navigate('/')
                                setStep(1)
                            }}
                        >
                            Đóng
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    function Bill(){
        let paperNeed = 0
        if (side === 2) {
            paperNeed = Math.ceil(file.paper / 2.0)
        } else {
            paperNeed = file.paper
        }
        console.log(paperNeed * numCopies)
        
        if (size !== "A4") paperNeed *= 2
        return(
            <div>
                {lineLayout("Địa điểm máy in", selectedPrinter.name)}
                {lineLayout("Hướng giấy", (orientation === 'portrait') ? "Dọc" : "Ngang" )}
                {lineLayout("Loại giấy", size)}
                {lineLayout("Số mặt", side)}
                <hr className="mt-2 mb-2 border-gray-300" />

                {lineLayout("Số lượng trang cho mỗi bản sao", file.paper )}
                {lineLayout("Số lượng giấy A4 cho mỗi bản sao", paperNeed )}
                {lineLayout("Tổng số bản sao cần in", numCopies)}
                <hr className="mt-2 mb-2 border-gray-300" />
                {lineLayout("Tổng số trang cần in", - paperNeed * numCopies)}
                {lineLayout("Tổng số trang hiện tại", paper)}
                <hr className="mt-2 mb-2 border-gray-300" />

                {lineLayout("Còn lại", paper - paperNeed * numCopies)}
            </div>
        )
    }


  return (
    <div className="flex">
        <div className="mt-10 mx-auto bg-blue-100 rounded-lg p-4 w-400px shadow-2xl">
            <h1 className="mb-4 text-xl font-mono font-semibold ">Xác nhận in</h1>
            <hr className="mt-2 mb-2 border-gray-300" />

            <Bill />

            {error && (
                <div className="text-red-500 font-semibold">
                    {error}
                </div>
            )}
            
            <div className="mt-3 flex flex-col gap-3 items-center">
                <button 
                    id="printing"
                    onClick={e => {
                        if (paper - file.paper * numCopies < 0){
                            setError("Không đủ giấy")
                            return
                        }
                        setOpenConfModal(true)
                    }}
                    className="bg-indigo-600 w-full p-2 rounded-2xl text-white text-lg font-semibold hover:opacity-70"
                >
                    Tiến hành in
                </button>
                <button 
                    id="buying"
                    onClick={e => navigate('/buying')}
                    className="bg-purple-600 w-full p-2 rounded-2xl text-white text-lg font-semibold hover:opacity-70"
                >
                    Mua thêm giấy
                </button>
                <button 
                    id="back"
                    onClick={e => setStep(step - 1)}
                    className="bg-red-600 w-full p-2 rounded-2xl text-white text-lg font-semibold hover:opacity-70"
                >
                    Quay về
                </button>
            </div>
        </div>

        {openConfModal && <ConfirmationModal />}
        {openSucModal && <SuccessNotification />}
    </div>
  )
}

export default PrintingConfirm