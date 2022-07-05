export function getContent(): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(Math.random()), 1000)
    })
}
