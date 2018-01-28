import React, {Component} from 'react';
import Product from './Product';

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
    fetch('http://localhost:3000/products')
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

    if (isLoading) {
      return <h1 className="loader">Loading....</h1>
    }
    else if (isRejected) {
      return <h1 className="error">Oops... Something Went Wrong</h1>
    } else {
      return <table>
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
    }
  }
}

export default Products;