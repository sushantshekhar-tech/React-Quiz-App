import { useState } from "react";
import Quizview from "./Components/Quizview";
import { Resultview } from "./Components/Resultview";

function App() {
  const questions = [
    {
      question: "What is the largest planet in our solar system?",
      answers: [
        { text: "Mercury" },
        { text: "Venus" },
        { text: "Jupiter", isCorrect: true },
        { text: "Saturn" },
      ],
    },
    {
      question: "What is the closest star to Earth, other than the Sun?",
      answers: [
        { text: "Alpha Centauri" },
        { text: "Proxima Centauri", isCorrect: true },
        { text: "Sirius" },
        { text: "Betelgeuse" },
      ],
    },
    {
      question: "What causes a black hole to form?",
      answers: [
        { text: "The collapse of a neutron star" },
        { text: "The explosion of a supernova" },
        { text: "The collapse of a massive star", isCorrect: true },
        { text: "The collision of two galaxies" },
      ],
    },
    {
      question:
        "What is the name of the theory that describes the origin of the universe?",
      answers: [
        { text: "String Theory" },
        { text: "Quantum Mechanics" },
        { text: "General Relativity" },
        { text: "Big Bang Theory", isCorrect: true },
      ],
    },
    {
      question: "Which force is responsible for holding galaxies together?",
      answers: [
        { text: "Electromagnetic Force" },
        { text: "Strong Nuclear Force" },
        { text: "Weak Nuclear Force" },
        { text: "Gravity", isCorrect: true },
      ],
    },
    {
      question: "What is the name of the closest galaxy to the Milky Way?",
      answers: [
        { text: "Andromeda", isCorrect: true },
        { text: "Orion" },
        { text: "Triangulum" },
        { text: "Centaurus A" },
      ],
    },
    {
      question:
        "What is the phenomenon where light from a distant object is stretched due to the expansion of the universe?",
      answers: [
        { text: "Redshift", isCorrect: true },
        { text: "Blueshift" },
        { text: "Eclipse" },
        { text: "Refraction" },
      ],
    },
    {
      question:
        "What is the name of the first man-made object to leave our solar system?",
      answers: [
        { text: "Voyager 1", isCorrect: true },
        { text: "Apollo 11" },
        { text: "Hubble Space Telescope" },
        { text: "Mars Rover" },
      ],
    },
    {
      question: "What is the process by which a star generates energy?",
      answers: [
        { text: "Fusion", isCorrect: true },
        { text: "Fission" },
        { text: "Combustion" },
        { text: "Evaporation" },
      ],
    },
    {
      question:
        "What is the name of the boundary that marks the edge of a black hole's event horizon?",
      answers: [
        { text: "Singularity" },
        { text: "Ergosphere" },
        { text: "Photon Sphere" },
        { text: "Schwarzschild Radius", isCorrect: true },
      ],
    },
  ];

  const [score, setScore] = useState(0);
  const [isquizover, setIsquizover] = useState(false);
  const [currentquestion, setCurrentquestion] = useState(0);

  const handleQuestionClick = (isCorrect) => {
    // console.log("i am clicked")
    if (isCorrect) setScore(score + 1);
    const next = currentquestion + 1;
    if (next < questions.length) {
      setCurrentquestion(next);
      // console.log(currentquestion);
    } else {
      setIsquizover(true);
    }
  };

  const handleResetClick = () => {
    console.log("I am clicked");
    setCurrentquestion(0);
    setScore(0);
    setIsquizover(false);
  };

  return (
    <div>
      {isquizover ? (
        <Resultview
          score={score}
          handleResetClick={handleResetClick}
          questions={questions}
        />
      ) : (
        <Quizview
          questions={questions}
          handleQuestionClick={handleQuestionClick}
          currentquestion={currentquestion}
        />
      )}
    </div>
  );
}

export default App;
