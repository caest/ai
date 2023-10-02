import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ href, text, onClick }) => {
    return (
        <a className="header-menu-link" href={href} onClick={onClick}>
            {text}
        </a>
    );
};

Link.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func, 
};

export default Link;
