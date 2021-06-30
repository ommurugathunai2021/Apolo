// JavaScript Document
jQuery(document).ready(function($) {
    "use strict"
    $("a[href='#top']").click(function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

    /**
     * Main Js
     */
    $(window).on('load', function() {
        $('#loader').hide();
        $('.page-cms table').wrap('<div class="ap-tbl"></div>');
    });

    $(".accordion_tab").click(function() {
        $(".accordion_tab").each(function() {
            $(this).parent().removeClass("active"), $(this).removeClass("active")
        }), $(this).parent().addClass("active"), $(this).addClass("active")
    });
    /*
     * Toggel Mobile Menu
     */
    $(".scrol_dwn").click(function() {
        $(".cate_section_").toggle();
    });
    $(".ap-nav ul.prmry-nav > li > a").click(function() {
        //$( ".pure-css .sub-menu" ).toggle();
        $(".pure-css .sub-menu").hide();
        $(this).parent().children("ul").toggle();
    });

    $('body').on('click', '.toggle-menu', function() {
        $(".ap-nav").addClass('open');
        $(".menu-overlay").addClass("show");
    });

    $('body').on('click', '.menu-close', function(e) {
        e.preventDefault();
        $(".ap-nav").removeClass('open');
        $(".menu-overlay").removeClass("show");
    });

    $('body').on('click', '.toggle-sidebar-menu', function() {

        $(".sidebar-menu-wrapper").slideToggle(500);
    });

    $('body').on('click', '.foundation-card-item', function(e) {

        e.preventDefault();

        var containercalss = $(this).data('class');
        //alert(containercalss);
        $(containercalss).addClass('show');
    });

    $('body').on('click', '.btn-close-foundation-tab', function(e) {

        e.preventDefault();

        $(this).parent().parent().removeClass('show');
    });

    $('body').on('click', '.panel-title', function(e) {

        e.preventDefault();
        $('.panel-default .panel-collapse').removeClass('show');
        //$(this).parent().parent().childern('.panel-collapse').addClass('show');

        var id = $(this).parent().attr('id');
        console.log(id);
        //alert(id);
        //setTimeout(function(){
        $('html, body').stop().animate({
            scrollTop: $("#" + id).offset().top - 10
        }, 300)
        //},600);


    });

    if (jQuery("#blg-container").length) {

        var speciality = $("#healthlibrary-category").val();

        if (speciality == "") {
            speciality = null;
        }

        fetch('https://healthlibrary.askapollo.com/wp-json/rest_services/v1/doctor-articles/category=' + speciality)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                appendData(data);
            })
            .catch(function(err) {
                console.log('error: ' + err);
            });

        function appendData(resopnse) {

            var htmlDiv = document.createElement('div');
            //htmlDiv.innerHTML = '<p>foo</p><style>' + css + '</style>';
            //document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[1]);
            //console.log(data);
            var mainContainer = document.getElementById("blg-container");
            var markup;

            //console.log(data.data);

            var data = resopnse.data;

            markup = '<div class="row">';
            for (var i = 0; i < data.length; i++) {

                console.log(data[i]);
                var list = data[i];
                var image_url;
                if (list.featured_image == false) {
                    image_url = "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets/images/news-default-thumb.jpg";
                } else {
                    image_url = list.featured_image;
                }

                markup += '<article class="col-lg-4 col-md-6 mb-30 wow fadeInUp">'
                markup += '<div class="post-card-1 border-radius-10 hover-up">'
                markup += '<div class="post-thumb thumb-overlay img-hover-slide position-relative" style="background-image: url(' + image_url + '); background-size: 100%;">'
                markup += '<a class="img-link" href="' + list.url + '" target="_blank"></a>'
                markup += '<ul class="social-share">'
                markup += '<li><a href="#"><i class="elegant-icon social_share"></i></a></li>'
                markup += '<li><a class="fb" href="#" title="Share on Facebook" target="_blank"><i class="elegant-icon social_facebook"></i></a></li>'
                markup += '<li><a class="tw" href="#" target="_blank" title="Tweet now"><i class="elegant-icon social_twitter"></i></a></li>'
                markup += '<li><a class="pt" href="#" target="_blank" title="Pin it"><i class="elegant-icon social_pinterest"></i></a></li>'
                markup += '</ul>'
                markup += '</div>'
                markup += '<div class="post-content p-30">'
                markup += '<div class="entry-meta meta-0 font-small mb-10">'
                markup += '<span class="post-cat text-warning">' + list.category + '</span>'
                markup += '</div>'
                markup += '<div class="d-flex post-card-content">'
                markup += '<h5 class="post-title font-weight-900">'
                markup += '<a href="' + list.url + '" target="_blank">' + list.title + '</a>'
                markup += '</h5>'
                //markup += '<div class="short-desc">'
                //	markup += '<p>'+list.short_description+'</p>'
                //markup += '</div>'
                markup += '<div class="entry-meta meta-1 float-left font-x-small text-uppercase">'
                markup += '<a href="' + list.url + '" class="btn-read-more" target="_blank">Read More </a>'
                markup += '</div>'
                markup += '</div>'
                markup += '</div>'
                markup += '</div>'
                markup += '</article>';





            }
            markup += '</div>';
            mainContainer.innerHTML = markup;


        }
    }


    if ($('.hoorizontal-tab .tab-arrow').length) {
        $(".tab-arrow li:first a").addClass('show in active');

        $(".tab-container .tab-pane:first").addClass("show in active");
    }

    /*
     * Contact Form 
     */
    $('body').on('click', '.toggle-contact-form', function() {
        $(".tab-pane").removeClass('fade in active');
        var tab = $(this).data('id');
        //alert(tab);
        $(tab).addClass('fade in active');

    });

    $('body').on('click', '#menu-main-menu li a .arrow', function(e) {

        if ($(window).width() < 1025) {

            // console.log("Has children");
            if ($(this).closest("li").children("ul").length) {
                $(this).parent().toggleClass('expanded');
                $(this).parent().parent().toggleClass('active-menu');
                e.preventDefault();
            }
        }
    });

    if ($(window).width() < 1025) {

        $('#menu-main-menu > li.menu-item-has-children > a').append('<span class="glyphicon arrow"></span>');
        $('#menu-main-menu > li li.menu-item-has-children > a').append('<span class="glyphicon arrow"></span>');
    }

    /*
     * Main slider js 
     */
    if ($("#main-banner").length) {
        $('#main-banner').owlCarousel({
            loop: false,
            margin: 10,
            nav: true,
            autoHeight: true,
            pagination: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }
    if ($("#page-slider").length) {
        $('#page-slider').owlCarousel({
            loop: false,
            margin: 10,
            nav: true,
            pagination: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }
    if ($(".featured-news-slider").length) {

        $('.featured-news-slider').owlCarousel({
            loop: false,
            margin: 10,
            nav: false,
            pagination: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }

    if ($(".inner-page-slider").length) {

        $('.inner-page-slider').owlCarousel({
            loop: false,
            margin: 10,
            nav: true,
            pagination: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }

    if ($(".accordion-container").length > 0) {
        new Accordion('.accordion-container');
    }

    $('body').on('click', '.ac-q', function() {
        var id = jQuery(this).parent().attr('id');
        //alert(id);
        setTimeout(function() {
            $('html, body').delay(1000).stop().animate({
                scrollTop: $("#" + id).offset().top - 10
            }, 300)
        }, 600);
    });

    jQuery('body').on('click', '.btn-video-popup', function(e) {
        e.preventDefault();
        var type = jQuery(this).data('type');
        var link = jQuery(this).data('link');
        var html;
        if (type == 'youtube') {
            html = '<div class="video-pop-container">' +
                '<button class="btn-close-video-pop">&#10005;</button>' +
                '<iframe width="100%" height="360" src="' + link + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
                '</div>';

        } else {

            html = '<div class="video-pop-container">' +
                '<button class="btn-close-video-pop">&#10005;</button>' +
                '<video src="' + link + '" webkit-playsinline="" playsinline="" data-video="https://www.w3schools.com/html/movie.mp4" loop="false" muted="" controls=""></video>' +
                '</div>';
        }

        jQuery(".video-pop-overlay").html(html).show();

    });

    jQuery('body').on('click', '.btn-close-video-pop', function() {
        jQuery(".video-pop-overlay").hide().empty();

    });


    $('body').on('change', '#news-cate', function() {
        this.form.submit();

    });


    $('body').on('change', '#news-sort', function() {
        this.form.submit();
    });

    $('body').on('change', '#sorty-by-hospital', function() {
        this.form.submit();
    });

    $('body').on('change', '#doctors_achieve_location', function() {
        this.form.submit();
    });
    $('body').on('change', '#doctors_achieve_speciality', function() {
        this.form.submit();
    });

    $('body').on('click', '#btn-hospital-search', function() {
        $("#header-hospitals-search-form").submit();
    });

    //if($('.lead_city').length){

    $('body').on('click', '.btn-quick-book-popup,.btn-book-appointment-doctors-achieve,.slide-side-cat', function() {
        $.ajax({
            type: "POST",
            dataType: "json",
            url: ajax_vars.ajaxurl,
            data: {
                action: "module_get_all_cities",

            },
            success: function(response) {

                //console.log(response);


                if (response.response) {

                    $(".lead_city").html(response.cities);

                } else {

                }

            }
        });
    });
    //}
    $('body').on('click', '.scrol_dwn a.load-links', function() {
        $(this).removeClass("load-links");
        $.ajax({
            type: "POST",
            dataType: "json",
            url: ajax_vars.ajaxurl,
            data: {
                action: "getPopularSearch",

            },
            success: function(response) {

                //console.log(response);


                if (response.response) {

                    $(".popular__search").html(response.data);

                } else {

                }

            }
        });
    });


    /*
     * Send OTP for Doctors Achieve page
     */
    $('body').on('click', '#book_an_appointment__form_doctors_achieve .btn-send-otp', function(e) {
        e.preventDefault();
        $(this).html('Sending...');
        var phone = $("#book_an_appointment__form_doctors_achieve .lead_phone").val();

        $.ajax({
            type: "POST",
            dataType: "json",
            url: ajax_vars.ajaxurl,
            data: {
                action: "module_send_otp_verification",
                phone: phone

            },
            success: function(response) {

                console.log(response);

                $('#book_an_appointment__form_doctors_achieve .lead_res').html();
                $('#book_an_appointment__form_doctors_achieve .btn-send-otp').html('Send Otp');
                //console.log(response);

                if (response.response == true) {

                    alert(response.message);

                    $('#book_an_appointment__form_doctors_achieve .otp-verification').show();

                    $("#book_an_appointment__form_doctors_achieve #btn-book-appointment").attr('disabled', false);

                    $("#book_an_appointment__form_doctors_achieve #btn-book-appointment").removeClass('disable');

                } else {
                    $("#book_an_appointment__form_doctors_achieve #btn-book-appointment").attr('disabled', true);
                    //$('.lead_res').html(response.message);
                    alert(response.message);
                    $('#book_an_appointment__form_doctors_achieve .otp-verification').hide();
                    $(response.focus).focus();

                }
            }
        });

    });

    $('body').on('click', '#book_an_appointment__form_doctors_achieve #btn-book-appointment', function(e) {
        e.preventDefault();
        $(this).html('Processing...');


        $.ajax({
            type: "POST",
            dataType: "json",
            url: ajax_vars.ajaxurl,
            data: $("#book_an_appointment__form_doctors_achieve").serialize(),
            success: function(response) {

                console.log(response);

                $('#book_an_appointment__form_doctors_achieve .lead_res').html(response.message);

                console.log(response);
                $("#book_an_appointment__form_doctors_achieve #btn-book-appointment").html('Submit');

                if (response.response == true) {


                    $("#book_an_appointment__form_doctors_achieve")[0].reset();
                    $('#book_an_appointment__form_doctors_achieve .otp-verification').hide();
                    $("#book_an_appointment__form_doctors_achieve #btn-book-appointment").attr('disabled', true);
                    $("#book_an_appointment__form_doctors_achieve #btn-book-appointment").html('Submit');

                    setTimeout(function() {
                        $('#book_an_appointment__form_doctors_achieve .lead_res').html('');

                        window.location.href = response.redirect;

                    }, 2000);

                } else {



                }
            }
        });

    });

    /*
     * End Doctors Achieve page Appointment
     */


    if ($('.field__std').length) {
        //$('body').on('click','#field_std', function() {
        //if($('#field_std.loaded').length<0){
        //$(this).addClass('loaded');
        $.ajax({
            type: "POST",
            dataType: "json",
            url: ajax_vars.ajaxurl,
            data: {
                action: "countryCodeSelector",

            },
            success: function(response) {

                //console.log(response);


                if (response.response) {

                    $(".field__std").html(response.codes);

                } else {

                }

            }
        });

    }
    // }); 

    $('body').on('click', '.post-a-query-popup,.i-slide-ask', function() {
        $.ajax({
            type: "POST",
            dataType: "json",
            url: ajax_vars.ajaxurl,
            data: {
                action: "getAllCountries",

            },
            success: function(response) {

                console.log(response);


                if (response.response) {

                    $(".enquiry-country").html(response.countries);

                } else {

                }

            }
        });
    });
    if ($('.page-contact').length) {

        $.ajax({
            type: "POST",
            dataType: "json",
            url: ajax_vars.ajaxurl,
            data: {
                action: "getAllCountries",

            },
            success: function(response) {

                console.log(response);


                if (response.response) {

                    $(".enquiry-country").html(response.countries);

                } else {

                }

            }
        });
    }

    jQuery(document).on('change', '.enquiry-country', function() {

        var country_id = jQuery(this).find("option:selected").data('country-id');
        var form_id = jQuery(this).parent().data('form');
        $.ajax({
            type: "POST",
            dataType: "json",
            url: ajax_vars.ajaxurl,
            data: {
                action: "getAllStates",
                country_id: country_id,
                form_id: form_id

            },
            success: function(response) {

                console.log(response);


                if (response.response) {

                    $(response.form + " .enquiry-state").html(response.states);

                } else {

                }

            }
        });
    });

    jQuery(document).on('change', '.enquiry-state', function() {

        var state_id = jQuery(this).find("option:selected").data('state-id');

        var form_id = jQuery(this).parent().data('form');
        $.ajax({
            type: "POST",
            dataType: "json",
            url: ajax_vars.ajaxurl,
            data: {
                action: "getAllCities",
                state_id: state_id,
                form_id: form_id

            },
            success: function(response) {

                console.log(response);


                if (response.response) {

                    $(response.form + " .enquiry-city").html(response.cities);

                } else {

                }

            }
        });
    });





    /*
     * Book An Appointment 
     */
    $('body').on('click', '#book_an_appointment__form .btn-send-otp', function(e) {
        e.preventDefault();
        $(this).html('Sending...');
        var phone = $("#book_an_appointment__form .lead_phone").val();

        $.ajax({
            type: "POST",
            dataType: "json",
            url: ajax_vars.ajaxurl,
            data: {
                action: "module_send_otp_verification",
                phone: phone

            },
            success: function(response) {

                console.log(response);

                $('#book_an_appointment__form .lead_res').html();
                $('#book_an_appointment__form .btn-send-otp').html('Send Otp');
                //console.log(response);

                if (response.response == true) {

                    alert(response.message);

                    $('#book_an_appointment__form .otp-verification').show();

                    $("#book_an_appointment__form #btn-book-appointment").attr('disabled', false);

                    $("#book_an_appointment__form #btn-book-appointment").removeClass('disable');

                } else {
                    $("#book_an_appointment__form #btn-book-appointment").attr('disabled', true);
                    //$('.lead_res').html(response.message);
                    alert(response.message);
                    $('#book_an_appointment__form .otp-verification').hide();
                    $(response.focus).focus();

                }
            }
        });

    });



    $('body').on('click', '#book_an_appointment__form #btn-book-appointment', function(e) {
        e.preventDefault();
        $(this).html('Processing...');


        $.ajax({
            type: "POST",
            dataType: "json",
            url: ajax_vars.ajaxurl,
            data: $("#book_an_appointment__form").serialize(),
            success: function(response) {

                console.log(response);

                $('#book_an_appointment__form .lead_res').html(response.message);

                console.log(response);
                $("#book_an_appointment__form #btn-book-appointment").html('Submit');

                if (response.response == true) {


                    $("#book_an_appointment__form")[0].reset();
                    $('#book_an_appointment__form .otp-verification').hide();
                    $("#book_an_appointment__form #btn-book-appointment").attr('disabled', true);
                    $("#book_an_appointment__form #btn-book-appointment").html('Submit');

                    setTimeout(function() {
                        $('#book_an_appointment__form .lead_res').html('');
                    }, 5000);

                } else {



                }
            }
        });

    });


    /*
     * Book Health Check
     */
    $('body').on('click', '#book_health_check__form .btn-send-otp', function(e) {
        e.preventDefault();
        $(this).html('Sending...');
        var phone = $("#book_health_check__form .lead_phone").val();

        $.ajax({
            type: "POST",
            dataType: "json",
            url: ajax_vars.ajaxurl,
            data: {
                action: "module_send_otp_verification",
                phone: phone

            },
            success: function(response) {

                console.log(response);

                $('#book_health_check__form .lead_res').html();
                $('#book_health_check__form .btn-send-otp').html('Send Otp');
                //console.log(response);

                if (response.response == true) {

                    alert(response.message);

                    $('#book_health_check__form .otp-verification').show();

                    $("#book_health_check__form #btn-book-health-check").attr('disabled', false);

                    $("#book_health_check__form #btn-book-health-check").removeClass('disable');

                } else {
                    $("#book_health_check__form #btn-book-health-check").attr('disabled', true);
                    //$('.lead_res').html(response.message);
                    alert(response.message);
                    $('#book_health_check__form .otp-verification').hide();
                    $(response.focus).focus();

                }
            }
        });

    });



    $('body').on('click', '#book_health_check__form #btn-book-health-check', function(e) {
        e.preventDefault();
        $(this).html('Processing...');


        $.ajax({
            type: "POST",
            dataType: "json",
            url: ajax_vars.ajaxurl,
            data: $("#book_health_check__form").serialize(),
            success: function(response) {

                console.log(response);

                $('#book_health_check__form .lead_res').html(response.message);

                console.log(response);
                $("#book_health_check__form #btn-book-health-check").html('Submit');

                if (response.response == true) {


                    $("#book_health_check__form")[0].reset();
                    $('#book_health_check__form .otp-verification').hide();
                    $("#book_health_check__form #btn-book-health-check").attr('disabled', true);
                    $("#book_health_check__form #btn-book-health-check").html('Submit');

                    setTimeout(function() {
                        $('#book_health_check__form .lead_res').html('');
                    }, 5000);

                } else {



                }
            }
        });

    });

    jQuery(document).on('change', '.lead_city', function() {

        var city = jQuery(this).find("option:selected").text();
        jQuery('.lead_city_name').val(city);
    });

    /*
     * Get Cities
     */
    // if($('.form-quickbook .lead_city').length){

    // 	 $.ajax({
    //           type : "POST",
    //           dataType : "json",
    //           url : ajax_vars.ajaxurl,
    //           data : {action: "ajax_get_all_cities"},
    //           success: function(response) {

    //               console.log(response);
    //           $(".form-quickbook .lead_city").html(data.cities);     

    //           },
    //           error: function(errorThrown) {

    //           }
    //       }); 

    //  }
    /*
     * Send OTP
     */
    $(document).on('click', '.form-quickbook .btn-send-otp-q', function() {

        var lead_phone = jQuery('.form-quickbook .lead_phone').val();



        $.ajax({
            type: "POST",
            dataType: "json",
            url: ajax_vars.ajaxurl,
            data: {
                action: "ajax_send_otp_verification_2",
                lead_phone: lead_phone
            },
            success: function(response) {

                console.log(response);
                if (response.response == true) {
                    $(".form-quickbook .btn-send-otp-q").html("Resend OTP");
                    //alert(response.message);
                    $('.form-quickbook .otp-message').html(response.message);
                    $('.form-quickbook .otp-container').show();

                    $(".form-quickbook #btn-submit-quick-request").attr('disabled', false);

                    $(".form-quickbook #btn-submit-quick-request").removeClass('disable');

                } else {
                    $(".form-quickbook #btn-submit-quick-request").attr('disabled', true);
                    //$('.lead_res').html(response.message);
                    alert(response.message);
                    $('.form-quickbook .otp-container').hide();
                    $('.form-quickbook ' + response.focus).focus();

                }

            },
            error: function(errorThrown) {

            }
        });

    });

    jQuery("body").on('click', '#btn-submit-quick-request', function(e) {
        e.preventDefault();
        jQuery("#btn-submit-quick-request").addClass('disable');
        jQuery(this).html('Processing...');
        jQuery(".form-quickbook .form-check-input").removeClass('err-border');
        jQuery(".form-quickbook .lead_city").removeClass('err-border');
        jQuery(".form-quickbook .form-control").removeClass('err-border');

        $.ajax({
            type: "POST",
            dataType: "json",
            url: ajax_vars.ajaxurl,

            data: jQuery("#quickBook").serialize(),
            success: function(data) {
                console.log(data);
                jQuery(".form-quickbook #btn-submit-quick-request").removeClass('disable');
                if (data.response == true) {
                    alert(data.message);
                    jQuery(".form-quickbook")[0].reset();
                    jQuery('.form-quickbook .otp-container').hide();
                    jQuery('.quickbook-widget').hide();
                    $(".form-quickbook .btn-send-otp-q").html("Send OTP");
                    //window.location.href = "https://www.apollohospitals.com/thank-you";
                } else {
                    if (data.class == "otp_invalid_field") {
                        alert(data.message);
                    } else {
                        jQuery(data.class).addClass('err-border');
                    }
                }

                jQuery("#btn-submit-quick-request").html('Submit Request');

                //console.log("Finished");
            },
            error: function(errorThrown) {

            }
        });


    })

    jQuery('body').on('click', '.btn-quick-book-popup', function(e) {
        e.preventDefault();
        jQuery('.quickbook-widget').show();
    })

    jQuery('body').on('click', '.btn-close-quick-book', function(e) {
        e.preventDefault();
        jQuery('.quickbook-widget').hide();
    })

    jQuery('body').on('click', '.post-a-query-popup', function(e) {
        e.preventDefault();
        //jQuery('.quickbook-widget').hide();
        jQuery('#post-aquery-popup').modal('show');
    })

    //oncology-form-popup
    jQuery(function() {

        var page_coe_oncology_id_value = "";
        page_coe_oncology_id_value = $("#page_coe_oncology_id").val();
        //alert(page_coe_oncology_id_value);

        if (page_coe_oncology_id_value == "8154") {
            jQuery('#oncology-form-popup').modal('show');
        }

    });

    jQuery('body').on('click', '#fydtsasa', function(e) {
        e.preventDefault();
        jQuery('#oncology-form-popup').modal('show');
    })


})

jQuery(document).ready(function($) {
    "use strict"
    /*
     * Language Switcher
     */

    $('body').on('change', '.language-switcher', function() {
        var language = this.value;
        // $.cookie('preferred_lang', language);

        // $.ajax({
        //        type : "POST",
        //        dataType : "json",
        //        url : ajax_vars.ajaxurl,
        //        data : {
        //            action: "module_set_preferred_lang_cookie",

        //             },
        //        success: function(response) {

        //            //console.log(response);


        //            if(response.response){

        //              $(".lead_city").html(response.cities);

        //            }else{

        //            }

        //        }
        //    }); 
        var url = ajax_vars.weburl;

        if (language == "english") {
            window.location.href = url;
        } else {
            window.location.href = url + '/' + language;
        }


    });

    if (jQuery("#HealthLibraryBlogListing").length) {
        fetch('https://healthlibrary.askapollo.com/wp-json/rest_services/v1/covid-19-blogs')
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                appendData(data);
            })
            .catch(function(err) {
                console.log('error: ' + err);
            });

        function appendData(data) {

            var htmlDiv = document.createElement('div');
            //htmlDiv.innerHTML = '<p>foo</p><style>' + css + '</style>';
            //document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[1]);
            console.log(data);
            var mainContainer = document.getElementById("HealthLibraryBlogListing");
            var markup;
            markup = '<ul class="blog_listings row">';
            for (var i = 0; i < data.length; i++) {
                console.log(data[i]);
                var list = data[i];


                markup += '<li class="col-md-4 col-sm-6">' +
                    '<div class="_wrap">' +
                    '<figre><img src="' + list.thumbnail + '" alt="' + list.post_title + '"/></figure>' +
                    '<div class="_wrap_content">' +
                    '<h3>' + list.post_title + '</h3>' +
                    '<a class="btn btn-read-more" href="' + list.url + '" target="_blank">Read More</a>' +
                    '</div>' +
                    '</div>' +
                    '</li>';



            }
            markup += '</ul>';
            mainContainer.innerHTML = markup;


        }
    }


    /*
     * Post A Query
     */
    /*
     * Book An Appointment 
     */
    $('body').on('click', '#btn-submit-query', function(e) {
        e.preventDefault();
        $(this).attr('disabled', true);
        $(this).html('Processing...');
        $('#form-post-a-query .response').html("");
        $("#form-post-a-query .frm-fld").removeClass('wpcf7-not-valid');

        $.ajax({
            type: "POST",
            dataType: "json",
            url: ajax_vars.ajaxurl,
            data: $('#form-post-a-query').serialize(),
            success: function(response) {


                console.log(response);
                $("#form-post-a-query #btn-submit-query").attr('disabled', false);

                $('#btn-submit-query').html('Submit');
                // //console.log(response);
                $('#form-post-a-query .response').html(response.message);
                if (response.response == true) {

                    $('#capImage').attr('src', ajax_vars.weburl + '/captcha/captcha.php');

                    $('#form-post-a-query')[0].reset();
                    //  	$('#book_an_appointment__form .otp-verification').show();

                    //  	$("#book_an_appointment__form #btn-book-appointment").attr('disabled', false);

                    //  	$("#book_an_appointment__form #btn-book-appointment").removeClass('disable');

                } else {
                    //      $("#book_an_appointment__form #btn-book-appointment").attr('disabled', true);


                    //  	alert(response.message);
                    //  	$('#book_an_appointment__form .otp-verification').hide();
                    $(response.class).addClass('wpcf7-not-valid');
                    $(response.class).focus();

                }
            }
        });

    });

    /*
     * Ask Us Anything
     */
    /*
     * Book An Appointment 
     */
    $('body').on('click', '#btn-submit-anything', function(e) {
        e.preventDefault();
        $(this).attr('disabled', true);
        $(this).html('Processing...');
        $('#form-ask-us-anything .response').html("");
        $("#form-ask-us-anything .frm-fld").removeClass('wpcf7-not-valid');

        $.ajax({
            type: "POST",
            dataType: "json",
            url: ajax_vars.ajaxurl,
            data: $('#form-ask-us-anything').serialize(),
            success: function(response) {


                console.log(response);
                $("#form-ask-us-anything #btn-submit-anything").attr('disabled', false);

                $('#btn-submit-anything').html('Submit');
                // //console.log(response);
                $('#form-ask-us-anything .response').html(response.message);
                if (response.response == true) {

                    $('#form-ask-us-anything #capImage').attr('src', ajax_vars.weburl + '/captcha/captcha.php');

                    $('#form-ask-us-anything')[0].reset();
                    //  	$('#book_an_appointment__form .otp-verification').show();

                    //  	$("#book_an_appointment__form #btn-book-appointment").attr('disabled', false);

                    //  	$("#book_an_appointment__form #btn-book-appointment").removeClass('disable');

                } else {
                    //      $("#book_an_appointment__form #btn-book-appointment").attr('disabled', true);


                    //  	alert(response.message);
                    //  	$('#book_an_appointment__form .otp-verification').hide();
                    $("#form-ask-us-anything " + response.class).addClass('wpcf7-not-valid');
                    $("#form-ask-us-anything " + response.class).focus();

                }
            }
        });

    });

    /*
     * Contact form Query Type
     */
    $('body').on('click', '.query-type', function(e) {
        $('#contact-us-form .response').html("");
        var selected_value = $(".query-type:checked").val();
        //alert(selected_value);
        if (selected_value == "feedback") {
            $('.hospital-consultant').hide();
            $(".field__message").attr("placeholder", "Feedback*").placeholder();
        } else if (selected_value == "complaint") {
            $('.hospital-consultant').show();
            $(".field__message").attr("placeholder", "Complaint*").placeholder();
        } else {
            $('.hospital-consultant').show();
            $(".field__message").attr("placeholder", "Message*").placeholder();
        }
    })

    /*
     * Contact Us form
     */
    $('body').on('click', '#btn-submit-contact-form', function(e) {
        e.preventDefault();
        $(this).attr('disabled', true);
        $(this).html('Processing...');
        $('#contact-us-form .response').html("");
        $("#contact-us-form .frm-fld").removeClass('wpcf7-not-valid');

        $.ajax({
            type: "POST",
            dataType: "json",
            url: ajax_vars.ajaxurl,
            data: $('#contact-us-form').serialize(),
            success: function(response) {


                console.log(response);
                $("#contact-us-form #btn-submit-contact-form").attr('disabled', false);

                $('#btn-submit-contact-form').html('Submit');
                // //console.log(response);
                $('#contact-us-form .response').html(response.message);
                if (response.response == true) {

                    $('#contact-us-form #capImage').attr('src', ajax_vars.weburl + '/captcha/captcha.php');

                    $('#contact-us-form')[0].reset();
                    //  	$('#book_an_appointment__form .otp-verification').show();

                    //  	$("#book_an_appointment__form #btn-book-appointment").attr('disabled', false);

                    //  	$("#book_an_appointment__form #btn-book-appointment").removeClass('disable');

                } else {
                    //      $("#book_an_appointment__form #btn-book-appointment").attr('disabled', true);


                    //  	alert(response.message);
                    //  	$('#book_an_appointment__form .otp-verification').hide();
                    $(response.class).addClass('wpcf7-not-valid');
                    $(response.class).focus();

                }
            }
        });

    });


    jQuery('body').on('click', '.btn-video-popup', function(e) {
        e.preventDefault();
        var type = jQuery(this).data('type');
        var link = jQuery(this).data('link');
        var html;
        if (type == 'youtube') {
            html = '<div class="video-pop-container">' +
                '<button class="btn-close-video-pop">&#10005;</button>' +
                '<iframe width="100%" height="360" src="' + link + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
                '</div>';

        } else {

            html = '<div class="video-pop-container">' +
                '<button class="btn-close-video-pop">&#10005;</button>' +
                '<video src="' + link + '" webkit-playsinline="" playsinline="" data-video="" loop="false" muted="" controls=""></video>' +
                '</div>';
        }

        jQuery(".video-pop-overlay").html(html).show();

    });

    jQuery('body').on('click', '.btn-close-video-pop', function() {
        jQuery(".video-pop-overlay").hide().empty();

    });

    jQuery('body').on('click', '.close-youtube-pp', function() {
        jQuery(".video-library-youtube-popup").hide();
        jQuery(".video-popup-container").empty();

    });

    jQuery('body').on('click', '.video-library', function(e) {
        e.preventDefault();
        var YouTube = $(this).data('video');
        if (YouTube != "") {

            jQuery(".video-library-youtube-popup").show();
            jQuery(".video-popup-container").html('<button class="close-youtube-pp">x</button>' +
                '<iframe src="' + YouTube + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

        }
    });

    if ($(".video-library-section").length) {

        $('.video-library-section').owlCarousel({
            loop: false,
            margin: 10,
            nav: true,
            pagination: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });
    }
    if ($(window).width() <= 768) {
        if ($(".video-lists").length) {

            $('.video-lists').owlCarousel({
                loop: false,
                margin: 10,
                nav: false,
                pagination: true,
                responsive: {
                    0: {
                        items: 2
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }
                }
            });
        }
    }
    /*
     * Video Library
     */


    jQuery('body').on('click', '.video-lists li', function(e) {
        e.preventDefault();
        $('.video-lists li').removeClass('currently-playing');
        $(this).addClass('currently-playing');
        var url = $(this).data('url');
        var title = $(this).data('title');
        var short_desc = $(this).data('desc');
        var html = '<iframe src="' + url + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
            '<div class="video-grid-details">' +
            '<h2>' + title + '</h2>' +
            '<span class="video__desc">' + short_desc + '</span>' +
            '</div>';
        $(".youtube_video_container").html(html);
    });

    $('body').on('click', '#btn-subscribe-newsletter', function(e) {
        e.preventDefault();
        $(this).attr('disabled', true);
        var email = $("#form-subscribe-news-letter #userEmail").val();
        var page = $("#form-subscribe-news-letter #pageURL").val();

        $.ajax({
            type: "POST",
            dataType: "json",
            url: ajax_vars.ajaxurl,
            data: {
                action: "newsLetterSubscription",
                email: email,
                page_url: page

            },
            success: function(response) {
                $("#btn-subscribe-newsletter").attr('disabled', false);
                if (response.response === true) {

                    $("#form-subscribe-news-letter #userEmail").val("");
                }
                alert(response.message);


            }
        });

    });


    $(".auto-complete-search").keydown(function() {
        search_merge_filter();
    });
    $(".auto-complete-search").keyup(function() {
        search_merge_filter();
    });

    function search_merge_filter() {

        var key = $(".auto-complete-search").val();

        if (key == "") {
            $(".ajax-search-result").html("");
        } else {

            //alert(key);
            //return false;

            $.ajax({
                type: "POST",
                dataType: "json",
                url: ajax_vars.ajaxurl,
                data: {
                    action: "apollo_ajax_search",
                    key: key
                },
                success: function(response) {

                    console.log(response);
                    $(".ajax-search-result").show().html(response.list);

                    // if(response.response){

                    //   $(".lead_city").html(response.cities);

                    // }else{

                    // }

                }
            });
        }

        return false;

    }

    $('body').click(function() {
        $('.ajax-search-result').empty().hide('');

    });



});