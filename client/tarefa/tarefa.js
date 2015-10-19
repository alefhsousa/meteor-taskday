Template.tarefa.events({
  "submit form": function(event, template){

      event.preventDefault();

      var tarefa = $("#tarefa");
      var nome = tarefa.val();
  //    Tarefas.insert({nome: nome, data: new Date()});
      Meteor.call("adiciona", {nome : nome});
      tarefa.val("");
  }
});
