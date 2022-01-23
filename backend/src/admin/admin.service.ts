import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAdminDto } from './createadmin-dto.interface';
import { AdminDocument } from './admin.schema';
import * as bcrypt from 'bcrypt';
import { ValidateAdminDTO } from './admin.dto';
import { JwtService } from '@nestjs/jwt';

const logger = new Logger();

@Injectable()
export class AdminService {
  constructor(
    @InjectModel('Admin') private readonly AdminModel: Model<AdminDocument>,
    private readonly jwtService: JwtService,
  ) {}

  async CreateAdmin(createUserDto: CreateAdminDto) {
    const { full_name, email, password, role } = createUserDto;
    const admin = new this.AdminModel();
    admin.full_name = full_name;
    admin.email = email;
    const salt = await bcrypt.genSaltSync(10);
    admin.salt = salt;
    admin.password = await bcrypt.hashSync(password, admin.salt);
    admin.role = role;
    logger.log({
      DTO: createUserDto,
    });

    try {
      const saved = await this.AdminModel.create(admin);
      const token = this.jwtService.sign(admin.email);
      return {
        msg: 'User Created Successfully',
        access_token: token,
      };
    } catch (err) {
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
  async ValidateAdmin(validateAdminDto: ValidateAdminDTO) {
    const { username, password } = validateAdminDto;
    logger.log(validateAdminDto);
    let found;
    try {
      found = await this.AdminModel.findOne({ username: username });
    } catch (err) {
      throw new NotFoundException('Account Do Not Exist');
    }
    logger.log(found);
    const pwd = bcrypt.hashSync(password, found.salt);
    let token;
    if (found && found.password === pwd) {
      token = this.jwtService.sign(found.username);
      logger.log(token);
    }
    return { access_token: token };
  }

  async UpdateAdmin(id: string, createUserDto: CreateAdminDto) {
    let updated;
    try {
      updated = await this.AdminModel.updateOne({ _id: id }, createUserDto);
    } catch (err) {
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  async DeleteAdmin(id: string) {
    try {
      await this.AdminModel.deleteOne({ _id: id });
    } catch (err) {
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  async getAdminById(id: string) {
    let found;
    try {
      found = await this.AdminModel.findOne({ _id: id });
    } catch (err) {
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
}
