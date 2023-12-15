import React from "react";
import styles from "./Card.module.css";

interface CardProps {
	image: string;
	title: string;
	description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
	return (
		<div className={styles.card}>
			<img src={image} alt={title} />
			<div className={styles.cardContent}>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.description}>{description}</p>
			</div>
		</div>
	);
};

export default Card;
