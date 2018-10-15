import React, {Component} from 'react';
import '../App.css'

class Header extends Component {
    render() {
        return (
            <div>
                <div className="home-button">
                    <a href="#"></a>
                </div>
                <div className="one-nav-item">
                    <i className="fa fa-edit"></i>
                </div>
                <div className="one-nav-item-2">
                    <i className="el-icon-edit"></i> BÀI VIẾT
                </div>
                <div className="one-nav-item-2">
                    <i className="fa fa-youtube"></i> VIDEO
                </div>
                <div className="one-nav-item-2">
                    <i className="fa fa-cog"></i> CẤU HÌNH
                </div>
            </div>
        );
    }
}

export default Header;