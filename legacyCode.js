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
