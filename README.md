# Maggie's Notes
## Summary
This repository contains all of the notes taken by [Maggie](https://github.com/maggiezhu) for the Lighthouse Labs Web Development Bootcamp.
## Table of Contents
* [Week 1](/Week_1)
  * [Day 1](/Week_1/Day_1)
  * Day 2
  # Day 1
  ## Lecture
    - fish : green color shown no change in the folder compare to master repository
    - process.argv: ['node location', 'document location', 'input arguments']
    - array method: slice
        animal.slice(2,4); 2 is covered, 4 is not
    - Add git branch: ```console git checkout -b branchname```
      Git switch branch: ```console git checkout master``` (switch to master branch)
    - To merge branches: first go back to master branch ``` console git merge --no--ff --no-edit branchname``` (--no--ff dont fast forward, create a merge branch instead; --no-edit use previous commit message)
    - Delete branch: ```console git branch -D branch name```


    - difference between parseInt() and Number(): number evaluate the whole string, parseInt only takes the number part ( ** and will round to integer!)
    - refactorying: change the code structure without changing any functionality of the code ie. create a new function for the same code
    - ```console node``` to test code ```.exit``` to quite
    - check number is integer: 1. ```javascript number.isInteger()``` 2. ```javascript number % 1 === 0```
    - ```javascript Process.exit(0);``` to stop excuting the file

    ##Breakout
    -Error Type
        compile type error: cannot run
        run time error: able to compile but fail at excuting
    - Scope:
        function is the same as string, it is primary type, can be passed to other functions
        ```javascript var add = function(a,b){return a + b};``` if defined after using it will not excute, but if we define a formal function, we can use it before declearing it.
    - can reture a function inside a function, ie ```javascript a = func();```


    ### Tips from Exercise
    - type coercion: == attemps to force two compared value to be the same type first
    - everyting in javascript hold a truthy/falsy value, 0 is a falsy value so 0==false ```javascript (0,'',null,undefined,NaN, are all == false)```



    # Day3
    ### Lecture
    - ```javascript for(var item of array){do something}```
    - Object
        - object.key vs object('key') are different when we are not using string literal(key it self as a key in the object 'key'), if key = 'firstname', ```javascript object.key``` is the same as ```javascript object['key']``` will not work.
        - ALL keys are Sting, even if they are not, javascript will convert them to String
        - To ADD objects element:  ```javascript object.key = {a:b,B:c};```
        - Template literals: Direct put objecgt elements in a Srting:
            ```javascript console.log(`My neme is ${object.lastname} ${object.firstname}`))``` BACKQUOTATION NOT QUOTATION!
        - Methods:
            - ```javascript Object.keys(myobject);```
        - ```javascript for(var key in object){console.log(key,object[key])};```
                but we need to make sure the property is acturally the property of the key, not what they inhereted: by doing ```javascript if (planetMoons.hasOwnProperty(planet)) {```
        - Difference btw Object and String:
            1. when pass them to a function and assign new values to them, String and Int are just changing the coye of the value, whereas passing an object and modify will be the original of it.
            http://www.pythontutor.com/javascript.html#mode=edit to test and visulize the code
            2. it only happens when passing the whole obj to function, if we pass a key in side the object, we are still passing that String, therefore outside of it won't change the String


    # Day 4: Function & Callback Functions
    - Callback function is the function being passed to another function as argument or as return.(the nested function is not callback function)
    - function can be passed as variable
            ```javascript function main(par1, par2){ par2(par1);} where par2 is the name of a function ``` (not passing par() bc we only want the name, not the result of the function)
    - Sort: make change on the original array
            ```javascript Function: array.sort(function(a,b){return a - b})```: give a a lower index number if the function return <0.
     - Lexical Scoping:
                Nested functions have access to variables declared in their outer scope.
      - Closure: is the combination of a function and the laical environment within which that function was declared.
            ```javascript function makeAdder(x) {
                    return function(y) {
                        return x + y;
                      };
                    }
                    var add5 = makeAdder(5);
                    var add10 = makeAdder(10);
                    console.log(add5(2));  // 7
                    console.log(add10(2)); // 12```

    here both add5 are add 10 are closure with different environments, add5 has x = 5 whereas add10 has x = 10.
    READ: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
     - Immediately-invoked function expression(IIFE)
            var foo = (function(){})()

# Day 5
    - module.export{
        object that links name(as key) and function
        } makes data in one file visible to another file
    - require() to get data from the other file
    - npm init -y : to make a file javascript project!
        then we should create a .json to keep track of what package we need to run a file.
    - One module.exports per file, so we can export a library to be able to access one single function (a = require.afunction)
    - PUT npm install moment --save! to put required packages in package.jjson, this file contains the whole package list required to run your code.
    - Write tast case! 'mocha'and 'chai' are both testing packages that we can inport.


    - '../afile' is at one level higher]


** read stretch reading in second module of today! Day 5

    - Module.export: var receiver = require('filename'); file here contains the below module.exports lines
        // good
        module.exports = {
          add(a,b) { return a+b }
        }

        // good
        module.exports.subtract = (a,b) => a-b
    -  Module: JS code in a seperate file, that can be required by other JS programs
        Library: an independent collection of code that can be used by programs (not JS specific)
        Package: a collection of JS modules, with a package.json, usually published on NPM
    - Should node_modules be included for commit? (it is where npm stores dependencies)
    No package.json should be committed because it contains the information necessary to recreate node_modules. Including node_modules would be redundant and would cause giant git commits every time a library is updated.
    - String function: str.replace('/the string you wanna replace/g','')





















