import React, {Component} from 'react';
import '../App.css'
import { Select, DatePicker } from 'element-react';
import 'element-theme-default';

function List(props) {
    console.log('render')
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
                                    Lượt xem: {list.view}  -  Nhuận bút: 0
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
            list: [
                {id: 1, title: 'Với hoàng loạt MV triệu view, hợp đồng quảng cáo \'khủng\', khối tài sản của Sơn Tùng ước tính khoảng bao nhiêu?', zone: 'entertainment', date:'10/1/2018', view: '312'},
                {id: 2, title: 'Ronaldo quay lại MU', zone: 'sport', date:'20/1/2018',view: '12'},
                {id: 3, title: 'Test1', zone: 'entertainment', date:'10/1/2018',view: '34312'},
                {id: 4, title: 'Test2', zone: 'sport', date:'11/1/2018',view: '312'},
                {id: 5, title: 'Test3', zone: 'entertainment', date:'10/1/2018',view: '4312'},
                {id: 6, title: 'Test4', zone: 'sport', date:'12/1/2018',view: '44312'},
                {id: 7, title: 'Test5', zone: 'entertainment', date:'22/1/2018',view: '2'},
                {id: 8, title: 'Test6', zone: 'sport', date:'15/1/2018',view: '5234312'},
                {id: 9, title: 'Test7', zone: 'entertainment', date:'10/1/2018',view: '34312'},
            ],
            list2: [],
            a: 0,
            b: 5,
            page: 1,
            options: [{
                value: 'entertainment',
                label: 'Entertainment'
            }, {
                value: 'sport',
                label: 'Sport'
            }],
            value: '',
            selectedZone: '',
            dateStart: '',
            dateEnd: '',
        };
        // This binding is necessary to make `this` work in the callback
        // this.handleClick = this.handleClick.bind(this);
        this.handleNextPage = this.handleNextPage.bind(this);
        this.selectedZone = this.selectedZone.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }
    // addList2 = (item) => {
    //     let newList2 = this.state.list2.concat(item);
    //     this.setState({list2: newList2})
    // }
    addList2() {
        let a = this.state.a;
        let b = this.state.b;
        const newList2 = [];
        const listItems = this.state.list
        for (let i = a; i < b; i++) {
            if (listItems[i] !== undefined) {
                newList2.push(listItems[i])
            }
        }
        console.log(newList2)
        this.setState({list2: newList2})
    }
    handleNextPage() {
        console.log('next')
        this.setState({list2: []})
        const a = this.state.a
        const b = this.state.b
        this.setState({a: a + 5});
        console.log(this.state.a);
        this.setState({b: b + 5});
        console.log(this.state.b);
        this.addList2();
        const page = this.state.page
        this.setState({page: page + 1})
        console.log(this.state.page)
    }
    selectedZone(zone) {
        const zoneSelected = zone
        this.setState({selectedZone: zoneSelected})
    }
    handleFilter() {
        const selectedZone = this.state.selectedZone
        const dateStart = this.state.dateStart
        console.log(dateStart)
        const dateEnd = this.state.dateEnd
        console.log(dateEnd)
        const listItems = this.state.list
        const list2 = []
        if (dateStart !== '' && dateEnd !== '') {
            for (let i = 0; i < listItems.length; i ++) {
                if (listItems[i].zone === selectedZone && dateStart <= listItems[i].date <= dateEnd) {
                    list2.push(listItems[i])
                }
            }
        }
        if (selectedZone === '' && dateStart !== '' && dateEnd !== ''){
            for (let i = 0; i < listItems.length; i ++) {
                if (dateStart <= listItems[i].date <= dateEnd) {
                    list2.push(listItems[i])
                }
            }
        }
        if (selectedZone !== '' && dateStart === '' && dateEnd === '') {
            for (let i = 0; i < listItems.length; i ++) {
                if (listItems[i].zone === selectedZone) {
                    list2.push(listItems[i])
                }
            }
        }
        this.setState({list2: list2})
    }
    componentDidMount() {
        this.addList2()
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
                                    <div style={{width: 150 + 'px'}}>
                                        <Select value={this.state.value} placeholder={'Chuyên mục'} onChange={this.selectedZone}>
                                            {
                                                this.state.options.map(el => {
                                                    return <Select.Option key={el.value} label={el.label} value={el.value} />
                                                })
                                            }
                                        </Select>
                                    </div>
                                    <div style={{'margin-left': 15 + 'px'}}>
                                        <DatePicker
                                            value={this.state.dateStart}
                                            placeholder="Ngày bắt đầu"
                                            onChange={date=>{
                                                console.debug('DatePicker1 changed: ', date)
                                                this.setState({dateStart: date})
                                            }}
                                            disabledDate={time=>time.getTime() < Date.now() - 8.64e7}
                                        />
                                    </div>
                                    <div style={{'margin-left': 15 + 'px'}}>
                                        <DatePicker
                                            value={this.state.dateEnd}
                                            placeholder="Ngày kết thúc"
                                            onChange={date=>{
                                                console.debug('DatePicker1 changed: ', date)
                                                this.setState({dateEnd: date})
                                            }}
                                            disabledDate={time=>time.getTime() < Date.now() - 8.64e7}
                                        />
                                    </div>
                                    <div className="button-nav" style={{background: '#FAFAFA'}} onClick={this.handleFilter}>
                                        LỌC
                                    </div>
                                    <div className="pagination-box">
                                        <div className="pagination-p">
                                            {this.state.a} đến {this.state.b < this.state.list.length ? this.state.b : this.state.list.length} trong số {this.state.list.length} bài
                                        </div>
                                        <div className="pagination">
                                            <a href="#" className="previous-page"><i className="fa fa-angle-left"></i></a>
                                            <a href="#" className="page">{this.state.page}</a>
                                            <a href="#" onClick={this.handleNextPage} className="next-page"><i className="fa fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <List list={this.state.list2} />
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
