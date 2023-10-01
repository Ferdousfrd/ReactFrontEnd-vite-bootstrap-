import ListGroup from "./components/ListGroup";

function App() {
  let items = ["London", "Paris", "New york"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleSelectIndex = (index: number) => {
    console.log(index);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
        onSelectIndex={handleSelectIndex}
      />
    </div>
  );
}

export default App;
