import React, { Component } from "react";

class ErrorBoundry extends Component {
  state = {
    hasError: false,
    message: ""
  }

  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      message: error
    })
  }

  render() {
    if(this.state.hasError) {
      return <h1>Something went wrong</h1>
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
