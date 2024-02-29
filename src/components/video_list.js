import React from 'react'
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.video.map ((video) => {
        return (
        <VideoListItem
            onVideoSelect = {props.onVideoSelect}
            key={video.etag} video = {video} />
        );
    });
    return (
        <ul className = "cold-md-4 list-group">
          {videoItems}  
        </ul>
    );
};
export default VideoList;