import React from "react";
import styles from "./Map.module.css";

const Map = () => {
	return (
		<iframe
			className={styles.iframe}
			title="mapa"
			loading="lazy"
			allowFullScreen
			src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJU2FhHt7NA5UR0trwsGh9Mws&key=AIzaSyBDho5UC3Sy0yMPVBapblwOAnJv_HRh_Sk"
		></iframe>
	);
};

export default Map;
