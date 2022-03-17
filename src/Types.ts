export type User = {
    id: number,
    email: string,
    name: string,
    password: string,
    basket: []
}

export type Item = {
    id: number,
    title: string,
    image: string,
    price: number,
    stock: number
}

export type LogInForm = HTMLFormElement & {
    email: HTMLInputElement,
    password: HTMLInputElement,
    reset: () => void
}

export type SignUpForm = HTMLFormElement & {
    name: HTMLInputElement,
    email: HTMLInputElement,
    password: HTMLInputElement,
    confirm_pass: HTMLInputElement,
    reset: () => void
}