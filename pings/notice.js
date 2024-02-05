import axios from 'axios'

const url = 'https://api.notice.co/graphql'

const cookies = {
  'intercom-session-zrvq06g8': '',
  'intercom-id-zrvq06g8': '13859b1c-5d8f-4934-a491-6abe1669c4e2	',
  'intercom-device-id-zrvq06g8': 'a2bada8a-7f58-446a-a033-1e0a28ffc5b7',
  cf_clearance:
    'mL1kwzH8ioEBIFmiI1C7rllXJ5Y.viPei_YoeIXv9Gs-1707146769-1-AUc9+dnW9OYiXJIW6Njr6aIFGagIPIMJ3vUXqWu68k0w1xYhQTiCDt2sUzXn9aF5IEUq2USyMA6f85uOcmlyriM=',
  _ga: 'GA1.1.107036228.1707146770',
  ajs_anonymous_id: '8c6eea48-4d12-46aa-b2f2-05d38dff7231',
  _notice_session:
    'vxH1Y6mGArCUkGi2V%2Fncj%2BMKKVpzObBI%2FmIlX4wlnrLnIbBeW4ywU7j4xGvfoCKDJ7pcRZcOdmB5wcfjri88vCMzr1WzzHYOrMJinWBY6h6xaPLNtpzR0V9fLpA1HHP5MdNdXQSMp8C%2Fc1E44QMt3IOo5pUI1QVH4znqhNTSawWEjbQ4fprwD6P%2FjBVTQqiebxtcoqgLW9xAIBFg52T7L9Oq3eV5jiXrk0pgoyycw2A%2FzQv03j6fmGSJwc%2BRVdMg73hvBLVTZYyYkAn1C72gw0d4dg0%2Fy%2BRSMxp%2FFYEolDGVFvMQc2UvIBWs0eikH0Vm3RWMSf8UJ2g1nGo%3D--HJQ1UI67iqVlBE38--DhfaRwToJ4bSigyhiOYkfg%3D%3D',
  _ga_MR3FZM9JM0: 'GS1.1.1707146770.1.1.1707146784.46.0.0',
}

const cookieString = Object.entries(cookies)
  .map(([key, value]) => `${key}=${value}`)
  .join('; ')

console.log(cookieString)
const headers = {
  Accept: '*/*',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'es-ES,es;q=0.9',
  'Content-Length': '321',
  'Content-Type': 'application/json',
  Cookie: cookieString,
  Origin: 'https://app.notice.co',
  Referer: 'https://app.notice.co/',
  'Sec-Ch-Ua':
    '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
  'Sec-Ch-Ua-Mobile': '?0',
  'Sec-Ch-Ua-Platform': '"Windows"',
  'Sec-Fetch-Dest': 'empty',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Site': 'same-site',
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
  'X-Csrf-Token':
    'z9DkAQuW5eZLhFkSx4mEImb4KX9VttHZKpfSM_stlqnfEudQpwA_HFuARDscvyhLp6TqnivIxmdcHDKqsbel5A',
  'X-Notice-Client': 'web',
  'apollographql-client-name': 'el',
  'X-Stytch-Session-Jwt': '',
}

const payload = {
  operationName: 'PriceTimeline',
  query:
    'query PriceTimeline($identifier: String!, $startDate: String) {\n  priceTimeline(identifier: $identifier, startDate: $startDate) {\n    id\n    prices {\n      id\n      date\n      price\n      __typename\n    }\n    __typename\n  }\n}\n',
  variables: {
    identifier: 'benchling',
  },
}

axios
  .post(url, payload, { headers })
  .then((response) => {
    console.log('Response:', response.data)
  })
  .catch((error) => {
    console.error('Error:', error)
  })
