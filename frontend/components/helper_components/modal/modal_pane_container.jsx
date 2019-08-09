import { connect } from 'react-redux';
import ModalPane from './modal_pane';
import { fetchEvent } from '../../../actions/events'; 

const msp = (state) => {
    return {events: Object.values(state.entities.events) || { title: '', description: '', tags: '', organizer: '', onlineEvent: '', street: '', state: '', city: '', zipCode: '', beginDay: '', beginMonth: '', beginYear: '', endDay: '', endMonth: '', endYear: '', beginTime: '', endTime: '' }}
}

const mdp = dispatch => ({
    fetchEvent: (id) => dispatch(fetchEvent(id))
})

export default connect(msp, mdp)(ModalPane);