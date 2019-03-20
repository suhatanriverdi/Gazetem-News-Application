import React, { Component } from 'react';
import logo from './gazetem.png';
import './App.css';
import Navigation from './components/Navigation';
import Categories from './components/Categories';

class App extends Component {
	render() {
		return (
			<div className="App">
			<Navigation />
			<Categories />
			<header className="App-header">
			<img src={logo} alt="logo" />
			<p>
            	GAZETEM'e Hoşgeldiniz,<br /> Ülkemizdeki en güncel haberleri
				uygulamamızdan takip edebilirsiniz!
			</p>
        	</header>
      		</div>
    	);
  	}
}

export default App;