// import $ from 'jquery';
// import { findDOMNode } from 'react-dom';
export default function Nav(){
    return(
        <div>
            <nav className="navbar navbar-expand-sm nav-bg" >
                <div className="container-fluid" style={{border:'2px solid #93d9fc'}}>
                <ul className="navbar-nav">
                <NavBarTab id="Home" name="Home" />
                </ul>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <NavBarTab id="profile" name="Profile" />
                            <NavBarTab id="exprience" name="Exprience" />
                            <NavBarTab id="about" name="about" />
                            <NavBarTab id="contact" name="contact" />
                        </ul>
                    </div>
                </div>
            </nav>
        </div>        
    );
}


function NavBarTab({name,id}){
    return(
        <>
            <li className="nav-item">
                <a className="nav-link" id={id} href=".">{name}</a>
            </li>
        </>
    );
}