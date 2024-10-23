// when we get a error in the console, despite having a valid function of console.log it is never
// executed because the previous error is still there
// try and catch blocks prevent this by trying the operation that might lead to an error and despite it returning
// an error it still runs whats in the catch block
const x = 2;

// try {
//   x.toUppercase();
// } catch {
//   console.log("hello");
// }

// the moment an error is raised in the try block we automatically go the the catch block
// we can also catch the error that occured when we entered the catch block by doing the following

try {
  x.toUppercase();
} catch (err) {
  // this returns: x.toUppercase is not a function TypeError
  // also in this case err is an object
  console.log(err.message, err.name);
} finally {
  console.log("finally");
}
// the finally block runs no matter what so in this case the output is
//x.toUppercase is not a function TypeError
//finally
