import React, { Component } from 'react';
import Anime from 'react-anime';

import ThemedCard from '../../containers/ThemedCard.jsx';


export default (props) =>  {
    return (
          <ThemedCard
            midSection={(
                <div>
                    <Anime
                       easing="linear"
                       duration={1500}
                       translateY={100}
                       opacity={[0, 1]}>
                        <h3>Thank You</h3>
                    </Anime>
                    <Anime
                        easing="linear"
                        delay={1500}
                        duration={1500}
                        color='rgb(137, 183, 238)'
                        translateY={100}
                        opacity={[0, 1]}>
                        <h6>We will be in touch shortly</h6>
                    </Anime>
                </div>
            )}
         />
    );
}
