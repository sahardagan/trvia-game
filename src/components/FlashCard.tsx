import React, { useState } from 'react';
import './Flashcard.css'
interface FlashcardProps {
  question: string;
  answer: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ question, answer }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswer = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <div className="flashcard" onClick={toggleAnswer}>
      <div className="flashcard-question">
        <h3>{question}</h3>
      </div>
      {isAnswerVisible && (
        <div className="flashcard-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Flashcard;
