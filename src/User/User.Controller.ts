import { Controller, Get, Post, Param } from "@nestjs/common";
import { Userservice } from "./User.service";

@Controller()
export class UserController {
  constructor(private readonly Userserviceser: Userservice) { }
  @Get()
  getHello(): string {
    return this.Userserviceser.getHello();
  }
  @Get(":user")
  getHell(@Param("user") param: string): string {
    return param
  }
}