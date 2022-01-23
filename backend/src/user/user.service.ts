import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './createuser-dto.interface';
import { UserDocument } from './user.schema';
import * as bcrypt from 'bcrypt';
import { ValidateUserDTO } from './validate-user.dto';
import { JwtService } from '@nestjs/jwt';

const logger = new Logger();

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly UserModel: Model<UserDocument>,
    private readonly jwtService: JwtService,
  ) {}

  async CreateUser(createUserDto: CreateUserDto) {
    const { full_name, email, password } = createUserDto;
    const user = new this.UserModel();
    user.full_name = full_name;
    user.email = email;
    const salt = await bcrypt.genSaltSync(10);
    user.salt = salt;
    user.password = await bcrypt.hashSync(password, user.salt);
    logger.log({
      DTO: createUserDto,
    });

    try {
      const saved = await this.UserModel.create(user);
      const token = await this.jwtService.sign(user.email);
      return {
        msg: 'User Created Successfully',
        access_token: token,
      };
    } catch (err) {
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
  async ValidateUser(validateUserDto: ValidateUserDTO) {
    const { username, password } = validateUserDto;
    logger.log(validateUserDto);
    let found;
    try {
      found = await this.UserModel.findOne({ username: username });
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

  async UpdateUser(id: string, createUserDto: CreateUserDto) {
    let updated;
    try {
      updated = await this.UserModel.updateOne({ _id: id }, createUserDto);
    } catch (err) {
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  async DeleteUser(id: string) {
    try {
      await this.UserModel.deleteOne({ _id: id });
    } catch (err) {
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  async getUserById(id: string) {
    let found;
    try {
      found = await this.UserModel.findOne({ _id: id });
    } catch (err) {
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
}
