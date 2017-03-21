import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
  // One way to bind this
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this)
  // }
  goToStore(event) {
    // first grab the text from the box
    event.preventDefault();
    console.log(this.storeInput.value);
    // append value to url
    const storeId = this.storeInput.value;
    this.context.router.transitionTo(`/store/${storeId}`)
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        <h2>Please enter a store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input} } />
        <button type="submit">Visit Store -></button>
      </form>
    )
  }
}

// Make the router available with context
StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;