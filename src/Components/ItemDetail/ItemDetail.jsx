import './ItemDetail.css';

const Item = ({ item }) => {
  return (
    <>
      <div className="col-md-4">
        <div className="item-card text-center">
          <img src={item.imageUrl} alt={item.name} className="item-image" />
          <div className="item-details">
            <p className="item-name">{item.name}</p>
            <p className="item-price"><b>${item.price} MXN</b></p>
          </div>
        </div>
      </div>
    </>
  )
};

export default Item;