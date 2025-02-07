import React from 'react';

const Checkout = () => {
  return (
    <div>
      <h1>Checkout</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Address:
          <input type="text" name="address" />
        </label>
        <label>
          Payment Method:
          <input type="text" name="payment" />
        </label>
        <button type="submit">Complete Purchase</button>
      </form>
    </div>
  );
};

export default Checkout;
