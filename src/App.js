import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';

import ChatMessages from './components/chat-messages';
import ChatInput from './components/chat-input';
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app-window">
          <div className="sidebar"></div>
          <div className="chat-window">
            <ChatMessages className="chat-messages" />
            <ChatInput className="chat-input" />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
