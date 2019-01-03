import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class SongCreate extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputChange(e) {
    const title = e.target.value;
    this.setState({ title })
  }

  onSubmit(e) {
    e.preventDefault();
  
    this.props.mutate({
      variables: {
        title: this.state.title
      }
    })
  }

  render() {
    return(
      <div>
        <h3>Create a new song</h3>
        <form onSubmit={this.onSubmit}>
          <label>Song Title:</label>
          <input 
            onChange={this.handleInputChange}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String){
    addSong(title: $title){
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);