import React, { Component } from 'react';
import './App.css';
import  Header from './components/header.js'
import  Aside from './components/aside.js'
import  Article from './components/article.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={{width: 100 + '%'}}>
            <Header></Header>
          </div>
        </header>
        <aside className="App-aside">
          <div>
            <Aside></Aside>
          </div>
        </aside>
        <article className="App-article">
          <div>
            <Article></Article>
          </div>
        </article>
      </div>
    );
  }
}

export default App;
