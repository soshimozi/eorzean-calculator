import { v4 as uuid } from "uuid";
import { Page } from "./interfaces/Page";
import EorzeanCalculator from "./pages/EorzeanCalculator";
import Home from "./pages/Home";

export const TimeConstant = 35/12;


export const pages: Page[] = [
	{
		id: uuid(),
		name: "Home",
		path: "/",
		element: <Home />,
	},
	{
		id: uuid(),
		name: "TimeCalculator",
		path: "/time-calculator",
        menuLabel: "Eorzean Time Calculator",
		element: <EorzeanCalculator />,
	},
];