// JSX means javascript XML file
function Header(){

    return(
        <header>
            <h1>My website</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contacts</a></li>
                </ul>
                <hr />
            </nav>
        </header>
    );
}

export default Header
// We need to export this component so that we can import it elsewhere