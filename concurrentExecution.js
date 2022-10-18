function resolveHello() {
    return new Promise((res, rej) => 
        setTimeout(res, 2000, 'Hello')
    )
}

function resolveWorld() {
    return new Promise((res, rej) => 
        setTimeout(res, 1000, 'World')
    )
}

async function greet() {
    const hello = resolveHello()
    const world = resolveWorld()
    console.log(await hello)
    console.log(await world)
}

greet()