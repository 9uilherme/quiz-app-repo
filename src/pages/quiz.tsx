import { Button, InputLabel } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Question } from "../models/question";
import { api } from "../services/Api";
import { TriviaResponse } from "../services/trivia-response";

interface QuizProps {
    questions: any
}

const Quiz = () => {

    const [questions, setQuestions] = useState<Question[]>([]);
    const [index, setIndex] = useState<number>(0);
    const currentQuestion = questions[index];
 
    useEffect(() => {

        async function getQuestions() {
          const {data} = await api.get<TriviaResponse>("?amount=2&type=multiple");
          const mappedQuestions: Question[] = data
                                                .results
                                                    .map((result) => 
                                                    { 
                                                        return {
                                                            title: result.question, 
                                                            alternatives: []
                                                        }})
        setQuestions(mappedQuestions);
        }

        getQuestions();
    }, [])
    // no args on [] to be executed when the component is rendered

    const previous = () => {
        setIndex((prevState) => prevState-1);
    }

    const next = () => {
        setIndex((prevState) => prevState+1);
    }

    return questions.length === 0 ? <div>Loading...</div> : 
    (<>
        <InputLabel>{currentQuestion.title}</InputLabel>
        { index > 0 && <Button onClick={previous}>Previous</Button>}
        { index < questions.length - 1 && <Button onClick={next}>Next</Button>}
    </>)
}

export default Quiz;