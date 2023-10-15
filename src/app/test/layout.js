import Footer from "../components/ui/Footer";

export default function PageLayout({ children }) {
	return (
		<div>
			{children}
			<Footer />
		</div>
	);
}
