import React, { useContext, useEffect } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const navigate = useNavigate();

    const { url } = useContext(StoreContext);

    const verifyPayment = async () => {
    try {
        console.log("Verifying orderId:", orderId, "success:", success);
        const response = await axios.post(url + "/api/order/verify", { orderId, success });
        console.log("Verify Response:", response.data);
        if (response.data.success) {
          navigate("/myorders");
        } else {
          navigate("/");
        }
    } catch (error) {
        console.error("Error verifying payment:", error);
        navigate("/");
    }
}


    useEffect(() => {
        setTimeout(() => {
            verifyPayment();
        }, 1200);
    }, []);

    return (
        <div className='verify'>
            <div className="spinner"></div>
        </div>
    )
}

export default Verify
