import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Card = ({
  name,
  birthDay,
  gender,
  speed,
  starshipClass,
  climate,
  population,
  type,
  id,
}) => {
  const { store, actions } = useContext(Context);

  const handleClick = () => {
    const URL = `/details/${type}/${name}/${id}`;
    actions.addFavorites(URL, name);
  };

  const attributesList = () => {
    if (type === "character") {
      return (
        <div className="d-flex flex-column gap-1">
          <li className="d-flex gap-1 align-items-center me-3">
            <i className="fas fa-venus-mars pe-1"></i>
            <small>{gender}</small>
          </li>
          <li className="d-flex gap-1 align-items-center">
            <i className="fas fa-birthday-cake pe-1"></i>
            <small>{birthDay}</small>
          </li>
        </div>
      );
    } else if (type === "starship") {
      console.log;
      return (
        <div className="d-flex flex-column gap-1">
          <li className="d-flex gap-1 align-items-center me-3">
            <i className="fas fa-space-shuttle"></i>
            <small>{starshipClass}</small>
          </li>
          <li className="d-flex gap-1 align-items-center">
            <i className="fas fa-tachometer-alt"></i>
            <small>{speed}</small>
          </li>
        </div>
      );
    } else if (type === "planet") {
      return (
        <div className="d-flex flex-column gap-1">
          <li className="d-flex gap-1 align-items-center me-3">
            <i className="fas fa-cloud"></i>
            <small>{climate}</small>
          </li>
          <li className="d-flex gap-1 align-items-center">
            <i className="fas fa-users"></i>
            <small>{population}</small>
          </li>
        </div>
      );
    }
  };

  const getImageUrl = (type, id) => {
    switch (type) {
      case "character":
        return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
      case "planet":
        return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
      case "starship":
        return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
      default:
        return "";
    }
  };

  return (
    <div
      className="card card-cover overflow-hidden text-white bg-dark rounded-5 border-0 shadow-lg"
      style={{
        height: "340px",
        width: "280px",
        backgroundImage: `url(${getImageUrl(type, id)})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="d-flex flex-column justify-content-end gap-4 h-100 p-3 pb-3 text-white text-shadow-1 position-relative">
        <button
          type="button"
          onClick={handleClick}
          className="btn btn-lg btn-outline-danger border-0 rounded-pill position-absolute top-0 end-0 m-2"
        >
          <i className="fas fa-star"></i>
        </button>
        <h3
          className="pb-5 mb-5 lh-1 fw-bold text-start"
          style={{
            textShadow: "0px 1px 3px black",
          }}
        >
          {name}
        </h3>
        <ul
          className="d-flex justify-content-between align-items-center list-unstyled position-absolute w-100 end-0 px-3 py-1"
          style={{
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(0,0,0, 0.7)",
          }}
        >
          {attributesList()}
          <li className="">
            <Link
              to={`/details/${type}/${name}/${id}`}
              className="btn btn-outline-warning"
            >
              See more
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
