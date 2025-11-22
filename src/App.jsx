import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderNav from "@/components/HeaderNav/HeaderNav";
import Home from "@/routes/Home";
import PageFirst from "@/routes/PageFirst";
import PageSecond from "@/routes/PageSecond";
import PageThird from "@/routes/PageThird";

export default function App() {
	return (
		<BrowserRouter>
			<HeaderNav className="container header-container"/>
			<main className="container main-container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/page-first" element={<PageFirst />} />
					<Route path="/page-second" element={<PageSecond />} />
					<Route path="/page-third" element={<PageThird />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}
