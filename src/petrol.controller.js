import { getPetrolData } from './petrol.service.js';
import _ from 'lodash';

export const historyList = async (req, res) => {
    try {
      const list = await getPetrolData();
      res.send({ code: 200, list, msg: "Success" });
    } catch (error) {
      console.log(error.message);
      res.send({ code: 500, msg: "Internal Server Error" });
    }
};