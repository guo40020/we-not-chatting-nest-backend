import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: "127.0.0.1",
  database: "WeNotChatting",
  username: "we_not_chatting",
  password: "WeNotChatting",
  charset: "utf8mb4"
}