import React, { useContext } from 'react'
import UserContext from './assets/UserContext'

const History = () => {

    const { printHistList, buyHistList } = useContext(UserContext)

    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });

    function formatDate(str){
        const dateObject = new Date(str)

        const addLeadingZero = (number) => (number < 10 ? `0${number}` : number);

        const day = addLeadingZero(dateObject.getDate());
        const month = addLeadingZero(dateObject.getMonth() + 1); // Tháng bắt đầu từ 0
        const year = dateObject.getFullYear();
        const hours = addLeadingZero(dateObject.getHours());
        const minutes = addLeadingZero(dateObject.getMinutes());
        const seconds = addLeadingZero(dateObject.getSeconds());

        return `${day}/${month}/${year}\n${hours}:${minutes}:${seconds}`
    }

    function displayShorter(str, maxLen){
        if (str.length > maxLen){
            const truncatedString = str.substring(0, maxLen - 3) + '...';
            return truncatedString;
        }
        return str
    }
    
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
                        <span className="">Địa điểm</span>
                    </div>

                    {printHistList.length > 0 && printHistList.map(oneRow => (
                        <div key={oneRow.id}>
                            <div className="grid grid-cols-5 gap-4">
                                <span className="text-gray-500">{formatDate(oneRow.createdAt)}</span>
                                <span className="" title={oneRow.fileName}>{displayShorter(oneRow.fileName, 15)}</span>
                                <span className="">{oneRow.copies}</span>
                                <span className="text-red-500 font-bold">-{oneRow.paperUsed}</span>
                                <span className="">{oneRow.location}</span>
                            </div>
                            <hr className="my-2"/>
                        </div>
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

                    {buyHistList.length > 0 && buyHistList.slice().reverse().map(oneRow => (
                        <div key={oneRow.id}>
                            <div className="grid grid-cols-3 gap-4">
                                <span className="">{formatDate(oneRow.createdAt)}</span>
                                <span className="text-green-500 font-bold">+{`${parseInt(oneRow.cost / 200)} tờ`}</span>
                                <span className="text-red-500 font-bold">-{formatter.format(oneRow.cost)} </span>
                            </div>
                            <hr className="my-3"/>
                        </div>
                    ))}

                </div>
            </div>      
        </div>
    )
}

export default History