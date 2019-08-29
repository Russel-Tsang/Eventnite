import { connect } from 'react-redux';
import EventFavorites from './event_favorites';
import { fetchLikedEvents, postLike, deleteLike } from '../../../actions/events';

const msp = state => ({
    currentUser: state.session.id,
    likedEvents: Object.values(state.entities.events),
    likes: state.entities.likes
});

const mdp = dispatch => ({
    fetchLikedEvents: (userId) => dispatch(fetchLikedEvents(userId)),
    postLike: (eventId, requestPage) => dispatch(postLike(eventId, requestPage)),
    deleteLike: (eventId, likeId, requestPage) => dispatch(deleteLike(eventId, likeId, requestPage))
});

export default connect(msp, mdp)(EventFavorites);