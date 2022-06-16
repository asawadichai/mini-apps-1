class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'checkout',
      account: {name: '', email: '', password: ''},
      shipping: {line1: '', line2: '', city: '', state: '', zip: '', phone: ''},
      payment: {cardNumber: '', expiration: '', cvv: '', billingZip: ''}
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    var currentPage = this.state.page;
    var copy = this.state[currentPage];
    copy[e.target.name] = e.target.value;
    this.setState({[this.state.page]: copy})
  }

  checkoutButton() {
    this.setState({page: 'account'})
  }
  accountButton() {
    this.setState({page: 'shipping'})
  }
  shippingButton() {
    this.setState({page: 'payment'})
  }
  paymentButton() {
    this.setState({page: 'confirmation'})
  }
  submitButton() {
    this.setState({page: ''})
  }

  render () {
  if (this.state.page === 'account') {
    return (
      <div>
        <h1>Challenge 3</h1>
        <h2>Account information</h2>
        <form>
          <label for="name">Name</label>
          <input type="text" name="name" value={this.state.account.name} onChange={this.handleChange}></input><br></br>
          <label for="email">Email</label>
          <input type="text" name="email" value={this.state.account.email} onChange={this.handleChange}></input><br></br>
          <label for="password">Password</label>
          <input type="text" name="password" value={this.state.account.password} onChange={this.handleChange}></input><br></br>
        </form>
        <button onClick={this.accountButton.bind(this)}>Next</button>
      </div>
    )
  }
  if (this.state.page === 'shipping') {
    return (
      <div>
      <h1>Challenge 3</h1>
      <h2>Shipping address</h2>
      <form>
          <label for="line1">Address</label>
          <input type="text" name="line1" value={this.state.shipping.line1} onChange={this.handleChange}></input><br></br>
          <label for="line2"></label>
          <input type="text" name="line2" value={this.state.shipping.line2} onChange={this.handleChange}></input><br></br>
          <label for="city">City</label>
          <input type="text" name="city" value={this.state.shipping.city} onChange={this.handleChange}></input><br></br>
          <label for="state">State</label>
          <input type="text" name="state" value={this.state.shipping.state} onChange={this.handleChange}></input><br></br>
          <label for="zip">ZIP Code</label>
          <input type="text" name="zip" value={this.state.shipping.zip} onChange={this.handleChange}></input><br></br>
          <label for="phone">Phone</label>
          <input type="text" name="phone" value={this.state.shipping.phone} onChange={this.handleChange}></input><br></br>
        </form>
      <button onClick={this.shippingButton.bind(this)}>Next</button>
      </div>
    )
  }
  if (this.state.page === 'payment') {
    return (
      <div>
        <h1>Challenge 3</h1>
        <h2>Payment method</h2>
        <form>
          <label for="cardNumber">Card number</label>
          <input type="text" name="cardNumber" value={this.state.payment.cardNumber} onChange={this.handleChange}></input><br></br>
          <label for="expiration">Expiration date</label>
          <input type="text" name="expiration" value={this.state.payment.expiration} onChange={this.handleChange}></input><br></br>
          <label for="cvv">CVV</label>
          <input type="text" name="cvv" value={this.state.payment.cvv} onChange={this.handleChange}></input><br></br>
          <label for="billingZip">Billing ZIP code</label>
          <input type="text" name="billingZip" value={this.state.payment.billingZip} onChange={this.handleChange}></input><br></br>
        </form>
        <button onClick={this.paymentButton.bind(this)}>Next</button>
      </div>
    )
  }
  if (this.state.page === 'confirmation') {
    var ship = this.state.shipping.line1;
    return (
      <div>
        <h1>Challenge 3</h1>
        <h2>Order Summary</h2>
        <p>Shipping address {this.state.account.name}</p>
        <p>{this.state.shipping.line1}</p>
        <p>{this.state.shipping.line2}</p>
        <p>{this.state.shipping.city}, {this.state.shipping.state} {this.state.shipping.zip}</p>
        <p>{this.state.shipping.phone}</p>
        <p>Payment method {this.state.payment.cardNumber}</p>
        <p>{this.state.payment.expiration}, {this.state.payment.cvv}, {this.state.payment.billingZip}</p>
        <button onClick={this.submitButton.bind(this)}>Purchase</button>
      </div>
    )
  }
  return (
    <div>
    <h1>Challenge 3</h1>
    <h2>Checkout</h2>
    <button onClick={this.checkoutButton.bind(this)}>Proceed to Checkout</button>
  </div>)
}
};

ReactDOM.render(<App />, document.getElementById('app'));