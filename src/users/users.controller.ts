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

@Controller("users")
export class UsersController {
  @Get()
  findAll(@Query("role") role: "ADMIN" | "USER") {
    console.log(role);

    return [];
  }

  @Get("interns")
  findAllInterns() {
    return "interns endpoint";
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return { id };
  }

  @Post()
  create(@Body() user: { name: string }) {
    return user;
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() user: { name: string }) {
    return { id, ...user };
  }

  @Delete(":id")
  delete(@Param("id") id: string) {
    return { id };
  }
}
