interface QuizProps {
    questions: any
}

const Quiz = (props: QuizProps) => {
    return <div>{JSON.stringify(props.questions)}</div>;    
}

export default Quiz;