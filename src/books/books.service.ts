import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Book } from "./schhemas/book.schhema";
import { CreateBookDto } from "./dto/create.book.dto";

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const createdBook = new this.bookModel(createBookDto);
    return createdBook.save();
  }

  async getAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }
  // getBooks() {}

  // getBook(id: number) {}
}
