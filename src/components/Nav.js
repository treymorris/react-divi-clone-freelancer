import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";




function Nav() {
    
    let activeStyle = { fontWeight: "bold" }

    const titleArray = [
      { page: "/case", title: "Case Study" },
      { page: "/portfolio", title: "Portfolio" },
      { page: "/about", title: "About" },
      { page: "/blog", title: "Blog" },
      { page: "/services", title: "Services" },
      { page: "/contact", title: "Contact" },
      { page: "/landing", title: "Landing" },
      { page: "/", title: "Home" },
      { page: "/projects", title: "Projects" },
    ];

    const location = useLocation();
    const title = titleArray.find(
      (el) => el.page === location.pathname
    )?.title;
    

    return (
      <nav className="navbar pt-0">
        <div className="container-fluid bg-success">
                <div className="h3 p-3">Web Freelancer {title}</div>
          <div className="nav float-end">
            <NavLink
              className="p-3 nav-link link-dark"
              to="/case"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Case Study
            </NavLink>
            <NavLink
              className="p-3 nav-link link-dark"
              to="/portfolio"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Portfolio
            </NavLink>
            <NavLink
              className="p-3 nav-link link-dark"
              to="/about"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              About
            </NavLink>
            <NavLink
              className="p-3 nav-link link-dark"
              to="/blog"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Blog
            </NavLink>
            <NavLink
              className="p-3 nav-link link-dark"
              to="/services"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Services
            </NavLink>
            <NavLink
              className="p-3 nav-link link-dark"
              to="/contact"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Contact
            </NavLink>
            <NavLink
              className="p-3 nav-link link-dark"
              to="/landing"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Landing
            </NavLink>
            <NavLink
              className="p-3 nav-link link-dark"
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
            <NavLink
              className="p-3 nav-link link-dark me-5"
              to="/projects"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Projects
            </NavLink>
          </div>
        </div>
      </nav>
    );
}

export default Nav;
