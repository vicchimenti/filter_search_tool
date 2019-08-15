
// 
// $(function() {
//     console.log("here");
//     $('#input-27855').change(function () {
//         console.log("change");
//         $('.destination li').filter(function(i, e) {
//             console.log("filter");
//             if ($(e).text() != '.destintionDropDownMenu option')
//                 $(this).parent().addClass('hideByDestinationDropDownMenu');
//             else
//                 $(this).parent().removeClass('hideByDestinationDropDownMenu');
//         });
//         console.log("filtered");
//     });
//     console.log("done");
// });
//
//







// .educationAbroadItemWrapper .educationAbroadItem .externalLink a:link {
//     color: #0000EE;
// }
//
// .educationAbroadItemWrapper .educationAbroadItem .externalLink a:visited {
//     color: #551A8B;
// }
//
// .educationAbroadItemWrapper .educationAbroadItem .externalLink a:hover {
//     color: #0052EE;
// }
//
// .educationAbroadItemWrapper .educationAbroadItem .externalLink a:active {
//     color: #FF0000;
// }




//<span class="fas fa-external-link-alt"></span></a>


// document.write('<div class="card-group">');
// /* -- Write Program Level 1 Summary Stats --*/
// document.write('<div class="card" id="card1">');
// document.write('<div class="card-body" id="level1">');
// document.write('<div class="destination"><h3>Destinations</h3><ul>' +  listOfDestinations + '</ul></div>');
// document.write('<div class="programType"><h4>Program Type</h4><ul> ' +  listOfTypes + '</ul></div>');
// document.write('<div class="fieldOfStudy"><h4>Field of Study</h4><ul>' +  listOfStudyAreas + '</ul></div>');
// document.write('</div></div>');
// /* -- Write Program Level 2 Summary Stats --*/
// document.write('<div class="card" id="card2">');
// document.write('<div class="card-body" id="level2">');
// document.write('<div class="programFee"><h4>Program Fees</h4><ul>' +  listOfProgramFees + '</ul></div>');
// document.write('<div class="language"><h4>Language of Instruction</h4><ul>' +  listOfLanguages + '</ul></div>');
// document.write('<div class="features"><h4>Features</h4><ul>' +  listOfFeatures + '</ul></div>');
// document.write('</div></div>');
// /* -- Write Program Level 3 Details --*/
// document.write('<div class="card" id="card3">');
// document.write('<div class="card-body" id="level3">');
// document.write('<div class="gpa"><h4>GPA Requirements</h4><ul> ' +  listOfGPA + '</ul></div>');
// document.write('<div class="housing"><h4>Housing Accommodations</h4><ul> ' +  listOfHousing + '</ul></div>');
// document.write('<div class="term"><h4>Term</h4><ul>' +  listOfTerms + '</ul></div>');
// document.write('</div></div>');


// // TODO: Selects all options when the value is contained within, such as 2000 selects both 2000 and 12000
// $(function () {
//   $('#input-27864').quicksearch('.educationAbroadItemWrapper', {
//     'delay': 100,
//     'selector': '.programFee > ul',
//     'stripeRows': ['even', 'odd'],
//     'noResults': '.noResultsToShow',
//     'bind': 'keyup click',
//     'minValLength': 2,
//     'prepareQuery': function (val) {
//       return new RegExp(val, "i");
//     },
//     'testQuery': function (query, txt, _row) {
//       return query.test(txt);
//     },
//     'show': function() {
//       $(this).removeClass('hideByProgramFeeDropDown');
//     },
//     'hide': function() {
//       $(this).addClass('hideByProgramFeeDropDown');
//     },
//     'onAfter': function () {
//       anythingThere();
//     }
//   });
// });





// $(function () {
//   $('select#input-27855').quicksearch('.educationAbroadItemWrapper', {
//     'delay': 100,
//     'selector': '.destination > ul',
//     'stripeRows': ['even', 'odd'],
//     'noResults': '.noResultsToShow',
//     'bind': 'keyup click',
//     'minValLength': 2,
//     'prepareQuery': function (val) {
//       return new RegExp(val, "i");
//     },
//     'testQuery': function (query, txt, _row) {
//       return query.test(txt);
//     },
//     'show': function() {
//       $(this).removeClass('hideByDestinationDropDownMenu');
//     },
//     'hide': function() {
//       $(this).addClass('hideByDestinationDropDownMenu');
//     },
//     'onAfter': function () {
//       anythingThere();
//     }
//   });
// });





//
// [name='fieldValue']

// $(function () {
//   $('#SelectBox-ByDestination').change(function() {
//     var $dest = $(this).val();
//     $('.destinations').each(function() {
//       var $matches = $('.destination li').filter(function() {
//         return $(this).text() === $dest
//       });
//       if (!$matches.length) {
//         $(this).parent().addClass('hideByDestinationDropDownMenu');
//       } else {
//         $(this).parent().removeClass('hideByDestinationDropDownMenu');
//       }
//     });
//   });
// });
//
//
// $(function () {
//   console.log("Here");
//   $('#input-27855').change(function() {
//     console.log("change");
//     var $dest = $(this).val();
//     $('.destinations').each(function() {
//       var $matches = $('.destination li').filter(function() {
//         console.log("Filter");
//         return $(this).text() === destintion
//       });
//       if (!$matches.length) {
//         $(this).parent().addClass('hideByDestinationDropDownMenu');
//         console.log("add");
//       } else {
//         $(this).parent().removeClass('hideByDestinationDropDownMenu');
//         console.log("remove");
//       }
//       console.log($matches);
//     });
//     console.log("changed");
//   });
//   console.log("done");
// });
//
//
// $(function () {
//     $('#input-27855').on('change', function() {
//       var dest = $(this).val();
//       $('.destinations').each(function() {
//         var $matches = $('.destintion li').filter(function() {
//           return $(this).text() === dest
//         });
//         if(!$matches.length){
//            // hide this destination div
//         }else{
//            // show it
//         }
//
//       });
//     });
// })
//
//     // var $key = $('#input-27855 option');
//         // var $val = $('.destination');
//           $('#SelectBox-ByDestination').change(function() {
// $('.destinationDropDownMenu').change(function () {
//     $('.destination li').filter(function(i, e) {
//         if ($(e).text() != '.destintionDropDownMenu option')
//             $(this).parent().addClass('hideByDestinationDropDownMenu');
//         else
//             $(this).parent().removeClass('hideByDestinationDropDownMenu');
//     });
// });


















  // document.write('<i class="fas fa-minus"></i><i class="fas fa-plus"></i></button>');








