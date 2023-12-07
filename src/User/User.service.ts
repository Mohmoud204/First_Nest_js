import { Injectable } from '@nestjs/common';
@Injectable()
export class Userservice {
  getHello(): string {
    return "hello"
  }
}