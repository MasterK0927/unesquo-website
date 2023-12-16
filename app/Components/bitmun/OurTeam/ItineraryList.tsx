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
  padding: '20px',
  margin: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '50px',
  fontFamily: 'Serif',
  boxShadow: '0 0 20px yellow',
  background: 'black',
  borderRadius: '10px',
  textAlign: 'center',
  position: 'relative',
};

const glowTextEffect: React.CSSProperties = {
  textShadow: '0 0 5px yellow, 0 0 20px red',
};

const itineraryListStyle: React.CSSProperties = {
  listStyleType: 'inherit',
  padding: 0,
};

const itineraryItemStyle: React.CSSProperties = {
  marginBottom: '12px',
};

const ItineraryList: React.FC<ItineraryListProps> = ({ itineraryData }) => {
  return (
    <div style={{ ...itineraryContainerStyle, ...glowTextEffect }}>
      <h2 style={{ fontSize: '150px', margin: '0', paddingBottom: '20px', ...glowTextEffect }}>Itinerary</h2>
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
