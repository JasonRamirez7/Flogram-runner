import floparser from "./@munezero/floparser/index.js";

const value = `
fn main():
  draw("Hello world")
  draw("Let's learn Flogram")
`;

// floparser.run(value)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


try {
  const res = await floparser.run(value)
  console.log(res)
}
catch(err){
  console.log(err)
}