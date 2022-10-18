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
    await Promise.all([
        (async () => console.log(await resolveHello()))(),
        (async () => console.log(await resolveWorld()))()
    ])
    console.log('done')
}

greet()