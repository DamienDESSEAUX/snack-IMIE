import queryString from 'query-string'

const API_KEY = 'keyAMettre'

export const search = (payload) => ({
  url: `https://api.giphy.com/v1/gifs/search?${queryString.stringify({ ...payload, api_key: API_KEY})}`,
  method: 'GET',
  crossDomain: true,
  headers: {
    Accept: 'application/json',
  },
})