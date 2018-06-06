(function() {
  'use strict';

  var memoirDropdownToggle = false;
  var funStuffDropdownToggle = false;
  var overMemoirMenu = false;
  var overAuthorMenu = false;
  var overFunStuffMenu = false;
  var authorDropdownToggle = false;


  angular.module('app')
    .component('landing', {
      controller: LandingController,
      templateUrl: '/js/landing/landing.template.html'
    });

    LandingController.$inject = ['$http', '$state', '$stateParams'];

    function LandingController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;
      vm.navigateNovels = navigateNovels;
      vm.navigateMemoir = navigateMemoir;
      vm.navigateShortStories = navigateShortStories;
      vm.surpisedbystory = surpisedbystory;
      vm.hoverOffMemoir = hoverOffMemoir;
      vm.memoirMenuActive = memoirMenuActive;
      vm.memoirMenueInactive = memoirMenueInactive;
      vm.authorMenuActive = authorMenuActive;
      vm.authorMenueInactive = authorMenueInactive;
      vm.hoverOffAuthor = hoverOffAuthor;
      vm.navigateAuthor = navigateAuthor;
      vm.funStuffMenuActive = funStuffMenuActive;
      vm.funStuffMenuInactive = funStuffMenuInactive;
      vm.hoverOffFunStuff = hoverOffFunStuff;
      vm.navigateFunStuff = navigateFunStuff;
      vm.navigateContact = navigateContact;
      vm.navigateIntroduction = navigateIntroduction;
      vm.navigateFirstChapter = navigateFirstChapter;
      vm.navigateShortBio = navigateShortBio;

      function navigateShortBio() {
        $state.go('shortbio');
      }

      function navigateFirstChapter() {
        $state.go('memoirfirstchapter');
      }

      function navigateIntroduction() {
        $state.go('memoirintroduction');
      }

      function navigateContact() {
        $state.go('contact');
      }

      function funStuffMenuInactive() {
        overFunStuffMenu = false;
        hoverOffFunStuff();
      }

      function authorMenueInactive() {
        overAuthorMenu = false;
        hoverOffAuthor();
      }

      function funStuffMenuActive() {
        overFunStuffMenu = true;
      }

      function authorMenuActive() {
        overAuthorMenu = true;
      }

      function memoirMenuActive() {
        overMemoirMenu = true;
      }

      function memoirMenueInactive() {
        overMemoirMenu = false;
        hoverOffMemoir();
      }


      function surpisedbystory() {
        $state.go('memoir');
      }

      function navigateShortStories() {
        $state.go('shortstories');
      }

      function navigateFunStuff() {
        let funStuffDropdownDiv = document.getElementById('funStuffDropdownDiv');

        if (funStuffDropdownToggle) {
          funStuffDropdownToggle = false;
          funStuffDropdownDiv.setAttribute("style", "visibility: hidden; opacity: 0; transition: opacity 0.3s linear; z-index: -10;");
        } else {
          funStuffDropdownToggle = true;
          funStuffDropdownDiv.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity 0.3s linear; z-index: 10;");
        }
      }

      function navigateAuthor() {
        let authorDropdownDiv = document.getElementById('authorDropdownDiv');

        if (authorDropdownToggle) {
          authorDropdownToggle = false;
          authorDropdownDiv.setAttribute("style", "visibility: hidden; opacity: 0; transition: opacity 0.3s linear; z-index: -10;");
        } else {
          authorDropdownToggle = true;
          authorDropdownDiv.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity 0.3s linear; z-index: 10;");
        }
      }

      function navigateMemoir() {
        let memoirDropdownDiv = document.getElementById('memoirDropdownDiv');

        if (memoirDropdownToggle) {
          memoirDropdownToggle = false;
          memoirDropdownDiv.setAttribute("style", "visibility: hidden; opacity: 0; transition: opacity 0.3s linear; z-index: -10;");
        } else {
          memoirDropdownToggle = true;
          memoirDropdownDiv.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity 0.3s linear; z-index: 10;");
        }
        // $state.go('memoir');
      }

      function hoverOffFunStuff() {
        let funStuffDropdownDiv = document.getElementById('funStuffDropdownDiv');

        if (funStuffDropdownToggle && !overFunStuffMenu) {
          setTimeout(()=>{
            if (funStuffDropdownToggle && !overFunStuffMenu) {
              funStuffDropdownToggle = false;
              funStuffDropdownDiv.setAttribute("style", "visibility: hidden; opacity: 0; transition: opacity 0.3s linear; z-index: -10;");
            }
          }, 500);
        }
      }

      function hoverOffAuthor() {
        let authorDropdownDiv = document.getElementById('authorDropdownDiv');

        if (authorDropdownToggle && !overAuthorMenu) {
          setTimeout(()=>{
            if (authorDropdownToggle && !overAuthorMenu) {
              authorDropdownToggle = false;
              authorDropdownDiv.setAttribute("style", "visibility: hidden; opacity: 0; transition: opacity 0.3s linear; z-index: -10;");
            }
          }, 500);
        }
      }

      function hoverOffMemoir() {
        let memoirDropdownDiv = document.getElementById('memoirDropdownDiv');

        if (memoirDropdownToggle && !overMemoirMenu) {
          setTimeout(()=>{
            if (memoirDropdownToggle && !overMemoirMenu) {
              memoirDropdownToggle = false;
              memoirDropdownDiv.setAttribute("style", "visibility: hidden; opacity: 0; transition: opacity 0.3s linear; z-index: -10;");
            }
          }, 500);
        }
      }

      function navigateNovels() {
        $state.go('novels');
      }

      function onInit() {
        console.log("Landing is lit");
        let landingPic = document.getElementById('contentImg');
        landingPic.setAttribute("style", "opacity: 0.2; filter: hue-rotate(60deg);");
        setTimeout(()=>{
          landingPic.setAttribute("style", "opacity: 1; filter: hue-rotate(0deg); transition: all 1s linear;");
        }, 200)



      }

    }

}());
