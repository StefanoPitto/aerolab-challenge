import { Divider } from "@mui/material";
import React from "react";
import { Product } from "../Context/InfoProvider";
import { ItemContainer } from "./RedeemHistoryItemStyle";

interface ItemProps {
	product: Product;
}

const RedeemHistoryItem = ({ product }: ItemProps) => {
	return (
		<>
			<ItemContainer>
				<p>{product.name}</p>
				<img src={product.img.url} />
				<p>Points: {product.cost}</p>
			</ItemContainer>
			<Divider />
		</>
	);
};

export default RedeemHistoryItem;
