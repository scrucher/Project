import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { ExtractJwt } from "passport-jwt";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { SignInPayload } from "./admin.payload";
import { AdminDocument } from "./admin.schema";



@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(
        @InjectModel('Admin') private readonly adminModel: Model<AdminDocument>,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secret: 'topsecret51',
        });
    }

    async validate(payload: SignInPayload) {
        const { username } = payload;
        const user = await this.adminModel.findOne({username: username});
        if (!username) {
            throw new UnauthorizedException(
                'Something Went Wrong, Please Try Again'
            );
        };
        return user;
    }
}