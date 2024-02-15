import fetch from 'node-fetch'

// get your subscription key at https://rapidapi.com/restyler/api/scrapeninja from "Code generator",
// copy&paste it to 'x-rapidapi-key' header below

let req = fetch('https://scrapeninja.p.rapidapi.com/scrape', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-rapidapi-host': 'scrapeninja.p.rapidapi.com',
    'x-rapidapi-key': '2429844b63msh0ff320810d047d6p1c22d2jsnca9de3ceddfa',
  },
  body: JSON.stringify({
    url: 'https://api.notice.co/graphql',
    method: 'POST',
    headers: [
      'authority: api.notice.co',
      'accept: */*',
      'accept-language: es-ES,es;q=0.9,en;q=0.8',
      'content-type: application/json',
      'cookie: _ga=GA1.1.544261938.1706827057; ajs_anonymous_id=2de623eb-db76-49a0-9f34-a176f747ada4; intercom-id-zrvq06g8=f211918b-b226-417c-a314-c4320eec7cb8; intercom-device-id-zrvq06g8=338c7ea6-2ef8-403e-bf9b-911f17c48f2f; ajs_user_id=053faed7-49f3-4fd7-964f-ce007c03f418; cf_clearance=nKFwY63zXoJzqQYXA2QbVGdytadriyfw.eqyQ57qMdE-1707500809-1-AUA2RPDvcS82qDTzEX1wG0VVSX4e5naQfNcQMaAfA0OKUfPkOXa9O7Vwyq3g3EWt12TMyAfMlQCwmWXlELRtQm0=; intercom-session-zrvq06g8=QVluaklDZXNraFEvc0dreG40bEliTThtWXV3QkYySWhxcjdzQ24yTjd2b1F3L3VCT3VsSXVpcGVobldDaVBkVC0tekpRbG1xME9qUmRQN0Z5ejVWVXdadz09--d49d7c1154d14d6e06944611579799fbdd864617; _stytch_jwt=eyJhbGciOiJSUzI1NiIsImtpZCI6Imp3ay1saXZlLWJmNzAwODgyLWQ3YTEtNGJhOS1iMGM0LTY0NTIwZTA3NjBjZiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsicHJvamVjdC1saXZlLWZmYjMwOTI5LTZjNjctNGU5Zi1hYWViLTY4YTVkNjAyNTRlZCJdLCJleHAiOjE3MDc1MDE3ODYsImh0dHBzOi8vc3R5dGNoLmNvbS9zZXNzaW9uIjp7ImlkIjoic2Vzc2lvbi1saXZlLWZiZGFkYzBkLTA4MjMtNGExYi1iNjhhLTEwYzc2NDZlMGUxOSIsInN0YXJ0ZWRfYXQiOiIyMDI0LTAyLTA1VDE1OjI0OjE1WiIsImxhc3RfYWNjZXNzZWRfYXQiOiIyMDI0LTAyLTA5VDE3OjU4OjA2WiIsImV4cGlyZXNfYXQiOiIyMDI0LTAzLTEwVDE3OjU4OjA2WiIsImF0dHJpYnV0ZXMiOnsidXNlcl9hZ2VudCI6IiIsImlwX2FkZHJlc3MiOiIifSwiYXV0aGVudGljYXRpb25fZmFjdG9ycyI6W3sidHlwZSI6Im9hdXRoIiwiZGVsaXZlcnlfbWV0aG9kIjoib2F1dGhfZ29vZ2xlIiwibGFzdF9hdXRoZW50aWNhdGVkX2F0IjoiMjAyNC0wMi0wNVQxNToyNDoxNVoiLCJnb29nbGVfb2F1dGhfZmFjdG9yIjp7ImlkIjoib2F1dGgtdXNlci1saXZlLTljOGQxYTgzLTcwZWQtNDkxNC05ZmVjLTdkYTZmMWM3OGUwOCIsInByb3ZpZGVyX3N1YmplY3QiOiIxMTIwMDAyMzk3MjUzMDc1MzAwMzQifX1dfSwiaWF0IjoxNzA3NTAxNDg2LCJpc3MiOiJzdHl0Y2guY29tL3Byb2plY3QtbGl2ZS1mZmIzMDkyOS02YzY3LTRlOWYtYWFlYi02OGE1ZDYwMjU0ZWQiLCJuYmYiOjE3MDc1MDE0ODYsInN1YiI6InVzZXItbGl2ZS03NmI0MGY2YS01YjU5LTRiOWItYmQzMS0yNzFhNjk4MWI5MmUifQ.QQhTbMcg1IQsxOlQDHS_n5fVlIKH_GOWU9q2CXHoziDIXFpc90xxZiqaS5X71evPA-slq98YuIwmAMv9AXhh3W5ORN5doLkdsUELLyQUDR9ByPqLtM4xaOjtmdck-XzSt5IqHeX8pKvpcmuXq7DmIWgGjsQYn56CS2aIoXgy3mDxA8nD5ZHt7Ps3ttzZVYGvCBuNHSISPbcVVKpkRl12qYdtWRDe2-CillKrYWDz4ufg5Q9y8YJpZagpRnSOlvNj7MyDtJW2yae-6H5nfziM3cFSDj8pKJEWiLbXSAugBM5KhH0tayUrGICc7ppQlkTm7hkEOa-KchaWGeRt1ppLHQ; _ga_MR3FZM9JM0=GS1.1.1707499932.18.1.1707501564.60.0.0; _notice_session=b22lF1puy5lkWcGPGXhK0hZDlHyDNRAOWomUhyeIFhWUhlxc9Pi%2Feo9fXotYAjuwmB0chmYBR%2B7Kwoa2lrI1%2BmafPiLho9LuxsQ7C6OKtVAw88%2B6w0xvJR8bUjNUN0IwWZaIp9iLVEqlHJQ%2BjvzFDJtlrKGhLGpoMZkV6ZU5lcAnzxTxCOQkLk3Z0KMKVmLSYLQ529jGLchdS%2FEdQA1so68HlsE0kkEGhG9NH6xpJtcLGWRwlslBRD%2FLaAGDEkUVJKI7PdIK217Eu%2Fx%2B%2BYWtDX5Ny9i5L6S0LlYtPR9bPRqYQIr0592ggrEntIczHwcT6GWS6ReFbbnDl8Q%3D--CM1WCHM%2FBJuPmTwl--1Tm43qCKyTlDuA4ARMII%2FA%3D%3D',
      'origin: https://notice.co',
      'referer: https://notice.co/',
      'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
      'sec-ch-ua-mobile: ?0',
      'sec-ch-ua-platform: "Windows"',
      'sec-fetch-dest: empty',
      'sec-fetch-mode: cors',
      'sec-fetch-site: same-site',
      'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
      'x-csrf-token: Q0_7Oqv7QNkextE6YihbwK58cGem4dBArzyEQqohrS5EPGHoN26YXrPdLplZY1UZc7A8A4pJKiBHeaIKO6-kGA',
      'x-notice-client: web',
      'x-stytch-session-jwt: eyJhbGciOiJSUzI1NiIsImtpZCI6Imp3ay1saXZlLWJmNzAwODgyLWQ3YTEtNGJhOS1iMGM0LTY0NTIwZTA3NjBjZiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsicHJvamVjdC1saXZlLWZmYjMwOTI5LTZjNjctNGU5Zi1hYWViLTY4YTVkNjAyNTRlZCJdLCJleHAiOjE3MDc1MDE3ODYsImh0dHBzOi8vc3R5dGNoLmNvbS9zZXNzaW9uIjp7ImlkIjoic2Vzc2lvbi1saXZlLWZiZGFkYzBkLTA4MjMtNGExYi1iNjhhLTEwYzc2NDZlMGUxOSIsInN0YXJ0ZWRfYXQiOiIyMDI0LTAyLTA1VDE1OjI0OjE1WiIsImxhc3RfYWNjZXNzZWRfYXQiOiIyMDI0LTAyLTA5VDE3OjU4OjA2WiIsImV4cGlyZXNfYXQiOiIyMDI0LTAzLTEwVDE3OjU4OjA2WiIsImF0dHJpYnV0ZXMiOnsidXNlcl9hZ2VudCI6IiIsImlwX2FkZHJlc3MiOiIifSwiYXV0aGVudGljYXRpb25fZmFjdG9ycyI6W3sidHlwZSI6Im9hdXRoIiwiZGVsaXZlcnlfbWV0aG9kIjoib2F1dGhfZ29vZ2xlIiwibGFzdF9hdXRoZW50aWNhdGVkX2F0IjoiMjAyNC0wMi0wNVQxNToyNDoxNVoiLCJnb29nbGVfb2F1dGhfZmFjdG9yIjp7ImlkIjoib2F1dGgtdXNlci1saXZlLTljOGQxYTgzLTcwZWQtNDkxNC05ZmVjLTdkYTZmMWM3OGUwOCIsInByb3ZpZGVyX3N1YmplY3QiOiIxMTIwMDAyMzk3MjUzMDc1MzAwMzQifX1dfSwiaWF0IjoxNzA3NTAxNDg2LCJpc3MiOiJzdHl0Y2guY29tL3Byb2plY3QtbGl2ZS1mZmIzMDkyOS02YzY3LTRlOWYtYWFlYi02OGE1ZDYwMjU0ZWQiLCJuYmYiOjE3MDc1MDE0ODYsInN1YiI6InVzZXItbGl2ZS03NmI0MGY2YS01YjU5LTRiOWItYmQzMS0yNzFhNjk4MWI5MmUifQ.QQhTbMcg1IQsxOlQDHS_n5fVlIKH_GOWU9q2CXHoziDIXFpc90xxZiqaS5X71evPA-slq98YuIwmAMv9AXhh3W5ORN5doLkdsUELLyQUDR9ByPqLtM4xaOjtmdck-XzSt5IqHeX8pKvpcmuXq7DmIWgGjsQYn56CS2aIoXgy3mDxA8nD5ZHt7Ps3ttzZVYGvCBuNHSISPbcVVKpkRl12qYdtWRDe2-CillKrYWDz4ufg5Q9y8YJpZagpRnSOlvNj7MyDtJW2yae-6H5nfziM3cFSDj8pKJEWiLbXSAugBM5KhH0tayUrGICc7ppQlkTm7hkEOa-KchaWGeRt1ppLHQ',
    ],
    data: '{"operationName":"PriceTimeline","variables":{"identifier":"spacex"},"query":"query PriceTimeline($identifier: String!, $startDate: String) {\\n  priceTimeline(identifier: $identifier, startDate: $startDate) {\\n    id\\n    prices {\\n      id\\n      date\\n      price\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
  }),
})
req.then((res) => res.json()).then((json) => console.log(json))
