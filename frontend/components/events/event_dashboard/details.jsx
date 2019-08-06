import React, { Component } from 'react';
import ContentBlock from './content_block';
import TextEditor from '../../helper_components/text_editor';
import SubmitBar from '../../helper_components/submit_bar';
import { withRouter } from 'react-router-dom';
import { merge } from 'lodash';
 
class Details extends Component {
    constructor(props) {
        super(props)

        this.state = {
            description: '',
            photoFile: null 
        }

        // this.handleChange = this.handleChange.bind(this);
        // this.handleFile = this.handleFile.bind(this);
    }

    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId);
        if (this.props.description[0]) this.setState({description: this.props.description[0].description});
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
        formData.append('event[title]', this.state.description);
        formData.append('event[photo]', this.state.photoFile);    
    }

    handleFile({ currentTarget }) {
        this.setState({ photoFile: currentTarget.files[0] });
    }

    submitBar() {
        let description = merge({}, this.state, { id: this.props.match.params.eventId });
        return this.state.description ? <SubmitBar onClick={() => this.props.updateEvent(description)}/> : null
    }

    render() {
        console.log(this.state);
        return (
            <>
            <div className="details" >
                <ContentBlock imgSrc={window.textIcon} heading="Main Event Image" caption="This is the first image attendees will see at the top of your listing. Use a high quality image: 2160x1080px (2:1 ratio)." >
                    <input type="file" onChange={this.handleFile}/>
                    {/* <img className="details-image" src={window.photoBalloons}/> */}
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