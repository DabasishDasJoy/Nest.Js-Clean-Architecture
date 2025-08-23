export interface ILoginService {
    signIn(signInDto: any): Promise<string>;
}
