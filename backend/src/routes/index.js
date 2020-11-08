import { Router } from 'express';
import axios from 'axios';
import FormatDataOfAPI from '../services/FormatDataOfAPI.js';

const routes = Router();

routes.get('/menu', async (request, response) => {
  const {
    restaurantCode,
    latitude,
    longitude,
    scheduling_time,
    secret_key,
    account_id,
    access_key,
  } = request.body;

  const responseAPI = await axios.get(
    `https://wsloja.ifood.com.br/ifood-ws-v3/restaurants/${restaurantCode}/menu?latitude=${latitude}&longitude=${longitude}&scheduling_time=${scheduling_time}&x-ifood-session-id=b22fbbed-21a6-454d-a521-d1dc68bbbcd4&secret_key=${secret_key}&account_id=${account_id}&access_key=${access_key}`,
  );

  const formatData = new FormatDataOfAPI();
  const categories = formatData.execute(responseAPI.data);

  return response.json({ categories });
});

export default routes;
