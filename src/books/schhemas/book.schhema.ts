import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop()
  id: number;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop([String])
  authors: string[];

  @Prop()
  favorite: boolean;

  @Prop()
  filecover: string;

  @Prop()
  fileName: string;

  @Prop()
  originalNameFileCover: string;

  @Prop()
  originalNameFileName: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
