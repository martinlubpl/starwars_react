import { Component } from "react";

class CardList extends Component {
    render() {
        const { characters } = this.props;
        return (
            <div className='card-list' >
                {characters.map(character => {
                    return <h1 key={character.id}>{character.name}</h1>
                })}
            </div>
        )
    }
}

export default CardList;