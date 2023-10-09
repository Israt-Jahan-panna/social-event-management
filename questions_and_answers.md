<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer- B: `ReferenceError: greetign is not defined` </b></summary>
<p>

#### Answer: ?

<i>Here we see that we declear  let greeting but we are consoled greetign this is never decleard so ans is greetign is not defined  </i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer - C:"12"</b></summary>
<p>

#### Answer: ?

<i>When we used the + operator to add values, if one of the operands is a string, JavaScript will perform string concatenation. here  1 is a number, and "2" is a string, so JavaScript will treat "2" as a string and concatenate it with 1, Output is "12"</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer- A:`['🍕', '🍫', '🥑', '🍔']`</b></summary>
<p>

#### Answer: ?

<i>in this code info is an object with a property favoriteFood set to the first element of the food array, after that change the value of info.favoriteFood</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer- B:`Hi there, undefined` </b></summary>
<p>

#### Answer: ?

<i>`Hi there, undefined` is coreect because of when i call the sayHi function without passing an argument, the name parameter inside the function is undefined.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer- C:3</b></summary>
<p>

#### Answer: ?

<i>Out Put will be 3 beacuse the nums array using the forEach method, and for each element that is truthy (not equal to 0), it increments the count variable by 1. three is 3 elements in the array (1, 2, and 3), so count becomes 3.</i>

</p>
</details>
