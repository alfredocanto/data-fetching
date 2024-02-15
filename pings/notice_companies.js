import fetch from 'node-fetch'
import fs from 'fs'

async function fetchPage(afterCursor) {
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
        'cookie: _ga=GA1.1.544261938.1706827057; ajs_anonymous_id=2de623eb-db76-49a0-9f34-a176f747ada4; intercom-id-zrvq06g8=f211918b-b226-417c-a314-c4320eec7cb8; intercom-device-id-zrvq06g8=338c7ea6-2ef8-403e-bf9b-911f17c48f2f; ajs_user_id=053faed7-49f3-4fd7-964f-ce007c03f418; _stytch_jwt=eyJhbGciOiJSUzI1NiIsImtpZCI6Imp3ay1saXZlLWJmNzAwODgyLWQ3YTEtNGJhOS1iMGM0LTY0NTIwZTA3NjBjZiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsicHJvamVjdC1saXZlLWZmYjMwOTI5LTZjNjctNGU5Zi1hYWViLTY4YTVkNjAyNTRlZCJdLCJleHAiOjE3MDczMzI5MTksImh0dHBzOi8vc3R5dGNoLmNvbS9zZXNzaW9uIjp7ImlkIjoic2Vzc2lvbi1saXZlLWZiZGFkYzBkLTA4MjMtNGExYi1iNjhhLTEwYzc2NDZlMGUxOSIsInN0YXJ0ZWRfYXQiOiIyMDI0LTAyLTA1VDE1OjI0OjE1WiIsImxhc3RfYWNjZXNzZWRfYXQiOiIyMDI0LTAyLTA3VDE5OjAzOjM5WiIsImV4cGlyZXNfYXQiOiIyMDI0LTAzLTA4VDE5OjAzOjM5WiIsImF0dHJpYnV0ZXMiOnsidXNlcl9hZ2VudCI6IiIsImlwX2FkZHJlc3MiOiIifSwiYXV0aGVudGljYXRpb25fZmFjdG9ycyI6W3sidHlwZSI6Im9hdXRoIiwiZGVsaXZlcnlfbWV0aG9kIjoib2F1dGhfZ29vZ2xlIiwibGFzdF9hdXRoZW50aWNhdGVkX2F0IjoiMjAyNC0wMi0wNVQxNToyNDoxNVoiLCJnb29nbGVfb2F1dGhfZmFjdG9yIjp7ImlkIjoib2F1dGgtdXNlci1saXZlLTljOGQxYTgzLTcwZWQtNDkxNC05ZmVjLTdkYTZmMWM3OGUwOCIsInByb3ZpZGVyX3N1YmplY3QiOiIxMTIwMDAyMzk3MjUzMDc1MzAwMzQifX1dfSwiaWF0IjoxNzA3MzMyNjE5LCJpc3MiOiJzdHl0Y2guY29tL3Byb2plY3QtbGl2ZS1mZmIzMDkyOS02YzY3LTRlOWYtYWFlYi02OGE1ZDYwMjU0ZWQiLCJuYmYiOjE3MDczMzI2MTksInN1YiI6InVzZXItbGl2ZS03NmI0MGY2YS01YjU5LTRiOWItYmQzMS0yNzFhNjk4MWI5MmUifQ.haaBKphnMAMXAl7etMTUFAYaH350dr_G_miB4lxgEO_JSkou5rR15uUlQOcbSJ8kHYPAwfoKhIx1d-uS9g6JnDvV25lf7BFuGBdeDYtN-sk-qAWInLqv2U7TxjszbacVdKoX7Wj8HDADZRi2eyxILHvhwVVfnhv46QO1FliJQ8-qYXejLlLNN7T0k5EqIRpsg9OeF8v3JvJaUTzr0P03_ZG6B1EMQt4-8CKIAN_B41OWPj-NXakrBDbpoLDNP5mKoehz-euAr0sc93PtXQQA5kxev53q4TKSoOY6d1WKq2U10cDO35wgldeC498gWTjMTXR2ljllr48mX_87MfyU2w; intercom-session-zrvq06g8=RXIwWVFtcEx3WTFQU0h2Y1NYOHYzcklrRFJnRjNGTVE5TE5XTWRZYWpvTE5hWWlpMTJCT1B1MVBSbTJqRmNiNS0tNkIzZkFyRjhBQUZnalJzdVlnMjBZQT09--6c9089ab19978bb14e0a62a73299dea20da546af; cf_clearance=pOtm5w9UakO4nw6L889JNr29T4dzE2HR6W4QCT_cBOg-1707332754-1-AU1s+JU9+hJwXUVVOIT7E9RkinTy/WrAcsC+ikAzb9inFdaUnboKAYkRSTpgOuup5Qy4s4Nl7KLTeNeRACpVC04=; _ga_MR3FZM9JM0=GS1.1.1707327316.14.1.1707332754.49.0.0; _notice_session=E6PECb%2FvaijNLlDZ7o8yyDblZsWoOh8k6QjYTSLc5eLocu7rx%2FEx31%2FrU1FHTJEIgaDHmZqU%2FRq9e%2FdM2Weh%2BbuOu5O3gE5pQ7B2p8MacTWGaQwSXoE9yK4D6DVbSCImQmr%2BsxiqvUT0sdF%2F2%2B5hl3W3AOT93ZvT4Ff5VJW0XE7CBJsmGmZWHgptiEXyLMOjrY9JBrVm5yo1Cpdgtj4QxmfmiLnHWwt8zxRh1oo%2FIJ8l5Q3We5kVyZwcOQsmYOy4rmYdym9UXMmTYgH0Wj6QGGxviudy4KbTvHTsA9d4LETklar9nf0QYXGWqYyYMKbSR2QN8i6Os1FC8tc%3D--VMwIvgRGfsvW72yx--0%2FybT6hJn87BEm1r1mu6Nw%3D%3D',
        'origin: https://notice.co',
        'referer: https://notice.co/',
        'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
        'sec-ch-ua-mobile: ?0',
        'sec-ch-ua-platform: "Windows"',
        'sec-fetch-dest: empty',
        'sec-fetch-mode: cors',
        'sec-fetch-site: same-site',
        'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
        'x-csrf-token: 1FXPr3WvTTrwe4W8mZ7KBDQpkmgoV52BZWnl1Go81gZnoylHw3_UhrcOuVHyZ6Yl3n8c3mLwLndzgPqMfNzd9g',
        'x-notice-client: web',
        'x-stytch-session-jwt: eyJhbGciOiJSUzI1NiIsImtpZCI6Imp3ay1saXZlLWJmNzAwODgyLWQ3YTEtNGJhOS1iMGM0LTY0NTIwZTA3NjBjZiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsicHJvamVjdC1saXZlLWZmYjMwOTI5LTZjNjctNGU5Zi1hYWViLTY4YTVkNjAyNTRlZCJdLCJleHAiOjE3MDczMzI5MTksImh0dHBzOi8vc3R5dGNoLmNvbS9zZXNzaW9uIjp7ImlkIjoic2Vzc2lvbi1saXZlLWZiZGFkYzBkLTA4MjMtNGExYi1iNjhhLTEwYzc2NDZlMGUxOSIsInN0YXJ0ZWRfYXQiOiIyMDI0LTAyLTA1VDE1OjI0OjE1WiIsImxhc3RfYWNjZXNzZWRfYXQiOiIyMDI0LTAyLTA3VDE5OjAzOjM5WiIsImV4cGlyZXNfYXQiOiIyMDI0LTAzLTA4VDE5OjAzOjM5WiIsImF0dHJpYnV0ZXMiOnsidXNlcl9hZ2VudCI6IiIsImlwX2FkZHJlc3MiOiIifSwiYXV0aGVudGljYXRpb25fZmFjdG9ycyI6W3sidHlwZSI6Im9hdXRoIiwiZGVsaXZlcnlfbWV0aG9kIjoib2F1dGhfZ29vZ2xlIiwibGFzdF9hdXRoZW50aWNhdGVkX2F0IjoiMjAyNC0wMi0wNVQxNToyNDoxNVoiLCJnb29nbGVfb2F1dGhfZmFjdG9yIjp7ImlkIjoib2F1dGgtdXNlci1saXZlLTljOGQxYTgzLTcwZWQtNDkxNC05ZmVjLTdkYTZmMWM3OGUwOCIsInByb3ZpZGVyX3N1YmplY3QiOiIxMTIwMDAyMzk3MjUzMDc1MzAwMzQifX1dfSwiaWF0IjoxNzA3MzMyNjE5LCJpc3MiOiJzdHl0Y2guY29tL3Byb2plY3QtbGl2ZS1mZmIzMDkyOS02YzY3LTRlOWYtYWFlYi02OGE1ZDYwMjU0ZWQiLCJuYmYiOjE3MDczMzI2MTksInN1YiI6InVzZXItbGl2ZS03NmI0MGY2YS01YjU5LTRiOWItYmQzMS0yNzFhNjk4MWI5MmUifQ.haaBKphnMAMXAl7etMTUFAYaH350dr_G_miB4lxgEO_JSkou5rR15uUlQOcbSJ8kHYPAwfoKhIx1d-uS9g6JnDvV25lf7BFuGBdeDYtN-sk-qAWInLqv2U7TxjszbacVdKoX7Wj8HDADZRi2eyxILHvhwVVfnhv46QO1FliJQ8-qYXejLlLNN7T0k5EqIRpsg9OeF8v3JvJaUTzr0P03_ZG6B1EMQt4-8CKIAN_B41OWPj-NXakrBDbpoLDNP5mKoehz-euAr0sc93PtXQQA5kxev53q4TKSoOY6d1WKq2U10cDO35wgldeC498gWTjMTXR2ljllr48mX_87MfyU2w',
      ],
      data: `{"operationName":"CompaniesList","variables":{"first":50, "after": "${afterCursor}","watchlist":null,"active":null,"priced":null,"orderBy":"valuation","orderDir":"desc"},"query":"fragment CompaniesListFragment on Company {\\n  id\\n  name\\n  permalinkName\\n  cloudinaryPublicId\\n  logoNeedsBorder\\n  stage\\n  exitedOn\\n  hasOpenBid\\n  hasOpenOffer\\n  institutionalVwap\\n  recentInstitutionalFilingDate\\n  totalHoldings\\n  lastRoundPrice\\n  lastRoundPriceCalculated\\n  lastRoundName\\n  lastRoundDate\\n  valuation\\n  lastRoundValuation\\n  priceStrength\\n  delayedPriceStrength\\n  outstandingShares\\n  waterfallAnalysisAvailable\\n  hasNoticePrices\\n  latestBestBidSnapshot {\\n    id\\n    date\\n    price\\n    __typename\\n  }\\n  latestBestOfferSnapshot {\\n    id\\n    date\\n    price\\n    __typename\\n  }\\n  delayedNoticePrice {\\n    id\\n    date\\n    price\\n    __typename\\n  }\\n  recentNoticePrices {\\n    id\\n    date\\n    price\\n    priceChangedAt\\n    __typename\\n  }\\n  __typename\\n}\\n\\nquery CompaniesList($orderBy: String, $orderDir: String, $first: Int, $after: String, $active: Int, $watchlist: Int, $priced: Int) {\\n  companiesList(\\n    orderBy: $orderBy\\n    orderDir: $orderDir\\n    first: $first\\n    after: $after\\n    active: $active\\n    watchlist: $watchlist\\n    priced: $priced\\n  ) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    edges {\\n      cursor\\n      node {\\n        ...CompaniesListFragment\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}`,
    }),
  })
  req
    .then((res) => res.json())
    .then((json) => {
      // Parse the JSON data
      let jsonData = JSON.parse(json.body)

      // Access the endCursor property
      let endCursor = jsonData.data.companiesList.pageInfo.endCursor

      // Parse and format the JSON data
      let formattedJson = JSON.stringify(JSON.parse(json.body), null, 2)

      // Append the formatted JSON data to the file
      fs.appendFile('output2.txt', formattedJson + '\n', (err) => {
        if (err) throw err
        console.log('Data appended to file')
        console.log('End cursor:', endCursor)
        fetchPage(endCursor)
      })
    })
}

fetchPage('MjAw')
