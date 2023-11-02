import { Body, Controller, Get, Post } from "@nestjs/common";
import { BooksService } from "./books.service";
import { Book } from "./schhemas/book.schhema";
import { CreateBookDto } from "./dto/create.book.dto";

@Controller("books")
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post("add")
  createBook(@Body() book: CreateBookDto): Promise<Book> {
    return this.booksService.create(book);
  }

  @Get("all")
  async getAll(): Promise<Book[]> {
    return this.booksService.getAll();
  }
}
