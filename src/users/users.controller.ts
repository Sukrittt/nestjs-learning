import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(@Query("role") role: "ENGINEER" | "INTERN") {
    return this.usersService.findAll(role);
  }

  @Get("interns")
  findAllInterns() {
    return this.usersService.findAll("INTERN");
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }

  @Post()
  create(
    @Body() user: { name: string; email: string; role: "ENGINEER" | "INTERN" },
  ) {
    return this.usersService.create(user);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body()
    user: { name?: string; email?: string; role?: "ENGINEER" | "INTERN" },
  ) {
    return this.usersService.update(+id, user);
  }

  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.usersService.delete(+id);
  }
}
