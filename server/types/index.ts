export type User = {
    name: string
    email: string 
    password: string
    isAdmin: boolean
}

export type Farm = {
    name: string
    long: number
    lat: number
    type:string
    id: string
    sensor: number
    size: number
    ownerId: string
}