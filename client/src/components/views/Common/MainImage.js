import React from 'react'

function MainImage(props) {

    let style = {
        //background: `linear-gradient(to bottom, rgba(0,0,0,0) 39%, rgba(0,0,0,0) 41%, rgba(0,0,0,65) 100%), url('${props.image}') , #1c1c1c`, 
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 39%, rgba(0,0,0,0) 41%, rgba(0,0,0,65) 100%) , url('${props.image}')`,
        backgroundColor: '#ffffff',
        backgroundPosition: 'center',
        backgroundSize: '76%, contain',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '650px',
        position: 'relative'
        //
    };

    return (
        <>
            <div style={style}>
                <div>
                    <div style={{ position: 'absolute', maxWidth: '500px', bottom: '3rem', marginLeft: '18rem' }}>
                        <h2 style={{ color: 'white' }}>{props.title}</h2>
                        <p style={{ color: 'white', fontSize: '1rem' }}>{props.overview}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(MainImage); 
