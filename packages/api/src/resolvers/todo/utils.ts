import { MaxLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class AddInput {
    @Field()
    @MaxLength(255)
    description: string;
}

@InputType()
export class DeleteInput {
    @Field(() => Number)
    id: number;
}