/***************************
#accordion .educationAbroadItemWrapper .educationAbroadItem button.collapsed .fa-minus {
    display: none;
}

#accordion .educationAbroadItemWrapper .educationAbroadItem button.show .fa-plus {
    display: none;
}

// #accordion .educationAbroadItemWrapper .educationAbroadItem button .fas {
    background-color: inherit;
    color: #aa0000;
    padding-left: 10px;
    display: inline-block;
}
********************************/



  // var t4ContentId = '<t4 type=\'meta\' meta=\'content_id\' /><t4 type=\'meta\' meta=\'html_anchor\' />';
  // document.write('<div class="card-header" id="heading<t4 type=\'meta\' meta=\'content_id\' />">');
  // document.write('<button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse<t4 type=\'meta\' meta=\'content_id\' />" aria-expanded="false" aria-controls="collapse<t4 type=\'meta\' meta=\'content_id\' />">');
  // document.write('<div id="collapse<t4 type=\'meta\' meta=\'content_id\' />" class="collapse" aria-labelledby="heading<t4 type=\'meta\' meta=\'content_id\' />" aria-expanded="false" data-parent="#accordion">');



// <i class="fas fa-minus"></i>
// var el = document.getElementsByClassName('educationAbroadItemWrapper')[0];
// var idx = el.id;
  // var idx = '<t4 type="meta" meta="content_id" />';





// <!-- Search By GPA -->
// <!-- GPA Search Field Removed by Request **********
//     <div class="col-xs-12 col-md-4 input input-wrap">
//     <label for="SelectBox-ByGPA">Minimum GPA</label>
//     <div class="select-input">
//         <select name="SelectBox-ByGPA" id="SelectBox-ByGPA">
//             <option value="" disabled selected hidden>Select a GPA...</option>
//             <option value="2.0">2.0</option>
//             <option value="2.5">2.5</option>
//             <option value="2.75">2.75</option>
//             <option value="3.0">3.0</option>
//         </select>
//     </div>
// </div> -->



// var options = ["1", "2", "3", "4", "5"];
// $('#select').empty();
// $.each(options, function(i, p) {
//     $('#select').append($('<option></option>').val(p).html(p));
// });



  // .hideByInstitutionDropDown,



  //  ******************* Remove Institution per Notes  *******************  //
  // $(function () {
  //   $('#SelectBox-ByInstitution').quicksearch('.educationAbroadItemWrapper', {
  //     'delay': 100,
  //     'selector': '.institution > ul',
  //     'stripeRows': ['even', 'odd'],
  //     'noResults': '.noResultsToShow',
  //     'bind': 'keyup click',
  //     'minValLength': 2,
  //                  'prepareQuery': function (val) {
  //       return new RegExp(val, "i");
  //     },
  //     'testQuery': function (query, txt, _row) {
  //       return query.test(txt);
  //     },
  //     'show': function() {
  //       $(this).removeClass('hideByInstitutionDropDown');
  //     },
  //     'hide': function() {
  //       $(this).addClass('hideByInstitutionDropDown');
  //     },
  //     'onAfter': function () {
  //       anythingThere();
  //     }
  //   });
  // });




  // <!-- Search By Institution *********  Search Field Currently deactivated **** -->
  // <!-- <div class="col-xs-12 col-md-4 input input-wrap">
  //     <label for="SelectBox-ByInstitution">Institution</label>
  //     <div class="select-input">
  //         <select name="SelectBox-ByInstitution" id="SelectBox-ByInstitution">
  //         <option value="" disabled selected hidden>Select an Institution...</option>
  //             <option value="All Institutions">All Institutions</option>
  //             <option value="Universidad Católica de Valencia">Universidad Católica de Valencia</option>
  //             <option value="Aix-Marseille University">Aix-Marseille University</option>
  //             <option value="Seattle University">Seattle University</option>
  //         </select>
  //     </div>
  // </div> -->







    // var deadline = content.get("Deadline"); ****** We may add a deadline field for aplication dates later
    // ************ Remove Institution per notes  ********************//
    // var institution = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Institution' output='normal' display_field='value' />");
    // var listOfInstitutions = "";




      //  ************** remove institutions per notes   ***************  //
      // /* parse the list of institutions, add <span> tags*/
      // if (institution != "") {
      //   var arrayOfInstitutions = institution.split(',');
      //   for (i=0; i < arrayOfInstitutions.length; i++) {
      //     listOfInstitutions += '<li>' + arrayOfInstitutions[i] + '</li>';
      //   }
      // }




        // document.write('<div class="institution"><h4>Institutions</h4><ul>' +  listOfInstitutions + '</ul></div>');
        // document.write('<div class="programItemDetails">'); *** not sure we need this line
        // if(deadline != "") {
        //   document.write('<div class="Deadline"><h4>Deadline</h4><ul><li>' +  deadline + '</li></ul></div>');
        // } ****** If we need to add a deadline field
