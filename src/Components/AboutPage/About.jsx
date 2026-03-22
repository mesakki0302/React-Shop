import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">

      <div className="about-hero">
        <h1>Welcome to Shopper</h1>
        <p>Your Trusted Online Shopping Destination</p>
      </div>

      <div className="about-section">
        <h2>Our Story</h2>
        <p>
          Shopper was created with a simple vision — to make online shopping
          easy, affordable, and accessible for everyone. We started our journey
          with a passion to connect customers with high-quality products from
          trusted sellers around the world.

          Today, Shopper has grown into a modern e-commerce platform offering a
          wide variety of products including fashion, electronics, accessories,
          home essentials, and lifestyle products.

          Our goal is not just to sell products but to create a shopping
          experience that is simple, secure, and enjoyable for every customer.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower people by providing a reliable digital
          marketplace where customers can discover quality products at the best
          prices. We aim to create a shopping ecosystem that combines
          technology, convenience, and customer satisfaction.

          Through innovation and customer-first thinking, we continuously
          improve our platform to make shopping faster, easier, and safer.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Vision</h2>
        <p>
          Our vision is to become one of the most trusted online shopping
          platforms where customers can shop anytime and anywhere with
          confidence.

          We aim to build a global community of shoppers who value quality,
          convenience, and innovation.
        </p>
      </div>

      <div className="about-section">
        <h2>Why Choose Shopper?</h2>

        <div className="features">
          <div className="feature-card">
            <h3>Quality Products</h3>
            <p>We carefully select products to ensure the best quality.</p>
          </div>

          <div className="feature-card">
            <h3>Affordable Prices</h3>
            <p>Competitive pricing with amazing deals and offers.</p>
          </div>

          <div className="feature-card">
            <h3>Secure Payments</h3>
            <p>Safe and reliable payment methods for every transaction.</p>
          </div>

          <div className="feature-card">
            <h3>Fast Delivery</h3>
            <p>Quick shipping with reliable logistics partners.</p>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2>Customer Commitment</h2>
        <p>
          At Shopper, customer satisfaction is our top priority. Our team works
          continuously to improve the shopping experience by offering excellent
          support, fast delivery, and high-quality products.

          Whether you are shopping for fashion, electronics, or everyday
          essentials, Shopper is committed to making your online shopping
          experience enjoyable and stress-free.
        </p>
      </div>

    </div>
  );
}

export default About;