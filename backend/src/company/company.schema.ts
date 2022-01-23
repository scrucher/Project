import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CompanyDocument = Document & Company;
@Schema({timestamps: true, autoIndex: true})
export class Company {
    @Prop()
    name: string;
    @Prop()
    email: string;
    @Prop()
    address_1: string;
    @Prop()
    address_2: string;
    @Prop()
    start_date:string;
    @Prop()
    fiscal_date: string;
    @Prop()
    phone: number;
    @Prop()
    description: string;
}
 export const CompanySchema = SchemaFactory.createForClass(Company)
