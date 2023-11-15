import React, { useState } from 'react'
import Uploader from './Uploader'
import { Route } from 'react-router-dom'
import SelectPrinter from './SelectPrinter'
import PrintingConfirm from './PrintingConfirm'

const Printing = () => {
    const [step, setStep] = useState(1)

    switch (step)
    {
        case 1:
        return (
            <Uploader step={step} setStep={setStep} />
        )
        case 2:
        return (
            <SelectPrinter step={step} setStep={setStep} />
        )
        case 3:
        return (
            <PrintingConfirm step={step} setStep={setStep} />
        )
        default:
        return (
            <div>Error! Please reload page!</div>
        )
    }
}

export default Printing