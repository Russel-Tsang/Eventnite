import { connect } from 'react-redux';
import { fetchEvents, postLike, deleteLike } from '../../../actions/events'
import EventIndex from './event_index';

const msp = state => ({
    events: Object.values(state.entities.events) || { beginMonth: '', beginDay: '', title: '', city: '', state: '', category: '' },
    likes: state.entities.likes
});

const mdp = dispatch => ({
    fetchEvents: () => dispatch(fetchEvents()),
    postLike: (eventId, requestPage) => dispatch(postLike(eventId, requestPage)),
    deleteLike: (eventId, likeId, requestPage) => dispatch(deleteLike(eventId, likeId, requestPage))
});

export default connect(msp, mdp)(EventIndex);