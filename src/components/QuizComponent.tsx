import { useEffect, useState, type Dispatch, type SetStateAction } from "react"

function QuizComponent({
    question,correctOption,options,index,setTotalScore,moveNext,movePrev,setCurrentSelectedOption
}
:{
    question:string,
    correctOption:string
    options:string[],
    index:number,
    setTotalScore:Dispatch<SetStateAction<number>>,
    moveNext:()=>void,
    movePrev:()=>void,
    currentSelectedOption?:string
    setCurrentSelectedOption:Dispatch<SetStateAction<string|undefined>>
}) {
    const [checkedValue,setCheckedValue]=useState<number>();
    const [timerId,setTimerId]=useState<number>();
    const [remainingTime,setRemainingTime]=useState(15);
    const [optionValues,setOptionvalues]=useState([false,false,false,false]);

    const setOption=(index:number,value:string)=>{
        if(optionValues[index]) return;
        const updatedOptions=optionValues.map((_,i)=>{
            if(i==index) return true;
            return false;
        });
        setOptionvalues(updatedOptions);
        setCurrentSelectedOption(value);
    }



    useEffect(()=>{
        const timer=setInterval(()=>{
            if(remainingTime>0){
                setRemainingTime((prev)=>prev-1);
            }   
        },1000);
        setTimerId(timer);

    },[]);
    useEffect(()=>{
        if(remainingTime<=0){
            clearInterval(timerId);
            setRemainingTime(0);
        }
    },[remainingTime]);
    


  return (
    <div className="h-full w-full flex flex-col gap-4 p-10">
        <div>
            <p>Timer</p>
            {remainingTime}
        </div>
        <p></p>
        <h1>Question {index+1}:{question}</h1>
        {
            options.map((option,index)=>{
                return (
                <div className="flex items-center">
                    <input
                    type="checkbox"
                    value={checkedValue}
                    checked={optionValues[index]}
                    onChange={()=>setOption(index,option)}
                    />
                    <p>
                        {index}
                    </p>
                    <p>
                        {option}
                    </p>
                </div>)
            })
        }
        
    </div>
  )
}

export default QuizComponent