import React from "react";
import styles from "./Card.module.css";

interface CardProps {
	image: string;
	title: string;
	description: string;
	registrationLink: string; 
}
const buttonStyles = {
	marginTop: '3px',
padding: '4px 8px', // Adjusted padding for smaller size
backgroundColor: 'white',
color: 'black',
border: 'none',
borderRadius: '4px', // Adjusted border radius for a slightly rounded look
cursor: 'pointer',
  };
  

const Card: React.FC<CardProps> = ({ image, title, description,registrationLink }) => {
	return (
		<div className={styles.card}>
			<img src={image} alt={title} />
			<div className={styles.cardContent}>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.description}>{description}</p>
				<a href={registrationLink} style={buttonStyles}>Register</a>
			</div>
		</div>
	);
};

export default Card;
