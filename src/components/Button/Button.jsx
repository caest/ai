import React from "react";
import './button.scss'
import icon from './icon.svg';

const Button = (props) => {
    return (
        <a className="button" href={props.href}><span>{props.text}</span> <img className="button-image" src={icon} alt="" /></a>
    );
};

export default Button;

