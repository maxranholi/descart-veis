import React, { useState, useRef } from "react";
import data from "./dados.json";
import {
  DivCheked,
  DivModal,
  Header,
  Input,
  List,
  ListContainer,
  ListMap,
  MainContainer,
  TagModal,
  UL,
} from "./styled";

export default function App() {
  const [searchItem, setSearchItem] = useState([]);
  const [items, setItems] = useState(data);
  const [isOpen, setIsOpen] = useState(false);
  const [itemId, setItemID] = useState("");
  const [activeItemId, setActiveItemId] = useState(null);

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

  const codigo_barras = itemId.codigo_barras;
  const medidas = itemId.medida;

  const listMap = searchItem.map((item, index) => (
    <ListContainer key={index}>
      <List>
        <h5>{item.marca} </h5>
      </List>
      <List>
        <h5>{item.produto} </h5>
      </List>
      <List>
        <h5>{item.endereco} </h5>
      </List>
      <List>
        <DivCheked status={item.est}>{item.est}</DivCheked>
      </List>
      <List>
        <DivCheked status={item.gal}>{item.gal}</DivCheked>
        <button onClick={() => handleClick(item)}>!</button>
      </List>
    </ListContainer>
  ));

  return (
    <MainContainer>
      <Header>
        <Input type="text" onChange={handleSearch} placeholder="Itens" />
        <UL>
          <li>Marca</li>
          <li>Produto</li>
          <li>End</li>
          <li>Est</li>
          <li>Gal</li>
        </UL>
      </Header>
      <ListMap>
      {listMap}
      </ListMap>

      <DivModal>
        <DivModal open={isOpen}>
          {isOpen && (
            <TagModal ref={dialogRef} open={isOpen}>
              <h5>Código de barras: {codigo_barras}</h5>
              <h5>Medida da caixa: {medidas}</h5>
              <button onClick={closeDialog}>Fechar</button>
            </TagModal>
          )}
        </DivModal>
      </DivModal>
    </MainContainer>
  );
}
