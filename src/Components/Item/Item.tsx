import React, { useContext } from "react";
import { ItemContainer, RedeemButton } from "./ItemStyle";
import { Product } from "../Context/InfoProvider";
import InfoContext from "../Context/InfoContext";
import { Divider } from "@mui/material";
interface ItemProps {
	product: Product;
}

const Item = ({ product }: ItemProps) => {
	const { ...infoContextProvider } = useContext(InfoContext);
	return (
		<>
			<ItemContainer>
				<p>{product.name}</p>
				<img src={product.img.url} />
				<p>Points: {product.cost}</p>
				{infoContextProvider.user &&
				infoContextProvider.user?.points > product.cost ? (
					<RedeemButton
						onClick={() => {
							if (infoContextProvider.user === undefined) return;
							if (infoContextProvider.user?.points > product.cost) return;
							infoContextProvider.claimProduct(product._id);
						}}
					>
						Redeem
					</RedeemButton>
				) : (
					<p>
						Insuficiente points you need
						{product.cost -
							(infoContextProvider.user ? infoContextProvider.user?.points : 0)}
						more.
					</p>
				)}
			</ItemContainer>
			<Divider />
		</>
	);
};

export default Item;
