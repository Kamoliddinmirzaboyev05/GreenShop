import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footerSection">
          <div className="footerBlock">
            <div className="footerBox">
              <div className="footerBoxImg">
                <img src="/public/footerimg1.png" alt="" />
              </div>
              <div className="footerBoxText">
                <h2>Garden Care</h2>
                <p>
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants.
                </p>
              </div>
            </div>
            <div className="footerBox">
              <div className="footerBoxImg">
                <img src="/public/footerimg1.png" alt="" />
              </div>
              <div className="footerBoxText">
                <h2>Garden Care</h2>
                <p>
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants.
                </p>
              </div>
            </div>
            <div className="footerBox">
              <div className="footerBoxImg">
                <img src="/public/footerimg1.png" alt="" />
              </div>
              <div className="footerBoxText">
                <h2>Garden Care</h2>
                <p>
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants.
                </p>
              </div>
            </div>
          </div>
          <div className="footerJoin">
            <h2>Would you like to join newsletters?</h2>
            <form action="#">
              <input type="email" placeholder="enter your email address..." />
              <button>Join</button>
            </form>
            <p>
              We usually post offers and challenges in newsletter. We’re your
              online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our (green)house
              to yours!{" "}
            </p>
          </div>
        </div>
        <div className="mainFooterData">
          <div className="logo">
            <img src="/public/logo.svg" alt="" />
          </div>
          <div className="row">
            <img src="/public/Location.svg" alt="" />
            <p>
              70 West Buckingham Ave. <br /> Farmingdale, NY 11735
            </p>
          </div>
          <div className="row">
            <img src="/public/Message.svg" alt="" />
            <p>contact@greenshop.com</p>
          </div>
          <div className="row">
            <img src="/public/Calling.svg" alt="" />
            <p>+88 01911 717 490</p>
          </div>
        </div>
        <div className="footerLinks">
          <div className="col">
            <h2>My Account</h2>
            <p>My Account</p>
            <p>Our stores</p>
            <p>Contact us</p>
            <p>Career</p>
            <p>Specials</p>
          </div>
          <div className="col">
            <h2>Help & Guide</h2>
            <p>Help Center</p>
            <p>How to Buy</p>
            <p>Shipping & Delivery</p>
            <p>Product Policy</p>
            <p>How to Return</p>
          </div>
          <div className="col">
            <h2>Categories</h2>
            <p>House Plants</p>
            <p>Potter Plants</p>
            <p>Seeds</p>
            <p>Small Plants</p>
            <p>Accessories</p>
          </div>
          <div className="col">
            <h2>Social Media</h2>
            <div className="footerSocials">
              <div className="socialBox">
                <i class="fa-brands fa-facebook"></i>
              </div>
              <div className="socialBox">
                <i class="fa-brands fa-instagram"></i>
              </div>
              <div className="socialBox">
                <i class="fa-brands fa-twitter"></i>
              </div>
              <div className="socialBox">
                <i class="fa-brands fa-linkedin"></i>
              </div>
              <div className="socialBox">
                <i class="fa-brands fa-youtube"></i>
              </div>
            </div>
            <h2>We accept</h2>
            <div className="payment">
              <div className="paymentType">
                <img src="/public/paypal.svg" alt="" />
              </div>
              <div className="paymentType">
                <img src="/public/visa.svg" alt="" />
              </div>
              <div className="paymentType">
                <img src="/public/mastercard.svg" alt="" />
              </div>
              <div className="paymentType">
                <img src="/public/american-express.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
