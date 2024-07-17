import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { store } = useContext(Context);
  return (
    <nav
      className="navbar navbar-dark text-white border-b border-1 sticky-top"
      style={{
        backdropFilter: "blur(20px)",
        backgroundColor: "rgba(0,0,0, 0.9)",
      }}
    >
      <div className="container-fluid p-3 px-5">
        <Link to="/" className="navbar-brand" style={{ cursor: "pointer" }}>
          <img
            src="https://cdn.worldvectorlogo.com/logos/star-wars-4.svg"
            alt="Starwars logo"
            style={{ width: "80px" }}
          />
        </Link>
        {/* dropdown */}
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-outline-warning dropdown-toggle fw-bold position-relative"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-black">
              {store.favorites.length}
              <span class="visually-hidden">unread messages</span>
            </span>
            Favorites
          </button>
          <ul className="dropdown-menu dropdown-menu-end bg-dark border-1 border-secondary">
            {store.favorites == 0 ? (
              <span className="dropdown-item text-white">
                Add new favorites
              </span>
            ) : (
              store.favorites.map((item) => (
                <li>
                  <Link
                    to={item.url}
                    className="dropdown-item text-white"
                    href="#"
                  >
                    {item.name}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
