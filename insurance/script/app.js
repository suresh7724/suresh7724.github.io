$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 4,
            },
            600: {
                items: 5,
            },
            1000: {
                items: 9,
                autoplay: false,

            }
        }
    });
});

//   script 
$(document).ready(function () {
    // first step
    $('.step').click(function () {
        $('.step').removeClass('active');
        $(this).addClass('active');
        var value = $(this).find('.person').val();
        $('.you').addClass('remove')
        setTimeout(() => {
            $('.you').addClass('d-none')
        }, 100);
        $('.gender').removeClass('d-none')
        setTimeout(() => {
            $('.gender').addClass('show')
        }, 200);

        $('#type').val(value)
        if (value == '1') {
            $('#path_1').removeClass('d-none')
            $('.first').addClass('half')
        } else if (value == "2") {
            $('#path_2').removeClass('d-none')
            $('.first').addClass('half')

        } else if (value == "3") {
            $('#path_3').removeClass('d-none')
            $('.first').addClass('half')

        } else if (value == "4") {
            $('#path_4').removeClass('d-none')
            $('.first').addClass('half')

        }
    })

    // second container
    $('.gender .gen-box').click(function () {
        $('.gen-box').removeClass('active');
        $(this).parent().addClass('valid');
        $('.gender .row').addClass('valid');
        $('.gen-box .warning').addClass('d-none')
        $(this).addClass('active');
        $('.gen-box .card').removeClass('fill')
        var gen_val = $(this).find('.gen').val();
        $('#gender').val(gen_val);
    })
    $('.next').click(function () {
        // validate all fields
        var valid_type = $('.gender .row').hasClass('valid');

        if (valid_type) {
            $('.gen-box .warning').addClass('d-none')
            $('.gen-box .card').removeClass('fill')
            $('.gender').addClass('remove')
            var born_day = $('#day').val();
            var born_month = $('#month').val();
            var born_year = $('#year').val();
            var birth_date = born_day + "-" + born_month + "-" + born_year;
            $('#customer_born').val(birth_date)
            setTimeout(() => {
                $('.gender').addClass('d-none')
            }, 100);
            $('.plan').removeClass('d-none')
            setTimeout(() => {
                $('.plan').addClass('show')
            }, 200);
        } else {
            $('.gen-box .warning').removeClass('d-none')
            $('.gen-box .card').addClass('fill')
        }
        // 

    })


    // third container
    $('.plan .input').click(function () {
        $('.path .first').addClass('full')
        $('.input').removeClass('active');
        $(this).addClass('active')
        var plan = $(this).find('.value').text();
        $('#customer_plan').val(plan);
        $('.plan').addClass('remove')
        setTimeout(() => {
            $('.plan').addClass('d-none')
        }, 100);
        $('.postal').removeClass('d-none')
        setTimeout(() => {
            $('.postal').addClass('show')
        }, 200);
    })

    // fourth container
    $("#post").keyup(function () {
        var size = $('#post').val();
        var length = size.length
        console.log(length);

        if (length < 4 || length>5) {
            $(this).addClass('fill');
            $('.postal .warning').removeClass('d-none')
        } else {
            $(this).removeClass('fill');
            $('#postal .warning').addClass('d-none')
            $('.postal').addClass('valid');
        }
    })
    $('.post_next').click(function () {
        // validate code
        var postal = $('#post').val();
        $('#postal_code').val(postal)
        // 
        if ($('.postal').hasClass('valid')) {
            $('.postal').addClass('remove')
            setTimeout(() => {
                $('.postal').addClass('d-none')
            }, 100);
            $('.date').removeClass('d-none')
            setTimeout(() => {
                $('.date').addClass('show')
            }, 200);
        } else {
            $('#postal .warning').removeClass('d-none')
            $('.postal').removeClass('valid');
            $("#post").addClass('fill')
        }

    })

    // fifth container
    $('.date_next').click(function () {
        $('.second').addClass('half')
        document.getElementById('two').checked=true;
        $('#contract_date').val($('#start_date').val());
        $('.date').addClass('remove')
        setTimeout(() => {
            $('.date').addClass('d-none')
        }, 100);
        $('.info').removeClass('d-none')
        setTimeout(() => {
            $('.info').addClass('show')
        }, 200);
    })


    // sixth container
    $('.info_next').click(function () {
        // get all input
        var last_name = $('#last_name').val();
        var first_name = $('#first_name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var valid_mail = validateEmail(email);
        $(".test").each(function (index) {
            var email_valid=false;
            var phone_valid=false;
            var value = $(this).val()
            if (value == '' || value == null) {
                $(this).next().next().removeClass('d-none');

            } else {
                $('#email').next().next().addClass('d-none')
                $('#phone').next().next().next().addClass('d-none')
                $(this).next().next().addClass('d-none');
                
                var regExp = /[a-zA-Z]/g;
                var testString = phone;
                if(!valid_mail)
                {
                  $('#email').next().next().next().removeClass('d-none')
                }
                else
                {
                    $('#email').next().next().next().addClass('d-none')
                    email_valid=true;
                }
                
                if(regExp.test(testString)){
                    $('#phone').next().next().next().removeClass('d-none')
                    
                }
                else
                {
                    $('#phone').next().next().next().addClass('d-none')
                    phone_valid=true;
                }
                

            }
            if(email_valid && phone_valid)
            {
               
                $('#user_name').val(first_name)
                $('#user_lastname').val(last_name)
                $('#user_mail').val(email)
                $('#user_phone').val(phone)
                var value = $('#type').val();
                if (value == '1') {
        
                    $('.info').addClass('remove')
                    setTimeout(() => {
                        $('.info').addClass('d-none')
                    }, 100);
                    $('.level_con').removeClass('d-none')
                    setTimeout(() => {
                        $('.level_con').addClass('show')
                    }, 200);
                } else if (value == '2' || value == "4") {
                    $('.second').addClass('full')
                    $('.info').addClass('remove')
                    setTimeout(() => {
                        $('.info').addClass('d-none')
                    }, 100);
                    $('.spouse').removeClass('d-none')
                    setTimeout(() => {
                        $('.spouse').addClass('show')
                    }, 200);
                } else if (value == '3') {
        
                    $( "#child_check" ).prop( "checked", true );
                    $('.child_need').addClass('half')
                    $('.info').addClass('remove')
                    setTimeout(() => {
                        $('.info').addClass('d-none')
                    }, 100);
                    $('.children').removeClass('d-none')
                    setTimeout(() => {
                        $('.children').addClass('show')
                    }, 200);
                }
            }
            

        });

        // validate input
        // throw error
        // next page

      

    })

    // spouse
    $('.spouse .gen-box').click(function(){
        $('.spouse .gen-box').removeClass('active')
        $(this).addClass('active')
        $('.spouse .row').addClass('valid')
        $('.spouse_next').removeClass('disables')
        $("#spouse_gen").val($(this).find('.gen').val())
    })
    $('.spouse_next').click(function () {
        // validate
        var valid=$('.spouse .row').hasClass('valid');
        if(valid)
        {
            $('.need').addClass('full')
            $( "#need" ).prop( "checked", true );
            var spouse_day=$('#spouse_day').val()
            var spouse_month=$('#spouse_month').val()
            var spouse_year=$('#spouse_year').val()
            var spouse_birthdate=spouse_day+"-"+spouse_month+"-"+spouse_year;
            $('#spouse_birth').val(spouse_birthdate)
            
            $('.spouse').addClass('remove')
            setTimeout(() => {
                $('.spouse').addClass('d-none')
            }, 100);
            $('.spouse_plan').removeClass('d-none')
            setTimeout(() => {
                $('.spouse_plan').addClass('show')
            }, 200);
        }
        else
        {
            $('.spouse .warning').removeClass('d-none')
        }
        // get
        // next page



      
    })
    // spouse plan
    $('.spouse_plan .input').click(function () {
        $('.spouse_plan .input').removeClass('active')
        $(this).addClass('active')
        var spouse_plan = $(this).find('.value').text();
        $('#spouse_plan').val(spouse_plan)
        var value = $('#type').val();
        if (value == '2') {

            $('.spouse_plan').addClass('remove')
            setTimeout(() => {
                $('.spouse_plan').addClass('d-none')
            }, 100);
            $('.level_con').removeClass('d-none')
            setTimeout(() => {
                $('.level_con').addClass('show')
            }, 200);
        } else if (value == '4') {
            $('.children').removeClass('d-none')
            setTimeout(() => {
                $('.spouse_plan').addClass('d-none')
            }, 300);
            $('.children').addClass('show')


            $('.spouse_plan').addClass('remove')
            setTimeout(() => {
                $('.spouse_plan').addClass('d-none')
            }, 100);
            $('.children').removeClass('d-none')
            setTimeout(() => {
                $('.children').addClass('show')
            }, 200);
        }
    })

    // child
    $('.child_next').click(function () {
        $('#children_num').val($('#childrens').val())
        $('.children').addClass('remove');
        setTimeout(() => {
            $('.children').addClass('d-none')
        }, 100);
        $('.level_con').removeClass('d-none')
        setTimeout(() => {
            $('.level_con').addClass('show')
        }, 200);
    })
    // seventh container
    $('.radio_lab').click(function () {
        this.previousElementSibling.checked = true;
        disableValues();
    })

    // level grab
    $('.level .card').click(function () {
        
        if (!$(this).parent().hasClass('yes')) {
            $(this).parent().find('.card').removeClass('selected');
            $(this).addClass('selected')
            var selected_value=$(this).find('.val').text();
            
            if($(this).parent().hasClass('hospital'))
            {
                $('#hospital').val(selected_value)
                
            };
            if($(this).parent().hasClass('routine'))
            {
                $('#routine').val(selected_value)

                
            };
            if($(this).parent().hasClass('dentist'))
            {
                $('#optical').val(selected_value)

                
            };
            if($(this).parent().hasClass('optical'))
            {
                $('#dent').val(selected_value)
                
            };
            
            var count=$('.level .selected').length;
            var radioValue = $("input[name='guaranty']:checked").val();
            if (radioValue == "hospital") {
                if(count!=1)
                {
                 $('.level_next').addClass('disables')
                    
                }
                else
                {
                    $('.level_next').removeClass('disables')   
                    $('.level_next').click(function () {
                        //get values 
                        console.log($('.selected .val').text());
                        // validate values
                        // throw error
                        // next step
                
                        $('.child_need').addClass('full')
                
                        $( ".last" ).addClass("full");
                    $( ".second" ).addClass("full");  
                    $( ".qoute" ).prop( "checked", true );
                        $('.level_con').addClass('remove')
                        setTimeout(() => {
                            $('.level_con').addClass('d-none')
                        }, 100);
                        $('.qoute').removeClass('d-none')
                        setTimeout(() => {
                            $('.qoute').addClass('show')
                        }, 200);
                        // send mail
                        setTimeout(() => {
                            $('.loader').addClass('d-none');
                            $('.result').removeClass('d-none')
                        }, 2000);
                    })
                }
            } else if (radioValue == "full") {
                if(count!=4)
                {
                    $('.level_next').addClass('disables')  
                }
                else
                {
                    $('.child_need').addClass('full')
                    $( ".last" ).addClass("full");  
                    $( ".second" ).addClass("full");  
                    $( ".qoute" ).prop( "checked", true );
                    $('.level_next').removeClass('disables')  
                    $('.level_next').click(function () {
                        //get values 
                        console.log($('.selected .val').text());
                        // validate values
                        // throw error
                        // next step
                
                
                        // 
                        $('.level_con').addClass('remove')
                        setTimeout(() => {
                            $('.level_con').addClass('d-none')
                        }, 100);
                        $('.qoute').removeClass('d-none')
                        setTimeout(() => {
                            $('.qoute').addClass('show')
                        }, 200);
                        // send mail
                        setTimeout(() => {
                            $('.loader').addClass('d-none');
                            $('.result').removeClass('d-none')
                        }, 2000);
                    })
                }
            }
            
        }
    })

    $('input[type=radio]').click(function () {
        disableValues();
    });
     
 
    // children
    
    $('#childrens').change(function () {

        // alert($(this).val());
        var childrens = parseInt($(this).val());
        $('#children_num').val(childrens)
        document.getElementById('dates').innerHTML = ``;
        for (i = 0; i < childrens; i++) {
            document.getElementById('dates').innerHTML += `   <div class="dates card p-2">
        <div class="num">
            <p class="mb-0">Your Child ${i+1}</p>
        </div>
        <div class="choose d-flex my-3">
            <div class="select">
                <select name="day" class="px-3" class="child_day">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>
                <label for="day" class="lab">Day</label>
            </div>
            <div class="select">
                <select name="" id="" class="child_month">
                    <option value="january">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
                <label for="day" class="lab">Month</label>
            </div>
            <div class="select">
                <select name="year" id="" class="child_yearpx-3">
                    <option value="1940">1940</option>
                    <option value="1941">1941</option>
                    <option value="1942">1942</option>
                    <option value="1943">1943</option>
                    <option value="1944">1944</option>
                    <option value="1945">1945</option>
                    <option value="1946">1946</option>
                    <option value="1947">1947</option>
                    <option value="1948">1948</option>
                    <option value="1949">1949</option>
                    <option value="1950">1950</option>
                    <option value="1951">1951</option>
                    <option value="1952">1952</option>
                    <option value="1953">1953</option>
                    <option value="1954">1954</option>
                    <option value="1955">1955</option>
                    <option value="1956">1956</option>
                    <option value="1957">1957</option>
                    <option value="1958">1958</option>
                    <option value="1959">1959</option>
                    <option value="1960">1960</option>
                    <option value="1961">1961</option>
                    <option value="1962">1962</option>
                    <option value="1963">1963</option>
                    <option value="1964">1964</option>
                    <option value="1965">1965</option>
                    <option value="1966">1966</option>
                    <option value="1967">1967</option>
                    <option value="1968">1968</option>
                    <option value="1969">1969</option>
                    <option value="1970">1970</option>
                    <option value="1971">1971</option>
                    <option value="1972">1972</option>
                    <option value="1973">1973</option>
                    <option value="1974">1974</option>
                    <option value="1975">1975</option>
                    <option value="1976">1976</option>
                    <option value="1977">1977</option>
                    <option value="1978">1978</option>
                    <option value="1979">1979</option>
                    <option value="1980">1980</option>
                    <option value="1981">1981</option>
                    <option value="1982">1982</option>
                    <option value="1983">1983</option>
                    <option value="1984">1984</option>
                    <option value="1985">1985</option>
                    <option value="1986">1986</option>
                    <option value="1987">1987</option>
                    <option value="1988">1988</option>
                    <option value="1989">1989</option>
                    <option value="1990">1990</option>
                    <option value="1991">1991</option>
                    <option value="1992">1992</option>
                    <option value="1993">1993</option>
                    <option value="1994">1994</option>
                    <option value="1995">1995</option>
                    <option value="1996">1996</option>
                    <option value="1997">1997</option>
                    <option value="1998">1998</option>
                    <option value="1999">1999</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                </select>
                <label for="day" class="lab">Year</label>
            </div>
        </div>
    </div>`
        }
    })
    // default date
    var currentDate = new Date()
    var day = currentDate.getDate();
    var month = currentDate.getMonth()

    var year = currentDate.getFullYear()
    var full_date = year + "-0" + month + "-" + day;

    $('#start_date').val(full_date)

    var dtToday = new Date();

    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if (month < 10)
        month = '0' + month.toString();
    if (day < 10)
        day = '0' + day.toString();

    var maxDate = year + '-' + month + '-' + day;
    $('#start_date').attr('min', maxDate);
})

// return function
$('.return').click(function () {
    $(this).parent().parent().addClass('remove');
    $(this).parent().parent().prev().removeClass('d-none');
    setTimeout(() => {
        $(this).parent().parent().addClass('d-none');
    }, 100);
    setTimeout(() => {

        $(this).parent().parent().prev().removeClass('remove');
        $(this).parent().parent().prev().addClass('show');
        if ($(this).parent().parent().prev().hasClass('you')) {
            $('.path').addClass('d-none')
        };
    }, 200);

})

// <input type="text" id="hospital">
            // <input type="text" id="routine">
            // <input type="text" id="optical">
            // <input type="text" id="dent">
function disableValues() {
    var radioValue = $("input[name='guaranty']:checked").val();
    if (radioValue == "hospital") {
        $('.disable').addClass('yes')
        $('.disable .card').removeClass('selected');
        $('#routine').val('');
        $('#optical').val('');
        $('#dent').val('');
    } else if (radioValue == "full") {
        $('.disable').removeClass('yes')

    }

}
$('.disable').removeClass('yes')



function validateEmail(elementValue) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
}