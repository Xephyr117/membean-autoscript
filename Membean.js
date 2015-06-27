// ==UserScript==
// @name         Membean AutoScript
// @version      0.1
// @description  Automatically completes membean tasks
// @author       Hoover852@gmail.com
// @match        http://www.membean.com/training_sessions/*
// ==/UserScript==

TIME_INTERVAL = 5000; //interval for running the script in ms. Anything below 3000ms appears to cause errors.

// Handles all multiple choice questions
MCQuestion = function(){ 
    that = this;
        this.choiceEls.each(function(b) {
            if (that.correctChoice(b)) {
                b.addClass("correct");
                that.fireEvent("correct");
                return;
            }
        });
};

// Handles all fill in questions, including after learning a new word
clozeQuestion = function(){
    that = this;
    that.formInput.dom.value = that.answer.substr(that.firstLetterCorrection, that.answer.length - that.firstLetterCorrection);
    that.fireEvent("correct");
};

// Tries every quiz option on the new word page and then moves to the next page
newWord = function(){
     var m = Ext.select("#choice-section .choice");
    var f = m.item(0);
    if (f) {
        simulate(f.dom, "click");
    }
    var f = m.item(1);
    if (f) {
        simulate(f.dom, "click");
    }
    var f = m.item(2);
    if (f) {
        simulate(f.dom, "click");
    }
    var c = Ext.get("next-btn") || Ext.get("Proceed");
    if (c) {
        simulate(c.dom, "click");
    }
    };
	
// Runs each of the above functions every TIME_INTERVAL milliseconds
setInterval(function() {
    location.replace( "javascript:q.MCQuestion = MCQuestion;q.clozeQuestion = clozeQuestion; try{q.clozeQuestion();}catch(err){} try{q.MCQuestion();}catch(err){} try{newWord();}catch(err){}");
}, TIME_INTERVAL);