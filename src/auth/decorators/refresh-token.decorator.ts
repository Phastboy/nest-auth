import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const RefreshToken = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const gqlContext = GqlExecutionContext.create(ctx);
    const request = gqlContext.getContext().req;

    // Extract refresh token from headers
    return request.headers['x-refresh-token'] || null;
  },
);
