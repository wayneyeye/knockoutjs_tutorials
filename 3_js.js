ko.bindingHandlers.fadeVisible = {
    init: function(element, valueAccessor) {
        // Start visible/invisible according to initial value
        var shouldDisplay = valueAccessor();
        $(element).toggle(shouldDisplay);
    },
    update: function(element, valueAccessor) {
        // On update, fade in/out
        var shouldDisplay = valueAccessor();
        shouldDisplay ? $(element).fadeIn() : $(element).fadeOut();
    } 
};

function Answer(text) { this.answerText = text; this.points = ko.observable(1); }

function SurveyViewModel(question, pointsBudget, answers) {
    this.question = question;
    this.pointsBudget = pointsBudget;
    this.answers = $.map(answers, function(text) { return new Answer(text) });
    this.save = function() { alert('To do') };
                       
    this.pointsUsed = ko.computed(function() {
        var total = 0;
        for (var i = 0; i < this.answers.length; i++)
            total += this.answers[i].points();
        return total;        
    }, this);
}

ko.applyBindings(new SurveyViewModel("Which factors affect your technology choices?", 10, [
   "Functionality, compatibility, pricing - all that boring stuff",
   "How often it is mentioned on Hacker News",    
   "Number of gradients/dropshadows on project homepage",        
   "Totally believable testimonials on project homepage"
]));
