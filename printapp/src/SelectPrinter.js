import React, { useState } from 'react'
import PrinterInfo from './PrinterInfo'

const SelectPrinter = ({ step, setStep }) => {
    const [numCopies, setNumCopies] = useState(1)
    const [printer, setPrinter] = useState(null)
    const [isAutoSelect, setIsAutoSelect] = useState(true)

    function handleSelectMethod(e){
        const clickedButton = e.target
        
        switch (clickedButton.id){
            case "auto-sel":
                setIsAutoSelect(true)
                setPrinter(null)
                break
            case "man-sel":
                setIsAutoSelect(false)
                break
            default:
        }
    }

    function handleClick(e){
        e.preventDefault()
        const clickedButton = e.target
        
        switch (clickedButton.id){
            case "back":
                setStep(step - 1)
                break
            case "continue":
                setStep(step + 1)
                break
            default:
        }
    }

  return (
    <div className="w-full h-auto flex justify-center">
        <div className="relative top-10">
            <div className="flex gap-10">
                <form className="w-500px font-mono">
                    <div className="bg-blue-100 rounded-lg p-3 w-full">
                        <div className="flex">
                            <label className="w-2/5 text-xl font-semibold place-self-center">Printer</label>
                            <ul className="flex gap-12">
                                <li>
                                    <input 
                                        type="radio" 
                                        name="select_method" 
                                        id="auto-sel"
                                        checked={isAutoSelect}
                                        onClick={e => handleSelectMethod(e)}
                                    />
                                    <label for="auto-sel" className="ml-2 text-lg">Tự động chọn</label>
                                </li>
                                <li>
                                    <input 
                                        type="radio" 
                                        name="select_method" 
                                        id="man-sel"
                                        checked={!isAutoSelect}
                                        onClick={e => handleSelectMethod(e)}
                                    />
                                    <label for="man-sel" className="ml-2 text-lg">Chọn thủ công</label>
                                </li>
                            </ul>
                        </div>
                        <br />

                        <div className="flex">
                            <label className="w-2/5 text-xl font-semibold place-self-center">Số lượng bản sao</label>
                            <input 
                                type="text" 
                                value={numCopies}
                                onChange={e => setNumCopies(e.target.value)}
                                className="text-lg border-2 rounded-lg w-3/5 h-12 mt-2 mb-2 p-2 hover:border-gray-600"
                            />
                        </div>
                        <br />

                        <div className="flex mb-5">
                            <label className="w-2/5 text-xl font-semibold place-self-center">Hướng giấy</label>
                            <ul className="flex gap-12">
                                <li>
                                    <input type="radio" name="orientation" id="portrait" value="portrait" />
                                    <label for="portrait" className="ml-2 text-lg">Dọc</label>
                                </li>
                                <li>
                                    <input type="radio" name="orientation" id="landscape" value="landscape" />
                                    <label for="landscape" className="ml-2 text-lg">Ngang</label>
                                </li>
                            </ul>
                        </div>

                        <div className="flex mb-3">
                            <label className="w-2/5 text-xl font-semibold place-self-center">Khổ giấy</label>
                            <ul className="flex gap-12">
                                <li>
                                    <input type="radio" name="paper-size" id="a4" value="a4" />
                                    <label for="a4" className="ml-2 text-lg">A4</label>
                                </li>
                                <li>
                                    <input type="radio" name="paper-size" id="a3" value="a3" />
                                    <label for="a3" className="ml-2 text-lg">A3</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </form>
            
                <div className={`h-116 w-850px bg-blue-100 rounded-xl grid grid-cols-2 border-4 border-blue-100 overflow-y-auto ${isAutoSelect ? "opacity-50 pointer-events-none" : ""}`}>
                    <PrinterInfo 
                        id={"H6-101-1"}
                        printer={printer}
                        setPrinter={setPrinter}
                    />
                    <PrinterInfo 
                        id={"H6-101-2"}
                        printer={printer}
                        setPrinter={setPrinter}
                    />
                    <PrinterInfo 
                        id={"H6-101-3"}
                        printer={printer}
                        setPrinter={setPrinter}
                    />
                    <PrinterInfo 
                        id={"H6-101-4"}
                        printer={printer}
                        setPrinter={setPrinter}
                    />
                    <PrinterInfo 
                        id={"H6-101-5"}
                        printer={printer}
                        setPrinter={setPrinter}
                    />
                    <PrinterInfo 
                        id={"H6-101-6"}
                        printer={printer}
                        setPrinter={setPrinter}
                    />
                </div>
            </div>

            <div>
                <div className="buttons flex flex-row justify-around mt-20">
                    <button 
                        id="back"
                        onClick={e => handleClick(e)}
                        className="bg-red-600 w-2/5 h-12 rounded-2xl text-white text-xl font-semibold">
                        Quay về
                    </button >
                    <button 
                        id="continue"
                        onClick={e => handleClick(e)}
                        className="bg-indigo-600 w-2/5 h-12 rounded-2xl text-white text-xl font-semibold">
                        Tiếp tục
                    </button>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default SelectPrinter