import _ from "lodash";
import React, { useMemo } from "react";
function App() {
  const [treatments, setTreatments] = React.useState<string[]>();
  const form = document.getElementsByTagName("form");
  const treatmentField = document.getElementById("form-field-treatment");
  const treatmentOptions = useMemo(() => ["Option1", "Option2", "Option3"], []);

  React.useEffect(() => {
    setTreatments(treatmentOptions);
  }, [treatmentOptions]);

  const setTreatmentOptions = () => {
    treatmentField?.hasChildNodes ? document.createE
    treatments?.map((option) => {
      const input = document.createElement("option");
      input.value = option;
      input.innerHTML = option;
      if (!_.includes(treamentField?.children, input)) {
        treamentField?.appendChild(input);
      }

    });
  }

  console.log("form", form);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
