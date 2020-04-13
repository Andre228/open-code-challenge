import axios from 'axios';

export default class Rest {


  constructor() {
  }

  getAllData(url) {
     return axios.get(url)
        .then(response => response.data)
          .catch(error => console.error(error));
  }
}
