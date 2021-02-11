export interface Result {
    category: string,
    type: boolean,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[],
}

export interface TriviaResponse {
    results: Result[];
}