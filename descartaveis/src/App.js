import React, { useState, useRef } from "react";
import data from "./dados.json";
import {
  Input,
  List,
  ListContainer,
  MainContainer,
  Modal,
  TagModal,
  UL,
} from "./styled";

export default function App() {
  const [searchItem, setSearchItem] = useState([]);
  const [items, setItems] = useState(data);
  const [isOpen, setIsOpen] = useState(false);
  const [itemId, setItemID] = useState("");
  const [activeItemId, setActiveItemId] = useState(null);
  const [activeId, setActiveId] = useState([]);

  const dialogRef = useRef(null);

  const handleModalopen = (itemId) => {
    setActiveItemId(itemId);
  };

  const handleSearch = (event) => {
    const searchName = event.target.value;

    const filterItems = items.filter((item) =>
      item.produto.toLowerCase().includes(searchName.toLowerCase())
    );

    setSearchItem(filterItems);
  };

 
  const openDialog = () => {
    setIsOpen(true);
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    setIsOpen(false);
    dialogRef.current.close();
    setActiveItemId(null);
  };

  const handleClick = (item) => {
    setItemID(item);
    openDialog();    
  };

  const codigo_barras = itemId.código_barras;

  const listMap = searchItem.map((item, index) => (
    <ListContainer key={index}>
      <List>
        <h5>{item.marca} </h5>
      </List>
      <List>
        <h5>{item.produto} </h5>
      </List>
      <List>
        <h5>{item.endereço} </h5>
      </List>
      <List>
        <input type="radio" checked />
      </List>
      <List>
        <input type="radio" checked />
        <button onClick={() => handleClick(item)}>id</button>
      </List>
    </ListContainer>
  ));

 

  return (
    <MainContainer>
      <Input type="text" onChange={handleSearch} placeholder="Itens" />
      <UL>
        <li>Marca</li>
        <li>Produto</li>
        <li>End</li>
        <li>Est</li>
        <li>Gal</li>
      </UL>
      {listMap}
      {isOpen && (
          <dialog ref={dialogRef} open={isOpen}>
            <h5>Código de barras: {codigo_barras}</h5>
            <h5>Quantidade em estoque:</h5>
            <button onClick={closeDialog}>Fechar</button>
          </dialog>
        )}
    </MainContainer>
  );
}
