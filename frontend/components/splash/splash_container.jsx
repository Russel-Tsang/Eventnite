import { connect } from 'react-redux';
import { fetchEvents, postLike, deleteLike } from '../../actions/events';
import Splash from './splash';

const msp = state => ({
    events: Object.values(state.entities.events) || { beginMonth: '', beginDay: '', title: '', city: '', state: '', category: '' },
    likes: state.entities.likes,
    currentUser: state.session.id
});

const mdp = dispatch => ({
    fetchEvents: () => dispatch(fetchEvents()),
    postLike: (eventId, requestPage) => dispatch(postLike(eventId, requestPage)),
    deleteLike: (eventId, likeId, requestPage) => dispatch(deleteLike(eventId, likeId, requestPage))
});

export default connect(msp, mdp)(Splash);