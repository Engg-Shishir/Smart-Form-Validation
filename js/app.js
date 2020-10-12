$(document).ready(function () {
  var who='0',id='0',reg='0',email='0',mobile='0',password='0',cpassword='0';

    $('#id,#reg,#mobile,#password,#cpassword').on('focus', function(){
        $('.message').html('Insert Carefully');
    });
    $('#id,#reg,#mobile,#password,#cpassword').on('blur', function(){
        $('.message').html('');
    });

    $('#id').keyup(()=>{
        var role = /[a-zA-Z*,&,%,$,#,@,_,!,~,+,-,:,.]/g;
        if(role.test($('#id').val())){
            $('.message').html('Wrong input .... ❌');
        }else{
            if($('#id').val().length > 5){
                $('.message').html('All Right... ✔');
                id = $('#id').val();
            }else{
                $('.message').html('Shold be 5 digit ... ❌');
            }
            
        }
    });

    $('#reg').keyup(()=>{
        var role = /[a-zA-Z*,&,%,$,#,@,_,!,~,+,-,:,.]/g;
        if(role.test($('#reg').val())){
            $('.message').html('Wrong input .... ❌');
        }else{
            
            if($('#reg').val().length > 5){
                $('.message').html('All Right... ✔');
                reg = $('#reg').val();
            }else{
                $('.message').html('Shold be 5 digit ... ❌');
            }
        }
    });

    $('#mobile').keyup(()=>{
        var role = /[a-zA-Z*,&,%,$,#,@,_,!,~,+,-,:,.]/g;
        if(role.test($('#mobile').val())){
            $('.message').html('Wrong input .... ❌');
        }else{
            
            if($('#mobile').val().length == 11){
                $('.message').html('All Right... ✔');
                mobile = $('#mobile').val();
            }else{
                $('.message').html('Shold be 11 digit ... ❌');
            }
        }
    });
    
    $('#password').keyup(()=>{
        var role = /[a-zA-Z0-9*,&,%,$,#,@][&,%,$,#,@]{1}/g;
        if(role.test($('#password').val())){
            
            if($('#password').val().length > 5){
                $('.message').html('All Right... ✔');
                password = $('#password').val();
            }else{
                $('.message').html('total 5 or more ... ❌');
            }
            
        }else{
            $('.message').html('one or more [&,%,$,#,@] character ... ❌');
        }
    });
    
    $('#cpassword').keyup(()=>{
        if($('#password').val() == $('#cpassword').val()){
            $('.message').html('All Right... ✔');
            cpassword = $('#cpassword').val();
        }else{
            $('.message').html('Confirm Pasword Is not match ... ❌');
         }
    });


    $('#regbtn').on('click',(e)=>{
        e.preventDefault();

         who = $('#who').val();
         email = $('#email').val();
        


        if(who!='0' && id!='0' && reg!='0' && email!='0' && mobile!='0' && password!='0' && cpassword==password){
            $('.message').html('Your action is .... 🤺');
            //success , faill
        }else{
            $('.message').html('All Field required .... ❌');
        }
        


    })
});


