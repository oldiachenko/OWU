import React, {Component} from 'react';
import UserFromAPIComponent from "./UserFromAPIComponent";
import './AllUsers.css'

class AllUsersComponent extends Component {

  state = {users: [], classState: 'one', chosenUser : null}
  flag = false;

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then (value => value.json())
      .then(usersFromAPi => {
        this.setState({users:usersFromAPi})
      })
  }

  changeColor = () => {
    if(this.flag) {
      this.setState({classState:'one'})
    } else {
      this.setState({classState: 'two'})
    }
    this.flag = !this.flag
  }

  selectUser = (id) => {
    let chosenUser = this.state.users.find(value => value.id === id)
    this.setState({chosenUser})

  }

  render() {
    let {users, classState, chosenUser} = this.state;

    return (
      <div>
        <h1 onClick={this.changeColor} className={classState}> All users page </h1>
        {
          users.map(value => (<UserFromAPIComponent  item={value} key={value.id} selectUser={this.selectUser}/>))
        }

        <hr/>
        {
          chosenUser && <UserFromAPIComponent item={chosenUser}/>
        }


      </div>
    );
  }
}

export default AllUsersComponent;