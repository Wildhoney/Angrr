import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export default class Todo {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    description: string;

    @Field()
    @Column()
    completed: boolean;
}
