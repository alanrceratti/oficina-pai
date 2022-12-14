import { useEffect, useRef, useState } from "react";

function outsideClick() {
	const ref = useRef();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const outsideClick = (e) => {
			// If the menu is open and the clicked target is not within the menu,
			// then close the menu
			if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", outsideClick);

		return () => {
			// Cleanup the event listener
			document.removeEventListener("mousedown", outsideClick);
		};
	}, [isMenuOpen]);
}

export default outsideClick;
