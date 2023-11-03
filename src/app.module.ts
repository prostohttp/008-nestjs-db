import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import "dotenv/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BooksModule } from "./books/books.module";

@Module({
  imports: [BooksModule, MongooseModule.forRoot(process.env.MONGO_URL)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
