import React from 'react'
import { Col, Row } from 'antd';
function GridCards(props) {

    if (props.landingPage) {
        return (
            <Col lg={6} md={8} xs={24}>
                <div style={{ position: 'relative' }}>
                    <a href={`/movie/${props.movieId}`}>
                        <img style={{ width: '100%', height: '320px' }} src={props.image} alt={props.movieName} />
                    </a>
                </div>
            </Col>
        )
    } else {
        console.log('detailpage');
        return (
            <Col lg={6} md={8} xs={24}>
                <div style={{ position: 'relative', border: '5px solid rgba(var(--lightGrey), 1)', borderRadius: 'var(--imageBorderRadius)'}}>
                        <img style={{ width: '100%', height: '320px' }} src={props.image} alt={props.crewName} />
                </div>
            </Col>

        );
    }

}
export default React.memo(GridCards);
