import { Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCompanyDto } from './createcompany-dto.interface';
import { CompanyDocument } from './company.schema';

const logger = new Logger();


@Injectable()
export class CompanyService {
    constructor(
        @InjectModel('Company') private readonly CompanyModel: Model<CompanyDocument>
    ) {}


    async CreateCompany(createComlpanyDto: CreateCompanyDto) {
        const {
            name,
            email,
            phone,
            address_1,
            address_2,
            description, 
            start_date,
            fiscal_date,
        } = createComlpanyDto;
        const company = new this.CompanyModel();
        company.name = name;
        company.email = email;
        company.phone = phone;
        company.address_1 = address_1;
        company.address_2 = address_2;
        company.description = description;
        company.start_date = start_date;
        company.fiscal_date= fiscal_date;
        logger.log({
            "DTO": createComlpanyDto,
        })

        var saved;
        try {
            saved = await this.CompanyModel.create(company);
            
        } catch (err) {
            throw new InternalServerErrorException("Internal Server Error")
        }
        logger.log(saved)
        return ({"msg": "Company Created Successfully"});

    }
   

    async UpdateCompany(id: string, createComlpanyDto: CreateCompanyDto) {
        let updated;
        try {
            updated = await this.CompanyModel.updateOne({_id: id}, createComlpanyDto)
        } catch (err) {
            throw new InternalServerErrorException('Internal Server Error');
        }
    }

    async DeleteCompany(id: string) {
        try {
            await this.CompanyModel.deleteOne({_id: id});
        } catch (err) {
            throw new InternalServerErrorException('Internal Server Error');
        }
    }

    async getCompanyById(id: string) {
        let found;
        try {
            found = await this.CompanyModel.findOne({ _id: id });
        } catch (err) {
            throw new InternalServerErrorException('Internal Server Error');
        }
    }
    async getAllCompanyies() {
        let found;
        try {
            found = await this.CompanyModel.find();
        } catch (err) {
            throw new InternalServerErrorException('Internal Server Error');
        }
        return found;
    }

}
