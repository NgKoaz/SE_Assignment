import React, { useContext } from 'react'
import UserContext from './assets/UserContext'

const History = () => {

    const { printHistList, buyHistList } = useContext(UserContext)

    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });


    return (
        <div className="mt-10 mx-auto flex justify-between w-1200px min-h-250px h-450px">
            <div id="printing-history" className="w-750px bg-white rounded-2xl p-3 shadow-2xl">
                <h2 className="text-xl font-semibold text-center mb-3">Lịch sử in</h2>
                <div id="printed-list" className="h-96 text-base flex flex-col gap-2 overflow-y-auto">
                    <div className="sticky top-0 bg-white grid grid-cols-5 gap-4 italic text-gray-500">
                        <span className="">Ngày in</span>
                        <span className="">Tên file</span>
                        <span className="">Số bản sao</span>
                        <span className="">Giấy đã in</span>
                        <span className="">Còn lại</span>
                    </div>

                    {printHistList.length > 0 && printHistList.map(oneRow => (
                        <>
                            <div className="grid grid-cols-5 gap-4">
                                <span className="text-gray-500">{oneRow.timestamp}</span>
                                <span className="">{oneRow.fileName}</span>
                                <span className="">{oneRow.copies}</span>
                                <span className="text-red-500 font-bold">-{oneRow.printedPaper}</span>
                                <span className="text-yellow-500 font-bold ">{oneRow.remainingPaper}</span>
                            </div>
                            <hr className="my-2"/>
                        </>
                    ))}

                    

                </div>
            </div>
            <div id="buying-history" className="w-400px bg-white  rounded-2xl p-3 shadow-2xl">
                <h2 className="text-xl font-semibold text-center mb-3">Lịch sử mua giấy</h2>
                <div id="bought-list" className="h-96 text-base flex flex-col overflow-y-auto">
                    <div className="sticky top-0 bg-white grid grid-cols-3 gap-4 italic text-gray-500">
                        <span className="">Ngày mua</span>
                        <span className="">Đã mua</span>
                        <span className="">Tổng tiền</span>
                    </div>

                    {buyHistList.length > 0 && buyHistList.map(oneRow => (
                        <>
                            <div className="grid grid-cols-3 gap-4">
                                <span className="">{oneRow.timestamp}</span>
                                <span className="text-green-500 font-bold">+{oneRow.quantity}</span>
                                <span className="text-red-500 font-bold">-{formatter.format(oneRow.cost)} </span>
                            </div>
                            <hr className="my-3"/>
                        </>
                    ))}

                </div>
            </div>      
        </div>
    )
}

export default History