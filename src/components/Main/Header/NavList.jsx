import React from 'react';
import Link from './Link';

const NavList = ({ closeMenu }) => {
    const menuItems = [
        { href: '#Main', text: 'AIWEB' },
        { href: '#Services', text: 'Our services' },
        { href: '#Qa', text: 'Q&A' },
        { href: '#Development', text: 'Develop' },
        { href: '#Resources', text: 'Resources' },
    ];
    
    const smoothScroll = (e, href) => {
        e.preventDefault();
        const id = href.replace('#', '');
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        closeMenu();
    }
    
    return (
        <ul className="header-menu-list">
            {menuItems.map((item, index) => (
                <li key={index} className="header-menu-list-item">
                    <Link 
                        href={item.href} 
                        text={item.text} 
                        onClick={(e) => smoothScroll(e, item.href)} 
                    />
                </li>
            ))}
        </ul>
    );
}

export default NavList;
