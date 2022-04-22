/* import { Controller, Get } from '@nestjs/common';
import { CatService} from './cat.service';

@Controller('cat')
export class CatController {
    contructor(private catService : CatService){}

    @Get(':id')
    async getCats(){
        return this.catService.getCats();
    }
}
 */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CatsService } from './cat.service';
import { CreateCatDto } from './create-cat.dto';
import { Cat } from './cat.entity';

@ApiBearerAuth()
@ApiTags('cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @ApiOperation({ summary: 'Create cat' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.create(createCatDto);
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Cat,
  })
  findOne(@Param('id') id: string): Cat {
    return this.catsService.findOne(+id);
  }
}