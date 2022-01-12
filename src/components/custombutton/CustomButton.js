import React from 'react';
import './custombutton.styles.scss';
const CustomButton = ({children,isgooglebtn,...otherProps}) => {
    return (
        <button className={`${isgooglebtn?'google-buton':''} custom-button`}  {...otherProps}>
            {children}
        </button>
    );
}

export default CustomButton;
