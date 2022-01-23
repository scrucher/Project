import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanysController } from './company.controller';
import { Company, CompanySchema } from './company.schema';
import { CompanyService } from './company.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Company.name, schema: CompanySchema }])
    ],
    providers: [CompanyService],
    controllers: [CompanysController]
})
export class CompanyModule { }

