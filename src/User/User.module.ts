import { Module } from '@nestjs/common';
import { UserController } from "./User.Controller";
import { Userservice} from "./User.service";
@Module({
  imports: [],
  controllers: [UserController],
  providers: [Userservice],
})
export class UserModule { }
