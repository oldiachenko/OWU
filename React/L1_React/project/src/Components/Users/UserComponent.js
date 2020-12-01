import React, {Component} from 'react';
import './User.css'

class UserComponent extends Component {
    render() {
        let {item, clsName} = this.props
        return (
            <div className={clsName}>
                <h3>
                    Name: {item.name}, Age: {item.age}
                </h3>
                Address:
                {item.address.city}, {item.address.street}, {item.address.number}

            </div>
        );
    }
}

export default UserComponent;