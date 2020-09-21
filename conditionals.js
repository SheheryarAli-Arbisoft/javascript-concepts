let x = 1;

/*
 * The if else conditional is used when we want to compare values using
 * any of the comparison operators (<, >, <=. >=, ==, ===, !=, !==)
 * and check any condition using the logical operators (&&, ||, !)
 */
if (x == 1) {
  console.log('One');
} else if (x == 2) {
  console.log('Two');
} else {
  console.log('Default');
}

/*
 * The switch conditional is used when we want to compare values using only the strict
 * equality operator (===)
 *
 * Note: In the example below if we were to write '1' instead of 1 then the default case
 * would be entered because strict equality check on the basis of logical value and also
 * by data type
 */
switch (x) {
  case 1:
    console.log('One');
    break;
  case 2:
    console.log('Two');
    break;
  default:
    console.log('Default');
}
