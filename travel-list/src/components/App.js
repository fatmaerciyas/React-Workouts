import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const Data = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Charger", quantity: 5, packed: false },
  { id: 3, description: "Socks", quantity: 15, packed: false },
  { id: 4, description: "Bag", quantity: 1, packed: false },
  { id: 5, description: "Lipstick", quantity: 3, packed: false },
  { id: 6, description: "Short", quantity: 4, packed: false },
  { id: 7, description: "Skirt", quantity: 6, packed: false },
  { id: 8, description: "Shoe", quantity: 3, packed: false },
  { id: 9, description: "T-shirt", quantity: 1, packed: false },
  { id: 10, description: "Pants", quantity: 8, packed: true },
];

export default function App() {
  const [items, setItems] = useState(Data);

  function handleAddItems(item) {
    setItems((items) => [...items, item]); //added item to items array
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClear() {
    if (!items.length) return;
    const confirm = window.confirm("Are you sure you  wanna delete all items");
    if (confirm) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
        onClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}
