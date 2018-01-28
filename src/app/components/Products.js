import React, {Component} from 'react';
import Product from './Product';

class Products extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/products')
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          return Promise.reject();
        }
      })
      .then(data => this.setState({
        data
      }))
      .catch(error => console.log(error));
  }

  render() {
    return (
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
    );
  }
}

export default Products;