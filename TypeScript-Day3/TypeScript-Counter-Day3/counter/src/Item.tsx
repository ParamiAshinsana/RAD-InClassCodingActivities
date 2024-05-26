function Item() {
    const itemCode = "IT001";
    const itemDesc = "BlueBerry";
    const itemQty = 10;
  
    return (
      <>
        <h1>Item Information</h1>
        <h2>Item Code is {itemCode}</h2>
        <h2>Item Description is {itemDesc}</h2>
        <h2>Item Quantity is {itemQty}</h2>
      </>
    );
  }
  
  export default Item;