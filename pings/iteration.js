import axios from 'axios'

//const apiUrl = 'https://api.augment.market/login' POST LOGIN
//const apiUrl = 'https://api.augment.market/company?include=ALL'
for (let id = 127; id <= 638; id++) {
  const apiUrl = `https://api.augment.market/api/v1/company/${id}/pricing_model`

  const headers = {
    Accept: '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
    'Access-Control-Request-Headers': 'q-latch,session-token',
    'Access-Control-Request-Method': 'GET',
    Origin: 'https://app.augment.market',
    Referer: 'https://app.augment.market/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
    'q-latch': '4b9x4522o45u-ln1776q',
    'session-token': 'uf_pzwov1qxa9mfoUt26XTUTJgzJaUba_TPt3WChr5t0',
  }

  axios.interceptors.request.use(
    (config) => {
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  axios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  axios({
    method: 'options',
    url: apiUrl,
    headers: headers,
  })
    .then((response) => {
      return axios({
        method: 'GET',
        url: apiUrl,
        headers: headers,
      })
    })
    .then((response) => {
      if (response.data.pricing_model_summaries) {
        response.data.pricing_model_summaries.forEach((item) => {
          console.log(item.date, item.price)
        })
      } else {
        console.log('No data for id #', id)
      }
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}
// https://api.augment.market/api/v1/company/discord/news
// https://api.augment.market/api/v1/company/134/pricing_model
