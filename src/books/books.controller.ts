import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { BooksService } from "./books.service";
import { Book } from "./schemas/book.schhema";
import { CreateBookDto } from "./dto/create.book.dto";
import { RequestType } from "./entities/requestType";

@Controller("books")
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post("add")
  createBook(@Body() book: CreateBookDto): Promise<Book | RequestType> {
    return this.booksService.create(book);
  }

  @Get("all")
  async getAll(): Promise<Book[]> {
    return this.booksService.getAll();
  }

  @Delete("del/:id")
  async deleteBook(@Param("id") id: string): Promise<RequestType> {
    return this.booksService.delete(id);
  }

  @Put("update/:id")
  async updateBook(
    @Param("id") id: string,
    @Body() book: CreateBookDto,
  ): Promise<Book | RequestType> {
    return this.booksService.update(id, book);
  }
}
