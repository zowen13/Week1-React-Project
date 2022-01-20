import React from 'react';

export default class Password extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
    }
    
    handleSubmit(event) {
        alert('A password was submitted: ' + this.input.current.value);
        event.preventDefault();
    }
    
    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Password:
              <input type="text" ref={this.input} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
    }
}