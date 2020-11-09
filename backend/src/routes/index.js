import { Router } from 'express';
import axios from 'axios';
import FormatDataOfAPI from '../services/FormatDataOfAPI.js';

const routes = Router();

routes.get('/menu/:restaurantCode', async (request, response) => {
  const { restaurantCode } = request.params;

  const responseAPI = await axios.get(
    `https://wsloja.ifood.com.br/ifood-ws-v3/restaurants/${restaurantCode}/menu?latitude=-30.0253397&longitude=-51.1967082&scheduling_time=1603467600000&x-ifood-session-id=b22fbbed-21a6-454d-a521-d1dc68bbbcd4&secret_key=9ef4fb4f-7a1d-4e0d-a9b1-9b82873297d8&account_id=26e25614-6e13-4c77-8761-2ebfc97554e0&access_key=69f181d5-0046-4221-b7b2-deef62bd60d5`,
  );

  if (responseAPI.data.code === '100') {
    return response.status(400).json({ message: responseAPI.data.message });
  }

  const formatData = new FormatDataOfAPI();
  const categories = formatData.execute(responseAPI.data);

  return response.json({ categories });
});

export default routes;
