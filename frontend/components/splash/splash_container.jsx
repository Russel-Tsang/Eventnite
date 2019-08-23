import { connect } from 'react-redux';
import { fetchEvents, postLike, deleteLike } from '../../actions/events';
import Splash from './splash';

const msp = state => ({
    events: Object.values(state.entities.events) || { beginMonth: '', beginDay: '', title: '', city: '', state: '', category: '' },
    likes: state.entities.likes
});

const mdp = dispatch => ({
    fetchEvents: () => dispatch(fetchEvents()),
    postLike: (eventId) => dispatch(postLike(eventId)),
    deleteLike: (eventId, likeId) => dispatch(deleteLike(eventId, likeId))
});

export default connect(msp, mdp)(Splash);