import React from 'react';
import Photo from './Photo';

//... below gives each photo access to the photo information in the store


//key is used in react and cant access it once we're actually in the photo
// cant do this.props.key so we have a necessary redundancy, post=post passes downt specific 
// information about that post
const PhotoGrid = React.createClass({
    render() {
        return (
            <div className="photo-grid">
                {this.props.posts.map((post, i) => 
                <Photo {...this.props} key={i} i={i} post={post} />)}
            </div>
        )
    }
});
export default PhotoGrid;