import React from 'react'

const PrinterInfo = ({id, printer, setPrinter}) => {

    function handleClick(e){
        e.preventDefault()
        setPrinter(id)  
    }

  return (
    <div 
        id={id}
        onClick={e => handleClick(e)}
        className={`m-5 h-52 w-96 bg-white rounded-2xl flex flex-col justify-between ${printer === id ? "border-4 border-dashed border-indigo-600" : ""}`}
    >
        <div className="flex justify-between p-5">
            <label className="text-3xl font-semibold">{id}</label>
            <div className="inline-block bg-green-500 pl-4 pr-4 pt-2 pb-2 rounded-2xl text-base font-semibold text-white">Đang hoạt động</div>
        </div>

        <div className="flex justify-between">
            <div className="p-4 w-2/5">
                <div className="mb-1 text-base">Mức giấy</div>
                <div className="w-full pl-4 pr-4 pt-2 pb-2 bg-red-500 text-base text-white font-semibold rounded-2xl">Còn ~20 tờ</div>
            </div>
            <div className="p-4 w-2/5">
                <div className="mb-1 text-base">Đang in</div>
                <div className="w-full pl-4 pr-4 pt-2 pb-2 bg-yellow-400 text-base text-white font-semibold rounded-2xl">8 người</div>
            </div>
        </div>

        
    </div>
  )
}

export default PrinterInfo