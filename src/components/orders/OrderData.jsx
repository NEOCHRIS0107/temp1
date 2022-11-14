import React, { useEffect } from 'react'
import CouponData from '../coupons/CouponData'
import CustomerData from '../customer/CustomerData'

export default function OrderData(custId) {

  return (
    <>
      <div><CustomerData /></div>
      <div><br /><br /></div>
      <div><CouponData /></div>
    </>
  )
}
