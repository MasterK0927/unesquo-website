import React from 'react';
import VerticalTimeline from './TimelineComponent';
import { events } from './Events';

function App() {
  return <VerticalTimeline events={events} interval={20000} />;
}

export default App;
