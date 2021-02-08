import { Button } from "@material-ui/core";
import { useState } from "react";
import Quiz from "./pages/quiz";
import { api } from './services/Api'

function App() {
  
  const [questions, setQuestions] = useState<any>([]);

  async function getQuestions() {
    const response = await api.get("?amount=10");
    console.log(response);
    return setQuestions(response.data.results);
  }

  return (<>
    <Quiz questions={questions} />
    <Button onClick={getQuestions} color="primary">Get Questions</Button>
  </>);
}

export default App;
