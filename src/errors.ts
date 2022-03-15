const errorDefinition: { [key: string]: string } = require('../error-codes.json');

export class BadRequest extends Error {
  public errors: string[]
  public errInfo: string[]
  public response: any

  constructor(message?: string) {
    super(message)
    this.name = this.constructor.name
    // Capture stack trace, excluding constructor call from it.
    Error.captureStackTrace(this, this.constructor)
  }

  public setResponse(obj: any): BadRequest {
    this.response = obj
    return this
  }

  public parseError(error: any): BadRequest {
    this.errInfo = [...new Set<string>(error.message.split('.'))]
    // clear start with "+" error code
    const errorCodes = this.errInfo.map((code) => code.replace(/^\+/, '')).filter(([_, v]) => v != null);
    this.errInfo = errorCodes;
    this.errors = this.errInfo.map((code) => errorDefinition[code])
    return this
  }

  public toString(): string {
    return `${this.name}: ${this.message}`
  }
}
