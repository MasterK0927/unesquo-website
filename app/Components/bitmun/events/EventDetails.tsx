import React from "react";
import Card from "./Card";

const EventDetails: React.FC = () => {
	const events = [
		{
			image: "/images/Events/IP.jpg",
			title: "International Press",
			description: "Description for Event 1"
		},
		{
			image: "/images/Events/JSIP.png",
			title: "Joint Session of Indian Parliament",
			description: "Description for Event 2"
		},
		{
			image: "/images/Events/MOM.png",
			title: "Ministry of Magic",
			description: "Description for Event 3"
		},
		{
			image: "/images/Events/WarCabinet.jpg",
			title: "War Cabinet",
			description: "Description for Event 4"
		},
		{
			image: "/images/Events/UNGAD.jpg",
			title:
				"United Nations General Assembly Disarmament & International Security Committee",
			description: "Description for Event 4"
		}
	];

    const gridStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
        gap: '20px',
        padding: '20px',
        margin: '20px'
      };

	return (
		<div style={gridStyles}>
			{events.map((event, index) => (
				<Card key={index} {...event} />
			))}
		</div>
	);
};

export default EventDetails;
