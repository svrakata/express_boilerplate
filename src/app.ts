import { createExpressServer } from "routing-controllers";

createExpressServer({
    controllers: [__dirname + "/api/controllers/*.ts"]
}).listen(3000);