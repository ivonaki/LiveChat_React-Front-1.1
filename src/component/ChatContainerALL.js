import React, { Component } from 'react';
import Sidebar from './Sidebar/Sidebar';
import ChatContainer from './ChatContainer';
import SendingMessages from './SendingMessages';
import './ChatContainerALL.css';
import MessageList from './ChatBox';

class ChatContainerALL extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      toggle: true,
	      chatroomId: "1"
	    }
	  }

	handleChatRoom = async (value) => {
		this.setState({
			chatroomId: value
		})
		console.log(this.state.chatroomId)
	}  

	handleToggle = () => {
		if(!this.state.toggle){
			this.setState({
				toggle: true
			})
		}
		else{
			this.setState({
				toggle: false,		
			})
		}
	}


	render() {	
		return(
			<div className="wrapper">
					<div className='rows'>
						<aside className="aside aside-1"><Sidebar ChangingRoom={this.handleChatRoom} Hide={this.handleToggle}/> </aside>
						{this.state.toggle ?
	  					<aside className="aside aside-2" >Toggle private messages
	  							<p>blaglad</p>
	  							<p>blaglad</p>
	  							<p>blaglad</p>
	  							<p>blaglad</p>
	  							<p>blaglad</p>
	  					</aside> : null}
  					</div>
  					<div className='columns'>
	  					<div className="container1">
	  						<MessageList chatroomId = {this.state.chatroomId}/>
						</div>
						<div className='container2'>
							<SendingMessages/>
						</div>
					</div>

			</div>
			);
		}
	}

export default ChatContainerALL;   