import React, {Component} from 'react';
import UserComponent from "./Components/Users/UserComponent";

class App extends Component {

    UsersWithAddress = [
        {
            id: 2,
            name: 'vasya',
            age: 31,
            status: false,
            address: { city: 'Lviv', street: 'Shevchenko', number: 16 },
        },
        {
            id: 1,
            name: 'petya',
            age: 30,
            status: true,
            address: { city: 'Lviv', street: 'Shevchenko', number: 1 },
        },
        {
            id: 3,
            name: 'kolya',
            age: 29,
            status: true,
            address: { city: 'Lviv', street: 'Shevchenko', number: 121 },
        },
        {
            id: 4,
            name: 'olya',
            age: 28,
            status: false,
            address: { city: 'Lviv', street: 'Shevchenko', number: 90 },
        },
        {
            id: 5,
            name: 'max',
            age: 30,
            status: true,
            address: { city: 'Lviv', street: 'Franko', number: 115 },
        },
        {
            id: 6,
            name: 'anya',
            age: 31,
            status: false,
            address: { city: 'Lviv', street: 'Shevchenko', number: 2 },
        },
        {
            id: 7,
            name: 'oleg',
            age: 28,
            status: false,
            address: { city: 'Kyiv', street: 'Shevchenko', number: 22 },
        },
        {
            id: 8,
            name: 'andrey',
            age: 29,
            status: true,
            address: { city: 'Lviv', street: 'Shevchenko', number: 43 },
        },
        {
            id: 9,
            name: 'masha',
            age: 30,
            status: true,
            address: { city: 'Kyiv', street: 'Shevchenko', number: 12 },
        },
        {
            id: 11,
            name: 'olya',
            age: 31,
            status: false,
            address: { city: 'Lviv', street: 'Shevchenko', number: 16 },
        },
        {
            id: 10,
            name: 'max',
            age: 31,
            status: true,
            address: { city: 'Lviv', street: 'Shevchenko', number: 121 },
        },
    ];
    render() {
        let usersSort = JSON.parse(JSON.stringify(this.UsersWithAddress))

        usersSort.sort((a, b) => a.age - b.age)
        return (
            <div>
                {
                    usersSort.map((user) => {
                        let name = 'target'
                        if(user.address.city === "Kyiv") {
                            name = 'point'
                        }
                    return <UserComponent item={user} key={user.id} clsName={name}/>
                })}
            </div>
        );
    }
}

export default App;