import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
    private readonly logger = new Logger(HttpExceptionFilter.name);

    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        let status = HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Internal server error';
        let error = 'Internal Server Error';

        if (exception instanceof HttpException) {
            status = exception.getStatus();
            const response = exception.getResponse();
            if (typeof response === 'string') {
                message = response;
            } else if (typeof response === 'object' && response !== null && 'message' in response) {
                message = (response as { message: string }).message;
            } else {
                message = exception.message;
            }
            error = exception.message;
        } else if (exception instanceof Error) {
            switch (exception.name) {
                case 'UserAlreadyExistsException':
                    status = HttpStatus.CONFLICT;
                    message = exception.message;
                    error = 'Conflict';
                    break;
                case 'UserNotFoundException':
                    status = HttpStatus.NOT_FOUND;
                    message = exception.message;
                    error = 'Not Found';
                    break;
                case 'InvalidUserDataException':
                    status = HttpStatus.BAD_REQUEST;
                    message = exception.message;
                    error = 'Bad Request';
                    break;
                default:
                    status = HttpStatus.INTERNAL_SERVER_ERROR;
                    message = exception.message || 'Internal server error';
                    error = 'Internal Server Error';
            }
        }

        this.logger.error(
            `${request.method} ${request.url} - ${status} - ${message}`,
            exception instanceof Error ? exception.stack : 'Unknown error',
        );

        const errorResponse = {
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            method: request.method,
            message: message,
            error: error,
        };

        response.status(status).json(errorResponse);
    }
}
