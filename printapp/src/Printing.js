import React, { useState } from 'react'
import Uploader from './Uploader'
import SelectPrinter from './SelectPrinter'
import PrintingConfirm from './PrintingConfirm'

const Printing = () => {
    const [step, setStep] = useState(1)
    const [file, setFile] = useState(null)

    switch (step)
    {
        case 1:
        return (
            <Uploader step={step} setStep={setStep} file={file} setFile={setFile} />
        )
        case 2:
        return (
            <SelectPrinter step={step} setStep={setStep} />
        )
        case 3:
        return (
            <PrintingConfirm step={step} setStep={setStep} file={file} setFile={setFile} />
        )
        default:
        return (
            <div>Error! Please reload page!</div>
        )
    }
}

export default Printing