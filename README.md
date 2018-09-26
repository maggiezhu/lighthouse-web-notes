# Maggie's Notes
## Summary
This repository contains all of the notes taken by [Maggie](https://github.com/maggiezhu) for the Lighthouse Labs Web Development Bootcamp.
## Table of Contents
* [Week 1](/Week_1)
  * [Day 1](/Week_1/Day_1)
  * Day 2
  ### Lecture
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

    ###Breakout
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
    -
    * Day3
    ### Lecture
    - ```javascript for(var item of array){do something}```
    - Object
        - object.key vs object('key') are different when we are not using string literal(key it self as a key in the object 'key'), if key = 'firstname', ```javascript object.key``` is the same as ```javascript object['key']``` will not work.
        - ALL keys are Sting, even if they are not, javascript will convert them to String
        - To ADD objects element:  ```javascript object.key = {a:b,B:c};```
        - Direct put objecgt elements in a Srting:
            ```javascript console.log('My neme is $(object.lastname) $(object.firstname)'))```
        - Methods:
            - ```javascript Object.keys(myobject);```
        - ```javascript for(var key in object){console.log(key,object[key])};```
        - Difference btw Object and String:
            1. when pass them to a function and assign new values to them, String and Int are just changing the coye of the value, whereas passing an object and modify will be the original of it.
            http://www.pythontutor.com/javascript.html#mode=edit to test and visulize the code
            2. it only happens when passing the whole obj to function, if we pass a key in side the object, we are still passing that String, therefore outside of it won't change the String






















