* Answer the following questions clearly:
1. What is the difference between getElementById, getElementsByClassName, and      querySelector / querySelectorAll?

*1, ans:
 getElementById returns a single element and getElementsByClassName returns multiple elements. Also the querySelector gives the first match and querySelectorAll gives all matches.


2. How do you create and insert a new element into the DOM?

    We usually do this in 3 steps:
        1. Create 
        2. Customize 
        3. Insert 

    const newParagraph = document.createElement("p");
    newParagraph.textContent = "Hello, I am a new paragraph!";
    document.body.appendChild(newParagraph);


3. What is Event Bubbling and how does it work?
    Event bubbling is the process where an event starts from the target element and then bubbles up through its ancestors.

    <div id="parent">
  <button id="child">Click Me</button>
</div>

document.getElementById("child").addEventListener("click", function(){
  console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", function(){
  console.log("Parent clicked");
});


4. What is Event Delegation in JavaScript? Why is it useful?
    Event delegation attach a single event listener to a parent element, and that listener handles events that happen on its child elements.


5. What is the difference between preventDefault() and stopPropagation() methods?
  * preventDefault() is Stops the default browser behavior and stopPropagation() is Stops the event from bubbling up the DOM tree.