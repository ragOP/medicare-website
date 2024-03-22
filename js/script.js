$(document).ready(function () {
  
 /* setTimeout(function(){
    var visitor_id;
    _paq.push([ function() { visitor_id = this.getVisitorId(); }]);
    console.log("visitor_id2: ", visitor_id);

  const url = new URL(window.location.href);
  url.searchParams.set('visitor_id', visitor_id);
  window.history.replaceState(null, null, url); 

  // window.history.pushState(null, null, '&visitor_id='+visitor_id);

  },3000);*/

  var step = $(".step");

  var defaultRingba = "JS8555a0779ecf47f2a6db90ad0cdbde49";
  var yyRingba = "JS670e827a30f3478e89a38de7f0659ab9";
  var ynRingba = "JSf465b6c07fd6442bbc1c8979894334b1";
  var nnRingba = "JSe5d0bc4b12414384950952dc282b8697";
  var exitRingba = "JSd47265b4d9684ea480b87872a1e7a0a5";


  if (window.history && window.history.pushState) {
    window.history.pushState("forward", null, "");

    $(window).on("popstate", function () {
      modal.addClass("visible");
      // updateRingba(exitRingba, 'exit');
      // console.log('dada')
    });
  }

  $("#btnGray").on("click", function () {
    var rurl = $(this).attr("data-url");
    window.location.href = rurl;
  });

  //updateRingba(defaultRingba);

  /*$.ajax({
    url: "../../getUserState.php",
    method: "get",
    dataType: "json",
    success: function (json) {
      // console.log(json);
      if (json.status) {
        $(".ip_state").text(json.state);
        updateRingba(defaultRingba);
      }
    },
    error: function () {
      // console.log("error");
    },
  });*/

  $("#carriers-slide-1").slick({
    dots: false,
    arrows: false,
    slidesToShow: 7, // Adjust the number of logos visible at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Set autoplaySpeed to 0 for continuous sliding
    speed: 2000, // Adjust the transition speed as needed
    cssEase: "linear", // Ensures a linear slide transition
    infinite: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Adjust for smaller screens if needed
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Adjust for mobile screens if needed
        },
      },
    ],
  });

  $("#carriers-slide-2").slick({
    dots: false,
    arrows: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2000,
    cssEase: "linear",
    infinite: true,
    variableWidth: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Adjust for smaller screens if needed
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Adjust for mobile screens if needed
        },
      },
    ],
  });

  // $("#btn_start, #toplink").on("click", function () {
  $(".initialBtn").on("click", function () {
    $("#questiontag").fadeOut(500);
    $("#main").fadeOut(500, function () {
      $("#step1, #steps-container").fadeIn(500);
    });
    $("#flexcard, #flexcardbenfits, #carriers, #flexsteps").fadeOut(500);

    $(".percent-value").text("25%");
    $(".percent").css("width", 25 + "%");
    scrollToTop();
  });

  $(".btn1, .skip1").on("click", function () {
    var selectedValue = $(this).attr("data-value");
    $("#medicare").val(selectedValue);
    $("#step1").fadeOut(500, function () {
      $("#step2").fadeIn(500);
    });

    scrollToTop();

    $(".percent-value").text("50%");
    $(".percent").css("width", 50 + "%");

    if (selectedValue == "yes") {
      $("#list1").addClass("yes");
    } else {
      $("#list1").addClass("no");
    }
  });

  $(".btn2, .skip2").on("click", function () {
    var selectedValue = $(this).attr("data-value");
    $("#benefit").val(selectedValue);

    // $("#step2").fadeOut(500, function () {
    //   $("#step3").fadeIn(500);
    // });

    // scrollToTop();

    $(".percent-value").text("75%");
    $(".percent").css("width", 75 + "%");

    if (selectedValue == "yes") {
      $("#list2").addClass("yes");
      // $("#medicaid-s").show();
      // $("#medicaid-n").hide();
    } else {
      $("#list2").addClass("no");
      // $("#medicaid-s").hide();
      // $("#medicaid-n").show();
    }

    /*
    if($("#medicare").val() == "yes" && $("#benefit").val() == "yes"){
     // updateRingba(yyRingba);
      $(".ctanumber").text(calltxt_yy);
      $(".ctalink").attr("href", callnum_yy);
    }else if($("#medicare").val() == "yes" && $("#benefit").val() == "no"){
      //updateRingba(ynRingba);
      $(".ctanumber").text(calltxt_yn);
      $(".ctalink").attr("href", callnum_yn);
    }else if($("#medicare").val() == "no" && $("#benefit").val() == "no"){
     // updateRingba(nnRingba);
      $(".ctanumber").text(calltxt_nn);
      $(".ctalink").attr("href", callnum_nn);
    }
    $.getScript(ringbaUrl);*/
    
    $("#step2").fadeOut(500, function () {
      $("#step3").fadeIn(500);

      setTimeout(function () {
        // $(".stepper-item1").removeClass("active").addClass("completed").delay(1000)
        // .queue(function() {
        //     $(".stepper-item2").addClass("active");
        //     $("#list1").fadeIn(500);
        // });

        $(".stepper-item1").removeClass("active").addClass("completed");
        $(".stepper-item2").addClass("active");
        $("#list1").fadeIn(500);

        setTimeout(function () {
          $(".stepper-item2").removeClass("active").addClass("completed");
          $(".stepper-item3").addClass("active");
          $("#list2").fadeIn(500);

          setTimeout(function () {
            $(".stepper-item3").removeClass("active").addClass("completed");
            $(".stepper-item4").addClass("active");
          //   $("#list3").fadeIn(500);

            setTimeout(function () {
              $(".stepper-item4").removeClass("active").addClass("completed");

              $(".percent-value").text("100%");
              $(".percent").css("width", 100 + "%");

              $("#step3").fadeOut(500, function () {
                $(".wizard-title").fadeOut(500);
                $(".progress").fadeOut(500);
                $("#step4").fadeIn(500);

                if($("#flexcard1").length){
                  $("#flexcard1").addClass("mobile");
                }

              });
            }, 1500);
          }, 1500);
        }, 1500);
      }, 1500);
    });

    scrollToTop();

  });

  $(".btn3, .skip3").on("click", function () {
    var selectedValue = $(this).attr("data-value");
    $("#benefit").val(selectedValue);

    if (selectedValue == "yes") {
      $("#list3").addClass("yes");
    } else {
      $("#list3").addClass("no");
    }

    $("#step3").fadeOut(500, function () {
      $("#step4").fadeIn(500);

      setTimeout(function () {
        // $(".stepper-item1").removeClass("active").addClass("completed").delay(1000)
        // .queue(function() {
        //     $(".stepper-item2").addClass("active");
        //     $("#list1").fadeIn(500);
        // });

        $(".stepper-item1").removeClass("active").addClass("completed");
        $(".stepper-item2").addClass("active");
        $("#list1").fadeIn(500);

        setTimeout(function () {
          $(".stepper-item2").removeClass("active").addClass("completed");
          $(".stepper-item3").addClass("active");
          $("#list2").fadeIn(500);

          setTimeout(function () {
            $(".stepper-item3").removeClass("active").addClass("completed");
            $(".stepper-item4").addClass("active");
            $("#list3").fadeIn(500);

            setTimeout(function () {
              $(".stepper-item4").removeClass("active").addClass("completed");

              $(".percent-value").text("100%");
              $(".percent").css("width", 100 + "%");

              $("#step4").fadeOut(500, function () {
                $(".wizard-title").fadeOut(500);
                $(".progress").fadeOut(500);
                $("#step5").fadeIn(500);
              });
            }, 1500);
          }, 1500);
        }, 1500);
      }, 1500);
    });

    scrollToTop();
  });
});

