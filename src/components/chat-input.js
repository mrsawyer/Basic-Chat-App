import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../redux/actions';

class ChatInput extends Component {

  componentDidMount() {
    //this.refs.chatInput.focus();
  }
  
  onEnter(e) {
    if(e.keyCode === 13) this.chat();
  }

  chat() {
    const text = this.refs.chatinput.value;
    if(text) this.props.dispatch(addMessage(text));
    this.refs.chatinput.value='';
    this.refs.chatinput.focus();
  }

  render() {
    return (
      <div className="chat-input" >
        <input type='text' ref="chatinput" onKeyDown={(e) => this.onEnter(e)} />
        {/*<button onClick={() => this.chat(this.refs.chatinput.value)}>Chat Now </button>*/}
      </div>
    );
  }
}

export default connect()(ChatInput);