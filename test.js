// const ratings = [5, 4, 5];



// let sum = 0;

// const sumFunction = async (a, b) => a + b;

// ratings.forEach(async (rating) => {
//   sum = await sumFunction(sum, rating);
// });

// console.log(sum);
// // Naively expected output: 14
// // Actual output: 0

// 定义完整的动物数组（修正对象结构、补全括号/引号、剔除乱码）



// // 定义动物数组：包含不同动物的名字和物种
// var animals = [
//   { name: 'Fluffykins', species: 'rabbit' },
//   { name: 'Caro', species: 'dog' },
//   { name: 'Hamilton', species: 'dog' },
//   { name: 'Harold', species: 'fish' },
//   { name: 'Ursula', species: 'cat' },
//   { name: 'Jimmy', species: 'fish' }
// ];

// const isDog = function(animal) {
//   return animal.species === 'dog';
// }
// const isnotDogs = function(animal) {
//   return animal.species !== 'dog';
// }

// // 筛选出所有物种为“dog”的动物
// var dogs = animals.filter(isDog); // 修正：补全括号闭合+分号
// var notDogs = animals.filter(isnotDogs);

// console.log("isdogs",dogs);
// console.log("notDogs",notDogs);

/**
 * 哈希表（Map）优化法求解两数之和（最优解）
 * @param {number[]} nums 整数数组
 * @param {number} target 目标和
 * @returns {number[]} 满足条件的两个元素下标
 */
function twoSum(nums, target) {
    // 定义Map实例，存储已遍历元素：key = 元素值，value = 元素下标
    const numIndexMap = new Map();
    console.log("numIndexMap",numIndexMap);
    
    // 遍历数组，获取每个元素的下标和值
    for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        // 计算当前元素的补数
        const complement = target - num;
        
        // 检查补数是否已在Map中（即是否已遍历过）
        if (numIndexMap.has(complement)) {
            // 找到答案，返回补数的下标和当前元素下标
            return [numIndexMap.get(complement), index];
        }
        
        // 补数不存在，将当前元素的值和下标存入Map，供后续查询
        numIndexMap.set(num, index);
    }
    
    // 题目保证必有一个答案，此处为兜底返回空数组
    return [];
}

console.log(twoSum([5, 7, 2, 4], 9));