function scrollToTop() {
   var h_height= $("header").outerHeight(true);
  var tp = $("#steps-container").offset().top - (h_height + 30);
  $("html, body").animate(
    {
      scrollTop: tp,
    },
    1000
  );
}

/*
function updateRingba(jsTag, type='') {
  $.ajax({
    url: "../ringbapool.php",
    type: "POST",
    data: {jstag: jsTag},
    dataType: "json",
    success: function (json) {
      //  console.log(json);
      if (json.status) {
        var formatNum = json.displayNumber.substr(0, 1) + '-' + json.displayNumber.substr(1, 3) + '-' + json.displayNumber.substr(4, 3) + '-' + json.displayNumber.substr(7, 4);
        // console.log(json.displayNumber, formatNum)
        if(type == "exit"){
          $(".exitpopnumber").text(formatNum);
          $(".exitpop").attr("href", json.phoneNumber);
        }else{
          $(".ctanumber").text(formatNum);
          $(".ctalink").attr("href", json.phoneNumber);
        }
      }
    },
    error: function () {
      console.log("error");
    },
  });
}
*/

var modal = $("#modal-custom");
var modal_close = $("#modal_close");

modal_close.on("click", function () {
  modal.removeClass("visible");
});

$(document).click(function (e) {
  if ($(e.target).is("#modal-custom")) {
    $("#modal-custom").removeClass("visible");
    // console.log('da')
  }
});