import React from 'react';
import StoryContainer from './components/StoryContainer';
import sampleStory from './stories/sampleStory.json';

const App = () => {
  return (
    <div>
      <h1>Interactive Story Generator</h1>
      <StoryContainer story={sampleStory} />
    </div>
  );
};

export default App;
