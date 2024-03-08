import React,{useState} from 'react';

export const CheckOut = (props) => {
    const [total,setTotal]=useState(props.amount)
     
    const handlePay=(e)=>{
       e.preventDefault();
       if(total===0 || ""){
        alert("please select the items")
       }else{
        var options={
          key: "rzp_test_bCnrREJONT9Crf",
        key_secret: "Kh2905G4y0KB8i6m3r1UV7zh",
        amount: total * 100,
        current: "INR",
        name: "ZOMATO PULSE",
        description: "for testing",
        handler: (response) => {
          alert(response.razorpay_payment_id);
          window.location.reload();
        },
        prefill: {
          name: "Naveen",
          email: "naveenvfc77@gmail.com",
          contact: "9626152200",
        },
        note: {
          address: "Razorpay Corprate office",
        },
        theme: {
          color: "powderblue",
        },
        };
        var pay =new window.Razorpay(options);
        pay.open()
       }  
       
    }

  return (
    <div>
        <form >
        <h1 className='fw-bold'>PAYMENT</h1>
        <hr />
        <h1 style={{color:'rgb(255, 69, 0)'}} value={total} onChange={e=>setTotal(e.target.value)}>Total:  &#8377;{props.amount}</h1>
        <button className='btn btn-outline-danger' onClick={handlePay}>pay</button>

        </form>
    </div>
  )
}
