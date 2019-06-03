// Authorization Grant with Authorization Code
// https://tools.ietf.org/html/rfc6749#section-1.3.1

const path = require('path')
const axios = require('axios')
const express = require('express')

const clientId = process.env.GITHUB_OAUTH_CLIENT_ID
const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.locals.authorizeUri = 'https://github.com/login/oauth/authorize'
  res.locals.clientId = clientId
  res.locals.redirectUri = 'http://localhost:3000/oauth/callback'
  // res.locals.scope = ['user', 'gist']
  res.locals.scope = []
  res.locals.state = Date.now()
  res.render('index')
})

app.get('/oauth/callback', (req, res) => {
  // The req.query object has the query params that
  // were sent to this route. We want the `code` param
  const { code } = req.query
  if (!code) return res.status(401).send('Bad request')

  // make a POST request to the Github authentication API,
  // with the clientId, clientSecret
  const url = `https://github.com/login/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`
  // and request token
  axios.post(url, null, {
    headers: {
      accept: 'application/json'
    }
  })
    .then(response => {
      console.log(response.data)
      // Once we get the response, extract the access token from
      // the response body
      const type = response.data.token_type
      const token = response.data.access_token

      return axios.get('https://api.github.com/user', {
        headers: {
          authorization: `${type} ${token}`,
          accept: 'application/json'
        }
      })
    })
    .then(response => {
      console.log(response.data)
      res.locals.user = response.data
      res.render('welcome')
    })
    .catch(err => {
      res.status(500).send(err)
    })
})

module.exports = app
