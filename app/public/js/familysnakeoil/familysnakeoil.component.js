(function() {
  'use strict';


  angular.module('app')
    .component('familysnakeoil', {
      controller: FamilySnakeoilController,
      templateUrl: '/js/familysnakeoil/familysnakeoil.template.html'
    });

    FamilySnakeoilController.$inject = ['$http', '$state', '$stateParams'];

    function FamilySnakeoilController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;
      vm.navigateLanding = navigateLanding;
      vm.navigateMemoir = navigateMemoir;
      vm.navigateNovels = navigateNovels;
      vm.navigateShortStories = navigateShortStories;
      vm.topOfSnakeDiv = topOfSnakeDiv;

      function topOfSnakeDiv() {
        let snakeoilContent = document.getElementById('snakeoilContent');

        snakeoilContent.scrollTop = 0;
      }

      function navigateShortStories() {
        $state.go('shortstories');
      }


      function navigateNovels() {
        $state.go('novels');
      }

      function navigateMemoir() {
        $state.go('memoir');
      }

      function navigateLanding() {
        $state.go('landing');
      }

      function onInit() {
        console.log("Family Snakeoil is lit");


      }

    }

}());
