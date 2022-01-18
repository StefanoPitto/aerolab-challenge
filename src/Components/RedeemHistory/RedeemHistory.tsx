import React, { useContext } from "react";
import InfoContext from "../Context/InfoContext";
import RedeemHistoryItem from "../RedeemHistoryItem/RedeemHistoryItem";
import { RedeemHistoryContainer, ItemsContainer } from "./RedeemHistoryStyle";

const RedeemHistory = () => {
	const { ...infoContextProvider } = useContext(InfoContext);

	return (
		<RedeemHistoryContainer>
			<h1>Items redeemed</h1>
			<ItemsContainer>
				{infoContextProvider.user?.redeemHistory.map((element, i) => (
					<RedeemHistoryItem key={i} product={element} />
				))}
			</ItemsContainer>
		</RedeemHistoryContainer>
	);
};

export default RedeemHistory;
