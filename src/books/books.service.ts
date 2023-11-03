import { HttpException, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Book } from "./schhemas/book.schhema";
import { CreateBookDto } from "./dto/create.book.dto";
import { RequestType } from "./entities/requestType";

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async create(createBookDto: CreateBookDto): Promise<Book | RequestType> {
    try {
      const createdBook = new this.bookModel(createBookDto);
      if (createdBook) {
        return createdBook.save();
      } else {
        return {
          error: "not created",
        };
      }
    } catch (error: any) {
      throw new HttpException(error.message, 500);
    }
  }

  async getAll(): Promise<Book[]> {
    try {
      return this.bookModel.find().exec();
    } catch (error) {
      throw new HttpException("Ошибка сервера", 500);
    }
  }

  async delete(id: string): Promise<RequestType> {
    try {
      const deletedBook = await this.bookModel.findOneAndDelete({ id: id });
      if (deletedBook) {
        return {
          success: true,
        };
      } else {
        return {
          error: "not found",
        };
      }
    } catch (error: any) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(
    id: string,
    updatedFields: Partial<CreateBookDto>,
  ): Promise<Book | RequestType> {
    try {
      const foundedBook = await this.bookModel.findOne({ id: id }).exec();
      if (foundedBook) {
        return this.bookModel
          .findOneAndUpdate({ id: id }, updatedFields, {
            new: true,
          })
          .exec();
      } else {
        return {
          error: "not found",
        };
      }
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
