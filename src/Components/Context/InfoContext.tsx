import React, { createContext } from "react";
import { Product, User } from "./InfoProvider";

const InfoContext = createContext<InfoContextInterface | null>(null);

export interface InfoContextInterface {
	items: Product[] | undefined;
	page: number;
	setPage: (value: number) => void;
	user: User | undefined;
	addPoints: (value: number) => void;
	claimProduct: (value: string) => void;
}

export const { Provider } = InfoContext;

export default InfoContext;
