import * as error from '../constants/error.js'
import * as success from '../constants/success.js'

export default function Logger(title, content){
    let color = '';
    if(title){
        switch (title) {
            case error.GENERAL_ERROR:
                // RED color for error title
                color = '\x1b[31m%s\x1b[1m';
                break;
            case success.GENERAL_SUCCESS:
                // RED color for error title
                color = '\x1b[32m%s\x1b[1m';
                break;
        
            default:
                color = '\x1b[0m'
                break;
        }
        console.log(color, title);
    }
    if(content){
        color = '\x1b[0m';
        console.log(color, content);
    }
};