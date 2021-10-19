import React, { Component } from 'react';
import { Link , withRouter } from 'react-router-dom';

class nav extends Component {
    state = {  }
    ChangDirective = () => {
        this.props.history.push('/');
    }
    render() {
        return (
            <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button onClick={this.ChangDirective} className="navbar-brand" >Home</button>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                     <Link to='/user' className="btn btn-primary nav-link" >User <span className="sr-only">(current)</span></Link>
                    </li>

                    </ul>
                </div>
                </nav>
            </>
        );
    }
}

export default withRouter(nav);