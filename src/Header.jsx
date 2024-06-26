import { Link } from "react-router-dom";
import { Logout } from "./Logout";

export function Header() {
  let authenticationLinks;
  if (localStorage.jwt === undefined) {
    authenticationLinks = (
      <>
        <Link to="/signup" className="nav-link">
          Sign Up
        </Link>
        <Link to="/login" className="nav-link">
          Log In
        </Link>
      </>
    );
  } else {
    authenticationLinks = (
      <>
        <a className="nav-link">
          <Logout />
        </a>
      </>
    );
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand banner-blog" href="/home">
            <i>It&apos;s a Blog!</i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/home" className="nav-link active" aria-current="page">
                Home
              </Link>
              <Link className="nav-link" to="/posts/new">
                New Post
              </Link>
              {/* <Link className="nav-link" to="/posts"> */}
              {/* All Posts
              </Link> */}
              {/* sign up/log in */}
              {authenticationLinks}
              {/* log out */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
