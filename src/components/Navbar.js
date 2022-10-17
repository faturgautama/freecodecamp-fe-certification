import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-500 mb-3 shadow-md">
			<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
				<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
					<h1 className="leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white">
						freeCodeCamp Frontend Certification
					</h1>
				</div>
				<div className="flex flex-col lg:flex-row justify-between text-white">
					<Link to="/" className="mx-8">
						Home
					</Link>
					<Link to="/quote-generator">Quote Generator</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
