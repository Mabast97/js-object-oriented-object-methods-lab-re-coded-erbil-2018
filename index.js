function BoardMember(name, homeState, training){
  this.name = name;
  this.homeState = homeState;
  this.training = training;
  this.veto = function(){console.log('')
}

let polishedBoardMember = new BoardMember("Mr. Polished", "New York", "law");
polishedBoarderMember.veto()='No, I '