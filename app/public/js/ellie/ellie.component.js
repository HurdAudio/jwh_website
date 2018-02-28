(function() {
  'use strict';


  angular.module('app')
    .component('ellie', {
      controller: EllieController,
      templateUrl: '/js/ellie/ellie.template.html'
    });

    EllieController.$inject = ['$http', '$state', '$stateParams'];

    function EllieController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;
      vm.navigateLanding = navigateLanding;
      vm.navigateNovels = navigateNovels;
      vm.navigateEllieOpeningPages = navigateEllieOpeningPages;
      vm.navigateEllieEssay = navigateEllieEssay;

      function navigateEllieEssay() {
        $state.go('ellieessay');
      }

      function navigateEllieOpeningPages() {
        $state.go('misselliesopeningpages');
      }

      function navigateNovels() {
        $state.go('novels');
      }

      function navigateLanding() {
        $state.go('landing');
      }

      function onInit() {
        console.log("Novels is lit");
        let ellieContent = document.getElementById('ellieContent');
        ellieContent.setAttribute("style", "opacity: 0.7; filter: hue-rotate(180deg) sepia(0%);");
        setTimeout(()=>{
          ellieContent.setAttribute("style", "opacity: 1; filter: hue-rotate(0deg) sepia(50%); transition: all 1.4s linear;");
        }, 600)

      }

    }

}());
