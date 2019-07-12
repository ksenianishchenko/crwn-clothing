import React from "react";
import SHOP_DATA from "./shop.data"

import CollectionPreview from "../../components/collection-preview/collection-preview";

class Shop extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const {collections} = this.state;
    return <div className="shop-page">
      {collections.map((item) => <CollectionPreview
        key={item.id}
        title={item.title}
        items={item.items}
      />)}
    </div>
  }
}

export default Shop;
