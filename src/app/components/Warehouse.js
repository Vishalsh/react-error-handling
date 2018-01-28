import React, {Component} from 'react';

import ErrorBoundary from './ErrorBoundaryWithCatch';

class Warehouse extends Component {
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
    fetch('http://localhost:3000/warehouses')
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
            <th>City</th>
            <th>Products</th>
          </tr>
          </thead>
          <tbody>
          {
            this.state.data.map(warehouse => {
              return (
                <tr>
                  <td>{warehouse.city}</td>
                  <td>{warehouse.products.map(product => product)}</td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </ErrorBoundary>
    )
  }
}

export default Warehouse;