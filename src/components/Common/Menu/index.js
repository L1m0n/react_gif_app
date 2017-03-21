import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import {Link} from 'react-router';
require('../assets/Menu.scss');

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open : false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        var node = findDOMNode(this.menu);
        node.parentElement.classList.toggle('opened');
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        return (
            <div ref={(menu) => {this.menu = menu}} className={this.state.open ? 'menu menu--opened' : 'menu'}>
                <div className="menu__button" onClick={this.toggleMenu}>
                    <div className="sandwich"></div>
                </div>
                <div className="menu__container">
                    <Link onClick={this.toggleMenu} className="menu__link" to="/">
                        Home
                    </Link>
                    <Link onClick={this.toggleMenu} className="menu__link" to="/collection">
                        Collection
                    </Link>
                    <Link onClick={this.toggleMenu} className="menu__link" to="/contact-us">
                        Contact Us
                    </Link>
                </div>
            </div>
        )
    }
}

export default Menu;