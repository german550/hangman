import React from 'react';
import './Background.scss';
import { render } from '@testing-library/react';

export default function Background(props){
    
        return(
            <div>
                <div class="sun"></div>
                <img class = "cactus" src = "https://www.freeiconspng.com/uploads/cactus-transparent-clipart-png-18.png"></img>
                <div class = "sand first">
                    <div class = "sand-inner"></div>
                </div>
                <div class = "sand">
                    <div class = "sand-inner"></div>
                </div>
                <div class = "sand middle">
                    <div class = "sand-inner"></div>
                </div>
                <img class = "bush" src="https://lh5.ggpht.com/SmI3FDZzhzV2uj9Of1MlbcdW5phOie9bzQ5TZ-YxfstqVwoeoxOku67F2n4kvdsX9U_y9Nb8D4JLcW1QJI_9EpM=s400"></img>
                <img class = "bush2" src="https://lh5.ggpht.com/SmI3FDZzhzV2uj9Of1MlbcdW5phOie9bzQ5TZ-YxfstqVwoeoxOku67F2n4kvdsX9U_y9Nb8D4JLcW1QJI_9EpM=s400"></img>
                <img class = "bush3" src="https://lh5.ggpht.com/SmI3FDZzhzV2uj9Of1MlbcdW5phOie9bzQ5TZ-YxfstqVwoeoxOku67F2n4kvdsX9U_y9Nb8D4JLcW1QJI_9EpM=s400"></img>
                <img class = "coyote" src="https://img.cartoongoodies.com/wp-content/uploads/2019/11/04221251/Wile-E.-Coyote-853x1024.png"></img>
            
            
                <div id="background-wrap">
                    <div class="x1">
                        <div class="cloud"></div>
                    </div>
                
                    <div class="x2">
                        <div class="cloud"></div>
                    </div>
                
                    <div class="x3">
                        <div class="cloud"></div>
                    </div>
                
                    <div class="x4">
                        <div class="cloud"></div>
                    </div>
                
                    <div class="x5">
                        <div class="cloud"></div>
                    </div>
               
                    <div class="container">
	
                        <div class="bird-container bird-container--one">
                            <div class="bird bird--one"></div>
                        </div>
                        
                        <div class="bird-container bird-container--two">
                            <div class="bird bird--two"></div>
                        </div>
                        
                        <div class="bird-container bird-container--three">
                            <div class="bird bird--three"></div>
                        </div>
                        
                        <div class="bird-container bird-container--four">
                            <div class="bird bird--four"></div>
                        </div>
                        
                    </div>
                    </div>   
            </div>
            
            )
    
}