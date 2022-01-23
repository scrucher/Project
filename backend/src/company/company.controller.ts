import { Body, Controller, Delete, Get, Logger, Param, Patch, Post } from '@nestjs/common';
import { CreateCompanyDto } from './createcompany-dto.interface';
import { CompanyService } from './company.service';

const logger = new Logger();
@Controller('company')
export class CompanysController {
    constructor(
        private readonly userService: CompanyService,
    ) { }
    
    @Post('/create')
    async CreateCompany(@Body() createCompanyDto: CreateCompanyDto) {
        logger.log({ "DTO_1": createCompanyDto });
        return await this.userService.CreateCompany(createCompanyDto);
    }


    @Get()
    async GetCompanies(@Param() id: string) {
        return await this.userService.getAllCompanyies();
    }

    @Patch()
    async UpdateCompany(@Param() id: string, @Body() createStudenDto: CreateCompanyDto) {
        return this.userService.UpdateCompany(id, createStudenDto);
    }

    @Delete()
    async DeleteCompany(@Param() id: string) {
        return this.userService.DeleteCompany(id);
    }

}