import React, { useState, useEffect } from "react";
import { InfoContextInterface, Provider } from "./InfoContext";
interface Props {
	children: JSX.Element;
}

export interface Product {
	_id: string;
	name: string;
	cost: number;
	category: string;
	img: {
		url: string;
		hdUrl: string;
	};
}

export interface User {
	id: string;
	name: string;
	points: number;
	redeemHistory: Product[];
}

const InfoProvider = ({ children }: Props) => {
	const [items, setItems] = useState<Product[]>();
	const [actualPage, setActualPage] = useState<number>(1);
	const [user, setUser] = useState<User>();
	const TOKEN_ID: string =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWRjMjYxMjAzOTEzMzAwMjFhNzU0YzgiLCJpYXQiOjE2NDE4MTc2MTh9._wDo1zO0E_KNUK9cgc6MmeKCSTbkTkyulC00uvNLSmw";
	const addPoints = (quantity: number) => {
		var request = new XMLHttpRequest();
		request.open("POST", "https://coding-challenge-api.aerolab.co/user/points");
		request.setRequestHeader("Content-Type", "application/json");
		request.setRequestHeader("Accept", "application/json");
		request.setRequestHeader("Authorization", `Bearer ${TOKEN_ID}`);
		var body = {
			amount: quantity,
		};
		request.send(JSON.stringify(body));
	};

	const claimProduct = (productId: string) => {
		var request = new XMLHttpRequest();
		request.open("POST", "https://coding-challenge-api.aerolab.co/redeem");
		request.setRequestHeader("Content-Type", "application/json");
		request.setRequestHeader("Accept", "application/json");
		request.setRequestHeader("Authorization", `Bearer ${TOKEN_ID}`);
		var body = {
			productId: productId,
		};
		request.send(JSON.stringify(body));
	};

	const infoContextProvider: InfoContextInterface = {
		items: items,
		page: actualPage,
		setPage: setActualPage,
		user: user,
		addPoints: addPoints,
		claimProduct: claimProduct,
	};

	useEffect(() => {
		(() => {
			let request = new XMLHttpRequest();
			request.open("GET", "https://coding-challenge-api.aerolab.co/products");
			request.setRequestHeader("Content-Type", "application/json");
			request.setRequestHeader("Accept", "application/json");
			request.setRequestHeader("Authorization", `Bearer ${TOKEN_ID}`);
			request.onreadystatechange = function () {
				if (this.readyState === 4) {
					let json = JSON.parse(this.responseText);
					setItems(json);
				}
			};
			request.send();
		})();
	}, []);

	useEffect(() => {
		var request = new XMLHttpRequest();
		request.open("GET", "https://coding-challenge-api.aerolab.co/user/me");
		request.setRequestHeader("Content-Type", "application/json");
		request.setRequestHeader("Accept", "application/json");
		request.setRequestHeader("Authorization", `Bearer ${TOKEN_ID}`);
		request.onreadystatechange = function () {
			if (this.readyState === 4) {
				let json = JSON.parse(this.responseText);
				setUser(json);
			}
		};
		request.send();
	}, []);

	return <Provider value={infoContextProvider}>{children}</Provider>;
};

export default InfoProvider;
