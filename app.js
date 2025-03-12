const Product = ({ item, onClick }) => {
    const amounts = [...Array(item.stock)].map((_, index) => index + 1)
    const [amountSelected, setAmountSelected] = React.useState(1)
    const outOfStock = item.stock === 0
  
    return (
      <div className="product">
        <img className="product-image" src={`images/${item.image}`} />
        <div className="product-title">{item.title}</div>
        <div className="product-price">$ {item.price}</div>
        <div className="product-stock">{item.stock}</div>
        <div className="product-actions">
          <select
            className="product-select-amount"
            value={amountSelected}
            onChange={(e) => setAmountSelected(e.target.value)}
            disabled={outOfStock}
          >
            {amounts.map((x) => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
          <button disabled={outOfStock} onClick={() => onClick(amountSelected)}>
            {outOfStock ? 'Out of Stock' : 'Buy'}
          </button>
        </div>
      </div>
    )
  }
  
  const App = () => {
    const [inventory, setInventory] = React.useState(tshirts)
  
    const buyProduct = (index, amount) => {
      const newInventory = [...inventory]
      newInventory[index].stock -= amount
      setInventory(newInventory)
    }
  
    return (
      <>
        <h1>T-Shirts</h1>
        <div className="products-grid">
          {inventory.map((x, index) => (
            <Product
              key={x.title}
              item={x}
              onClick={(amount) => buyProduct(index, amount)}
            />
          ))}
        </div>
      </>
    )
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(<App />)  