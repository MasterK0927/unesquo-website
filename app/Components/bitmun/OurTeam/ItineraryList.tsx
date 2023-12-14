// ItineraryList.tsx

import React from 'react';

interface ItineraryItem {
  time: string;
  activity: string;
}

interface ItineraryListProps {
  itineraryData: ItineraryItem[];
}

const itineraryContainerStyle: React.CSSProperties = {
  border: '1px solid #ccc',
  padding: '10px',
  margin: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '30px',
  fontFamily: 'Serif',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
};

const itineraryListStyle: React.CSSProperties = {
  listStyleType: 'inherit',
  padding: 0,
};

const itineraryItemStyle: React.CSSProperties = {
  marginBottom: '8px',
};

const ItineraryList: React.FC<ItineraryListProps> = ({ itineraryData }) => {
  return (
    <div style={itineraryContainerStyle}>
      <h2>Itinerary</h2>
      <ul style={itineraryListStyle}>
        {itineraryData.map((item, index) => (
          <li key={index} style={itineraryItemStyle}>
            <strong>{item.time}</strong>: {item.activity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItineraryList;
