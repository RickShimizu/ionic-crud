angular.module('app.controllers', [])
// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName  
.controller('agendaCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {
//area codigo

var _contatos = [
    
    {nome: 'Rick :', telefone:'97382323', favorito: true},
    {nome: 'Xick :', telefone:'224812232', favorito: false},
    {nome: 'Bick :', telefone:'35463463', favorito: false},
    {nome: 'Beck :', telefone:'4352353423', favorito: false},
];
  
   $scope.contatos =  _contatos;


   
}])
   
.controller('sobreCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])
 