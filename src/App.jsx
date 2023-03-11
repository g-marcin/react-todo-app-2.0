import React from "react";
import { createRoot } from "react-dom/client";
import List from "./List";

const App = () => {
  return (
    <div>
      <header className="greeting" id="greet">
        {/* <a href="/" className="siteLogo"></a> */}
        <a className="siteName" href="/">
          g-marcin TO-DO list
        </a>
      </header>
      <List />
      <footer>
        <hr />
        * click header to reset app <br />
        ** click the task to mark it as done <br />
        *** click x do delete single task <br />
        **** click delete all tasks to remove all tasks <br />
        ***** best regards from g-marcin
      </footer>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
