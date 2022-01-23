import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = Document & User;
@Schema({timestamps: true, autoIndex: true})
export class User {
    @Prop()
    full_name: string;
    @Prop()
    email: string;
    @Prop()
    salt: string;
    @Prop()
    password: string;
    @Prop({
        enum: ['consultant', 'manager']
    })
    role: string;
    
}
 export const UserSchema = SchemaFactory.createForClass(User)
