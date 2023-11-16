import React from 'react'
import { useNavigate } from 'react-router-dom'

const PrintingConfirm = ({step, setStep}) => {
    const navigate = useNavigate()
    function handleClick(e){
        e.preventDefault()
        const clickedButton = e.target
        switch (clickedButton.id){
            case "printing":
                setStep(step + 1)
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

    function lineLayout(left_str, right_str){
        return(
            <>
                <div className="flex justify-between mb-5">
                    <label className="text-xl text-gray-500 font-mono">{left_str}</label>
                    <label className="text-xl font-mono font-semibold">{right_str}</label>
                </div>
            </>
        )
    }

  return (
    <div className="absolute top-1/4 left-1/4 w-500px h-auto">
        <div className="bg-blue-100 rounded-lg p-6 w-full">
            <h1 className="mb-4 text-3xl font-mono font-semibold ">Hóa đơn</h1>
            <hr className="mt-5 mb-5 border-gray-300" />

            <div>
                {lineLayout("Địa điểm máy in", "H6-105")}
                {lineLayout("Hướng giấy", "Dọc")}
                {lineLayout("Loại giấy", "A4")}
                <hr className="mt-5 mb-5 border-gray-300" />

                {lineLayout("Số lượng trang cho mỗi bản sao", "20")}
                {lineLayout("Tổng số bản sao cần in", "5")}
                {lineLayout("Tổng số trang cần in", "100")}
                {lineLayout("Tổng số trang hiện tại", "200")}
                <hr className="mt-5 mb-5 border-gray-300" />

                {lineLayout("Còn lại", "200")}
            </div>
            <div className=" flex flex-col gap-3 items-center">
                <button 
                    id="printing"
                    onClick={e => handleClick(e)}
                    className="bg-indigo-600 w-full h-12 rounded-2xl text-white text-xl font-semibold">
                    
                    Tiến hành in
                </button>
                <button 
                    id="buying"
                    onClick={e => handleClick(e)}
                    className="bg-purple-600 w-full h-12 rounded-2xl text-white text-xl font-semibold">
                    
                    Mua thêm giấy
                </button>
                <button 
                    id="back"
                    onClick={e => handleClick(e)}
                    className="bg-red-600 w-full h-12 rounded-2xl text-white text-xl font-semibold">
                    
                    Quay về
                </button>
            </div>
        </div>        
    </div>  
  )
}

export default PrintingConfirm