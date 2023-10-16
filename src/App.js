import "./styles.css";

export default function App() {
  return <Greeting name="Felix" />;
}

function Greeting(probs) {
  let nameToGreet = probs.name;
  if (nameToGreet === "CJ") {
    nameToGreet = "Coach";
  }

  return (
    <h1>
      Hello, <span>{nameToGreet}</span>!
    </h1>
  );
}

//Alternative
// function Greeting({ name }) {
//   return (
//     <h1>
//       Hello, <span>{name}</span>!
//     </h1>
//   );
// }
