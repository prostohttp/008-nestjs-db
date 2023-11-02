import { Module } from "@nestjs/common";
import { BooksController } from "./books.controller";
import { BooksService } from "./books.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Book, BookSchema } from "./schhemas/book.schhema";

@Module({
  controllers: [BooksController],
  providers: [BooksService],
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
})
export class BooksModule {}
