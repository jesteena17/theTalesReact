import React from 'react';
import StripeCheckout from 'react-stripe-checkout';




const StripeButton = ({price}) => {
    const priceforstripe=price*100;
    const publishablekey='pk_test_51KJvzYSG030INg5lXQATJIEmPnQFrF2zTxtrrUGCOTC4yoNvUG3LgB4cDSx2Kwmp7xgayHWFP1FoOa6pKIhdruNF007xN6zOhA';
const onToken=token=>{
    console.log(token );
    alert('Payment Successfull');
}


    return (
        <div>
           <StripeCheckout
           label="Test Payment"
           name="The Tales"
           billingAddress
           shippingAddress 
           currency="INR"
 
           locale="en"
           image='https://myblogmine.s3.ap-south-1.amazonaws.com/favicon-32x32.png'
           description={`Your Total is ₹${price}`}
           amount={priceforstripe}
           panelLabel='Test Pay'
            token={onToken}
            stripeKey={publishablekey}

           /> 
        </div>
    );
}

export default StripeButton;
