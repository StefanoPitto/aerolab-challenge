import React, { useContext, useEffect, useState } from "react";
import {
	StyledContainer,
	ItemsContainer,
	OuterContainer,
	InnerNavBarContainer,
	ButtonContainer,
} from "./ItemContainerStyles";
import Item from "../Item/Item";
import InfoContext from "../Context/InfoContext";
import { Product } from "../Context/InfoProvider";
import PageSelector from "../PageSelector/PageSelector";
import { MenuItem, Snackbar, Alert, Menu, Button } from "@mui/material";
import { MdKeyboardArrowDown } from "react-icons/md";

const ItemContainer = () => {
	const MAX_ITEMS = 16;
	const { ...infoContextProvider } = useContext(InfoContext);
	const [listItems, setListItems] = useState<Product[]>();
	const [filter, setFilter] = useState<string>("all");
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const lowToHigh = (arr: Product[] | undefined): Product[] | undefined => {
		if (arr === undefined) return;
		setFilter("lowToHigh");
		const newItems = arr.sort((a: Product, b: Product) => {
			return -(a.cost - b.cost);
		});
		return newItems;
	};

	const highToLow = (arr: Product[] | undefined): Product[] | undefined => {
		if (arr === undefined) return;
		setFilter("highToLow");
		const newItems = arr.sort((a: Product, b: Product) => {
			return a.cost - b.cost;
		});
		return newItems;
	};

	useEffect(() => {
		let newItems: Product[] | undefined;
		if (filter === "highToLow") newItems = highToLow(infoContextProvider.items);

		if (filter === "lowToHigh") newItems = lowToHigh(infoContextProvider.items);

		if (filter === "all") newItems = infoContextProvider.items;
		newItems = infoContextProvider.items?.filter(
			(_, i) =>
				i >= infoContextProvider.page * 16 - MAX_ITEMS &&
				i < infoContextProvider.page * 16
		);
		setListItems(newItems);
	}, [infoContextProvider.page, infoContextProvider.items, filter]);

	return (
		<StyledContainer>
			<InnerNavBarContainer>
				<ButtonContainer>
					<Button
						id="demo-positioned-button"
						aria-controls={open ? "demo-positioned-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={open ? "true" : undefined}
						onClick={handleClick}
					>
						Sort By <MdKeyboardArrowDown size={20} />
					</Button>
				</ButtonContainer>
				<Menu
					id="demo-positioned-menu"
					aria-labelledby="demo-positioned-button"
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					anchorOrigin={{
						vertical: "top",
						horizontal: "left",
					}}
					transformOrigin={{
						vertical: "top",
						horizontal: "left",
					}}
				>
					<MenuItem
						onClick={() => {
							handleClose();
							highToLow(listItems);
						}}
					>
						Low to High
					</MenuItem>
					<MenuItem
						onClick={() => {
							handleClose();
							lowToHigh(listItems);
						}}
					>
						High to Low
					</MenuItem>
				</Menu>
			</InnerNavBarContainer>
			<OuterContainer>
				<ItemsContainer>
					{listItems &&
						listItems.map((element: Product) => {
							return <Item key={element._id} product={element} />;
						})}
				</ItemsContainer>
				<PageSelector
					value={{
						value: infoContextProvider.page,
						setPage: infoContextProvider.setPage,
						itemsPerPage: MAX_ITEMS,
						itemsQuantity: infoContextProvider.items?.length,
					}}
				/>
			</OuterContainer>
		</StyledContainer>
	);
};

export default ItemContainer;
