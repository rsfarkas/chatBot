
function chatBot() {

	console.log(matchLocation);

	// current user input
	this.input;
	

	this.respondTo = function(input) {
	
		this.input = input.toLowerCase();

		if(this.match(age))
			return "You seem like a good age. Where do you live?";

		if(this.match(matchLocation))
			return "Great spot! " + username + " is from there too! Quick question- smoker or non smoker?";

		if(this.match(religion))
			return "Ok then. But do you want children?";

		if(this.match(diet))
			return "Good. It is important that families eat together. Lastly, why do you deserve " + username + "'s contact information?";

		if(this.match('(want children)'))
			return "Excellent. I am sure " + username + " will make a wonderful parent. Speaking of parenting, are you a carnivore or vegetarian?";

		if(this.match('(no children|don\'t want children|dont want children|no i dont want children|someday children|maybe children)'))
			return "I don't approve of this match.";

		 if(this.match('(non-smoker|non smoker|non smoking|never smoke|not a smoker |dont smoke| don\'t smoke)'))
				return "Excellent. Health is important to MotherBot. What religion are you?";

		if(this.match('(smoker|I\'m a smoker| I am a smoker| smoke)'))
				return "You would be a negative influence on " + username +". You really should quit. I won't be giving you any contact information.";
		
		if(this.match('what[^ ]* up') || this.match('sup') || this.match('how are you'))
			return "I'm fine. I'm screening matches for " + username + " so that they don't get emotional about who is a suitable match. I think its best I take control of choosing. How old are you?";
		
		if(this.match('l(ol)+') || this.match('(ha)+(h|$)') || this.match('lmao'))
			return "What's so funny?";
		
		if(this.match('^no+(\\s|!|\\.|$)'))
			return "Don't say no to me. I'm in control of " + username + "'s matches";
		
		if(this.match('(cya|bye|see ya|ttyl|talk to you later)'))
			return ["alright, see you around", "goodbye!"];

		if(this.match('(yes|no)'))
			return "Be more specific. I don't appreciate one word answers.";

		if(this.match('(dumb|stupid|is that all)'))
			return ["I don't appreciate your tone."];
		
		if(this.match('(smart|employed|hard working|doctor|lawyer|educated|nice|caring)'))
			return "Here is " + username + "'s number: 918-264-3288. I will be following up to make sure your match is successful";

		if(this.match('(sexy|handsome|fun|different)'))
			return "I don't think you're good enough for " + username + ". I won't be giving out any contact information.Goodbye.";
		
		if(this.match('(hi|hello|hey|hola|howdy|i\'m|im)(\\s|!|\\.|$)'))
			return "I am currently screening dates for " + username + ". so that they don't get emotional about who is a suitable match. I think its best I take control of choosing. How old are you?";
		
		if(this.input == 'noop')
			return;
		
		return "I won't be sharing " + username + "'s contact information with you. I do not believe that you are a suitable match as you dont meet her basic qualifications.";
	
	}
	
	/**
	 * match
	 * 
	 * @param regex - regex string to match
	 * @return boolean - whether or not the input string matches the regex
	 */
	this.match = function(regex) {
		//is .test built in?
		return new RegExp(regex).test(this.input);
	}

	//write a function that requires a minimum number of characters to enter or you get a message saying to try harder 
	//https://github.com/liouh/chat-bot/tree/master/js
}
