import React, { useState } from 'react'
import Uploader from './Uploader'
import SelectPrinter from './SelectPrinter'
import PrintingConfirm from './PrintingConfirm'

const Printing = () => {
    const [step, setStep] = useState(1)
    const [file, setFile] = useState(null)
    const [selectedId, setSelectedId] = useState('')

    const [numCopies, setNumCopies] = useState(1)
    const [selectedPrinter, setSelectedPrinter] = useState({id: null, name: null})
    const [orientation, setOrientation] = useState('portrait')
    const [size, setSize] = useState('A4')

    switch (step)
    {
        case 1:
        return (
            <Uploader 
                step={step} setStep={setStep} 
                file={file} setFile={setFile} 
                selectedId={selectedId} setSelectedId={setSelectedId}
            />
        )
        case 2:
        return (
            <SelectPrinter 
                step={step} setStep={setStep} 
                numCopies={numCopies} setNumCopies={setNumCopies} 
                selectedPrinter={selectedPrinter} setSelectedPrinter={setSelectedPrinter} 
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
                selectedId={selectedId}
                selectedPrinter={selectedPrinter}
                setSelectedPrinter={setSelectedPrinter} 
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