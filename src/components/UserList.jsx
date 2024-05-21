import React from 'react';
import axios from 'axios';
import { allUsers } from './constants/url';

export default class PersonList extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(allUsers)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <ul>
                {
                    this.state.persons
                        .map(person =>
                            <li key={person.id}>{person.username + " " + person.name + " " + person.tournament + " " + person.password}</li>
                        )
                }
            </ul>
        )
    }
}