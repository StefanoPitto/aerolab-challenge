import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemContainer from "./Components/ItemContainer/ItemContainer";
import InfoProvider from "./Components/Context/InfoProvider";
import NavBar from "./Components/NavBar/NavBar";
import AddPoints from "./Components/AddPoints/AddPoints";
import RedeemHistory from "./Components/RedeemHistory/RedeemHistory";
const App = () => {
	return (
		<InfoProvider>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemContainer />} />
					<Route path="/add-points" element={<AddPoints />} />
					<Route path="/redeem-history" element={<RedeemHistory />} />
				</Routes>
			</BrowserRouter>
		</InfoProvider>
	);
};

export default App;
