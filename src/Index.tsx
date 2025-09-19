import { Link } from "react-router-dom";
import { page } from "./data/page";

export default function Index() {
  return (
    <>
      <h1>Index</h1>
      <ul>
        {page.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
