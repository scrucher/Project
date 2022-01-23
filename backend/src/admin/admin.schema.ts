import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type AdminDocument = Document & Admin;
@Schema({timestamps: true, autoIndex: true})
export class Admin {
    @Prop()
    full_name: string;
    @Prop()
    email: string;
    @Prop()
    salt: string;
    @Prop()
    password: string;
    @Prop({
        enum: ['Consultant', 'Manager'],
        default: "Manager",
    })
    role: string;
    
}
 export const AdminSchema = SchemaFactory.createForClass(Admin)
