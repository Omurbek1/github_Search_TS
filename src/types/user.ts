export type LocalGithubUser = {
    login: string,
    id: number,
    avatar: string,
    name: string,
    company: string,
    blog: string,
    location: string,
    bio: string,
    twitter: string,
    repos: number,
    followers: number,
    following: number,
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
    followers: number,
    following: number,
    created_at: string,

}
export type GitHubError = {
    message: string,
    documentaion_url: string

}