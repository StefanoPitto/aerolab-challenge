import React, { useContext } from "react";
import InfoContext from "../Context/InfoContext";
import { AddPointsContainer } from "./AddPointsStyle";

const AddPoints = () => {
	const { ...infoContextProvider } = useContext(InfoContext);
	return (
		<AddPointsContainer>
			<h1>CHOOSE QUANTITY</h1>
			<div>
				<span
					onClick={() => {
						infoContextProvider.addPoints(1000);
					}}
				>
					1000
				</span>
				<span
					onClick={() => {
						infoContextProvider.addPoints(5000);
					}}
				>
					5000
				</span>
				<span
					onClick={() => {
						infoContextProvider.addPoints(7500);
					}}
				>
					7500
				</span>
			</div>
		</AddPointsContainer>
	);
};

export default AddPoints;
