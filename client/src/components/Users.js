import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
    constructor() {
        super();

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('/api/users')
            .then(res => {
                this.setState({ users: res.data }, () => {
                    console.log(this.state.users);
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="users">
                <ul>
                    {
                        this.state.users.map(user => {
                            return (
                                <li key={user.id}>{user.first_name} {user.last_name} - {user.email}</li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Users;
