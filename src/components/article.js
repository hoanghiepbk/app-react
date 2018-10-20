import React, {Component} from 'react';
import '../App.css'
import { Select, DatePicker,Dialog, Button } from 'element-react';
import 'element-theme-default';
import { i18n } from 'element-react';
import locale from 'element-react/src/locale/lang/en'
import moment from 'moment'
i18n.use(locale);

class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <div className="popup-header">
                        <div className="btn-group">
                            <span className="btn"><i className="fa fa-history"aria-hidden="true" style={{"margin-right": '5px'}}></i>Xem lịch sử</span>
                            <span className="btn"><i className="fa fa-files-o" aria-hidden="true" style={{"margin-right": '5px'}}></i>So sánh phiên bản</span>
                        </div>
                        <div><span onClick={this.props.closePopup}><i className="fa fa-times" style={{'font-size': '30px', 'margin-left': '100px','cursor': 'pointer'}}></i></span></div>
                    </div>
                    <div className="popup-main">
                        <div className="popup-main-content">
                            <div className="editable-container ">
                                <div className="title-info" style={{"padding": '0 30px','text-align': 'left'}}>
                                    <div className="txtTitle">
                                        {this.props.detailInfo.Title}
                                    </div>
                                    <div className="text">
                                        {this.props.detailInfo.Sapo}
                                    </div>
                                </div>
                                <div className="content-main">
                                    <div className="content-info">
                                        <div dangerouslySetInnerHTML={{__html: this.props.detailInfo.Body }} />;
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="popup-sidebar">
                            <div className="panel-content">
                                <div className="sidebar-info">
                                    <section>
                                        <header>Thông tin cơ bản</header>
                                        <div className="section-content">
                                            <div className="row-info"><label>Avatar</label>
                                                <div className="avatar-wrap">
                                                    <span title="Avatar thường">
                                                        <img className="avatar-item" src={this.props.detailInfo.AvatarCustom} alt="avt"/>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="row-info"><label>Dạng bài</label><span>Bài thường (size M)</span>
                                            </div>
                                            <div className="row-info"><label>Tác giả</label><span>{this.props.detailInfo.Author}</span>
                                            </div>
                                            <div className="row-info"><label>Ngày xuất bản</label><span>{moment(this.props.detailInfo.CreatedDate).format('DD/MM/YYYY')}</span>
                                            </div>
                                            <div className="row-info"><label>Tags</label>Chưa
                                                chọn tag</div>
                                            <div className="row-info"><label>Cho phép hiển thị trên trang
                                                chủ</label><span>Không</span></div>
                                            <div className="row-info"><label>Là bài
                                                AdStore</label><span>Không</span></div>
                                            <div className="row-info"><label>Là bài PR</label><span>Không</span>
                                            </div>
                                        </div>
                                    </section>
                                    <section>
                                        <header>Cài đặt phân phối</header>
                                        <div className="section-content">
                                            <div className="row-info"><label>Chuyên mục chính</label><span>Thế giới</span>
                                            </div>
                                            <div className="row-info"><label>Chuyên mục phụ</label><span>Thế giới</span>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
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
                        <div className="detail-info-title" onClick={() => props.togglePopup(list, list.EncryptId)}>
                            {list.Title}
                        </div>
                        <div className="author">
                            Viết bởi {list.Author}, biên tập bới {list.CreatedBy}
                        </div>
                    </div>
                </div>
                <div className="date">
                    {moment(list.CreatedDate).format('DD/MM/YYYY')}
                </div>
                <div className="zone">
                    {list.ZoneName}
                </div>
                <div className="view">
                    Lượt xem: {list.ViewCount}  -  Nhuận bút: 0
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
        <li>
            <div className="main-table">
                <div className="list">
                    <div className="list-group">
                        <div className="list-date">
                            {list.date}
                        </div>
                        <Items
                            list = {list.list}
                            togglePopup = {props.togglePopup}
                        />
                    </div>
                </div>
            </div>
        </li>
    );
    return (
        <ul className="form-list-item">
            {listItems}
        </ul>
    );
}
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            list2: [],
            list3: [],
            listFilter: [],
            listSort: [],
            a: 0,
            b: 50,
            page: 1,
            total: 0,
            listZone: [],
            filter: false,
            value: '',
            selectedZone: '',
            dateStart: '',
            dateEnd: '',
            dialogVisible: false,
            showPopup: false,
            detailInfo: {},
            body: null
        };
        // This binding is necessary to make `this` work in the callback
        // this.handleClick = this.handleClick.bind(this);
        this.handleNextPage = this.handleNextPage.bind(this);
        this.handleBackPage = this.handleBackPage.bind(this);
        this.selectedZone = this.selectedZone.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.getList = this.getList.bind(this);
        this.getListZone = this.getListZone.bind(this);
        this.showFormDetail = this.showFormDetail.bind(this);
        this.togglePopup = this.togglePopup.bind(this);
    }
    togglePopup(val, id) {
        const ID = id
        const body = val.Body
        let getNodes = str => new DOMParser().parseFromString(str, 'text/html').body.childNodes;
        let nodes = getNodes(body);
        this.setState({
            body: nodes
        });
        this.setState({
            showPopup: !this.state.showPopup
        });
        var promise = new Promise(function(resolve, reject) {
            var request = new XMLHttpRequest();
            request.onload = function() {
                if (request.status == 200) {
                    resolve(request.response); // we got data here, so resolve the Promise
                } else {
                    reject(Error(request.statusText)); // status is not 200 OK, so reject
                }
            };
            request.open("POST", "http://192.168.25.95:8088/api/base/news/get_news_detail_by_id", true);
            request.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTM4NCJ9.eyJ1bmlxdWVfbmFtZSI6Ik5Yby9hbzR4TDVpeDMwdEFDa2w2amc9PSIsInN1YiI6IjQvMWo4SEEwNGRHRU4yZVl3dS9FaVE9PSIsIm5zcCI6InFUTWZ1ZFhWaG5vUkpUcmFPeFEyMEE9PSIsImxhbmciOiJkdW1QV2V2NTNoSlBRK2xRT1RuSndRPT0iLCJpc3MiOiJNKzJqMG1xa25ZcTlMYmlxbXp3V0t3PT0iLCJhdWQiOiJBbnkiLCJleHAiOjE1NDAwODgzNzYsIm5iZiI6MTU0MDAwMTk3Nn0.puUCtPCXPoCKztfh5sgpYhB0vX5XBLsX1aWSSg1WgI3Pe_cyGGRKtPO6kcaHnUUp");
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            const data = {
                id: ID
            }
            var params = typeof data == 'string' ? data : Object.keys(data).map(
                function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
            ).join('&');
            request.send(params);
        });
        promise.then(function(data) {
            console.log('Got data! Get list.');
            var a = data
            var b = JSON.parse(a)
            var c = b.Data.NewsInfo
            console.log(c)
            this.setState({detailInfo: c})

        }.bind(this)).catch(function(error) {
            console.log('Error occurred!', error);
        });
    }
    showFormDetail(val) {
        this.setState({ dialogVisible: val })
    }
    handleNextPage() {
        if (this.state.list.length === 50) {
            if (this.state.filter) {
                const page = this.state.page + 1
                const a = this.state.a + 50
                const b = this.state.b + 50
                this.setState({a: a})
                this.setState({b: b})
                this.setState({page: page})
                this.handleFilter(page)
            } else {
                const page = this.state.page + 1
                const a = this.state.a + 50
                const b = this.state.b + 50
                this.setState({a: a})
                this.setState({b: b})
                this.setState({listSort: []})
                this.setState({page: page})
                this.getList(page,() => {
                    const listItems = this.state.list
                    var listSort = this.state.listSort
                    for (let i = 0; i < listItems.length; i ++) {
                        if (listSort.length === 0) {
                            var a1 = {}
                            a1['date'] = moment(listItems[i].CreatedDate).format('DD/MM/YYYY')
                            a1['list'] = []
                            a1['list'].push(listItems[i])
                            listSort.push(a1)
                        } else {
                            let t = true
                            for (let j = 0; j < listSort.length; j ++) {
                                if (moment(listItems[i].CreatedDate).format('DD/MM/YYYY') === listSort[j].date) {
                                    console.log('qq')
                                    listSort[j].list.push(listItems[i])
                                    t = false
                                }
                            }
                            if (t) {
                                var a1 = {}
                                a1['date'] = moment(listItems[i].CreatedDate).format('DD/MM/YYYY')
                                a1['list'] = []
                                a1['list'].push(listItems[i])
                                listSort.push(a1)
                            }
                        }
                    }
                    console.log('listsort')
                    console.log(listSort)
                    this.setState({listSort: listSort})
                    console.log('listSort on state')
                    console.log(this.state.listSort)
                })
            }
        }
    }
    handleBackPage() {
        if (this.state.page > 1) {
            if (this.state.filter) {
                const page = this.state.page -1
                const a = this.state.a - 50
                const b = this.state.b - 50
                this.setState({a: a})
                this.setState({b: b})
                this.setState({listSort: []})
                this.setState({page: page})
                this.handleFilter(page)
            } else {
                const page = this.state.page -1
                const a = this.state.a - 50
                const b = this.state.b - 50
                this.setState({a: a})
                this.setState({b: b})
                this.setState({listSort: []})
                this.setState({page: page})
                this.getList(page,() => {
                    const listItems = this.state.list
                    var listSort = this.state.listSort
                    for (let i = 0; i < listItems.length; i ++) {
                        if (listSort.length === 0) {
                            var a1 = {}
                            a1['date'] = moment(listItems[i].CreatedDate).format('DD/MM/YYYY')
                            a1['list'] = []
                            a1['list'].push(listItems[i])
                            listSort.push(a1)
                        } else {
                            let t = true
                            for (let j = 0; j < listSort.length; j ++) {
                                if (moment(listItems[i].CreatedDate).format('DD/MM/YYYY') === listSort[j].date) {
                                    console.log('qq')
                                    listSort[j].list.push(listItems[i])
                                    t = false
                                }
                            }
                            if (t) {
                                var a1 = {}
                                a1['date'] = moment(listItems[i].CreatedDate).format('DD/MM/YYYY')
                                a1['list'] = []
                                a1['list'].push(listItems[i])
                                listSort.push(a1)
                            }
                        }
                    }
                    console.log('listsort')
                    console.log(listSort)
                    this.setState({listSort: listSort})
                    console.log('listSort on state')
                    console.log(this.state.listSort)
                })
            }
        }
    }
    selectedZone(zone) {
        const zoneSelected = zone
        this.setState({selectedZone: zoneSelected})
    }
    handleFilter(page) {
        this.setState({filter: true})
        console.log('page')
        console.log(page)
        if (isNaN(page)) {
            page = 1
        }
        console.log(page)
        console.log('run')
        const selectedZone = this.state.selectedZone
        const dateS = moment(this.state.dateStart).format('DD/MM/YYYY')
        const dateE = moment(this.state.dateEnd).format('DD/MM/YYYY')
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
            request.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTM4NCJ9.eyJ1bmlxdWVfbmFtZSI6Ik5Yby9hbzR4TDVpeDMwdEFDa2w2amc9PSIsInN1YiI6IjQvMWo4SEEwNGRHRU4yZVl3dS9FaVE9PSIsIm5zcCI6InFUTWZ1ZFhWaG5vUkpUcmFPeFEyMEE9PSIsImxhbmciOiJkdW1QV2V2NTNoSlBRK2xRT1RuSndRPT0iLCJpc3MiOiJNKzJqMG1xa25ZcTlMYmlxbXp3V0t3PT0iLCJhdWQiOiJBbnkiLCJleHAiOjE1NDAwODgzNzYsIm5iZiI6MTU0MDAwMTk3Nn0.puUCtPCXPoCKztfh5sgpYhB0vX5XBLsX1aWSSg1WgI3Pe_cyGGRKtPO6kcaHnUUp");
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            const data = {
                zone: selectedZone,
                status: '8',
                type: '0',
                page: page,
                num: '50',
                order: '0'
            }
            if (dateS !== '' && dateE !== '') {
                data["minDate"] = dateS
                data["maxDate"] = dateE
            }
            var params = typeof data == 'string' ? data : Object.keys(data).map(
                function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
            ).join('&');
            request.send(params);
        });
        promise.then(function(data) {
            var filer = new Promise(function(resolve, reject) {
                console.log('Got data! Promise fulfilled.');
                var a = data
                var total = JSON.parse(a).Data.TotalRow
                this.setState({total: total})
                var b = JSON.parse(a).Data.News
                console.log('filter')
                console.log(b)
                resolve(b)
                this.setState({list: b})
            }.bind(this));
            filer.then(function(data) {
                console.log('afff')
                const listItems = data
                this.setState({listSort: []})
                var listSort = this.state.listSort
                for (let i = 0; i < listItems.length; i ++) {
                    if (listSort.length === 0) {
                        var a1 = {}
                        a1['date'] = moment(listItems[i].CreatedDate).format('DD/MM/YYYY')
                        a1['list'] = []
                        a1['list'].push(listItems[i])
                        listSort.push(a1)
                    } else {
                        let t = true
                        for (let j = 0; j < listSort.length; j ++) {
                            if (moment(listItems[i].CreatedDate).format('DD/MM/YYYY') === listSort[j].date) {
                                console.log('qq')
                                listSort[j].list.push(listItems[i])
                                t = false
                            }
                        }
                        if (t) {
                            var a1 = {}
                            a1['date'] = moment(listItems[i].CreatedDate).format('DD/MM/YYYY')
                            a1['list'] = []
                            a1['list'].push(listItems[i])
                            listSort.push(a1)
                        }
                    }
                }
                console.log('listsort')
                console.log(listSort)
                this.setState({listSort: listSort})
            }.bind(this))
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
    getListZone() {
        var promise = new Promise(function(resolve, reject) {
            var request = new XMLHttpRequest();
            request.onload = function() {
                if (request.status == 200) {
                    resolve(request.response); // we got data here, so resolve the Promise
                } else {
                    reject(Error(request.statusText)); // status is not 200 OK, so reject
                }
            };
            request.open("GET", "http://192.168.25.95:8088/api/base/news/get_all_zone", true);
            request.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTM4NCJ9.eyJ1bmlxdWVfbmFtZSI6Ik5Yby9hbzR4TDVpeDMwdEFDa2w2amc9PSIsInN1YiI6IjQvMWo4SEEwNGRHRU4yZVl3dS9FaVE9PSIsIm5zcCI6InFUTWZ1ZFhWaG5vUkpUcmFPeFEyMEE9PSIsImxhbmciOiJkdW1QV2V2NTNoSlBRK2xRT1RuSndRPT0iLCJpc3MiOiJNKzJqMG1xa25ZcTlMYmlxbXp3V0t3PT0iLCJhdWQiOiJBbnkiLCJleHAiOjE1NDAwODgzNzYsIm5iZiI6MTU0MDAwMTk3Nn0.puUCtPCXPoCKztfh5sgpYhB0vX5XBLsX1aWSSg1WgI3Pe_cyGGRKtPO6kcaHnUUp");
            request.send();
        });
        promise.then(function(data) {
            console.log('Got data! Lists zone.');
            var a = data
            var b = JSON.parse(a).Data.Zones
            console.log(b)
            this.setState({listZone: b})
        }.bind(this)).catch(function(error) {
            console.log('Error occurred!', error);
        });
    }
    getList(page, callback) {
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
            request.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTM4NCJ9.eyJ1bmlxdWVfbmFtZSI6Ik5Yby9hbzR4TDVpeDMwdEFDa2w2amc9PSIsInN1YiI6IjQvMWo4SEEwNGRHRU4yZVl3dS9FaVE9PSIsIm5zcCI6InFUTWZ1ZFhWaG5vUkpUcmFPeFEyMEE9PSIsImxhbmciOiJkdW1QV2V2NTNoSlBRK2xRT1RuSndRPT0iLCJpc3MiOiJNKzJqMG1xa25ZcTlMYmlxbXp3V0t3PT0iLCJhdWQiOiJBbnkiLCJleHAiOjE1NDAwODgzNzYsIm5iZiI6MTU0MDAwMTk3Nn0.puUCtPCXPoCKztfh5sgpYhB0vX5XBLsX1aWSSg1WgI3Pe_cyGGRKtPO6kcaHnUUp");
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            const data = {
                status: '8',
                type: '0',
                page: page,
                num: '50',
                order: '0'
            }
            var params = typeof data == 'string' ? data : Object.keys(data).map(
                function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
            ).join('&');
            request.send(params);
        });
        promise.then(function(data) {
            console.log('Got data! Get list.');
            var a = data
            var total = JSON.parse(a).Data.TotalRow
            this.setState({total: total})
            var b = JSON.parse(a).Data.News
            console.log(b)
            this.setState({list: b})
            callback()
        }.bind(this)).catch(function(error) {
            console.log('Error occurred!', error);
        });
    }
    componentDidMount() {
        this.getList(1,() => {
            console.log('afff')
            const listItems = this.state.list
            var listSort = this.state.listSort
            for (let i = 0; i < listItems.length; i ++) {
                if (listSort.length === 0) {
                    var a1 = {}
                    a1['date'] = moment(listItems[i].CreatedDate).format('DD/MM/YYYY')
                    a1['list'] = []
                    a1['list'].push(listItems[i])
                    listSort.push(a1)
                } else {
                    let t = true
                    for (let j = 0; j < listSort.length; j ++) {
                        if (moment(listItems[i].CreatedDate).format('DD/MM/YYYY') === listSort[j].date) {
                            console.log('qq')
                            listSort[j].list.push(listItems[i])
                            t = false
                        }
                    }
                    if (t) {
                        var a1 = {}
                        a1['date'] = moment(listItems[i].CreatedDate).format('DD/MM/YYYY')
                        a1['list'] = []
                        a1['list'].push(listItems[i])
                        listSort.push(a1)
                    }
                }
            }
            console.log('listsort')
            console.log(listSort)
            this.setState({listSort: listSort})
        })
        this.getListZone()
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
                                    <div className="nav-button">
                                        <div style={{width: 150 + 'px'}}>
                                            <Select value={this.state.value} placeholder={'Chuyên mục'} onChange={this.selectedZone}>
                                                {
                                                    this.state.listZone.map(el => {
                                                        return <Select.Option key={el.Id} label={el.Name} value={el.Id} />
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
                                    </div>
                                    <div className="pagination-box">
                                        <div className="pagination-p">
                                            {this.state.a} đến {this.state.list.length < 50 ? this.state.total : this.state.b} trong số {this.state.total} bài
                                        </div>
                                        <div className="pagination">
                                            <a href="#" onClick={this.handleBackPage} className="previous-page"><i className="fa fa-angle-left"></i></a>
                                            <a href="#" className="page">{this.state.page}</a>
                                            <a href="#" onClick={this.handleNextPage} className="next-page"><i className="fa fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <List
                                    list={this.state.listSort}
                                    togglePopup={(value, id) => this.togglePopup(value, id)}
                                />
                                {this.state.showPopup ?
                                    <Popup
                                        closePopup={this.togglePopup.bind(this)}
                                        detailInfo = {this.state.detailInfo}
                                        body = {this.state.body}
                                    />
                                    : null
                                }
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
