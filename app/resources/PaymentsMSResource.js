const PaymentsMSResource = module.exports;
const HTTPClient = require('../utils/HTTPClient');

const { MICROSERVICE_URL = 'http://localhost:5000' } = process.env;

const BASE_URL = `${MICROSERVICE_URL}/api/payment-ms`;


PaymentsMSResource.create = (payment) => HTTPClient.post(`${BASE_URL}/payment`, payment);

PaymentsMSResource.success = (uri) => HTTPClient.get(uri);

PaymentsMSResource.payout = (payout) => HTTPClient.post(`${BASE_URL}/payout`, payout);
