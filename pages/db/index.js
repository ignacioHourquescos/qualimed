import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

export default function About() {
	return <About />;
}

function About() {
	// 👇️ redirect to external URL
	window.location.replace("https://google.com");

	return null;
}
