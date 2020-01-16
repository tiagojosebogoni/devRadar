const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

class SearchDevsController{

  async index(request, response){
    const { latitude, longitude, techs, } = request.query

    const techsArray = parseStringAsArray(techs)

    try{

      const devs = await Dev.find({
        techs: {
          $in: techsArray
        },
        location: {
          $near: {
            $geometry: {
              type: "Point",
              coordinates: [ longitude, latitude ]
            },
            $maxDistance: 30000
          }
       }
      })

      return response.json(devs)
    }catch(e){
      return response.status(401).send("error " + e )
    }
  }
}

module.exports = new SearchDevsController();
