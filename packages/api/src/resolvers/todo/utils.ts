import { Field, InputType, ObjectType } from "type-graphql";import { MaxLength } from "class-validator";



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