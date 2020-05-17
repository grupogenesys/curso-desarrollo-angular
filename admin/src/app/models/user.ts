export class User {
  constructor(
    public id: number,
    public name: string,
    public username: string,
    public email: string,
    public profile: string,
    public status: boolean,
    public last_login: string
  ){}
}
