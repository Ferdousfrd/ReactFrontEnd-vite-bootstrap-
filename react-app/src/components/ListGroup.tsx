import { MouseEvent } from "react";

function ListGroup() {
  let items = ["London", "Paris", "New york"];

  const eventHandler = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List of countires</h1>
      {/*items.length === 0 ? <p>nothing</p> : null*/}
      {items.length === 0 && <p>Nohting</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={eventHandler}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
