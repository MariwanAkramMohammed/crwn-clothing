import React from "react";
import CollenctionPreview from "../../Components/collection_preview/collection_preview.component";
import Shop_Data from "./shop.data";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Collection: Shop_Data,
    };
  }
  render() {
    const { Collection } = this.state;
    return (
      <div className="shop_page">
        {Collection.map(({ id, ...others }) => (
          <CollenctionPreview key={id} {...others} />
        ))}
      </div>
    );
  }
}
export default ShopPage;
