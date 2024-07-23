import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer CyY-rxTXJxBAXh-n6K4yO784kofFlmPDdfKSN3YcbKjjVSFLkSdG04hYEsnwuinZ7jML_a7h0yJl_z2IYI5bQPRd71ZdxSprJqzu-RwinRMYELcdSg30kXKznhKRZnYx'


    }
});