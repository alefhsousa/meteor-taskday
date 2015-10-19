Meteor.startup(function(){
  Meteor.subscribe("tarefas");


  accountsUIBootstrap3.setLanguage('pt-BR');
});
