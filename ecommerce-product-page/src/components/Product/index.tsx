import {Navbar} from "../Navbar";
import './style.css';

export const Product = () => {
    return (
        <div>
            <Navbar/>
            <div className="product-detail">
                {/*left side*/}
                <div className="product-detail--image">
                     {/*<img src="images/image-product-1.jpg" /> */}
                </div>

                {/*right side*/}
                <div className="product-detail--info">
                    <h2>Sneaker company</h2>
                    <h1>
                        Fall Limited Edition Sneakers
                    </h1>

                    <p>These low-profile sneakers are your perfect casual wear companion. Featuring a
                        durable rubber outer sole, they’ll withstand everything the weather can offer.
                    </p>

                    <div className="product-detail--price">
                        <div className="product-detail--price__actual">
                            <p className="price-actual">$125.00</p>
                            <p className="price-discount">50%</p>
                        </div>
                        <p className="price-crossed">$250.00</p>
                    </div>

                    <div className="product-detail--cart">
                        <div className="product-detail--cart__adjustment">
                            <img src="../../../public/images/icon-minus.svg" width="12" height="4" alt={"minus"}/>
                            <p className="items-count">0</p>
                            <img src="../../../public/images/icon-plus.svg" width="12" height="12" alt={"plus"}/>
                        </div>

                        <div className="product-detail--cart__cta">
                            <button>
                                <span><img src="../../../public/images/icon-cart.svg" alt={"cart"} width="18"/></span>
                                <span>Add to cart</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};