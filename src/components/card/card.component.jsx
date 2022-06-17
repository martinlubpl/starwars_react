import { Component } from 'react';

import './card.styles.css'

class Card extends Component {
    render() {
        const { id, name, email } = this.props.character;

        return (
            <div className="card-container" key={id}>
                <img alt={`character ${name}`} src={`images/character${id}.png`}></img>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }
}

export default Card