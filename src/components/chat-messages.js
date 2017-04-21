import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChatMessages extends Component {
  render() {
    return (
      <div className='chat-messages'>
        <ul className='message-list'>
          { this.props.messages.map(message => {
            return <li key={Math.random()}><span className='user-name'>{message.user}:</span> { message.text }</li>
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      messages: state.messages
    }
  }

export default connect(mapStateToProps)(ChatMessages);