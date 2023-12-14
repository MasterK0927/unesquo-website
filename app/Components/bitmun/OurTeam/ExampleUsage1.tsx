import React from 'react';
import ItineraryList1 from './ItineraryList1';
import styles from './Itinerary.module.css';

const itinerary1Data = [
  { time: '8:30 - 9: 30 AM', activity: ' Breakfast' },
  { time: '9: 45 AM - 12:30 PM', activity: 'Committee Session 3' },
  { time: '12: 30 PM - 2 PM', activity: 'Lunch'},
  { time: '2 PM - 4:30 PM', activity: 'Committee Session 4'},
  { time: '4: 30 PM - 5 PM', activity: 'Closing'},
  { time: '5 PM', activity: ' High Tea & Dispersal'},
];

const ExampleUsage1: React.FC = () => {
  return (
    <div className={styles.centered}>
      <h1>21st Jan</h1>
      <ItineraryList1 itinerary1Data={itinerary1Data} />
    </div>
  );
};

export default ExampleUsage1;
