const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer({
  target: "https://random-d.uk",
  secure: false,
  changeOrigin: true,
});

proxy.on("proxyRes", function (proxyReq, req, res, options) {
  res.setHeader("Access-Control-Allow-Origin", "*");
});

proxy.listen(8000);