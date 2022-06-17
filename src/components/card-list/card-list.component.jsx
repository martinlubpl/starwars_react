import { Component } from "react";
import './card-list.styles.css'

class CardList extends Component {
    render() {
        const { characters } = this.props;
        return (
            <div className='card-list' >
                {characters.map((character) => {
                    const { name, email, id } = character
                    return (
                        <div className="card-container" key={id}>
                            <img alt={`character ${name}`} src={`images/character${id}.png`}></img>
                            <h2>{name}</h2>
                            <p>{email}</p>
                        </div>
                    )


                    // <h1 key={character.id}>{character.name}</h1>
                })}
            </div>
        )
    }
}

export default CardList;