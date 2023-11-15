import React from 'react'

const SelectPrinter = ({ step, setStep }) => {
    
    function handleForm(e){
        e.preventDefault()
        console.log(e.target.value)
        if (e.target.value === 'back')
            setStep(step - 1)
        else {
            setStep(step + 1)
        }
    }

  return (
    <div className="absolute top-1/4 left-1/4 w-1/2 h-2/3 ">
        <form className="w-full" onSubmit={e => handleForm(e)}>
            <div className="bg-blue-100 rounded-lg p-3 w-full h-2/3">
                <label className="text-xl font-semibold">Printer</label>
                <select>
                    <option>Chọn ngẫu nhiên</option>
                </select>
                <br />

                <label className="text-xl font-semibold">Số lượng bản sao</label>
                <input 
                    type="text" 
                    
                    className="text-base border-2 rounded-lg w-1/2 h-12 mt-2 mb-2 p-2 hover:border-gray-600"
                />
                <br />

                <label className="text-xl font-semibold">Hướng giấy</label>
                <ul className="flex flex-auto">
                    <li>
                        <input type="radio" name="orientation" id="portrait" value="portrait" />
                        <label for="portrait">Dọc</label>
                    </li>
                    <li>
                        <input type="radio" name="orientation" id="landscape" value="landscape" />
                        <label for="landscape">Ngang</label>
                    </li>
                </ul>

                <label className="text-xl font-semibold">Khổ giấy</label>
                <ul className="flex flex-auto">
                    <li>
                        <input type="radio" name="paper-size" id="a4" value="a4" />
                        <label for="a4">A4</label>
                    </li>
                    <li>
                        <input type="radio" name="paper-size" id="a3" value="a3" />
                        <label for="a3">A3</label>
                    </li>
                </ul>
            </div>
            <div className="flex flex-row justify-around mt-5">
                <button 
                    value="continue"
                    className="bg-indigo-600 w-2/5 h-12 rounded-2xl text-white text-xl font-semibold">
                    
                    Tiếp tục
                </button>
            </div>
        </form>
        <button 
            value="back"
            className="bg-red-600 w-2/5 h-12 rounded-2xl text-white text-xl font-semibold">
            Quay về
        </button >
        
        
    </div> 
  )
}

export default SelectPrinter