import React from 'react'


const PrinterInfo = ({id, name, location, isActive, paperEstimate, TaskCount, selectedPrinter, setSelectedPrinter}) => {

    function handleClick(e){
        e.preventDefault()
        setSelectedPrinter({id: id, name: `${location}-${name}`})  
    }

  return (
    <div 
        id={id}
        onClick={e => handleClick(e)}
        className={`m-3 h-44 w-96 bg-white rounded-2xl flex flex-col justify-between shadow-xl ${selectedPrinter.id === id ? "border-4 border-dashed border-indigo-600" : ""}`}
    >
        <div className="flex justify-between p-3">
            <label className="text-3xl font-semibold">{`${location}-${name}`}</label>
            <div className={`inline-block pl-4 pr-4 pt-2 pb-2 rounded-2xl text-base font-semibold text-white ${isActive ? "bg-green-500" : "bg-red-500"}`}>
                {isActive ? "Đang hoạt động" : "Không hoạt động"}
                </div>
        </div>

        <div className={`flex justify-between p-3 text-base ${!isActive ? "hidden" : ""}`}>
            <div className="">
                <div className="mb-1 font-semibold">Mức giấy</div>
                <div className={`w-full pl-4 pr-4 pt-2 pb-2 text-white font-semibold rounded-2xl ${(paperEstimate >= 400) ? "bg-green-500" : (paperEstimate >= 200) ? "bg-yellow-400" : "bg-red-500" }`}>Còn ~{paperEstimate} tờ</div>
            </div>
            <div className="">
                <div className="mb-1 font-semibold">Đang in</div>
                <div className={`w-full pl-4 pr-4 pt-2 pb-2 text-white font-semibold rounded-2xl ${(TaskCount <= 1) ? "bg-green-500" : (TaskCount <= 2) ? "bg-yellow-400" : "bg-red-500"}`}>{TaskCount} công việc</div>
            </div>
        </div>

        
    </div>
  )
}

export default PrinterInfo