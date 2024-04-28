import React from 'react';
import './DescriptionBox.css'
const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122) </div>
            </div>
            <div className="descriptionbox-description">
                <p>An eCommerce website is an online platform that allows businesses to sell products or services over the internet directly to consumers. It facilitates transactions electronically, enabling customers to browse, select, and purchase products or services from the comfort of their homes or on the go.</p>
                <p>An eCommerce website typically displays the following key elements:Logo: Brand logo to identify the business.
                Navigation Menu: Links to various sections like Home, Shop, Categories, About Us, Contact, etc.
                Search Bar: Allows users to search for products.</p>
            </div>
        </div>
    )
}
export default DescriptionBox;