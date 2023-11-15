import React, { useState } from 'react'
import Item from './Item'

const Buying = () => {
  const [numberPaper, setnumberPaper] = useState(null)

  const Bill = () => {
    return(
      <div className="bg-blue-100 rounded-lg p-3 w-5/12 h-auto">
        <h1 className="text-3xl font-semibold mb-4 ">Đơn hàng</h1>
        <div>
          <Item />
        </div>
        <hr className="mt-5 mb-5 border-gray-300" />
        <label className="text-xl font-semibold mb-10">Mã giảm giá</label>
        <br />
        <input 
            type="text" 
            
            className="text-base border-2 rounded-lg w-full h-12 mt-2 mb-2 p-2 hover:border-gray-600"
          />
        <hr className="mt-5 mb-5 border-gray-300" />
        <label className="text-xl font-semibold">Tổng phụ</label>
        <br />
        <label className="text-xl font-semibold">Giảm giá</label>
        <hr className="mt-5 mb-5 border-gray-300" />
        <label className="text-xl font-semibold mb">Tổng</label>
        <button className="mt-5 border-4 border-indigo-600 bg-indigo-600 w-full text-xl font-semibold text-white px-3 py-3 rounded-xl hover:text-indigo-600 hover:bg-white">Thanh toán {numberPaper * 5000} VNĐ</button>
      </div>
    )
  }

  return (
    <div className="absolute top-1/4 left-1/4 w-1/2 h-auto flex justify-between ">
      <div className="bg-blue-100 rounded-lg p-3 w-5/12">
        <h1 className="text-3xl font-semibold mb-4">Tạo đơn mua giấy</h1>
        <form>
          <label className="text-xl font-semibold">Số lượng giấy</label>
          <br />
          <input 
            type="text" 
            value={numberPaper}
            onChange={e => setnumberPaper(e.target.value)}
            className="text-base border-2 rounded-lg w-full h-12 mt-2 mb-2 p-2 hover:border-gray-600"
          />
          <br />
          <label className="text-xl font-semibold">Hình thức thanh toán</label>
          <div name="payment_method" className="flex border-4 bg-white w-fit p-3 mt-2 mb-4 border-black rounded-lg">
            <input type="checkbox" value="BkPay" />
            <div>LOGO BK</div>
          </div>
        </form>
      </div>  

      {numberPaper ? <Bill /> : <></>}

    </div>  
  )
}

export default Buying