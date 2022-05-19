export const AddItemToCart = (CartItems, newItemToAdd) => {
  const existItem = CartItems.find(
    (eachItem) => eachItem.id === newItemToAdd.id
  );
  if (existItem) {
    return CartItems.map((eachItem) =>
      eachItem.id === newItemToAdd.id
        ? { ...eachItem, quantity: eachItem.quantity + 1 }
        : eachItem
    );
  } else {
    return [...CartItems, { ...newItemToAdd, quantity: 1 }];
  }
};
