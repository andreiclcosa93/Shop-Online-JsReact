import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo-andrei.png';
import {  ReactComponent as ShoppingCart }  from '../assets/icons/shopping-cart.svg';
import './Header.css';
import {connect} from 'react-redux';
import { logoutUser } from '../redux/actions/user';



function Header(props) {
  
 

  

    return(
        <header className="border-bottom mb-3">
            <div className="container-fluid container-min-max-width d-flex justify-content-between align-items-center">
                <Link to="/" className="my-3">
                    <img src={logo} alt="Shop" className="logo"/>
                </Link>
                <div>
                    { props.user && props.user.uid
                        ? <p>Salut, {props.user.displayName}!</p>
                        : null
                    }
                    <div className="d-flex justify-content-end">
                        { props.user && props.user.uid
                            ? <p className="logout h5" onClick={() => props.signOut()}>Delogare</p>
                            : <Link to="/login" className="text-dark h5 mb-0">Logare</Link>
                        }
                        <div className="d-flex align-items-center">
                            <Link to="/cart" className="d-flex">
                                <ShoppingCart className="ml-2"/>
                                <p className="ml-1 mb-0 text-dark">{ props.numberOfProducts }</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

function mapStateToProps(state) {
    return {
        numberOfProducts: state.cart.products.length,
        user: state.user.data.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signOut: () => dispatch(logoutUser())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);