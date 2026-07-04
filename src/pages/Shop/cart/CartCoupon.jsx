const CartCoupon = ({ cart, handlecoupon, setcouponCode, couponCode }) => {
    return (
        <div className="coupon-section">
            <h3>Apply Coupon</h3>
            <div className="coupon-form-wrap">
                <form onSubmit={handlecoupon}>
                    <p><input type="text" placeholder="Coupon" onChange={(e) => setcouponCode(e.target.value)} value={couponCode} disabled={cart.discountAmount > 0} /></p>
                    <p><input type="submit" value="Apply" /></p>
                </form>
            </div>
        </div>
    );
}

export default CartCoupon;