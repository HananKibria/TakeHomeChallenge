# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
I removed the if condition on candidate because when the when if else has run candidate will must have a value.Also I place the the last two if conditions inside the first condition becuse they have to run when event has a value. The else condition when event doesnot have a valuse is placed last because that the case when we give no input. I used else if in the two conditions on candidate because we only have to check the length of candidate if it is string. 
My code is more readable beacuse the conditions are placed in a specific order that utilizes their order effectiveness and makes sense to exhaust one condition after the other.