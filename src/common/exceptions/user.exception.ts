export class UserAlreadyExistsException extends Error {
    constructor(message: string = 'User already exists') {
        super(message);
        this.name = 'UserAlreadyExistsException';
    }
}

export class UserNotFoundException extends Error {
    constructor(message: string = 'User not found') {
        super(message);
        this.name = 'UserNotFoundException';
    }
}

export class InvalidUserDataException extends Error {
    constructor(message: string = 'Invalid user data') {
        super(message);
        this.name = 'InvalidUserDataException';
    }
}
