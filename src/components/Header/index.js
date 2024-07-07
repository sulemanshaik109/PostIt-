import {Link} from "react-router-dom"
import "../../styles/index.css"

const Header = () => {
    return (
        <nav className="header-container">
            <Link to="/" className="link-item">
                <h1 className="project-title">PostIt!</h1>
            </Link>
            <Link to="/create-post">
                <button className='botton'>Create New Post</button>
            </Link>
        </nav>
    )
}

export default Header;