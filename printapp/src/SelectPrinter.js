import React, { useContext, useState } from 'react'
import PrinterInfo from './PrinterInfo'
import UserContext from './assets/UserContext'

const SelectPrinter = ({ 
        step, setStep, numCopies, setNumCopies, 
        selectedPrinter, setSelectedPrinter, 
        isAutoSelect, setIsAutoSelect,
        orientation, setOrientation,
        size, setSize
    }) => {

    const [error, setError] = useState('')

    const { printerList } = useContext(UserContext)

    function handleSelectMethod(e){
        const clickedButton = e.target
        
        switch (clickedButton.id){
            case "auto-sel":
                setIsAutoSelect(true)
                setSelectedPrinter(null)
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
                if (!isAutoSelect && !selectedPrinter){
                    setError("Vui lòng chọn máy in")
                    return
                }
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
                    <div className="bg-blue-50 rounded-lg p-3 w-full shadow-2xl">
                        <div className="flex">
                            <label className="w-2/5 text-xl font-semibold place-self-center">Printer</label>
                            <ul className="flex gap-12">
                                <li>
                                    <input 
                                        type="radio" 
                                        name="select_method" 
                                        id="auto-sel"
                                        checked={isAutoSelect}
                                        onChange={e => handleSelectMethod(e)}
                                    />
                                    <label htmlFor="auto-sel" className="ml-2 text-lg">Tự động chọn</label>
                                </li>
                                <li>
                                    <input 
                                        type="radio" 
                                        name="select_method" 
                                        id="man-sel"
                                        checked={!isAutoSelect}
                                        onChange={e => handleSelectMethod(e)}
                                    />
                                    <label htmlFor="man-sel" className="ml-2 text-lg">Chọn thủ công</label>
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
                                    <input type="radio" name="orientation" id="portrait" value="portrait" checked={orientation === 'portrait'} onClick={e => {setOrientation('portrait')}} />
                                    <label htmlFor="portrait" className="ml-2 text-lg">Dọc</label>
                                </li>
                                <li>
                                    <input type="radio" name="orientation" id="landscape" value="landscape" checked={orientation === 'landscape'} onClick={e => {setOrientation('landscape')}}/>
                                    <label htmlFor="landscape" className="ml-2 text-lg">Ngang</label>
                                </li>
                            </ul>
                        </div>

                        <div className="flex mb-3">
                            <label className="w-2/5 text-xl font-semibold place-self-center">Khổ giấy</label>
                            <ul className="flex gap-12">
                                <li>
                                    <input type="radio" name="paper-size" id="a4" value="a4" checked={size === 'A4'} onClick={e => setSize('A4')} />
                                    <label htmlFor="a4" className="ml-2 text-lg">A4</label>
                                </li>
                                <li>
                                    <input type="radio" name="paper-size" id="a3" value="a3" checked={size === 'A3'} onClick={e => setSize('A3')} />
                                    <label htmlFor="a3" className="ml-2 text-lg">A3</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </form>
            
                <div className={`h-450px w-850px bg-blue-50 rounded-xl grid grid-cols-2 shadow-2xl overflow-y-auto border-2 border-blue-50 ${isAutoSelect ? "opacity-50 pointer-events-none" : ""}`}>
                    {printerList.length > 0 && printerList.map(printer => (
                        <PrinterInfo 
                            key={printer.id}
                            id={printer.id} 
                            isActive={printer.isActive}
                            paperEstimate={printer.paperEstimate}
                            numUsing={printer.numUsing}
                            selectedPrinter={selectedPrinter}
                            setSelectedPrinter={setSelectedPrinter}
                        />
                    ))}
                </div>
            </div>
            {error && <p className="pt-5 text-lg font-semibold text-red-500 text-right">{error}</p>}
            <div>
                <div className="buttons flex justify-between mt-8">
                    <button 
                        id="back"
                        onClick={e => handleClick(e)}
                        className="bg-red-600 w-1/6 h-12 rounded-2xl text-white text-xl font-semibold hover:opacity-70">
                        Quay về
                    </button >
                    <button 
                        id="continue"
                        onClick={e => handleClick(e)}
                        className="bg-indigo-600 w-1/6 h-12 rounded-2xl text-white text-xl font-semibold hover:opacity-70">
                        Tiếp tục
                    </button>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default SelectPrinter