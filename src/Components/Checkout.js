export default function () {
  return (
    <form className="checkout">
      <h2>Checkout</h2>
      <label htmlFor="firsName">First Name:</label>
      <input type="text" id="firstName" />
      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" />
      <label htmlFor="zipcode">Zip Code:</label>
      <input type="number" id="zipcode" />
      <button>Submit</button>
    </form>
  );
}
