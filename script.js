// Task 1
function isOdd(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 !== 0) {
            resolve(true);
        } else {
            reject(false);
        }
    });
}

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    isOdd(numbers[i])
        .then(result => console.log(numbers[i], 'isOdd'))
        .catch(() => {});
}

// Task 2
function getRandomCharacter() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const characters = 'abcdefghijklmnopqrstuvwxyz';
            const randomIndex = Math.floor(Math.random() * characters.length);
            const randomChar = characters.charAt(randomIndex);
            resolve(randomChar);
        }, 500);
    });
}

async function resolve() {
    const randomCharacter = await getRandomCharacter();
    console.log('Random character:', randomCharacter);
}

resolve();

// Task 3
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Random rejection');
        }, 500);
    });
}

async function reject() {
    try {
        await getData();
    } catch (error) {
        console.log('Rejected:', error);
    }
}

reject();

// Task 4
function rejectResolve() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Random rejection');
        }, 500);
        setTimeout(() => {
            resolve('Random resolution');
        }, 500);
    });
}

async function rejectAndResolve() {
    try {
        const data1 = await rejectResolve();
        console.log('Resolved:', data1);
    } catch (error) {
        console.log('Rejected:', error);
    }
}

rejectAndResolve();
