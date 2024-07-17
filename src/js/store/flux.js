const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      planets: [],
      starships: [],
      favorites: [],
      requestParams: {
        URL: "https://swapi.dev/api",
      },
    },
    actions: {
      getCharacters: async () => {
        const { URL } = getStore().requestParams;
        const localData = localStorage.getItem("characters");
        if (localData) {
          setStore({ characters: JSON.parse(localData) });
        } else {
          try {
            let response = await fetch(`${URL}/people`);
            let data = await response.json();
            setStore({ characters: data.results });
            localStorage.setItem("characters", JSON.stringify(data.results));
          } catch (error) {
            console.log(error);
          }
        }
      },
      getPlanets: async () => {
        const { URL } = getStore().requestParams;
        const localData = localStorage.getItem("planets");
        if (localData) {
          setStore({ planets: JSON.parse(localData) });
        } else {
          try {
            let response = await fetch(`${URL}/planets`);
            let data = await response.json();
            setStore({ planets: data.results });
            localStorage.setItem("planets", JSON.stringify(data.results));
            console.log(data.results);
          } catch (error) {
            console.log(error);
          }
        }
      },
      getStarships: async () => {
        const { URL } = getStore().requestParams;
        const localData = localStorage.getItem("starships");
        if (localData) {
          setStore({ starships: JSON.parse(localData) });
        } else {
          try {
            let response = await fetch(`${URL}/starships`);
            let data = await response.json();
            console.log(data.results);
            data.results = data.results.map((item) => {
              return { ...item, id: item.url.split("/")[5] };
            });
            setStore({ starships: data.results });
            localStorage.setItem("starships", JSON.stringify(data.results));
          } catch (error) {
            console.log(error);
          }
        }
      },
      getFavorites: () => {
        const localData = localStorage.getItem("favorites");
        if (localData) {
          setStore({ favorites: JSON.parse(localData) });
        } else {
          localStorage.setItem("favorites", JSON.stringify([]));
        }
      },
      addFavorites: (url, name) => {
        const store = getStore();
        const localFavorites = localStorage.getItem("favorites");

        let favorites = [];
        if (localFavorites) {
          favorites = JSON.parse(localFavorites);
        }

        const itemExists = favorites.some((item) => item.name === name);

        if (itemExists) {
          const updatedFavorites = store.favorites.filter(
            (item) => item.name !== name
          );
          setStore({ favorites: updatedFavorites });
          localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        } else {
          const newFavorite = { url, name };
          const newFavorites = [...favorites, newFavorite];
          setStore({ favorites: newFavorites });
          localStorage.setItem("favorites", JSON.stringify(newFavorites));
        }
      },
    },
  };
};

export default getState;
