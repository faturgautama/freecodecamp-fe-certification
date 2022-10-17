import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import QuoteGenerator from "./pages/QuoteGenerator";
import { Routes, Route, Outlet } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Navbar></Navbar>

			<div className="content px-8">
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route
						path="/quote-generator"
						element={<QuoteGenerator />}
					></Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;
