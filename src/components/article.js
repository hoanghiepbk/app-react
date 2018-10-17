import React, {Component} from 'react';
import '../App.css'
import { Select, DatePicker } from 'element-react';
import 'element-theme-default';
import { i18n } from 'element-react';
import locale from 'element-react/src/locale/lang/en'
i18n.use(locale);

function Items(props) {
    console.log('render 2')
    const list = props.list
    const listItems = list.map((list) =>
        <div className="list-detail">
            <div className="list-detail-main">
                <div className="tool-setting">
                    <input type="checkbox" name="check" value="checked"></input>
                    <input className="star" type="checkbox" title="bookmark page"></input>
                    <i className="fa fa-heart" style={{'font-size': 14 + 'px', 'margin-left': 12 + 'px'}}></i>
                </div>
                <div className="detail-info">
                    <img className="avatar"/>
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
    );
    return (
        <ul style={{'list-style-type': 'none'}}>
            {listItems}
        </ul>
    );
}
function List(props) {
    console.log('render')
    const list = props.list
    const listItems = list.map((list) =>
        <li key={list.Id.toString()}>
            <div className="main-table">
                <div className="list">
                    <div className="list-group">
                        <div className="list-date">
                            {list.CreatedDate}
                        </div>
                        <div className="list-detail">
                            <div className="list-detail-main">
                                <div className="tool-setting">
                                    <input type="checkbox" name="check" value="checked"></input>
                                    <input className="star" type="checkbox" title="bookmark page"></input>
                                    <i className="fa fa-heart" style={{'font-size': 14 + 'px', 'margin-left': 12 + 'px'}}></i>
                                </div>
                                <div className="detail-info">
                                    <img className="avatar"/>
                                    <div className="detail-main-info">
                                        <div className="detail-info-title">
                                            {list.Title}
                                        </div>
                                        <div className="author">
                                            Viết bởi {list.maichi}, biên tập bới {list.crawler}
                                        </div>
                                    </div>
                                </div>
                                <div className="date">
                                    {list.CreatedDate}
                                </div>
                                <div className="zone">
                                    {list.ZoneName}
                                </div>
                                <div className="view">
                                    Lượt xem: {list.ViewCount}  -  Nhuận bút: {list.WordCount}
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
            lists: [
                {
                    id:1,
                    date: '15/10/2018',
                    items: [
                        {id: 1, title: 'Với hoàng loạt MV triệu view, hợp đồng quảng cáo \'khủng\', khối tài sản của Sơn Tùng ước tính khoảng bao nhiêu?', zone: 'entertainment', view: '312',date: '15/10/2018',},
                        {id: 2, title: 'Ronaldo quay lại MU', zone: 'sport',view: '12',date: '15/10/2018',},
                        {id: 3, title: 'Test1', zone: 'entertainment',view: '34312',date: '15/10/2018',},
                    ]
                },
                {
                    id:2,
                    date: '16/10/2018',
                    items: [
                        {id: 1, title: 'Test2', zone: 'sport',view: '312',date: '16/10/2018',},
                        {id: 2, title: 'Test3', zone: 'entertainment',view: '4312',date: '16/10/2018',},
                    ]
                },
                {
                    id:3,
                    date: '17/10/2018',
                    items: [
                        {id: 1, title: 'Test4', zone: 'sport',view: '312',date: '17/10/2018',},
                        {id: 2, title: 'Test5', zone: 'entertainment',view: '4312',date: '17/10/2018',},
                    ]
                },
                {
                    id:4,
                    date: '18/10/2018',
                    items: [
                        {id: 1, title: 'Test55', zone: 'sport',view: '312',date: '18/10/2018',},
                        {id: 2, title: 'Test6', zone: 'entertainment',view: '4312',date: '18/10/2018',},
                        {id: 3, title: 'Test7', zone: 'sport',view: '44312',date: '18/10/2018',},
                    ]
                },
                {
                    id:5,
                    date: '19/10/2018',
                    items: [
                        {id: 1, title: 'Test8', zone: 'sport',view: '312',date: '19/10/2018',},
                        {id: 2, title: 'Test9', zone: 'entertainment',view: '4312',date: '19/10/2018',},
                    ]
                }
            ],
            list: [],
            list2: [],
            listFilter: [],
            a: 0,
            b: 2,
            page: 1,
            options: [{
                value: 'news',
                label: 'Thời sự'
            },
            ],
            value: '',
            selectedZone: '',
            dateStart: '',
            dateEnd: '',
        };
        // This binding is necessary to make `this` work in the callback
        // this.handleClick = this.handleClick.bind(this);
        this.handleNextPage = this.handleNextPage.bind(this);
        this.handleBackPage = this.handleBackPage.bind(this);
        this.selectedZone = this.selectedZone.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.getList = this.getList.bind(this);
    }
    addList2() {
        let a = this.state.a;
        let b = this.state.b;
        const newList2 = [];
        const listItems = this.state.lists
        for (let i = 0; i < 2; i++) {
            if (listItems[i] !== undefined) {
                newList2.push(listItems[i])
            }
        }
        console.log('here')
        console.log(newList2)
        this.setState({list2: newList2})
    }
    handleNextPage() {
        if (this.state.list2.length === 2) {
            console.log('next')
            const a = this.state.a
            const b = this.state.b
            this.setState({a: a + 2});
            console.log(this.state.a)
            this.setState({b: b + 2});
            console.log(this.state.b)
            const page = this.state.page
            this.setState({page: page + 1})
            const newList2 = [];
            const listItems = this.state.lists
            for (let i = a + 2; i < b + 2; i++) {
                if (listItems[i] !== undefined) {
                    newList2.push(listItems[i])
                }
            }
            console.log(newList2)
            this.setState({list2: newList2})
        }
    }
    handleBackPage() {
        if (this.state.page > 1) {
            console.log('next')
            this.setState({list2: []})
            const a = this.state.a
            const b = this.state.b
            this.setState({a: a - 2});
            console.log(this.state.a);
            this.setState({b: b - 2});
            console.log(this.state.b);
            this.addList2();
            const page = this.state.page
            this.setState({page: page - 1})
            console.log(this.state.page)
            const newList2 = [];
            const listItems = this.state.lists
            for (let i = a - 2; i < b - 2; i++) {
                if (listItems[i] !== undefined) {
                    newList2.push(listItems[i])
                }
            }
            this.setState({list2: newList2})
        }
    }
    selectedZone(zone) {
        const zoneSelected = zone
        this.setState({selectedZone: zoneSelected})
    }
    handleFilter() {
        for (i = 0; i < list.length; i ++) {
            if (list2.length === 0) {
                var a1 = {}
                a1['date'] = list[i].date
                a1['list'] = list[i]
            }
            for (j = 0; i < list2.length; j ++)
        }
        console.log('run')
        const selectedZone = this.state.selectedZone
        const dateS = this.state.dateStart
        const dateE = this.state.dateEnd
        if (dateS !== '' && dateE !== '') {
            var dateStart = this.state.dateStart.getDate() + 1
            var monthStart = this.state.dateStart.getMonth() + 1
            var yearStart = this.state.dateStart.getFullYear()
            var dateEnd = this.state.dateEnd.getDate() + 1
            var monthEnd = this.state.dateEnd.getMonth() + 1
            var yearEnd = this.state.dateEnd.getFullYear()
        }
        const listItems = this.state.list
        const list2 = []
        var promise = new Promise(function(resolve, reject) {
            var request = new XMLHttpRequest();
            request.onload = function() {
                if (request.status == 200) {
                    resolve(request.response); // we got data here, so resolve the Promise
                } else {
                    reject(Error(request.statusText)); // status is not 200 OK, so reject
                }
            };
            request.open("POST", "http://192.168.25.95:8088/api/base/news/search_news", true);
            request.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTM4NCJ9.eyJ1bmlxdWVfbmFtZSI6IkYxOU5hck1qelk0LzNkam1PT2pCblE9PSIsInN1YiI6ImZ4UWRlL2JnUDYweUxLK2xoekpjdlE9PSIsIm5zcCI6IjZVS2hqcW9NOWlrVjk2clZ0SEYyTkE9PSIsImxhbmciOiJ0S3NTVDloVDI4VXNoOHI0OUxLbGhnPT0iLCJpc3MiOiJNKzJqMG1xa25ZcTlMYmlxbXp3V0t3PT0iLCJhdWQiOiJBbnkiLCJleHAiOjE2OTc0MjU1MzksIm5iZiI6MTUzOTc0NTUzOX0.meX6h8Zz2W2d82Gvc4eVD3hXjSk88yE0u-6xProTgQOsD77Bvz7q0_9qoNQbnUVU");
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            const data = {
                zone: selectedZone,
                status: '8',
                type: '0',
                page: '1',
                num: '50',
                order: '0'
            }
            if (dateS !== '' && dateE !== '') {
                data["minDate"] = dateStart + '/' + monthStart + '/' + yearStart
                data["maxDate"] = dateEnd + '/' + monthEnd + '/' + yearEnd
            }
            var params = typeof data == 'string' ? data : Object.keys(data).map(
                function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
            ).join('&');
            request.send(params);
            // request.send("status=8&type=0&page=1&num=50&order=0");
        });
        promise.then(function(data) {
            console.log('Got data! Promise fulfilled.');
            var a = data
            var b = JSON.parse(a).Data.News
            console.log(b)
            this.setState({list: b})
        }.bind(this)).catch(function(error) {
            console.log('Error occurred!', error);
        });
        // if (selectedZone !== '' && dateS !== '' && dateE !== '') {
        //     console.log('1')
        //     for (let i = 0; i < listItems.length; i ++) {
        //         if (listItems[i].zone === selectedZone || selectedZone === "all") {
        //             const a = listItems[i].date.split("/")
        //             console.log(a)
        //             if (yearStart <= a[2] && a[2] <= yearEnd && monthStart <= a[1] && a[1] <= monthEnd && dateStart <= a[0] && a[0] <= dateEnd) {
        //                 list2.push(listItems[i])
        //             }
        //         }
        //     }
        // }
        // if (selectedZone === '' && dateS !== '' && dateE !== ''){
        //     console.log('2')
        //     for (let i = 0; i < listItems.length; i ++) {
        //         const a = listItems[i].date.split("/")
        //         if (yearStart <= a[2] && a[2] <= yearEnd && monthStart <= a[1] && a[1] <= monthEnd && dateStart <= a[0] && a[0] <= dateEnd) {
        //             list2.push(listItems[i])
        //         }
        //     }
        // }
        // if (selectedZone !== '' && dateS === '' && dateE === '') {
        //     console.log('3')
        //     for (let i = 0; i < listItems.length; i ++) {
        //         if (listItems[i].zone === selectedZone || selectedZone === "all") {
        //             list2.push(listItems[i])
        //         }
        //     }
        // }
        // this.setState({listFilter: list2})
        // console.log(this.state.listFilter)
    }
    getList() {
        var promise = new Promise(function(resolve, reject) {
            var request = new XMLHttpRequest();
            request.onload = function() {
                if (request.status == 200) {
                    resolve(request.response); // we got data here, so resolve the Promise
                } else {
                    reject(Error(request.statusText)); // status is not 200 OK, so reject
                }
            };
            request.open("POST", "http://192.168.25.95:8088/api/base/news/list_news_by_status", true);
            request.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTM4NCJ9.eyJ1bmlxdWVfbmFtZSI6IkYxOU5hck1qelk0LzNkam1PT2pCblE9PSIsInN1YiI6ImZ4UWRlL2JnUDYweUxLK2xoekpjdlE9PSIsIm5zcCI6IjZVS2hqcW9NOWlrVjk2clZ0SEYyTkE9PSIsImxhbmciOiJ0S3NTVDloVDI4VXNoOHI0OUxLbGhnPT0iLCJpc3MiOiJNKzJqMG1xa25ZcTlMYmlxbXp3V0t3PT0iLCJhdWQiOiJBbnkiLCJleHAiOjE2OTc0MjU1MzksIm5iZiI6MTUzOTc0NTUzOX0.meX6h8Zz2W2d82Gvc4eVD3hXjSk88yE0u-6xProTgQOsD77Bvz7q0_9qoNQbnUVU");
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            const data = {
                status: '8',
                type: '0',
                page: '1',
                num: '50',
                order: '0'
            }
            var params = typeof data == 'string' ? data : Object.keys(data).map(
                function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
            ).join('&');
            request.send(params);
        });
        promise.then(function(data) {
            console.log('Got data! Promise fulfilled.');
            var a = data
            var b = JSON.parse(a).Data.News
            console.log(b)
            this.setState({list: b})
        }.bind(this)).catch(function(error) {
            console.log('Error occurred!', error);
        });
    }
    componentDidMount() {
        this.getList()
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
                                <i className="el-icon-edit"></i>VIẾT BÀI MỚI
                            </div>
                            <div className="button-box">
                                <i className="el-icon-edit"></i>VIẾT BÀI NHANH
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
                                        />
                                    </div>
                                    <div className="button-nav" style={{background: '#FAFAFA'}} onClick={this.handleFilter}>
                                        LỌC
                                    </div>
                                    <div className="pagination-box">
                                        <div className="pagination-p">
                                            1 đến 3 trong số {this.state.list.length} bài
                                        </div>
                                        <div className="pagination">
                                            <a href="#" onClick={this.handleBackPage} className="previous-page"><i className="fa fa-angle-left"></i></a>
                                            <a href="#" className="page">{this.state.page}</a>
                                            <a href="#" onClick={this.handleNextPage} className="next-page"><i className="fa fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <List list={this.state.list} />
                            </div>
                            <div className="sidebar-right">
                                <div className="one-nav-item-3">
                                    <i className="fa fa-cog"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Content;
