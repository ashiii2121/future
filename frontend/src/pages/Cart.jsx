import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2, ShoppingBag, ArrowRight, CheckCircle, Home } from "lucide-react";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId") || "temp-user-id";

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      setLoading(true);
      // Simulating API call - replace with actual API
      const mockCart = JSON.parse(localStorage.getItem("cart")) || [];

      // If you have an actual API, use this instead:
      // const response = await fetch(`http://localhost:5000/api/v1/cart/${userId}`);
      // const data = await response.json();
      // setCartItems(data.data || []);

      setCartItems(mockCart);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item._id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Trigger storage event for cart count update
    window.dispatchEvent(new Event("storage"));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price || 0), 0);
  };

  const calculateOriginalTotal = () => {
    return cartItems.reduce(
      (total, item) => total + (item.originalPrice || item.price || 0),
      0
    );
  };

  const calculateSavings = () => {
    return calculateOriginalTotal() - calculateSubtotal();
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    // Implement checkout logic
    alert("Proceeding to checkout...");
  };

  const handleContinueShopping = () => {
    navigate("/create-package");
  };

  if (loading) {
    return (
      <div className="cart-loading">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p>Loading your cart...</p>
      </div>
    );
  }

  return (
    <div className="modern-cart-page">
      {/* Hero Section */}
      <div className="cart-hero">
        <div className="container">
          <div className="cart-hero-content">
            <ShoppingBag size={48} className="cart-hero-icon" />
            <h1 className="cart-hero-title">Your Shopping Cart</h1>
            <p className="cart-hero-subtitle">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in
              your cart
            </p>
          </div>
        </div>
      </div>

      <div className="container cart-container">
        {cartItems.length === 0 ? (
          /* Empty Cart State */
          <div className="empty-cart">
            <div className="empty-cart-icon">
              <ShoppingBag size={80} />
            </div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any tests yet.</p>
            <div className="empty-cart-actions">
              <button
                className="btn-primary-gradient"
                onClick={handleContinueShopping}
              >
                <ShoppingBag size={20} />
                Create Custom Package
              </button>
              <button className="btn-secondary-outline" onClick={() => navigate("/")}>
                <Home size={20} />
                Browse Tests
              </button>
            </div>
          </div>
        ) : (
          /* Cart with Items */
          <div className="cart-layout">
            {/* Cart Items Section */}
            <div className="cart-items-section">
              <div className="cart-items-header">
                <h2>Cart Items ({cartItems.length})</h2>
                <button
                  className="clear-cart-btn"
                  onClick={() => {
                    setCartItems([]);
                    localStorage.setItem("cart", JSON.stringify([]));
                    window.dispatchEvent(new Event("storage"));
                  }}
                >
                  <Trash2 size={16} />
                  Clear All
                </button>
              </div>

              <div className="cart-items-list">
                {cartItems.map((item, index) => (
                  <div key={item._id || index} className="cart-item-card">
                    <div className="cart-item-content">
                      <div className="cart-item-info">
                        <h3 className="cart-item-name">{item.name}</h3>
                        <p className="cart-item-category">{item.category}</p>
                        {item.description && (
                          <p className="cart-item-description">
                            {item.description.substring(0, 100)}
                            {item.description.length > 100 ? "..." : ""}
                          </p>
                        )}

                        <div className="cart-item-features">
                          {item.homeSampleCollection && (
                            <span className="feature-tag">
                              <CheckCircle size={14} />
                              Home Collection
                            </span>
                          )}
                          {item.reportsIn && (
                            <span className="feature-tag">
                              <CheckCircle size={14} />
                              Reports in {item.reportsIn}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="cart-item-pricing">
                        <div className="cart-item-price">
                          <span className="current-price">₹{item.price}</span>
                          {item.originalPrice && item.originalPrice > item.price && (
                            <span className="original-price">
                              ₹{item.originalPrice}
                            </span>
                          )}
                        </div>
                        {item.discountPercentage > 0 && (
                          <span className="discount-tag">
                            {item.discountPercentage}% OFF
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      className="remove-item-btn"
                      onClick={() => handleRemoveItem(item._id)}
                      title="Remove from cart"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Continue Shopping Button */}
              <button
                className="continue-shopping-btn"
                onClick={handleContinueShopping}
              >
                <ArrowRight size={20} />
                Add More Tests
              </button>
            </div>

            {/* Order Summary Section */}
            <div className="order-summary-section">
              <div className="order-summary-card">
                <h2 className="summary-title">Order Summary</h2>

                <div className="summary-details">
                  <div className="summary-row">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span>₹{calculateOriginalTotal()}</span>
                  </div>

                  {calculateSavings() > 0 && (
                    <div className="summary-row savings">
                      <span>Package Savings</span>
                      <span>-₹{calculateSavings()}</span>
                    </div>
                  )}

                  <div className="summary-row">
                    <span>Home Collection</span>
                    <span className="free-tag">FREE</span>
                  </div>

                  <div className="summary-divider"></div>

                  <div className="summary-row total">
                    <span>Total Amount</span>
                    <span>₹{calculateSubtotal()}</span>
                  </div>

                  {calculateSavings() > 0 && (
                    <div className="savings-badge">
                      You're saving ₹{calculateSavings()}!
                    </div>
                  )}
                </div>

                <button className="checkout-btn" onClick={handleCheckout}>
                  <ShoppingBag size={20} />
                  Proceed to Checkout
                  <ArrowRight size={20} />
                </button>

                {/* Benefits List */}
                <div className="checkout-benefits">
                  <h4>What you get:</h4>
                  <ul>
                    <li>
                      <CheckCircle size={16} />
                      Free home sample collection
                    </li>
                    <li>
                      <CheckCircle size={16} />
                      Quick report delivery
                    </li>
                    <li>
                      <CheckCircle size={16} />
                      Expert consultation included
                    </li>
                    <li>
                      <CheckCircle size={16} />
                      100% safe & secure payment
                    </li>
                  </ul>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="trust-badges">
                <div className="trust-badge">
                  <CheckCircle size={20} />
                  <span>NABL Certified</span>
                </div>
                <div className="trust-badge">
                  <CheckCircle size={20} />
                  <span>Secure Payment</span>
                </div>
                <div className="trust-badge">
                  <CheckCircle size={20} />
                  <span>Expert Support</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
