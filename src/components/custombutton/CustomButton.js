import React from 'react';
import './custombutton.styles.scss';
const CustomButton = ({children,isgooglebtn,inverted,...otherProps}) => {
    return (
        <button className={`${inverted?'inverted':''} ${isgooglebtn?'google-buton':''} custom-button`}  {...otherProps}>
            {children}
        </button>
    );
}

export default CustomButton;
