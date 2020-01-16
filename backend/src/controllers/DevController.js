const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require("../utils/parseStringAsArray");

class DevController{

  async index(req, res){
    const devs = await Dev.find()
    return res.json(devs)
  }

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      let response;

      try{
         response = await axios.get(`https://api.github.com/users/${github_username}`);
      }catch(e){
        return res.status(401).json({error: 'Usuário não encontrado.'})
      }

      const { name = login, avatar_url, bio } = response.data;

      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      };

      const techsArray = parseStringAsArray(techs);

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      });
    }

    console.log(dev)
    return res.json(dev);
  }
};

module.exports = new DevController();
