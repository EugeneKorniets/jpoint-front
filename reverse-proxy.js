const express = require('express')
const httpProxy = require('http-proxy')

const APP_PORT = 3000
const PROXY_PORT = 80
const PROXY_MESSAGE = `Proxy server has been started on http://localhost:${PROXY_PORT}`

const restApiService = 'http://localhost:8080/'
const clientApplication = `http://localhost:${APP_PORT}/`

const proxy = httpProxy.createProxyServer()

const proxyServer = express()
proxyServer.all('/api/*', (req, res) => {
  req.url = req.url.replace('api/', '')
  // eslint-disable-next-line no-console
  console.info(`proxying to REST API ENDPOINT: ${req.url}, USER-AGENT: ${req.get('user-agent')}`)
  proxy.web(req, res, {
    target: restApiService
  })
})

proxyServer.all('/*', (req, res) => {
  // eslint-disable-next-line no-console
  console.info(`proxying to FRONTEND: ${req.url}, USER-AGENT: ${req.get('user-agent')}`)
  proxy.web(req, res, {
    target: clientApplication
  })
})

// eslint-disable-next-line no-console
proxy.on('error', (err) => console.error(err))

// eslint-disable-next-line no-console
proxyServer.listen(PROXY_PORT, () => console.info(PROXY_MESSAGE))
