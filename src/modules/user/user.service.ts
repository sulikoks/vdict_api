import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { RegNameDto } from "./dto/create-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User, UserDocument } from "./schema/user.schema";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    }

    async getall(): Promise<User[]> {
        return this.userModel.find().exec()
    }

    async getById(id: string):Promise <User> {
        return this.userModel.findById(id)
    }
    async create(userDto: RegNameDto): Promise<User> {
        const newUser = new this.userModel(userDto)
        return newUser.save()
    }

    // пока не корректно работает
    async login(loginUserDto: LoginUserDto) {
                
        const logUser = new this.userModel(loginUserDto)
        
        return logUser.save()
    }

     async remove(id:string): Promise<User> {
        return this.userModel.findByIdAndRemove(id)
    }

    async update(id:string, userDto: UpdateUserDto): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, userDto,{new: true})
    }
}