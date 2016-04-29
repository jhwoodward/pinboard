import express from 'express';
import bodyParser from 'body-parser';
import apiRoutes from './api/routes';
import headers from './headers';
import config from './server.config';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(`${__dirname}/../client`));
app.use(headers);
app.use(config.host.root, apiRoutes);

app.listen(config.host.port);
console.log(`Listening on port ${config.host.port}`);
