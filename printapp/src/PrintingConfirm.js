import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from './assets/UserContext'

const PrintingConfirm = ({step, setStep, file, numCopies, orientation, size, selectedId }) => {
    const [openConfModal, setOpenConfModal] = useState(false)
    const [openSucModal, setOpenSucModal] = useState(false)
    const { token } = useContext(UserContext)
    const navigate = useNavigate()

    function handleClick(e){
        e.preventDefault()
        const clickedButton = e.target
        switch (clickedButton.id){
            case "printing":
                //Open confirmation modal
                setOpenConfModal(true)
                break
            case "buying":
                navigate('/buying')
                break
            case "back":
                setStep(step - 1)
                break
            default:
                navigate('/errorpage')
        }
    }

    function handleConfirmation(event){
        setOpenConfModal(false)

        axios.post('/order/create/', {
            printerId: 1,
            fileId: selectedId,
            copies: numCopies,
            isPortrait: ((orientation === 'portrait') ? true : false),
            isA4: ((size === 'A4') ? true : false),
        },
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            console.log("Print success")
        })
        .catch(error => {
           
        })
                                
        setOpenSucModal(true)
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
                <div className="absolute bg-black w-full h-full opacity-60"></div>
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
                <div className="absolute bg-black w-full h-full opacity-60"></div>
                <div className="h-250px w-400px mx-auto mt-20 bg-white rounded flex flex-col items-center justify-around z-20">
                    <div>
                        <p id="body-modal" className="text-xl text-center">Hệ thống đã tiếp nhận<br />Hãy đến máy in đã chọn.</p>
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


  return (
    <div className="flex">
        <div className="mt-10 mx-auto bg-blue-100 rounded-lg p-4 w-400px shadow-2xl">
            <h1 className="mb-4 text-xl font-mono font-semibold ">Xác nhận in</h1>
            <hr className="mt-2 mb-2 border-gray-300" />

            <div>
                {lineLayout("Địa điểm máy in", "H6-105")}
                {lineLayout("Hướng giấy", (orientation === 'portrait') ? "Dọc" : "Ngang" )}
                {lineLayout("Loại giấy", size)}
                <hr className="mt-2 mb-2 border-gray-300" />

                {lineLayout("Số lượng trang cho mỗi bản sao", "20")}
                {lineLayout("Tổng số bản sao cần in", numCopies)}
                {lineLayout("Tổng số trang cần in", "100")}
                {lineLayout("Tổng số trang hiện tại", "200")}
                <hr className="mt-2 mb-2 border-gray-300" />

                {lineLayout("Còn lại", "100")}

            </div>
            <div className="mt-3 flex flex-col gap-3 items-center">
                <button 
                    id="printing"
                    onClick={e => handleClick(e)}
                    className="bg-indigo-600 w-full p-2 rounded-2xl text-white text-lg font-semibold hover:opacity-70"
                >
                    Tiến hành in
                </button>
                <button 
                    id="buying"
                    onClick={e => handleClick(e)}
                    className="bg-purple-600 w-full p-2 rounded-2xl text-white text-lg font-semibold hover:opacity-70"
                >
                    Mua thêm giấy
                </button>
                <button 
                    id="back"
                    onClick={e => handleClick(e)}
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