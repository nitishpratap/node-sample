/**
 * Created by Nitish Pratap Yadav
 * Date: 05/05/25
 * Time: 6:03 PM
 */

const helper = require('../helpers/index');
const {errorHandler} = require("../utils/errorCodes");
const respond = require('../service/middleware/respond');
const indexController = {
    index : async (req, res) => {
        try {
            const data = await helper.index(req);
            console.log("data is ::::",data)
            respond(res,data);
        }catch(err){
            console.log("error  ::::::", err);
            errorHandler('500',req);
        }
    },
}
module.exports = indexController