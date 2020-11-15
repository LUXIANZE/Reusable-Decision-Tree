export default function requestPreprocessor(params) {
    params = JSON.stringify(params); //@LUXIANZE: This is added when client did not stringify the request, should be removed in production
    return JSON.parse(params);
};
