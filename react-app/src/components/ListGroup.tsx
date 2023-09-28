import { useState } from "react";

function ListGroup() {
  let items = ["London", "Paris", "New york"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List of countires</h1>
      {/*items.length === 0 ? <p>nothing</p> : null*/}
      {items.length === 0 && <p>Nohting</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active "
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
