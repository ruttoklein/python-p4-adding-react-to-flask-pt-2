import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/movies")
      .then((res) => res.json())
      .then((movies) => console.log(movies));
  }, []);

  return <h1>Check the console for a list of movies!</h1>;
}
export default App;