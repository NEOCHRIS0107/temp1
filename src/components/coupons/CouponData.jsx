import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useUser } from "../../hooks/useUser";
import "./Customer.css";

export default function CouponData(props) {
    const [coupon, setCoupon] = useState([]);
    const { token } = useUser();
    const [array, setArray] = useState({});
    const location = useLocation();
    const { id, pList, cName } = location.state;
    // const { custId } = useParams();
    const [validateUser, setValidateUser] = useState();
    let navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:9001/coupons/${cName}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "Authorization": "Bearer " + token
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw Error("Coupon is not in database");
                }
                else {
                    return res.json();
                }
            })
            .then(json => {
                setCoupon(json)
            }).catch(err => setValidateUser(err.message))
    }, [])

    const { couponId, couponName, couponType, discount, amount, couponDescription } = coupon;
    return (
        <>
            <section className="intro">
                <div className="gradient-custom-1 h-100">
                    <div className="mask d-flex align-items-center h-100">
                        <div className="container">
                            <h3>Coupon Details</h3>
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="table-responsive bg-white">
                                        <table className="table mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Coupon Id</th>
                                                    <th scope="col">Coupon Name</th>
                                                    <th scope="col">Coupon Type</th>
                                                    <th scope="col">Discount</th>
                                                    <th scope="col">Amount</th>
                                                    <th scope="col">Coupon Description</th>
                                                </tr>
                                            </thead>
                                            <tbody className='tablebody'>
                                                <tr>
                                                    <th scope="row" >{couponId}</th>
                                                    <td>{couponName}</td>
                                                    <td>{couponType}</td>
                                                    <td>{discount}</td>
                                                    <td>{amount}</td>
                                                    <td>{couponDescription}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
