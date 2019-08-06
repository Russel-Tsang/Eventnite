import { connect } from 'react-redux';
import { updateEvent, fetchEvent } from '../../../actions/events';
import Details from './details';

const msp = state => ({
    description: Object.values(state.entities.events)
})

const mdp = dispatch => ({
    fetchEvent: (id) => dispatch(fetchEvent(id)),
    updateEvent: (event) => dispatch(updateEvent(event))
})

export default connect(msp, mdp)(Details)