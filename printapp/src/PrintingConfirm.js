import React from 'react'
import { useNavigate } from 'react-router-dom'

const PrintingConfirm = ({step, setStep}) => {
    const navigate = useNavigate()
    function handleButton(e){
        e.preventDefault()
        const val = e.target.value
        switch (val){
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


  return (
    <div className="absolute top-1/4 left-1/4 w-1/2 h-auto">
        <div className="bg-blue-100 rounded-lg p-3 w-full">
            <h1 className="text-3xl font-semibold mb-4">Hóa đơn</h1>
            <hr className="mt-5 mb-5 border-gray-300" />

            <div>
                <label className="text-xl font-semibold">Địa điểm máy in</label>
                <br />

                <label className="text-xl font-semibold">Hướng giấy</label>
                <br />

                <label className="text-xl font-semibold">Loại giấy</label>
                <br />

                <label className="text-xl font-semibold">Số lượng trang cho mỗi bản sao</label>
                <br />

                <label className="text-xl font-semibold">Tổng số bản sao cần in</label>
                <br />

                <label className="text-xl font-semibold">Tổng số trang cần in/label</label>
                <br />

                <label className="text-xl font-semibold">Tổng số trang hiện tại</label>
                <br />

                <label className="text-xl font-semibold">Còn lại</label>
                <br />
            </div>
            <div className="flex flex-col gap-2 items-center">
                <form onSubmit={e => handleButton(e)}>
                    <button 
                        value="printing"
                        className="bg-indigo-600 w-2/5 h-12 rounded-2xl text-white text-xl font-semibold">
                            
                        Tiến hành in
                    </button>
                    <button 
                        value="buying"
                        className="bg-purple-600 w-2/5 h-12 rounded-2xl text-white text-xl font-semibold">
                        
                        Mua thêm giấy
                    </button>
                    <button 
                        value="back"
                        className="bg-red-600 w-2/5 h-12 rounded-2xl text-white text-xl font-semibold">
                        
                        Quay về
                    </button>
                </form>
            </div>
        </div>        
    </div>  
  )
}

export default PrintingConfirm