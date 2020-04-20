import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: 'name sss',
    email: 'email@kskska.s.s.ss',
    address: {
      street: 'strr',
      postalCode: '30-111'
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    // // alert('You continued');
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: 'JJ',
        address: {
          street: 'Teststreet 222',
          zipcode: '39-111',
          country: 'Germoney'
        },
        email: 'oof@oof.pl'
      },
      deliveryMethod: 'kurwa dzisiaj'
    };
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push('/');
        console.log(response);
      })
      .catch(error => {
        this.setState({ loading: false });
        console.log(error);
      });
  }

  render() {
    let form = (<form>
      <input type="text" name="name" placeholder="yourname" />
      <input type="email" name="email" placeholder="yourmail" />
      <input type="text" name="street" placeholder="yourstreete" />
      <input type="text" name="postal" placeholder="postalcode" />
      <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
    </form>);
    if (this.state.loading === true) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    )
  }
}

export default ContactData;
