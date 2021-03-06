(function() {
  'use strict';

  var memoirDropdownToggle = false;
  var funStuffDropdownToggle = false;
  var overMemoirMenu = false;
  var overAuthorMenu = false;
  var overFunStuffMenu = false;
  var authorDropdownToggle = false;


  angular.module('app')
    .component('futureprojects', {
      controller: FutureProjectsController,
      templateUrl: '/js/futureprojects/futureprojects.template.html'
    });

    FutureProjectsController.$inject = ['$http', '$state', '$stateParams'];

    function FutureProjectsController($http, $state, $stateParams){
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
      vm.navigateWelome = navigateWelome;
      vm.navigageIntroduction = navigageIntroduction;
      vm.navigateFirstChapter = navigateFirstChapter;
      vm.navigateToSurprise = navigateToSurprise;
      vm.navigateShortBio = navigateShortBio;
      vm.navigatePublishedBooks = navigatePublishedBooks;
      vm.navigateLongBio = navigateLongBio;
      vm.navigateFunInfo = navigateFunInfo;
      vm.navigatePhotoSite = navigatePhotoSite;
      vm.navigateShortStory = navigateShortStory;
      vm.navigateSecondChapter = navigateSecondChapter;
      vm.navigateThirdChapter = navigateThirdChapter;

      function navigateThirdChapter() {
        $state.go('memoirthirdchapter');
      }

      function navigateSecondChapter() {
        $state.go('memoirsecondchapter');
      }

      function navigateShortStory() {
        $state.go('shortstory');
      }

      function navigatePhotoSite() {
        $state.go('photowebsite');
      }

      function navigateFunInfo() {
        $state.go('funinfo');
      }

      function navigateLongBio() {
        $state.go('longbio');
      }

      function navigatePublishedBooks() {
        $state.go('publishedbooks');
      }


      function navigateShortBio() {
        $state.go('shortbio');
      }

      function navigateToSurprise() {
        $state.go('memoir');
      }

      function navigateFirstChapter() {
        $state.go('memoirfirstchapter');
      }

      function navigageIntroduction() {
        $state.go('memoirintroduction')
      }

      function navigateWelome() {
        $state.go('landing');
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
        console.log("fun stuff is lit");
        vm.books = [];
        for (let i = 0; i < bookImages.length; i++) {
          vm.books[i] = {};
          vm.books[i].cover = bookImages[i];
          vm.books[i].title = bookTitles[i];
          vm.books[i].author = bookAuthors[i];
          vm.books[i].link = bookLinks[i];
        }

        vm.retreats = [];
        for (let j = 0; j < retreatImages.length; j++) {
          vm.retreats[j] = [];
          vm.retreats[j].image = retreatImages[j];
          vm.retreats[j].link = retreatLinks[j];
          vm.retreats[j].name = retreatNames[j];
          vm.retreats[j].location = retreatLocations[j];
        }





      }

    }

}());
