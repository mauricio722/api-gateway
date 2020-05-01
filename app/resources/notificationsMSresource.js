const notificationMSresource = module.exports;
const HTTPclient = require('../utils/HTTPClient');

const { MICROSERVICE_URL = 'http://localhost:4001' } = process.env;

const BASE_URL = `${MICROSERVICE_URL}/api/notification-ms`;

notificationMSresource.sendNotification = (body) => HTTPclient.post(`${BASE_URL}/send`, body);

notificationMSresource.registerDevice = (body) => HTTPclient.post(`${BASE_URL}/registerTokenDevice`, body);

notificationMSresource.updateTokendevice = (body, id) => HTTPclient.put(`${BASE_URL}/updateToken/${id}`, body);

notificationMSresource.getToken = (id) => HTTPclient.get(`${BASE_URL}/getToken/${id}`);

notificationMSresource.getDevices = () => HTTPclient.get(`${BASE_URL}/getDevices`);
