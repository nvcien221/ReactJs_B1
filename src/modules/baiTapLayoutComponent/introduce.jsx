import { Component } from 'react'

export default class Introduce extends Component {
    render() {
      return (
        <div className="container px-lg-5 py-5">
          <div className="p-4 p-lg-5 text-center bg-light">
            <div className=" m-4 m-lg-5">
              <h1 className='display-5 fw-bold'>A warm welcome!</h1>
              <p className='fs-4'>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
              <a href="#" className="btn btn-primary btn-lg">Call to action</a>
            </div>
          </div>
        </div>
      );
    }
  }
  
