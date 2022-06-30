import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';

import TodoObject from '../../entities/todo';
import { Context } from '../../types';
import { AddInput, DeleteInput } from './utils';

@Resolver()
export default class TodoResolver {
    @Query(() => [TodoObject])
    list(@Ctx() ctx: Context) {
        const repository = ctx.db.getRepository(TodoObject);
        return repository.find();
    }

    @Mutation(() => TodoObject, { nullable: true })
    async add(@Ctx() ctx: Context, @Arg('input') input: AddInput) {
        const repository = ctx.db.getRepository(TodoObject);
        const item = new TodoObject();
        item.description = input.description;
        item.completed = false;
        await repository.save(item);
        return item;
    }

    @Mutation(() => TodoObject, { nullable: true })
    async remove(@Ctx() ctx: Context, @Arg('input') input: DeleteInput) {
        const repository = ctx.db.getRepository(TodoObject);
        const todo = repository.findOne({ where: { id: input.id } });
        await repository.delete({ id: input.id });
        return todo ?? null;
    }
}
