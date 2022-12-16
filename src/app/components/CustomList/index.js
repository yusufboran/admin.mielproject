import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import ModalAdd from "./ModalAdd";
import { getSocialMedia } from "app/firabase/socialMedia";
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
    console.log(items);
  }, []);
  return (
    <div style={{ marginBottom: "16px" }}>
      <ItemList openItem={openItem} items={items} />
      <ModalEdit open={modalEdit} setOpen={setModalEdit} editItem={editItem} />
    </div>
  );
}
