import React, {Component} from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrors: false
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasErrors: true,
      errorInfo
    })
  }

  render() {
    const {
      children,
      isLoading,
      isRejected
    } = this.props;

    const {
      hasErrors
    } = this.state;

    if (hasErrors) {
      return (
        <div className="error">
          <h3>The Part of the application is broken but application is still mounted</h3>
          <p>{this.state.errorInfo.componentStack}</p>
        </div>
      )
    }
    if (isLoading) {
      return <h1 className="loader">Loading...</h1>
    } else if (isRejected) {
      return <h1 className="error">Oops... Something Went Wrong</h1>
    } else {
      return children;
    }
  }
}

export default ErrorBoundary;