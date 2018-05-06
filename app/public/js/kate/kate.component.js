(function() {
  'use strict';


  angular.module('app')
    .component('kate', {
      controller: KateController,
      templateUrl: '/js/kate/kate.template.html'
    });

    KateController.$inject = ['$http', '$state', '$stateParams'];

    function KateController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;
      vm.navigateLanding = navigateLanding;
      vm.navigateNovels = navigateNovels;
      vm.navigateKateOpeningPages = navigateKateOpeningPages;
      vm.navigateKateEssay = navigateKateEssay;
      vm.navigateMemoir = navigateMemoir;

      function navigateMemoir() {
        $state.go('memoir');
      }

      function navigateKateEssay() {
        $state.go('kateessay');
      }

      function navigateKateOpeningPages() {
        $state.go('kateopeningpages');
      }

      function navigateNovels() {
        $state.go('novels');
      }

      function navigateLanding() {
        $state.go('landing');
      }

      function onInit() {
        console.log("Novels is lit");
        let kateContent = document.getElementById('kateContent');
        kateContent.setAttribute("style", "opacity: 0.7; filter: hue-rotate(180deg) sepia(0%);");
        setTimeout(()=>{
          kateContent.setAttribute("style", "opacity: 1; filter: hue-rotate(0deg) sepia(50%); transition: all 1.4s linear;");
        }, 600)

      }

    }

}());
