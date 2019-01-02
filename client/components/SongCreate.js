import React, { Component } from 'react';

class SongCreate extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const title = e.target.value;
    this.setState({ title })
  }

  render() {
    return(
      <div>
        <h3>Create a new song</h3>
        <form>
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

export default SongCreate;