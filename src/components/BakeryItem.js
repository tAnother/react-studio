function BakeryItem({item, onClick}) {
  return (
    <div onClick={() => onClick(item)}>
      <img src={item.image} style={{height: "20vh"}}></img>
      <p>{item.name} <span style={{color: "darkorange"}}>${item.price}</span></p>
      <br></br>
    </div>
  );
}

export default BakeryItem;