// Написати функцію яка прийматиме в параметри масив та повертатиме оброблений масив без однакових елементів.

const arr1 = [1, 5, 3, 6, 4, 1, 2, 1, 4, 7, 5, 9, 1, 3, 8, 5, 4, 6, 8, 9, 1, 3, 5, 4, 8, 7];

function noDopler(array) {
    const sorting = array.sort();
    let cutSimmilar = [];
    for (let i of sorting) {
        if (!cutSimmilar.includes(i)) {
            cutSimmilar.push(i)
        }
    }
    return cutSimmilar;
}

console.log(noDopler(arr1));

// Написати функцію яка буде приймати в параметри 2 масиви і повертатиме boolean значення - ідентичні масиви чи ні.

const firstArray = ['хто', 'ти', 'човен','що' ,'шукаєш'];
const secondArray = ['звідки', 'і', 'куди', 'пливеш'];

function ifArraysSimilar(a, b) {
    let result = '';
    if (a.toString() === b.toString()) {
        result = true;
    } else {
        result = false;
    }

    return result;
}

console.log(ifArraysSimilar(firstArray, secondArray));

// Написати функцію яка прийматиме в параметри масив та літеру та буде виводити імена які починаються з тої літери яку ви передали в параметри.

const namesArray = ['Liam', 'Olivia', 'Noah', 'Emma', 'Oliver', 'Charlotte', 'Elijah', 'Amelia', 'James', 'Ava', 'William', 'Sophia'];

function name(letter, names) {
    let result = [];
    const nameSort = names.sort();
    for (let i of nameSort) {
        if (i[0] == letter.toUpperCase()) {
            result.push(i)
        }
    }

    return result
}

console.log(name('A', namesArray))

// Advanced: Написати базову функцію пошуку яка повертатиме Речення в якому було знайдено співпадіння з словом яке ви передали в функцію.

const phraseArray = ['Молюсь і вірю. Вітер грає', 'І п’яно віє навкруги,', 'І голубів тремтячі зграї', 'Черкають неба береги.',
'І ти смієшся, й даль ясніє,', 'І серце б’ється, як в огні,', 'І вид пречистої надії', 'Стоїть у синій глибині.',
'Клянусь тобі, веселий світе,', 'Клянусь тобі, моє дитя,', 'Що буду жити, поки жити', 'Мені дозволить дух життя!',
'Ходім! Шумлять щасливі води,', 'І грає вітер навкруги,', 'І голуби ясної вроди', 'Черкають неба береги.',
'Максим Рильський'];

function search(word, phrases) {
    let result = [];
    for (let i of phrases) {
        if (i.includes(word)) {
            result.push(i)
        }
    }
    return result;
}

console.log(search('жити', phraseArray))