import React, {Component} from 'react';
import '../App.css'
const list = [
    {id: 1, title: 'Với hoàng loạt MV triệu view, hợp đồng quảng cáo \'khủng\', khối tài sản của Sơn Tùng ước tính khoảng bao nhiêu?', zone: 'entertainment', date:'10/1/2018'},
    {id: 2, title: 'Ronaldo quay lại MU', zone: 'sport', date:'20/1/2018'},
    {id: 3, title: 'Test1', zone: 'entertainment', date:'10/1/2018'},
    {id: 4, title: 'Test2', zone: 'sport', date:'11/1/2018'},
    {id: 5, title: 'Test3', zone: 'entertainment', date:'10/1/2018'},
    {id: 6, title: 'Test4', zone: 'sport', date:'12/1/2018'},
    {id: 7, title: 'Test5', zone: 'entertainment', date:'22/1/2018'},
    {id: 8, title: 'Test6', zone: 'sport', date:'15/1/2018'},
    {id: 9, title: 'Test7', zone: 'entertainment', date:'10/1/2018'},
];
function List(props) {
    const list = props.list
    const listItems = list.map((list) =>
        <li key={list.id.toString()}>
            <div className="main-table">
                <div className="list">
                    <div className="list-group">
                        <div className="list-date">
                            {list.date}
                        </div>
                        <div className="list-detail">
                            <div className="list-detail-main">
                                <div className="tool-setting">
                                    <input type="checkbox" name="check" value="checked"></input>
                                    <input className="star" type="checkbox" title="bookmark page"></input>
                                    <i className="fa fa-heart" style={{'font-size': 14 + 'px', 'margin-left': 12 + 'px'}}></i>
                                </div>
                                <div className="detail-info">
                                    <img className="avatar" src="../img/avatar2.jpg" alt="avatar"/>
                                    <div className="detail-main-info">
                                        <div className="detail-info-title">
                                            {list.title}
                                        </div>
                                        <div className="author">
                                            Viết bởi admin, biên tập bới admin
                                        </div>
                                    </div>
                                </div>
                                <div className="date">
                                    {list.date}   -   17:05
                                </div>
                                <div className="zone">
                                    {list.zone}
                                </div>
                                <div className="view">
                                    Lượt xem: 0  -  Nhuận bút: 0
                                </div>
                            </div>
                            <div className="list-detail-bottom">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
    return (
        <ul style={{'list-style-type': 'none'}}>
            {listItems}
        </ul>
    );
}
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: {list}
        };

        // This binding is necessary to make `this` work in the callback
        // this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (
            <section>
                <div>
                    <div className="sidebar">
                        <div className="box-title">
                            <span className="title-sidebar">Bài của tôi</span>
                        </div>
                        <div className="box-item">
                            <span className="small-title">Tin bài</span>
                            <ul className="list-box">
                                <li><i className="fa fa-heart"></i>Bài lưu tạm</li>
                                <li><i className="fa fa-heart"></i>Bài chờ biên tập</li>
                                <li><i className="fa fa-heart"></i>Bài chờ xuất bản</li>
                                <li><i className="fa fa-heart"></i>Bài nhận biên tập</li>
                                <li><i className="fa fa-heart"></i>Bài nhận xuất bản</li>
                                <li><i className="fa fa-heart"></i>Bài đã được xuất bản</li>
                                <li><i className="fa fa-heart"></i>Bài bị trả lại</li>
                                <li><i className="fa fa-heart"></i>Bài bị trả lại biên tập</li>
                                <li><i className="fa fa-heart"></i>Bài bị gỡ xuống</li>
                                <li><i className="fa fa-heart"></i>Bài bị xóa</li>
                            </ul>
                        </div>
                        <div className="box-item">
                            <span className="small-title">Dạng bài đặc biệt</span>
                            <ul className="list-box">
                                <li><i className="fa fa-heart"></i>Tường thuật sự kiện</li>
                                <li><i className="fa fa-heart"></i>Tường thuật bóng đá</li>
                                <li><i className="fa fa-heart"></i>Giao lưu trực tuyến</li>
                            </ul>
                        </div>
                        <div className="box-item">
                            <span className="small-title">Bình luận</span>
                            <ul className="list-box">
                                <li><i className="fa fa-heart"></i>Quản lý bình luận</li>
                            </ul>
                        </div>
                        <div className="box-item" style={{'border-bottom': 'none'}}>
                            <span className="small-title">Khảo sát</span>
                            <ul className="list-box">
                                <li><i className="fa fa-heart"></i>Quản lý khảo sát</li>
                            </ul>
                        </div>
                    </div>
                    <div className='table'>
                        <div className="header-table">
                            <div className="button-box">
                                <i className="fa fa-heart"></i>VIẾT BÀI MỚI
                            </div>
                            <div className="button-box">
                                <i className="fa fa-heart"></i>VIẾT BÀI NHANH
                            </div>
                            <div className="button-box">
                                <i className="fa fa-heart"></i>CRAWL BÀI
                            </div>
                            <div className="icon-search">
                                <i className="fa fa-search"></i>
                            </div>
                        </div>
                        <div className='body-table'>
                            <div className="table-content">
                                <div className="nav-table">
                                    <div className="button-nav">
                                        Chuyên mục<i style={{'margin-left': '7px','margin-right': '0' }} className="fa fa-angle-down"></i>
                                    </div>
                                    <div className="button-nav">
                                        <i className="fa fa-heart"></i>Từ ngày
                                    </div>
                                    <div className="button-nav">
                                        <i className="fa fa-heart"></i>Đến ngày
                                    </div>
                                    <div className="button-nav" style={{background: '#FAFAFA'}}>
                                        LỌC
                                    </div>
                                    <div className="pagination-box">
                                        <div className="pagination-p">
                                            1 đến 50 trong số 5125 bài
                                        </div>
                                        <div className="pagination">
                                            <a href="#" className="previous-page"><i className="fa fa-angle-left"></i></a>
                                            <a href="#" className="page">1</a>
                                            <a href="#" className="next-page"><i className="fa fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <List list={list} />
                            </div>
                            <div className="sidebar-right">
                                <span>ListItem</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Content;