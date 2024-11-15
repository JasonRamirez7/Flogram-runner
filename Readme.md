# Floparser Update Section

We can remove outputElement, which is a DOM element.
It limits the ability to run code everywhere.
And DOM handling even slows down the speed.
We can get rid of DOM element.

Instead, let's use an array.

I've updated some code on my end, and you can test it.
I've made it executable on both the frontend and backend.

We only need to use this code snippet, and it looks pretty straightforward.

```javascript
import floparser from "./@munezero/floparser";

const value = `
fn main():
	draw("hello world")
`
floparser.run(value)
  .then((res) => {
    console.log("run result::: ", res);
  })
  .catch((err) => {
    console.log("run error::: ", err);
  });


// Or this is also possible
try {
  const res = await floparser.run(value)
  console.log(res)
}
catch(err){
  console.log(err)
}
```

I've implemented it the same way on the frontend and backend.
To do this, I updated the @munezero/floparser module slightly.

I'm sure you can understand the provided codebase. 
(@munezero/floparser/index.js)
(@munezero/floparser/Compilers/MemoryManager/index.mjs) // updated createDraw function to remove outputElement DOM element

I have no idea how you published the node module, but I thinks this is the great way to module more adaptable and easy to use
