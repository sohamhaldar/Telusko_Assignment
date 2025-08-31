import { useState } from "react";
import { data } from "../utils/data";
import QuizComponent from "./QuizComponent";

function QuizScreen() {
    const [currentIndex,setCurrentIndex]=useState(0);
    const [totalScore,setTotalScore]=useState(0);
    const [currentSelectedOption,setCurrentSelectedOption]=useState<string>();
    console.log(data);
    console.log(currentIndex);
    const moveNext=()=>{
        if(currentIndex<data.length-1&&currentIndex>=0){
            console.log(currentIndex);
            setCurrentIndex((prev)=>prev+1);
        }else{
            setCurrentIndex(0);
        }
    }
    const movePrev=()=>{
        if(currentIndex>0){
            setCurrentIndex((prev)=>prev-1);
        }else{
            setCurrentIndex(data.length-1);
        }
    }
    const endQuiz=()=>{
        const pastScores=localStorage.getItem("quizScores");
        if(pastScores){
            const scores=JSON.parse(pastScores);
            scores.push(totalScore);
            localStorage.setItem("quizScores",JSON.stringify(scores));
        }
        else{
            localStorage.setItem("quizScores",JSON.stringify([totalScore]));
        }
        setCurrentIndex(0);
        setTotalScore(0);
    }
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center px-10 py-6">
        <p>{totalScore}</p>
        <button>End Quiz</button>
        <QuizComponent
            question={data[currentIndex].question}
            index={currentIndex}
            correctOption={data[currentIndex].correctOption}
            options={data[currentIndex].options}
            setTotalScore={setTotalScore}
            moveNext={moveNext}
            movePrev={movePrev}
            setCurrentSelectedOption={setCurrentSelectedOption
                
            }
            />
            <div className="w-full flex justify-between items-center">
                <button className="" onClick={movePrev}>Prev</button>
                <button onClick={moveNext}>Next</button>
            </div>
    </div>
  )
}

export default QuizScreen