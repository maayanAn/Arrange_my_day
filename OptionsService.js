 /**
 * Created by Jbt on 12/6/2016.
 */
 (function () {
     angular.module('optionsInfo').service('optionsService', OptionsService);

     function OptionsService($q) {
         var homePageContent = [

         ];
         var optionsInfo = [
             {
                 name: 'home page',
                 avatar: '',
                 content: homePageContent[0]
             },
             {
                 name: 'appointmants',
                 avatar: '',
                 content: homePageContent[1]
             },
             {
                 name: 'tasks',
                 avatar: '',
                 content: homePageContent[2]
             }
         ];

         this.loadAllOptions = function () {
             return $q(function (resolve, reject) {
                if(optionsInfo){
                    resolve(optionsInfo);
                }
                else {
                    reject("Could not resolve options");
                }
             });

         }

     }
 })();