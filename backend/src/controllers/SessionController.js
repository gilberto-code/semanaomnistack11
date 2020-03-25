const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const {id } = await request.body;
        
        const ong = await connection('ongs')
        .where('id', id)
        .select('*')
        .first();

        //console.log(ong);

        if(!ong){
            return response.status(400).json({error: 'No ONG found with this ID'});
        }

        return response.json(ong);
    }
}