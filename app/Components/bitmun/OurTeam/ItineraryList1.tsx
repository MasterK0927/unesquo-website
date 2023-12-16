import React from 'react';

interface ItineraryItem {
  time: string;
  activity: string;
}

interface ItineraryList1Props {
  itinerary1Data: ItineraryItem[];
}

const timelineContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  height: '80vh',
  margin: '50px',
};

const timelineBranchStyle: React.CSSProperties = {
  borderLeft: '2px solid #ddd',
  paddingLeft: '20px',
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '50%',
  width: '2px',
};

const markerBaseStyle: React.CSSProperties = {
  position: 'absolute',
  top: '-8px',
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  backgroundColor: '#22A3C9',
  left: '50%',
  transform: 'translateX(-50%)',
};

const markerBaseStyle1: React.CSSProperties = {
  position: 'absolute',
  top: '60px',
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  backgroundColor: 'orange',
  left: '50%',
  transform: 'translateX(-50%)',
};

const markerBaseStyle2: React.CSSProperties = {
  position: 'absolute',
  top: '160px',
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  backgroundColor: 'orange',
  left: '50%',
  transform: 'translateX(-50%)',
};

const markerBaseStyle3: React.CSSProperties = {
  position: 'absolute',
  top: '260px',
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  backgroundColor: 'orange',
  left: '50%',
  transform: 'translateX(-50%)',
};

const markerBaseStyle4: React.CSSProperties = {
  position: 'absolute',
  top: '360px',
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  backgroundColor: 'orange',
  left: '50%',
  transform: 'translateX(-50%)',
};

const markerBaseStyle5: React.CSSProperties = {
  position: 'absolute',
  top: '460px',
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  backgroundColor: 'orange',
  left: '50%',
  transform: 'translateX(-50%)',
};

const markerBaseStyle6: React.CSSProperties = {
  position: 'absolute',
  bottom: '-10px',
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  backgroundColor: '#22A3C9',
  left: '50%',
  transform: 'translateX(-50%)',
};

const markerStyleCurrent: React.CSSProperties = {
  ...markerBaseStyle,
  animation: 'pulse 1s ease-in-out infinite',
};

const markerStyleRemaining: React.CSSProperties = {
  ...markerBaseStyle1,
};

const markerStyleRemaining1: React.CSSProperties = {
  ...markerBaseStyle2,
};

const markerStyleRemaining2: React.CSSProperties = {
  ...markerBaseStyle3,
};

const markerStyleRemaining3: React.CSSProperties = {
  ...markerBaseStyle4,
};

const markerStyleRemaining4: React.CSSProperties = {
  ...markerBaseStyle5,
};

const markerStyleRemaining5: React.CSSProperties = {
  ...markerBaseStyle6,
};

const itineraryListStyle: React.CSSProperties = {
  position: 'absolute',
  left: '51%',
  width: 'fit-content',
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: '#f5f5f5',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const itineraryListStyle1: React.CSSProperties = {
  position: 'absolute',
  right: '51%',
  top: '100px',
  width: 'fit-content',
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: '#f5f5f5',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};
const itineraryListStyle2: React.CSSProperties = {
  position: 'absolute',
  left: '51%',
  top: '200px',
  width: 'fit-content',
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: '#f5f5f5',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};
const itineraryListStyle3: React.CSSProperties = {
  position: 'absolute',
  right: '51%',
  top: '300px',
  width: 'fit-content',
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: '#f5f5f5',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};
const itineraryListStyle4: React.CSSProperties = {
  position: 'absolute',
  left: '51%',
  top: '400px',
  width: 'fit-content',
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: '#f5f5f5',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const itineraryItemStyle: React.CSSProperties = {
  marginBottom: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start', // Change this to adjust the position of list items
  position: 'relative',
};

const timeStyle: React.CSSProperties = {
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#333',
  marginTop: '10px',
};

const activityStyle: React.CSSProperties = {
  fontSize: '12px',
  color: '#555',
  textAlign: 'center',
};

const ItineraryList1: React.FC<ItineraryList1Props> = ({ itinerary1Data }) => {
  return (
    <div style={timelineContainerStyle}>
      <div style={timelineBranchStyle}></div>
      <div style={markerStyleCurrent}></div>
      <div style={itineraryListStyle}>
        <div style={itineraryItemStyle}>
          <span style={timeStyle}>{itinerary1Data[0].time}</span>
          <span style={activityStyle}>{itinerary1Data[0].activity}</span>
        </div>
      </div>

      <div style={timelineBranchStyle}></div>
      <div style={markerStyleRemaining}></div>
      <div style={itineraryListStyle1}>
        <div style={itineraryItemStyle}>
          <span style={timeStyle}>{itinerary1Data[1].time}</span>
          <span style={activityStyle}>{itinerary1Data[1].activity}</span>
        </div>
      </div>

      <div style={timelineBranchStyle}></div>
      <div style={markerStyleRemaining1}></div>
      <div style={itineraryListStyle2}>
        <div style={itineraryItemStyle}>
          <span style={timeStyle}>{itinerary1Data[2].time}</span>
          <span style={activityStyle}>{itinerary1Data[2].activity}</span>
        </div>
      </div>

      <div style={timelineBranchStyle}></div>
      <div style={markerStyleRemaining2}></div>
      <div style={itineraryListStyle3}>
        <div style={itineraryItemStyle}>
          <span style={timeStyle}>{itinerary1Data[3].time}</span>
          <span style={activityStyle}>{itinerary1Data[3].activity}</span>
        </div>
      </div>

      <div style={timelineBranchStyle}></div>
      <div style={markerStyleRemaining3}></div>
      <div style={markerStyleRemaining4}></div>
      <div style={markerStyleRemaining5}></div>
      <div style={itineraryListStyle4}>
        <div style={itineraryItemStyle}>
          <span style={timeStyle}>{itinerary1Data[4].time}</span>
          <span style={activityStyle}>{itinerary1Data[4].activity}</span>
        </div>
      </div>
    </div>
  );
};

export default ItineraryList1;
