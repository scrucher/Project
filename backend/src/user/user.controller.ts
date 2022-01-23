import { Body, Controller, Delete, Get, Logger, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './createuser-dto.interface';
import { UserService } from './user.service';
import { ValidateUserDTO } from './validate-user.dto';

const logger = new Logger();
@Controller('user')
export class UsersController {
    constructor(
        private readonly userService: UserService,
    ) { }
    
    @Post('/signup')
    async CreateUser(@Body() createUserDto: CreateUserDto) {
        logger.log({ "DTO_1": createUserDto });
        return await this.userService.CreateUser(createUserDto);
    }

    @Post('login')
    async ValidateUser(@Body() validateUserDto: ValidateUserDTO) {
        return await this.userService.ValidateUser(validateUserDto);
    }

    @Get()
    async GetUserById(@Param() id: string) {
        return await this.userService.getUserById(id);
    }

    @Patch()
    async UpdateUser(@Param() id: string, @Body() createStudenDto: CreateUserDto) {
        return this.userService.UpdateUser(id, createStudenDto);
    }

    @Delete()
    async DeleteUser(@Param() id: string) {
        return this.userService.DeleteUser(id);
    }

}