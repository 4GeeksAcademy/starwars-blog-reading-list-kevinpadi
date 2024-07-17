import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = (props) => {
  const { store } = useContext(Context);
  const { type, name, id } = useParams();
  let element;

  if (type === "character") {
    element = store.characters.find((character) => character.name === name);
  } else if (type === "planet") {
    element = store.planets.find((planet) => planet.name === name);
  } else {
    element = store.starships.find((starship) => starship.name === name);
  }

  const imageUrl = (type, id) => {
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

  const attributesList = () => {
    if (!element) {
      return <div className="text-white">Loading...</div>;
    }

    if (type === "starship") {
      const starshipsProps = [
        "model",
        "starship_class",
        "max_atmosphering_speed",
        "cost_in_credits",
        "crew",
        "passengers",
        "hyperdrive_rating",
        "cargo_capacity",
        "consumables",
        "length",
        "manufacturer",
      ];

      return (
        <ul className="list-group list-group-flush mt-5 d-flex flex-row flex-wrap">
          {starshipsProps.map((property, i) => (
            <li
              key={i}
              className="list-group-item bg-black p-1 text-secondary border-b w-50 fw-bold"
            >
              <span className="fw-normal pe-1">
                {property.replaceAll("_", " ")}:
              </span>
              {element[property] || "N/A"}
            </li>
          ))}
        </ul>
      );
    } else if (type === "character") {
      const characterProps = [
        "height",
        "mass",
        "hair_color",
        "eye_color",
        "skin_scolor",
        "birth_year",
        "gender",
      ];
      return (
        <ul className="list-group list-group-flush mt-5 d-flex flex-row flex-wrap">
          {characterProps.map((property, i) => (
            <li
              key={i}
              className="list-group-item bg-black p-1 text-secondary border-b w-50 fw-bold"
            >
              <span className="fw-normal pe-1">
                {property.replaceAll("_", " ")}:
              </span>
              {element[property] || "N/A"}
            </li>
          ))}
        </ul>
      );
    } else if (type === "planet") {
      const planetProps = [
        "rotation_period",
        "orbital_period",
        "diameter",
        "climate",
        "gravity",
        "terrain",
        "surface_water",
        "population",
      ];
      return (
        <ul className="list-group list-group-flush mt-5 d-flex flex-row flex-wrap">
          {planetProps.map((property, i) => (
            <li
              key={i}
              className="list-group-item bg-black p-1 text-secondary border-b w-50 fw-bold"
            >
              <span className="fw-normal pe-1">
                {property.replaceAll("_", " ")}:
              </span>
              {element[property] || "N/A"}
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div className="bg-black h-100">
      <div className="card mx-auto my-auto border-warning bg-black mb-3 w-75 h-50">
        <div className="row g-0 h-100">
          <div
            className="col-md-4 h-100"
            style={{
              backgroundImage: `url(${imageUrl(type, id)})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
          ></div>
          <div className="col-md-8">
            <div className="card-body p-3">
              {element ? (
                <>
                  <h5 className="card-title display-5 text-white fw-bold">
                    {element.name}
                  </h5>
                  {attributesList()}
                </>
              ) : (
                <div className="text-white">Loading...</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
