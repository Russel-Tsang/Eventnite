import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/events';
import Splash from './splash';

const msp = state => ({
    events: Object.values(state.entities.events) || { beginMonth: '', beginDay: '', title: '', city: '', state: '', category: '' }
});

const mdp = dispatch => ({
    fetchEvents: () => dispatch(fetchEvents())
});

export default connect(msp, mdp)(Splash);