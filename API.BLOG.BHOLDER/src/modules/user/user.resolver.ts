import {
  Resolver,
  Query,
  Mutation,
  Args,
  Field,
  Int,
  ObjectType,
} from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  valor?: number;
}

@Resolver()
export class UserResolver {
  @Query(() => String)
  async hello() {
    const teste = 'hello';

    return teste;
  }
  @Mutation(() => User)
  async getName(@Args({ name: 'name', type: () => String }) name: string) {
    return {
      name,
      valor: name.length ** 3,
    };
  }
}
