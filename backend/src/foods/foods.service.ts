import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FoodsCreateDto } from './dto/foods.create.dto';
import { Food } from './entity/food.entity';

@Injectable()
export class FoodsService {
  constructor(
    @InjectRepository(Food)
    private readonly foodRepository: Repository<Food>,
  ) {}

  async find({ id }): Promise<Food[]> {
    return await this.foodRepository.find({
      where: {
        subcategory: { id },
      },
    });
  }

  async findOneById(id: string): Promise<Food> {
    return await this.foodRepository.findOne({
      where: {
        id,
      },
    });
  }

  async findAll(): Promise<Food[]> {
    return await this.foodRepository.find();
  }

  async create(food: FoodsCreateDto): Promise<Food> {
    const isDuplicate = await this.foodRepository.findOne({
      where: {
        name: food.name,
      },
    });
    if (isDuplicate) {
      throw new UnprocessableEntityException('duplicate food name');
    }
    return await this.foodRepository
      .save({
        ...food,
      })
      .catch((err) => {
        throw new UnprocessableEntityException(
          'invalid sub category id or name',
        );
      });
  }

  async delete(id) {
    const isExist = await this.foodRepository.findOne({
      where: {
        id,
      },
    });
    if (!isExist) {
      throw new UnprocessableEntityException('food not found');
    }
    const result = await this.foodRepository.delete(id);
    return result.affected ? true : false;
  }
}
