import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IPayload } from 'interfaces/IAuth';

export const Payload = createParamDecorator(
  (data: IPayload, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
