import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions'

class Postform extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
      this.state ={
        title:'',
        body:''
      };
    }

    onChange = (e) => {
      this.setState({[e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
      e.preventDefault();

      const post = {
        title:this.state.title,
        body:this.state.body
      }
      // Call Action
      this.props.createPost(post)
    }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title:</label>
            <br />
            <input type="text" name="title" value={this.state.title} onChange={this.onChange}/>
          </div>
          <div>
            <label>Body:</label>
            <br/>
            <textarea name="body" value={this.state.body} onChange={this.onChange}></textarea>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}


export default connect(null, { createPost })(Postform);
