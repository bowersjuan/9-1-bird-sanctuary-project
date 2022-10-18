import "./Cart.css";

export default function Cart({ adoptedBirds, discount, cost }) {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <h4>
        Discount: <span>{discount}%</span>
      </h4>
      <h4>
        Total: <span>${cost}</span>
      </h4>
      <ol>
        {adoptedBirds.map((bird) => (
          <li>{bird.name}</li>
        ))}
      </ol>
      <p>Your Donations have qualified you for the following items:</p>
      <ol>
        <li>First discount</li>
      </ol>
    </div>
  );
}
