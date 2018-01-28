import React, {Component} from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      children,
      isLoading,
      isRejected
    } = this.props;

    if (isLoading) {
      return <h1 className="loader">Loading...</h1>
    } else if (isRejected) {
      return <h1 className="error">Something Went Wrong</h1>
    } else {
      return children;
    }
  }
}

export default ErrorBoundary;