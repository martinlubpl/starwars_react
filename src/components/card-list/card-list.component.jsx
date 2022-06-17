import { Component } from "react";
import './card-list.styles.css'
import Card from '../card/card.component'
class CardList extends Component {
    render() {
        const { characters } = this.props;
        return (
            <div className='card-list' >
                {characters.map((character) => {
                    // const { name, email, id } = character
                    return (
                        <Card character={character} />
                    )


                    // <h1 key={character.id}>{character.name}</h1>
                })}
            </div>
        )
    }
}

export default CardList;