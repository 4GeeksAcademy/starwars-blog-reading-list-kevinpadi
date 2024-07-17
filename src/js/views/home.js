import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import Card from "../component/card.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div
      className="container-fluid bg-black text-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="mx-auto d-flex flex-column justify-content-center align-items-center w-25">
        <img
          src="https://cdn.worldvectorlogo.com/logos/star-wars-2.svg"
          style={{ width: "300px" }}
          alt="Starwars logo"
        />
        <p className="text-secondary fs-5">Welcome to the StarWars DataBase</p>
      </div>
      {/* Accordion */}

      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item bg-black ">
          <h2
            className="accordion-header bg-black text-white"
            id="flush-headingOne"
          >
            <button
              className="accordion-button collapsed bg-black text-white fw-bold"
              style={{ borderBottom: "1px solid #9c7408", height: "70px" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Characters
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body  border border-1 border-dark h-auto gap-2 d-flex flex-wrap">
              {store.characters.length == 0 ? (
                <div className="spinner-border text-warning" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                store.characters.map((character, index) => (
                  <Card
                    name={character.name}
                    birthDay={character.birth_year}
                    gender={character.gender}
                    type="character"
                    key={index}
                    id={index + 1}
                  />
                ))
              )}
            </div>
          </div>
        </div>
        <div className="accordion-item bg-black">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed bg-black text-white fw-bold"
              style={{ borderBottom: "1px solid #9c7408", height: "70px" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Planets
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body  border border-1 border-dark h-auto gap-2 d-flex flex-wrap">
              {store.planets.length == 0 ? (
                <div className="spinner-border text-warning" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                store.planets.map((planet, index) => (
                  <Card
                    name={planet.name}
                    climate={planet.climate}
                    population={planet.population}
                    type="planet"
                    key={index}
                    id={index + 1}
                  />
                ))
              )}
            </div>
          </div>
        </div>
        <div className="accordion-item bg-black">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed bg-black text-white fw-bold"
              style={{ borderBottom: "1px solid #9c7408", height: "70px" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Starships
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body border border-1 border-dark h-auto gap-2 d-flex flex-wrap">
              {store.starships.length == 0 ? (
                <div className="spinner-border text-warning" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                store.starships.map((starship, index) => (
                  <Card
                    name={starship.name}
                    speed={starship.max_atmosphering_speed}
                    starshipclassName={starship.starship_class}
                    type="starship"
                    key={index}
                    id={index + 1}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
