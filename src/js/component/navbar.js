import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav class="navbar navbar-dark bg-black text-white border-b border-1 sticky-top">
			<div class="container-fluid p-3">
				<a class="navbar-brand">
					<img src="https://cdn.worldvectorlogo.com/logos/star-wars-4.svg" alt="Starwars logo" style={{width: '70px'}} />
				</a>
				<button class="btn btn-outline-warning fw-bold" type="submit">Favorites</button>
			</div>
			</nav>
	);
};
