import OrgModel from "../models/Organization.js";

class OrgRepository {

    //Create new organization
    async createOrg(body) {
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

    //update an organization using id
    async updateOrg(id, body) {
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

    //get all organizations
    async getAllOrgs() {
        var response = {
            "status" : 500
        };
        try {
            const allOrgs = await OrgModel.find();
            response.status = 200;
            response.body = allOrgs;
            return response;
        } catch (error) {
            response.body = error;
            return response;
        }
    }

    //get organization by id
    async getOrgById(id) {
        var response = {
            "status" : 500
        };
        try {
            const org = await OrgModel.findById(id);
            response.status = 200;
            response.body = org;
            return response;
        } catch (error) {
            response.body = error;
            return response;
        }
    }

    //delete organization by id
    async deleteOrgById(id) {
        var response = {
            "status" : 500
        };
        try {
            const org = await OrgModel.findByIdAndDelete(id);
            response.status = 200;
            response.body = org;
            return response;
        } catch (error) {
            response.body = error;
            return response;
        }
    }

}

var orgRepo;
if(typeof orgRepo === 'undefined') {
    orgRepo = new OrgRepository();
}
export default orgRepo;