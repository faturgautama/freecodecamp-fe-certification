import { useEffect } from "react";
import useFetch from "../services/useFetch";

const QuoteGenerator = () => {
	const {
		data: quotes,
		isLoading,
		error,
	} = useFetch("http://localhost:3300/quote");

	useEffect(() => {
		setTimeout(() => {
			if (quotes) {
				handleNewQuote();
			} else {
				const newQuoteEl = document.getElementById("new-quote");
				newQuoteEl.click();
			}
		}, 1100);
	}, []);

	const handleNewQuote = () => {
		let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

		console.log(randomQuote);

		const textEl = document.getElementById("text");
		textEl.innerHTML = randomQuote.text;

		const sourceEl = document.getElementById("author");
		sourceEl.innerHTML = randomQuote.source;

		const tweetEl = document.getElementById("tweet-quote");
		tweetEl.setAttribute(
			"href",
			handleTweetQuote(
				'"' + randomQuote.text + '" - ' + randomQuote.source,
			),
		);
	};

	const handleTweetQuote = (data) => {
		let string = data
			.split(" ")
			.join("%20")
			.split("@")
			.join("%40")
			.split("!")
			.join("%21");

		let result = "https://twitter.com/intent/tweet?text=" + string;

		return result;
	};

	return (
		<div className="container h-screen">
			<div
				id="quote-box"
				className="flex flex-col w-full bg-gray-50 rounded-lg shadow-md p-8 justify-center"
			>
				<div
					id="text"
					className="text-center text-lg font-semibold mb-5"
				></div>
				<div id="author" className="text-end text-sm"></div>

				<div className="flex flex-row justify-between mt-5">
					<a
						id="new-quote"
						className="bg-blue-500 text-gray-50 rounded-lg text-sm px-2 py-3"
						onClick={handleNewQuote}
					>
						New Quote
					</a>
					<a
						id="tweet-quote"
						className="bg-blue-500 text-gray-50 rounded-lg text-sm px-2 py-3"
					>
						Tweet Quote
					</a>
				</div>
			</div>
		</div>
	);
};

export default QuoteGenerator;
