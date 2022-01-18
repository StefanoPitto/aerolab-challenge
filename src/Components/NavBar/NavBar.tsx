import { userInfo } from "os";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import InfoContext from "../Context/InfoContext";
import { NavBarContainer } from "./NavBarStyle";

const NavBar = () => {
	const { ...infoContextProvider } = useContext(InfoContext);
	return (
		<NavBarContainer>
			<Link to="/">
				<span>Claim Products</span>
			</Link>
			<Link to="/redeem-history">
				<span>Redeem History</span>
			</Link>
			<Link to="/add-points">
				<span>Add Points</span>
			</Link>
			<div>
				<span>
					User: {infoContextProvider.user && infoContextProvider.user.name}
				</span>
				<p>
					Points: {infoContextProvider.user && infoContextProvider.user.points}
				</p>
			</div>
		</NavBarContainer>
	);
};

export default NavBar;
