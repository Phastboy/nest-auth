import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { Logger } from '@nestjs/common';

@Injectable()
export class RefreshTokenAuthGuard extends AuthGuard('jwt-refresh') {
  private readonly logger = new Logger(RefreshTokenAuthGuard.name);

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;

    // Log headers for debugging
    this.logger.debug(`Received headers: ${JSON.stringify(request.headers)}`);

    return request;
  }
}
