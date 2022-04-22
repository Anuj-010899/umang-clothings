import {
  CheckoutItemContainer,
  CheckoutItemImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <CheckoutItemImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </CheckoutItemImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow
          onClick={() => {
            removeItemHandler(cartItem);
          }}
        >
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow
          onClick={() => {
            addItemHandler(cartItem);
          }}
        >
          &#10095;
        </Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton
        onClick={() => {
          clearItemHandler(cartItem);
        }}
      >
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
