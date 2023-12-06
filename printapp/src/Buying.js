import React, { useState } from 'react'
import UserContext from './assets/UserContext'
import { useContext } from 'react'
import axios from 'axios'

const Buying = () => {
    const [numberPaper, setnumberPaper] = useState('')
    const [error, setError] = useState("")
    const [openConfModal, setOpenConfModal] = useState(false)
    const [openSucModal, setOpenSucModal] = useState(false)
    const { token, loadBuyingHistList, getUserInfo } = useContext(UserContext)
      

    function handleInput(e){
        const val = e.target.value
        if (isNaN(val)){
            setError("Chỉ nhập được chữ số")
            return
        }
        if (val > 500) {
            setError("Chỉ được mua tối đa 500 trang cho mỗi lần giao dịch")
            return
        }
    
        setnumberPaper(e.target.value)
        setError("")
        
    }

    async function makePayment(e){
        e.preventDefault()
        axios.post('/user/purchase', {paper: numberPaper}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            console.log("Successfully!")
            loadBuyingHistList()
            setTimeout(getUserInfo, 10)
            setOpenConfModal(false)
            setOpenSucModal(true)
        }).catch((err) => {
            if (err.status === 500){
                console.log("Server's error")
            }
        })
        setOpenConfModal(false)
    }

    function getPriceStr(){
        let price = numberPaper * 200

        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        });
        
        return formatter.format(price);
    }

    function ConfirmationModal(){
        return(
            <div className="w-100vw h-100vh fixed flex justify-center z-30">
                <div className="absolute bg-black w-full h-full opacity-60"></div>
                <div className="h-250px w-400px mx-auto mt-20 bg-white rounded flex flex-col items-center justify-around z-20">
                    <div>
                        <h2 id="title-modal" className="text-2xl font-semibold">Xác nhận thanh toán</h2>
                    </div>
                    <div>
                        <p id="body-modal" className="text-xl">Thanh toán số tiền {getPriceStr()}</p>
                    </div>
                    <div id="footer-modal" className="flex gap-12">
                        <button
                            onClick={e => setOpenConfModal(false)}
                            className="bg-red-500 text-base font-bold text-white py-2 px-3 rounded-lg"
                        >
                            Hủy
                        </button>
                        <button
                            className="bg-blue-500 text-base font-bold text-white py-2 px-3 rounded-lg"
                            onClick={makePayment}
                        >
                            Xác nhận thanh toán
                        </button>
                    </div>
                </div>
            </div>
        )
    }


    function SuccessNotification(){
        return(
            <div className="w-100vw h-100vh fixed flex justify-center">
                <div className="absolute bg-black w-full h-full opacity-60"></div>
                <div className="h-250px w-400px mx-auto mt-20 bg-white rounded flex flex-col items-center justify-around z-20">
                    <div>
                        <p id="body-modal" className="text-lg text-center">Mua thành công: {numberPaper} tờ <br /> Tổng tiền là: {getPriceStr()}</p>
                    </div>
                    <div id="footer-modal" className="flex gap-12">
                        <button
                            className="bg-blue-500 text-base font-bold text-white py-2 px-3 rounded-lg"
                            onClick={e => {
                                setnumberPaper('')
                                setOpenSucModal(false)
                            }}
                        >
                            Đóng
                        </button>
                    </div>
                </div>
            </div>
        )
    }



  return (
    <div className="relative flex justify-center gap-5">
        <div className="absolute top-10 mx-auto h-auto flex font-mono gap-10">
            <div className=" bg-blue-50 rounded-lg p-3 w-400px shadow-2xl">
                <h1 className="text-2xl font-semibold mb-4">Tạo đơn mua giấy</h1>
                <form>
                    <label className="text-base font-semibold">Số lượng giấy</label>
                    <br />
                    <input 
                        type="text" 
                        value={numberPaper}
                        onChange={e => handleInput(e)}
                        className="text-base border-2 rounded-lg w-full h-12 mt-2 mb-2 p-2 hover:border-gray-600"
                    />
                    <br />
                    {error && <p className="text-red-500 text-bases">{error}</p>}
                    <label className="text-base font-semibold">Hình thức thanh toán</label>
                    <div name="payment_method" className="flex justify-between border-2 bg-white w-40 p-2 mt-2 mb-4 border-black rounded-lg">
                        <input type="checkbox" value="Momo" checked={true} />
                        <div>BKPay</div>
                        <img src="./app_bkpay.png" alt="BK Pay" className="w-20 h-12" />
                    </div>
                </form>
            </div>  


            <div className="flex flex-col justify-between bg-blue-50 rounded-lg p-3 w-400px h-auto font-mono shadow-2xl">
                <h1 className="text-2xl font-semibold mb-4 ">Đơn hàng</h1>
                <div>
                    <div className="flex justify-between">
                        <div>Giấy A4</div>
                        <div>Số lượng: {numberPaper}</div>
                    </div>
                    <hr className="mt-5 mb-5 border-gray-300" />
                    <div className="flex justify-between">
                        <div className="text-lg font-semibold mb">Tổng</div>
                        <div className="text-lg font-semibold mb">{getPriceStr()}</div>
                    </div>
                    <button 
                        onClick={e => {
                            if (!numberPaper) {
                                setError("Nhập số lượng cần mua trước")
                                return
                            }
                            setOpenConfModal(true)
                        }}
                        className="mt-5 border-4 border-indigo-600 bg-indigo-600 w-full text-base font-semibold text-white px-3 py-3 rounded-xl hover:opacity-70">
                        Thanh toán {getPriceStr()}
                    </button>
                </div>
            </div>
        </div>
        {openConfModal && <ConfirmationModal />}
        {openSucModal && <SuccessNotification />}
    </div>
  )
}

export default Buying