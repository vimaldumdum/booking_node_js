import OrgModel from "../models/Organization.js";

class OrgRepository {

    async createHotel(body) {
        const newOrg = new OrgModel(body);
        var response = {
            "status" : 500
        };
        try {
            const savedOrg = await newOrg.save();
            response['status'] = 200;
            response['body'] = savedOrg;
            return response;
        } catch(error) {
            response['body'] = error;
            return response;
        }
    }

    async updateHotel(id, body) {
        var response = {
            "status" : 500
        };
        try {
            const updatedOrg = await OrgModel.findByIdAndUpdate(
                id,
                {$set: body},
                {new: true}
            );
            response['status'] = 200;
            response['body'] = updatedOrg;
            return response;
        } catch(error) {
            response['body'] = error;
            return response;
        }
    }


}

var orgRepo;
if(typeof orgRepo === 'undefined') {
    orgRepo = new OrgRepository();
}
export default orgRepo;