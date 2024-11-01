/*Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.*/
{
    let arr = [1, 2, 3, 4, 5];

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

/*Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут быть положительными и отрицательными. Выведите на экран только отрицательные числа, которые больше -10, но меньше -3.*/
{
    let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < -3 && arr[i] > -10) {
            console.log(arr[i]);
        }
    }
}

/*Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result и выведите.*/
{
    let arr = [];
    for (let i = 23; i <= 57; i++) {
        arr.push(i);
    }
    console.log(arr);

    let arrWhile = [];
    let a = 23;
    while (a <= 57) {
        arrWhile.push(a);
        a++;
    }
    console.log(arrWhile);

    let result = 0;
    for (let j = 0; j < arr.length; j++) {
        result += arr[j];
    }
    console.log("Сумма элементов массива:", result);
}

/*Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.*/
{
    let arr = ['10', '20', '30', '50', '235', '3000'];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == 1 || arr[i][0] == 2 || arr[i][0] == 5) {
            console.log(+arr[i]);
        }
    }
}

/*Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.*/
{
    let days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
    for (let i = 0; i < days.length; i++) {
        if (days[i] === 'СБ' || days[i] === 'ВС') {
            document.write(`<strong>${days[i]}</strong>`);
        } else {
            document.write(`${days[i]}`);
        }
    }
}

/*Создайте массив с произвольными данными. Добавьте в конец массива любой элемент, и получите последний элемент массива, используя свойство length.*/
{
    let arr = ['strawberry', 'raspberry', 'banana', 'coconut', 'apple'];
    arr.push('orange');
    let lastElem = arr[arr.length - 1];
    console.log(lastElem);
}

/*Запросите у пользователя по очереди числовые значения при помощи prompt и сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое значение. Выведите получившийся массив на экран. Выполните сортировку чисел массива, и выведите его на экран.*/
{
    let arr = [];
    let value = "";

    while (true) {
        value = prompt('Введите значение');

        if (!isNaN(value) && value !== null && value !== '' && value !== ' ') {
            value = +value;
            arr.push(value);
        } else {
            break;
        }
    }
    arr.sort((a, b) => a - b);
    console.log(arr);
}

/*Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке), используя цикл while и метод reverse.*/
{
    let arr = [12, false, 'Текст', 4, 2, -5, 0];
    let i = 0;
    arr.reverse();
    while(i < arr.length) {
        console.log(arr[i]);
        i++;
    }
}

/*Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].*/
{
    let arr = [5, 9, 21, , , 9, 78, , , , 6];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === undefined) {
            count++;
        }
    }
    console.log(count);
    console.log(arr);

}

/*Найдите сумму элементов массива между двумя нулями (первым и последним нулями в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или [1,8,0,13,76,8,7,0,22,0,2,3,2].*/
{
    let arr = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2];
    let zeroLeft = arr.indexOf(0);
    let zeroRight = arr.lastIndexOf(0);
    let sum = 0;
    if (zeroLeft >= 0 && zeroRight >= 0) {
        for (let i = zeroLeft; i <= zeroRight; i++) {
            sum += arr[i];
        }
    }
    console.log(sum);
}

/*Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает пользователь. Например: высота = 5, на экране:*/
{
    let h = 5;
    for (let i = 1; i <= h; i++) {
        let line = '';

        for (let j = 1; j <= (h-i); j++) {
            line += ' ';
        }

        for (let j = 1; j <= (i+i-1); j++) {
            line += '*';
        }
        console.log(line);
    }

}


//Допы из CW_31.10

/*Найдите сумму элементов массива (3, -5, "23", 0, "0", 1, -9). Найти номер и значение первого найденного отрицательного элемента массива.*/
{
    let arr = [3, -5, "23", 0, "0", 1, -9];
    let sum = 0;
    let count = 0;
    let count1 = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += +arr[i];
        if (+arr[i] > 0) {
            count++;
        } else if (+arr[i] < 0) {
            count++;
        }
    }

    console.log(sum, count, count1);
}

/*Найдите максимальный и минимальный элементы массива [23, 2, 0, , -2, 56, 12, 11]. Выведите эти элементы*/
{

    let  arr = [23, 2, 0, ,-2, 56, 12, 11];
    
    let maxElement = arr[0]; 
    let minElement = arr[0];
    
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > maxElement) {
            maxElement = arr[i]; 
            }
            if (arr[i] < minElement) {
            minElement = arr[i]; 
            }
        }
    console.log("Максимальный элемент:", maxElement);
    console.log("Минимальный элемент:", minElement);
    
}

