import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewModel } from './review.model/review.model';

@Controller('review')
export class ReviewController {

    @Post('create')
    async create(@Body() dto: Omit<ReviewModel, '_id'>) {

    }

    @Get('byProduct/:productId')
    async getByProduct(@Param('productId') productidId: string) {

    }

    @Delete(':id')
    async delete(@Param('id') id: string) {

    }

}
