import React, { useEffect } from 'react'

function Dashboard() {
    const [pastScores,setPastScores]=React.useState<number[]>();
    const getPastScores=async()=>{
        const scores=localStorage.getItem("quizScores");
        if(scores){
            return JSON.parse(scores);
        }
        setPastScores(pastScores);
    }
    useEffect(()=>{
        getPastScores();
    },[]);
    const deleteScore=(index:number)=>{
        if(!pastScores) return;
        const updatedScores=pastScores.filter((_,i)=>i!==index);
        localStorage.setItem("quizScores",JSON.stringify(updatedScores));
        setPastScores(updatedScores);
    }
  return (
    <>
    <div>Dashboard</div>
    <div>
        <p>Past Quiz Scores</p>
        {
            pastScores&&pastScores.map((score,index)=>{
                return (
                    <div>
                        <p key={index}>{score}</p>
                        <button onClick={()=>deleteScore(index)}>Delete</button>
                    </div>
                )

            })
        }
    </div>
    </>
  )
}

export default Dashboard