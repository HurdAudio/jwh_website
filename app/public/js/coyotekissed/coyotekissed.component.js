(function() {
  'use strict';


  angular.module('app')
    .component('coyotekissed', {
      controller: CoyoteKissedController,
      templateUrl: '/js/coyotekissed/coyotekissed.template.html'
    });

    CoyoteKissedController.$inject = ['$http', '$state', '$stateParams'];

    function CoyoteKissedController($http, $state, $stateParams){
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
        console.log("Sisters is lit");


      }

    }

}());
