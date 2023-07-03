import  { Component } from 'react';

export default class Header extends Component {

  render() {
    return (

  <nav className="navbar navbar-expand-lg bg-dark">
    <div className='container'>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <a className="navbar-brand" id='navLink' href="#">Start Bootstrap</a>
      <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
        <ul className="navbar-nav" >
          <li className="nav-item">
            <a className="nav-link active" id='navLink' aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link"  id='navLinkAfter'href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " id='navLinkAfter'>Contact</a>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>


    )
  }
}
