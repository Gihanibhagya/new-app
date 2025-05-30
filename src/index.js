const client = require('prom-client');


const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();


app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});
