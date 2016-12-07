 /**
 * Created by Jbt on 12/6/2016.
 */
 (function () {
     angular.module('optionsInfo').service('optionsService', OptionsService);

     function OptionsService($q) {
         var appContent = [
             {
                 text: 'homePageContent.html,'
             },
             {
                 text: 'appointmants.html'
             },
             {
                 text: 'assignment.html'
             },
             {
                 text: 'settings.html'
             }
         ];
         var appIcons = [
             {
                 name: 'face'
             },
             {
                 name: 'perm_contact_calendar'
             },
             {
                 name: 'assignment'
             },
             {
                 name: 'settings'
             }
         ];
         var optionsInfo = [
             {
                 name: 'home page',
                 materialIcon: appIcons[0],
                 content: appContent[0]
             },
             {
                 name: 'appointmants',
                 materialIcon: appIcons[1],
                 content: appContent[1]
             },
             {
                 name: 'tasks',
                 materialIcon: appIcons[2],
                 content: appContent[2]
             },
             {
                 name: 'settings',
                 materialIcon: appIcons[3],
                 content: appContent[3]
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