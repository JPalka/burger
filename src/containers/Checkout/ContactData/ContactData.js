import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';

class ContactData extends Component {
  state = {
    name: 'name sss',
    email: 'email@kskska.s.s.ss',
    address: {
      street: 'strr',
      postalCode: '30-111'
    }
  }

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        <form>
          <input type="text" name="name" placeholder="yourname" />
          <input type="email" name="email" placeholder="yourmail" />
          <input type="text" name="street" placeholder="yourstreete" />
          <input type="text" name="postal" placeholder="postalcode" />
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    )
  }
}

export default ContactData;
