import React,{Component} from "react";
import "./Header.css";

class Header extends Component{
    render(){
        return (
            <nav className="Nav">
                <div className="Nav-menus">
                    <a className="Nav-brand-logo" href="/">
                        MyClone
                    </a>
                </div>
            </nav>
        );
    }
}

export default Header;