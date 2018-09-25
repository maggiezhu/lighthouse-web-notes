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