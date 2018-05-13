import axios from 'axios';

axios.defaults.xsrfCookieName = 'csfrtoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default axios;
