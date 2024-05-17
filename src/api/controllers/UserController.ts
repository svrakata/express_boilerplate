import "reflect-metadata";

import { Controller, Get, JsonController } from "routing-controllers";


@JsonController()
export class UserController {
    @Get("/users")
    getAll() {
        return "This action returns all users";
    }
}
