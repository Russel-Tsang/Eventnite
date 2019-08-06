import React, { Component } from 'react';
import ContentBlock from './content_block';
import TextEditor from '../../helper_components/text_editor';
import SubmitBar from '../../helper_components/submit_bar';
import { withRouter } from 'react-router-dom';
 
class Details extends Component {
    constructor(props) {
        super(props)

        let description = this.props.event[0] ? this.props.event[0].description : '';

        this.state = {
            description: description,
            photoFile: null 
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this);
    }

    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId);
        if (this.props.event[0]) this.setState({description: this.props.event[0].description});
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.eventId !== prevProps.match.params.eventId) {
            this.props.fetchEvent(this.props.match.params.eventId);
        }
    }

    handleChange({ target }) {
        let description = target.value;
        this.setState({ description });
    }

    // submitting a photo
    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('event[description]', this.state.description);
        formData.append('event[picture]', this.state.photoFile);
        debugger
        this.props.updatePictureAndDescription(formData, this.props.match.params.eventId);    
    }

    handleFile(event) {
        this.setState({ photoFile: event.currentTarget.files[0] });
    }

    submitBar() { 
        // return this.state.description ? <SubmitBar onClick={() => this.props.updateEvent(description)}/> : null
        return this.state.description ? <SubmitBar onClick={this.handleSubmit}/> : null
    }

    photo() {
        return this.props.event[0] ? <img className="dashboard-picture" src={ this.props.event[0].pictureUrl } /> : null
    }

    render() {
        return (
            <>
            <div className="details" >
                <ContentBlock imgSrc={window.textIcon} heading="Main Event Image" caption="This is the first image attendees will see at the top of your listing. Use a high quality image: 2160x1080px (2:1 ratio)." >
                    <input type="file" onChange={this.handleFile}/>
                    {this.photo()}
                </ContentBlock>
                <ContentBlock heading="Description" caption="Add more details to your event like your schedule, sponsors, or featured guests." >
                    <TextEditor value={this.state.description} onChange={this.handleChange}/>
                </ContentBlock>
            </div>
            {this.submitBar()}
            </>
        );
    }
}
    

 
export default withRouter(Details);