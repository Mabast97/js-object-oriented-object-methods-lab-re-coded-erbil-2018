function BoardMember(name, homeState, training){
  this.name = name;
  this.homeState = homeState;
  this.training = training;
  this.veto = function(){ return ("No, I must disagree")};
}

let polishedBoardMember = new BoardMember("Mr. Polished", "New York", "law");

