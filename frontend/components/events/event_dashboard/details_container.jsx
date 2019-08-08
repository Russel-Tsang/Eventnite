import { connect } from 'react-redux';
import { updateEvent, fetchEvent, updatePictureAndDescription } from '../../../actions/events';
import Details from './details';

const msp = state => ({
    event: Object.values(state.entities.events)
})

const mdp = dispatch => ({
    fetchEvent: (id) => dispatch(fetchEvent(id)),
    updateEvent: (event) => dispatch(updateEvent(event)),
    updatePictureAndDescription: (pictureAndDescription, id) => dispatch(updatePictureAndDescription(pictureAndDescription, id))
})

export default connect(msp, mdp)(Details)