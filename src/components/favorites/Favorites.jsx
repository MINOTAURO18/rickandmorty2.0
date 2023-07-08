import { connect}  from "react-redux";
import Cards from "../cards/Cards";

const Favorites = (props) => {
    const {characters, onClose, favorites}= props
    const {id} = characters

    return (
        <div>
            <Cards characters={favorites} onClose={() =>onClose(id)} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        favorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);