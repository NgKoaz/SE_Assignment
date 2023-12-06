import React, { useState } from 'react'
import UserContext from './assets/UserContext'
import { useContext } from 'react'
import axios from 'axios'

const Buying = () => {
    const [numberPaper, setnumberPaper] = useState('')
    const [error, setError] = useState("")
    const { token, loadBuyingHistList, getUserInfo } = useContext(UserContext)

    function handleInput(e){
        const val = e.target.value
        if (val > 5000) {
            setError("Chỉ được mua tối đa 5000 trang cho mỗi lần giao dịch");
        } else {
            setnumberPaper(e.target.value)
            setError("")
        }
    }

    async function handleClick(e){
        e.preventDefault()
        axios.post('/user/purchase', {paper: numberPaper}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            console.log("Successfully!")
            loadBuyingHistList()
            setTimeout(getUserInfo, 10)
        }).catch((err) => {
            if (err.status === 500){
                console.log("Server's error")
            }
        })
    }

    function getPriceStr(){
        let price = numberPaper * 200

        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        });
        
        return formatter.format(price);
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
                    <div name="payment_method" className="flex justify-between border-2 bg-white w-32 p-2 mt-2 mb-4 border-black rounded-lg">
                        <input type="checkbox" value="Momo" defaultChecked />
                        <div>Momo</div>
                        <img src="./momo_logo.png" alt="Momo Pay" className="w-12 h-12" />
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
                        onClick={e => handleClick(e)}
                        className="mt-5 border-4 border-indigo-600 bg-indigo-600 w-full text-base font-semibold text-white px-3 py-3 rounded-xl hover:opacity-70">
                        Thanh toán {getPriceStr()}
                    </button>
                </div>
            </div>

        </div>  
    </div>
  )
}

export default Buying