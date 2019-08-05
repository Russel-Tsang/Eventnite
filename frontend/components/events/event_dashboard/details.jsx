import React from 'react';
import ContentBlock from './content_block';
import TextEditor from '../../helper_components/text_editor';

const Details = (props) => {
    return (  
        <div className="details">
            <ContentBlock imgSrc={window.textIcon} heading="Main Event Image" caption="This is the first image attendees will see at the top of your listing. Use a high quality image: 2160x1080px (2:1 ratio)." >
                {/* <img className="details-image" src={window.photoBalloons}/> */}
            </ContentBlock>
            <ContentBlock heading="Description" caption="Add more details to your event like your schedule, sponsors, or featured guests." >
                <TextEditor />
            </ContentBlock>
        </div>
    );
}
 
export default Details;