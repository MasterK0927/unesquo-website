// ExampleUsage.tsx

import React from 'react';
import ItineraryList from './ItineraryList';
import styles from './Itinerary.module.css'

const itineraryData = [
  { time: '8:30 AM - 9:45 AM', activity: 'Breakfast & Registration' },
  { time: '10 AM - 11 AM', activity: 'Opening Ceremony' },
  { time: '11: 15 AM - 1 PM', activity: 'Committee Session 1'},
  { time: '1 PM - 2:00 PM', activity: 'Lunch'},
  { time: '2: 00 PM - 4:15 PM', activity: 'Committee Session 2'},
  { time: '4:15 PM - 5:00 PM', activity: ' Socials'},
  { time: '5:00 - 6:00 PM ', activity: '  High Tea & Dispersal'},
];

const ExampleUsage: React.FC = () => {
  return (
    <div className={styles.centered}>
      <h1>20th Jan</h1>
      <ItineraryList itineraryData={itineraryData} />
    </div>
  );
};

export default ExampleUsage;
