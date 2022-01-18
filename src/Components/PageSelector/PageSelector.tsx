import React from "react";
import { PageSelectorContainer } from "./PageSelectorStyle";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
type PageProps = {
	value: number;
	setPage: (_value: number) => void;
	itemsPerPage: number;
	itemsQuantity: number | undefined;
};

interface Props {
	value: PageProps;
}

const PageSelector = ({ value }: Props) => {
	return (
		<PageSelectorContainer>
			<GrFormPreviousLink
				size={30}
				onClick={() =>
					value.value === 1 ? "" : value.setPage(value.value - 1)
				}
			/>
			<p>{value.value}</p>
			<GrFormNextLink
				size={30}
				onClick={() =>
					value.itemsQuantity !== undefined
						? value.value * value.itemsPerPage < value.itemsQuantity
							? value.setPage(value.value + 1)
							: ""
						: ""
				}
			/>
		</PageSelectorContainer>
	);
};

export default PageSelector;
