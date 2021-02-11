import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory();

    const navigateToQuiz = () => {
        history.push("/quiz");

  }

  return <Button onClick={navigateToQuiz} color="primary">Start</Button>
  
}

export default Home;