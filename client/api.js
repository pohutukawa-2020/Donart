import request from 'superagent'

const rootUrl = '/api/v1/donart'

export function getArt () {
  return request.get(rootUrl).then((res) => {
    return res.body
  })
}

export function getOneArt (artId) {
  return request.get(rootUrl + '/art/' + artId).then((res) => {
    return res.body
  })
}

export function getUsers () {
  return request.get(`${rootUrl}/users`)
    .then(res => {
      console.log('USERS', res.body.users)
      return res.body.users
    })
}

export function saveArtwork (artwork) {
  return request.post(`${rootUrl}/new-artwork`)
    .send(artwork)
    .then(response => {
      console.log('API result: ', response.req)
      // return result.req.data
    })
}
