import React, { useState } from 'react'
import Uploader from './Uploader'
import SelectPrinter from './SelectPrinter'
import PrintingConfirm from './PrintingConfirm'

const Printing = () => {
    const [step, setStep] = useState(1)
    const [file, setFile] = useState(null)

    const [numCopies, setNumCopies] = useState(1)
    const [selectedPrinter, setSelectedPrinter] = useState(null)
    const [isAutoSelect, setIsAutoSelect] = useState(true)
    const [orientation, setOrientation] = useState('portrait')
    const [size, setSize] = useState('A4')

    switch (step)
    {
        case 1:
        return (
            <Uploader step={step} setStep={setStep} file={file} setFile={setFile} />
        )
        case 2:
        return (
            <SelectPrinter 
                step={step} setStep={setStep} 
                numCopies={numCopies} setNumCopies={setNumCopies} 
                selectedPrinter={selectedPrinter} setSelectedPrinter={setSelectedPrinter}
                isAutoSelect={isAutoSelect} setIsAutoSelect={setIsAutoSelect} 
                orientation={orientation} setOrientation={setOrientation}
                size={size} setSize={setSize}
            />
        )
        case 3:
        return (
            <PrintingConfirm 
                step={step} setStep={setStep} 
                file={file} setFile={setFile} 
                numCopies={numCopies} setNumCopies={setNumCopies} 
                selectedPrinter={selectedPrinter}
                setSelectedPrinter={setSelectedPrinter} 
                isAutoSelect={isAutoSelect} setIsAutoSelect={setIsAutoSelect}
                orientation={orientation} setOrientation={setOrientation}
                size={size} setSize={setSize}

            />
        )
        default:
        return (
            <div>Error! Please reload page!</div>
        )
    }
}

export default Printing