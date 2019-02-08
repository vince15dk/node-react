import React, { Component } from 'react';

class Header extends Component {
    render(){
        return (
            <nav>
            <div className="nav-wrapper">
              <div className="row">
                <div className="col s12">
                  <a href="#" className="left brand-logo">
                    Emaily
                  </a>
                  <ul className="right">
                    <li>
                      <a>Google 로그인</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        );
    }
}

export default Header;