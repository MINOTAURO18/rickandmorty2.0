import { connect}  from "react-redux";
import Cards from "../cards/Cards";

const Favorites = ({favorites, onClose}) => {

    return (
        <div>
            <Cards characters={favorites} onClose={onClose}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        favorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);