/*Создайте произвольный массив и выведите его перевернутую версию (создав новый массив), например: [0, ‘N’, 98, ‘Text’, 3, 5] => [5, 3, ‘Text’, 98, ‘N’, 0]*/ 

{
    let arr = [0, "N", 98, "Text", 3, 5];
    let reverse = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reverse.push(arr[i]);
    }

    console.log(reverse);

}

/*Есть два массива с числовыми значениями одинаковой длины. Создайте третий массив с суммами элементов данных массивов. Например:  [12,4,0] + [8,7,6] = [20, 11, 6].*/
{

    let arr = [12,4,0];
    let arr1 = [8,7,6];
    let arr2 = [];

        for (let i = 0; i < arr.length; i++) {
        arr2[i] = arr[i] + arr1[i];
        }
    
    console.log("Суммы элементов массивов:", arr2);

}

/*Дан массив, содержащий положительные и отрицательные числа. Заменить все элементы массива на противоположные по знаку. Например, задан массив [1, -5, 0, 3, -4]. После преобразования должно получиться [-1, 5, 0, -3, 4].

Поменяйте местами максимальный и минимальных элементы в массиве.

Посчитайте кол-во отрицательных, положительных элементов, а также  элементов со строчным типом данных.*/
{
    let arr = [1, -5, 0, 3, -4];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
        arr[i] = -arr[i];
        }
    }
//Поиск максимального и минимального элементов и их индексов
    let minIndex = -1;
    let maxIndex = -1;
    let minValue = Infinity;
    let maxValue = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            if (arr[i] < minValue) {
            minValue = arr[i];
            minIndex = i;
            }
            if (arr[i] > maxValue) {
            maxValue = arr[i];
            maxIndex = i;
            }
        }
    }
//Поменять местами максимальный и минимальный элементы
    if (minIndex !== -1 && maxIndex !== -1) {
        let temp = arr[minIndex];
        arr[minIndex] = arr[maxIndex];
        arr[maxIndex] = temp;
    }
//Подсчет количества отрицательных, положительных и строчных элементов
    let positiveCount = 0;
    let negativeCount = 0;
    let stringCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            if (arr[i] > 0) {
                positiveCount++;
            } else if (arr[i] < 0) {
                negativeCount++;
            }
        } else if (typeof arr[i] === 'string') {
            stringCount++;
        }
    }
    console.log('Преобразованный массив:', arr);
    console.log('Количество положительных чисел:', positiveCount);
    console.log('Количество отрицательных чисел:', negativeCount);
    console.log('Количество элементов со строковым типом:', stringCount);
}

/*Дан массив целых чисел (минимум 6 элементов). Проверить, есть ли в нем одинаковые элементы. Вывести в консоль: “Есть повторки!”, “Нет повторов”.*/

{

    let arr = [11, 2, 36, 49, 5, 6, 11]; 
    
    let duplicates = false;
    
        for (let i = 0; i < arr.length; i++) {
            if (arr.indexOf(arr[i]) !== i) {
            duplicates = true;
            break;
            }
        }
    
        if (duplicates) {
            console.log("Есть повторки!");
        } else {
        console.log("Нет повторов");
        }
    
}

/*Создайте массив из пяти имен и выведите их на экран те из них, которые начинаются с определенной буквы, которая вводится с клавиатуры.*/ 
{

    let arr = ['Anna', 'Marina', 'Alex', 'Vlad', 'Bob'];
    let firstPrompt = prompt('Введите первую букву')

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == firstPrompt) {
            console.log(arr[i]);
        }
    }

}

/*Если в одномерном массиве имеются три подряд идущих одинаковых элемента, то переменной r присвоить значение истина*/
{
    let arr = [12, 45, 1, 1, 1, 76,54,8,23];
    let r = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) {
            r = true; 
            break;
    }

    }
    console.log(r);
}

/*Заданы два массива. Один содержит наименование услуг, а другой – расценки за эти услуги. Удалите из обоих массивов все элементы, которые по цене равняются n  рублей. Выведите оба массива и удаленные элементы.*/
{

    let services = ["Диагностика", "Постановка звука", "Подготовка к школе"]; 
    let prices = [100, 200, 100]; 
    let n = 100;
    let removedServices = [];


        for (let i = prices.length - 1; i >= 0; i--) {
            if (prices[i] === n) {
                removedServices.push(services[i]); 
                services.splice(i, 1); 
                prices.splice(i, 1); 
            }
        }

        for (let i = 0; i < services.length; i++) {
            console.log(`${services[i]}: $${prices[i]}`)
        }

        console.log(`Удалено: ${removedServices}: $${n}`)

}   