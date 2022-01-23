import { Body, Controller, Delete, Get, Logger, Param, Patch, Post } from '@nestjs/common';
import { CreateAdminDto } from './createadmin-dto.interface';
import { AdminService } from './admin.service';
import { ValidateAdminDTO } from './admin.dto';

const logger = new Logger();
@Controller('admin')
export class AdminsController {
    constructor(
        private readonly adminService: AdminService,
    ) { }
    
    @Post('/signup')
    async CreateAdmin(@Body() createAdminDto: CreateAdminDto) {
        logger.log({ "DTO_1": createAdminDto });
        return await this.adminService.CreateAdmin(createAdminDto);
    }

    @Post('login')
    async ValidateAdmin(@Body() validateAdminDto: ValidateAdminDTO) {
        return await this.adminService.ValidateAdmin(validateAdminDto);
    }

    @Get()
    async GetAdminById(@Param() id: string) {
        return await this.adminService.getAdminById(id);
    }

    @Patch()
    async UpdateAdmin(@Param() id: string, @Body() createAdminDto: CreateAdminDto) {
        return this.adminService.UpdateAdmin(id, createAdminDto);
    }

    @Delete()
    async DeleteAdmin(@Param() id: string) {
        return this.adminService.DeleteAdmin(id);
    }

}