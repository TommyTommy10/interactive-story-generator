import React, { useState } from 'react';

const StoryContainer = ({ story }) => {
  const [currentNode, setCurrentNode] = useState(story.nodes.start);

  const handleChoice = (nextNodeKey) => {
    setCurrentNode(story.nodes[nextNodeKey]);
  };

  return (
    <div>
      <p>{currentNode.text}</p>
      {currentNode.choices.map((choice, index) => (
        <button key={index} onClick={() => handleChoice(choice.next)}>
          {choice.text}
        </button>
      ))}
    </div>
  );
};

export default StoryContainer;
