import styled from "styled-components";

export const ItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	min-width: 200px;
	padding: 20px 40px;
	p {
		min-width: 150px;
	}
	img {
		width: 100px;
		height: 100px;
		object-fit: contain;
	}
	margin: 20px 10px;
	border: 1px solid rgba(0, 0, 0, 0.12);
	border-radius: 5px;
`;

export const RedeemButton = styled.span`
	font-weight: 700;
	background-color: #06a70e;
	padding: 6px 12px;
	color: #ffffff;
	border-radius: 5px;
	&:hover {
		background-color: #0cd316;
		cursor: pointer;
	}
`;

export const NotRedeemableButton = styled.span`
	font-weight: 700;
	background-color: #7a0b0b;
	padding: 6px 12px;
	border-radius: 5px;
	&:hover {
		cursor: pointer;
	}
`;
