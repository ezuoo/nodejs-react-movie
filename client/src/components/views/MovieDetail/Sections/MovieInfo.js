import React from 'react'
import {Descriptions, Badge} from 'antd';
function MovieInfo(props) {
    return (
       
        <Descriptions title="Movie Information" bordered>
            <Descriptions.Item label="Title">{props.movie.original_title}</Descriptions.Item>
            <Descriptions.Item label="release date">{props.movie.release_date}</Descriptions.Item>
            <Descriptions.Item label="revenue">{props.movie.revenue}</Descriptions.Item>
            <Descriptions.Item label="runtime">{props.movie.runtime}</Descriptions.Item>
            <Descriptions.Item label="vote average" span={2}>
                {props.movie.vote_average}
            </Descriptions.Item>
            <Descriptions.Item label="vote count">{props.movie.vote_count}</Descriptions.Item>
            <Descriptions.Item label="popularity">{props.movie.popularity}</Descriptions.Item>
            { props.movie.genres && 
                <Descriptions.Item label="genres">{props.movie.genres[0].name}</Descriptions.Item>
            }
            <Descriptions.Item label="Status" span={3}>
                <Badge status="processing" text={props.movie.status} />
            </Descriptions.Item>
        </Descriptions>
    
    );
}

export default React.memo(MovieInfo)
