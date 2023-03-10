import { Code } from '@infrastructure/helpers/documentation/code/code';
import { Nullable } from '@infrastructure/helpers/type/common.types';

export class Response<TData> {
  public readonly code: number;

  public readonly message: string;

  public readonly timestamp: number;

  public readonly data: Nullable<TData>;

  private constructor(code: number, message: string, data?: TData) {
    this.code = code;
    this.message = message;
    this.data = data || null;
    this.timestamp = Date.now();
  }

  public static success<TData>(
    data?: TData,
    message?: string,
  ): Response<TData> {
    const resultCode: number = Code.SUCCESS.code;
    const resultMessage: string = message || Code.SUCCESS.message;

    return new Response(resultCode, resultMessage, data);
  }

  public static error<TData>(
    code?: number,
    message?: string,
    data?: TData,
  ): Response<TData> {
    const resultCode: number = code || Code.INTERNAL_ERROR.code;
    const resultMessage: string = message || Code.INTERNAL_ERROR.message;

    return new Response(resultCode, resultMessage, data);
  }

  public static notFound<TData>(
    message?: string,
    code?: number,
    data?: TData,
  ): Response<TData> {
    const resultCode: number = code || Code.NOT_FOUND.code;
    const resultMessage: string = message || Code.NOT_FOUND.message;

    return new Response(resultCode, resultMessage, data);
  }
}
