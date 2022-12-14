import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import ModalAdd from "./ModalAdd";
import { getSocialMedia } from "app/firabase/other";
import ModalEdit from "./ModalEdit";

export default function NestedList() {
  const [modalAdd, setModalAdd] = React.useState(false);
  const [modalEdit, setModalEdit] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [editItem, setEditItem] = React.useState([]);

  const newItem = () => {
    setModalAdd(true);
  };
  const openItem = (item) => {
    setEditItem(item)
    setModalEdit(true);
  };
  useEffect(() => {
    getSocialMedia(setItems);
    console.log(items);
  }, []);
  return (
    <>
      <ItemList newItem={newItem} openItem={openItem} items={items} />
      <ModalAdd open={modalAdd} setOpen={setModalAdd} />
      <ModalEdit open={modalEdit} setOpen={setModalEdit} editItem={editItem} />
    </>
  );
}
