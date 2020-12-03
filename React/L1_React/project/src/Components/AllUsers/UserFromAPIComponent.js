import React, {Component} from 'react';

class UserFromAPIComponent extends Component {
  render() {
    let {item, selectUser} = this.props
    return (
      <div>
        {item.id} - {item.name}
        <br/>
        <button onClick={() => selectUser(item.id)}> choose me </button>
      </div>
    );
  }
}

export default UserFromAPIComponent;