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
    const hello = await resolveHello();
    console.log(hello);     // at :2 secs
    const world = await resolveWorld();
    console.log(world);     // at :1 secs
}

greet()