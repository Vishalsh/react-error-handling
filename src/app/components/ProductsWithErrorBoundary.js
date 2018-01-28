import React, {Component} from 'react';
import Product from './Product';

// import ErrorBoundary from './ErrorBoundary';
import ErrorBoundary from './ErrorBoundaryWithCatch';

class Products extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isRejected: false,
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({
      data: [],
      isRejected: false,
      isLoading: true
    });
    fetch('http://localhost:3000/products1')
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          return Promise.reject();
        }
      })
      .then((data) => {
        this.setState({
          data,
          isRejected: false,
          isLoading: false
        })
      })
      .catch(() => {
        this.setState({
          data: [],
          isRejected: true,
          isLoading: false
        });
      });
  }

  render() {
    const {
      data,
      isLoading,
      isRejected
    } = this.state;

    return (
      <ErrorBoundary
        isLoading={isLoading}
        isRejected={isRejected}
      >
        <table>
          <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>color</th>
            <th>size</th>
            <th>brand</th>
            <th>Price</th>
          </tr>
          </thead>
          <tbody>
          {
            this.state.data.map(product => {
              return <Product key={product.code} product={product}/>
            })
          }
          </tbody>
        </table>
      </ErrorBoundary>
    )
  }
}

export default Products;