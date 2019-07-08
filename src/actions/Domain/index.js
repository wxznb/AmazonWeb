import {
    GETAMAZONDOMAINS
} from "@/actions/type.js";
import http from "@/api/request";

const amazonDomainState = data => ({
    type: GETAMAZONDOMAINS,
    data
});

export const getAmazonDomains = () => dispatch => {
    http.get("http://127.0.0.1:3000/amazonArea")
        .then(function (responce) {
        // console.log(responce);
        if ( responce.code === 0 ) {
            dispatch(amazonDomainState(responce.data));
        }
    }, function (error) {
        console.log(error);
    });
};
