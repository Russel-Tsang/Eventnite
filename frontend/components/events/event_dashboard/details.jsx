import React, { Component } from 'react';
import ContentBlock from './content_block';
import TextEditor from '../../helper_components/text_editor';
import SubmitBar from '../../helper_components/submit_bar';
import { withRouter } from 'react-router-dom';
import ImageOverlay from '../../helper_components/image_overlay';
 
class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: '',
            photoFile: null,
            photoUrl: null,
            photoUrlHolder: null,
            showOverlayImage: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this);
        this.handleImageReplace = this.handleImageReplace.bind(this);
        this.toggleOverlayImage = this.toggleOverlayImage.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchEvent(this.props.match.params.eventId).then(
            action => {
                this.setState({ description: action.event.description, photoUrl: action.event.pictureUrl })
            }
        );
    }

    componentDidUpdate(prevProps) {
        let textEditorDescription = document.querySelector('.text-editor').value;
        if (this.props.match.params.eventId !== prevProps.match.params.eventId) {
            this.props.fetchEvent(this.props.match.params.eventId)
                .then(action => {
                    this.setState({ 
                        description: action.event.description, 
                        photoUrl: action.event.pictureUrl 
                    });
                });
        }
        if (textEditorDescription.includes('<p>')) {
            document.querySelector('.text-editor').value = textEditorDescription.replace(/(<([^>]+)>)/ig, "");
        }
    }

    handleChange(event) {
        let description = event.target.value;
        this.setState({ description });
    }

    handleImageReplace(action) {
        return () => {
            if (action === 'remove') this.setState({ photoUrlHolder: this.state.photoUrl, photoUrl: null, });
            if (action === 'restore') this.setState({ photoUrl: this.state.photoUrlHolder, photoUrlHolder: null });
        }
    }

    // submitting a photo
    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('event[description]', this.state.description);
        if (this.state.photoFile) formData.append('event[picture]', this.state.photoFile);
        this.props.updatePictureAndDescription(formData, this.props.match.params.eventId);    
        this.props.history.push('/dashboard/all');
    }

    handleFile(event) {
        const fileReader = new FileReader();
        let file = event.currentTarget.files[0];
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result });
        }
        if (file) fileReader.readAsDataURL(file);
    }

    toggleOverlayImage(bool) {
        return () => {
            this.setState({ showOverlayImage: bool });
        }
        
    }

    render() {
        let showOverlayImage = this.state.showOverlayImage ? true : false;
        
        let imageSpace = this.state.photoUrl ? (
                <div className="details-image-container">
                    <img className="dashboard-picture" src={this.state.photoUrl} />
                    <ImageOverlay 
                        showOverlayImage={showOverlayImage}
                        onMouseEnter={this.toggleOverlayImage(true)}
                        onMouseLeave={this.toggleOverlayImage(false)}
                        onIconClick={this.handleImageReplace('remove')}
                    />
                </div>
        ) : (
                <div className="image-upload-div">
                    <div className="upload-div-content">
                        <img src={window.imageIcon} />
                        <input type="file" onChange={this.handleFile} />
                        <span className="file-input-text">
                            <h2>Drag &amp; drop or click to add main event image.</h2>
                            <p>JPEG or PNG, no larger than 10MB.</p>
                        </span>
                    </div>
                </div>
        );
        let submitBarShow = this.state.description ? 'submit-bar-show' : '';

        return (
            <>
            <div className="details">
                <ContentBlock imgSrc={window.imageIcon} heading="Main Event Image" caption="This is the first image attendees will see at the top of your listing. Use a high quality image: 2160x1080px (2:1 ratio)." >
                    {imageSpace}
                </ContentBlock>
                <hr/>
                <ContentBlock imgSrc={window.textIcon} heading="Description" caption="Add more details to your event like your schedule, sponsors, or featured guests." >
                    <TextEditor value={this.state.description || ""} onChange={this.handleChange}/>
                </ContentBlock>
            </div>
            <SubmitBar onSubmitClick={this.handleSubmit} submitBarShow={submitBarShow} onDiscardClick={this.handleImageReplace('restore')}/>
            </>
        );
    }
}
    

 
export default withRouter(Details);