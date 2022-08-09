import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import Card from "./components/Card";
import { data } from "./schema";
import "./styles.scss";

export default function App() {
  return (
    <div className="app">
      <p className="heading">Saving Plan</p>
      <p className="description">
        Create new plan and save towards that big goal.
      </p>
      <div className="card-container">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <div className="footer">
        <FontAwesomeIcon icon={faCoffee} />
      </div>
    </div>
  );
}
