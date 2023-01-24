export type LocalGithubUser = {
    login: string,
    id: string,
    avatar: string,
    name: string,
    company: string,
    blog: string,
    location: string,
    bio: string,
    twitter: string,
    repos:string,
    followers:number,
    following: string,
    created: string,
    
}

export type GithubUser = {
    login: string,
    id: string,
    avatar_url: string,
    name: string,
    company: string,
    blog: string,
    location: string,
    bio: string,
    twitter_username: string,
    followers:number,
    following: string,
    created_at: string,
    
}
export type GitHubError = {
    message: string,
    documentaion_url:string
    
}