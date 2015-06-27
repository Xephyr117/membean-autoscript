# membean-autoscript
A simple browser script to automatically completes Membean learning module tasks. 

Membean performs all of its question asking & checking functions within the page's javascript. While the actual correct answers are obfuscated, with a little javascript trickery we can just tell the page to call the same functions it normally calls when you get a question correct, prompting Membean to move on to the next question. 

What it can do:
  * Answer multiple choice questions
  * Answer Fill-in (Cloze) questions
  * Pass through new word and relearn pages
  
What it cannot do:
  * Get an answer wrong (seems silly but it can become pretty obvious a person isn't at the controls after a while)
  * Take quizes, tests, etc.
  
Known issues:
  * If the script starts on a word page it will throw an error. Once you move to a quiz page and refresh it will work fine on       all pages, even further new word pages. This is because the script takes advantage of one of Membean's functions that isn't     present on the word pages.
  * Running the script too quickly (setting TIME_INTERVAL too short) will cause the script to try and answer the same question twice, bringing up membeans very annoying Yoda error message
  
  Disclamer:
  I can't condone cheating. I made this to see if it was possible, and to learn a little JS along the way. Use at your own peril.
