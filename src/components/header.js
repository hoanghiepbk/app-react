import React, {Component} from 'react';
import '../App.css'

class Header extends Component {
    render() {
        return (
            <div>
                <div className="home-button">
                    <i className="fas fa-chart-line" style={{"margin-top": 7+ "px","color": "white","font-size": 23+ "px"}}></i>
                </div>
                <div className="one-nav-item">
                    <i className="fa fa-edit"></i>
                </div>
                <div className="one-nav-item-2">
                    <i className="el-icon-edit"></i> BÀI VIẾT
                </div>
                <div className="one-nav-item-2">
                    <i className="fab fa-youtube"></i> VIDEO
                </div>
                <div className="one-nav-item-2">
                    <i className="fa fa-cog"></i> CẤU HÌNH
                </div>
            </div>
        );
    }
}

export default Header;