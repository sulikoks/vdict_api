import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose"

export type UserDocument = User & Document

@Schema()
export class User {
    @Prop()
    nickName: string

    @Prop()
    password: string

    @Prop()
    email: string
}

export const UserSchema = SchemaFactory.createForClass(User)