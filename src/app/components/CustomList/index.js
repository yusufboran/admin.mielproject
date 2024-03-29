import React, { useEffect } from "react";
import ItemList from "./ItemList";
import { getSocialMedia } from "app/db/socialMedia";
import ModalEdit from "./ModalEdit";

export default function NestedList() {
  const [modalEdit, setModalEdit] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [editItem, setEditItem] = React.useState([]);

  const openItem = (item) => {
    setEditItem(item);
    setModalEdit(true);
  };
  useEffect(() => {
    getSocialMedia(setItems);
  }, []);
  return (
    <div style={{ marginBottom: "16px" }}>
      <ItemList openItem={openItem} items={items} />
      <ModalEdit open={modalEdit} setOpen={setModalEdit} editItem={editItem} />
    </div>
  );
}
