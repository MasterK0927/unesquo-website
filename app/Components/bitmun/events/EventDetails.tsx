import React from "react";
import Card from "./Card";

const EventDetails: React.FC = () => {
	const events = [
		{
			image: "/images/Events/IP.webp",
			title: "International Press",
			description: "Committed to fostering cross-cultural understanding, this diverse assembly of journalists, editors, and communicators embarks on a mission to amplify stories that resonate universally. In a world ever more connected, the committee stands as a beacon, championing the richness of global perspectives and fostering dialogue that transcends geographical boundaries.",
			registrationLink:"https://unstop.com/conferences/birla-institute-of-technology-model-united-nations-bitmun24-bit-mesra-ranchi-839214?lb=DP1Hq0R&utm_medium=Share&utm_source=shortUrl"
		},
		{
			image: "/images/Events/JSIP.webp",
			title: "Joint Session of Indian Parliament",
			description: "The committee undertakes a comprehensive review aiming to dissect the intricate mechanisms that govern international economic engagements, underscoring the significance of cultivating robust global relationships.As we meticulously navigate the complexities of trade, the nuanced integration of soft power principles becomes a focal point, shaping a diplomatic landscape that transcends mere transactional dynamics.",
			registrationLink:"https://unstop.com/conferences/birla-institute-of-technology-model-united-nations-bitmun24-bit-mesra-ranchi-839214?lb=DP1Hq0R&utm_medium=Share&utm_source=shortUrl"
		},
		{
			image: "/images/Events/MOM.webp",
			title: "Ministry of Magic",
			description: " As the ominous specter of Lord Voldemort looms large, the wizarding world finds itself at a crucial crossroads. In a bold endeavor, magical leaders embark on a mission to establish ties with the Muggle world, recognizing the urgency of solidarity in the face of an imminent threat. Amidst the growing darkness, a complex dance of diplomacy unfolds, as both magical and non-magical communities navigate the delicate path between secrecy and cooperation.",
			registrationLink:"https://unstop.com/conferences/birla-institute-of-technology-model-united-nations-bitmun24-bit-mesra-ranchi-839214?lb=DP1Hq0R&utm_medium=Share&utm_source=shortUrl"
		},
		{
			image: "/images/Events/WarCabinet.webp",
			title: "War Cabinet",
			description: " Delve into the intricacies of geopolitical maneuvering, forging alliances, and making pivotal decisions that could reshape the course of history. In this intense diplomatic simulation, the war cabinet emerges as a crucible of leadership and strategic thinking, as delegates navigate the challenges of a world in conflict, seeking resolutions that transcend the echoes of the past.",
			registrationLink:"https://unstop.com/conferences/birla-institute-of-technology-model-united-nations-bitmun24-bit-mesra-ranchi-839214?lb=DP1Hq0R&utm_medium=Share&utm_source=shortUrl"
		},
		{
			image: "/images/Events/UNGAD.webp",
			title:
				"UNGA",
			description: "The key objective of this committee is examining the channels through which both monetary and non-monetary assistance reach terrorist organizations. The Disarmament and International Security Committee, as the first committee of the General Assembly, concentrates on issues of disarmament, global challenges, and threats to peace that have widespread implications. ",
			registrationLink:"https://unstop.com/conferences/birla-institute-of-technology-model-united-nations-bitmun24-bit-mesra-ranchi-839214?lb=DP1Hq0R&utm_medium=Share&utm_source=shortUrl"
		}
	];

    const gridStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
        gap: '500px',
        padding: '200px',
        margin: '200px'
      };

	

	return (
		<div style={gridStyles}>
			{events.map((event, index) => (
				<><Card key={index} {...event} /></>
			))}
		</div>
	);
};

export default EventDetails;
