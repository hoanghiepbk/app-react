import React, {Component} from 'react';
import '../App.css'

class Header extends Component {
    render() {
        return (
            <div>
                <div className="home-button">
                    <i className="fa fa-line-chart" aria-hidden="true" style={{"marginTop": 7+ "px","color": "white","fontSize": 23+ "px"}}></i>
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
                    <i className="fas fa-book"></i> INSTANT ARTICLE
                </div>
                <div className="one-nav-item-2">
                    <i className="fas fa-comments"></i> THẢO LUẬN
                </div>
                <div className="one-nav-item-2">
                    <i className="fa fa-cog"></i> CẤU HÌNH
                </div>
            </div>
        );
    }
}

export default Header;