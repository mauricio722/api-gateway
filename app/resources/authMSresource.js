const authMSresource = module.exports;
const HTTPclient = require('../utils/HTTPClient');

const { MICROSERVICE_URL = 'http://localhost:3002' } = process.env;

const BASE_URL = `${MICROSERVICE_URL}/api/user-ms`;


authMSresource.create = (body) => HTTPclient.post(`${BASE_URL}/create`, body);

authMSresource.login = (body) => HTTPclient.post(`${BASE_URL}/login`, body);

authMSresource.update = (id, body) => HTTPclient.put(`${BASE_URL}/update/${id}`, body);

authMSresource.changePassword = (email, body) => HTTPclient.put(`${BASE_URL}/changepassword/${email}`, body);

authMSresource.getUser = (id) => HTTPclient.get(`${BASE_URL}/${id}`);

authMSresource.recoverPass = (email) => HTTPclient.put(`${BASE_URL}/recoverPass/${email}`);

authMSresource.getUserByEmail = (email) => HTTPclient.get(`${BASE_URL}/user/${email}`);
