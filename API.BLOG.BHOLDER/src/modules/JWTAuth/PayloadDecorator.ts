import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { TokenPayload } from 'dto';

export const Payload = createParamDecorator(
  (data: TokenPayload, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
