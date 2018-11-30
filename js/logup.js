$(function(){
    $("#logup").click(function(){
        var userName = $("#userName").val();
        var email = $("#email").val();
        var password1 = $("#password1").val();
        var password2 = $("#password2").val();
        var msg = "";

        /* 用户名：字母数字下划线开头，后面是数字或字母，5-20位
            密码：6-20位字母加数字
        */
        if(/^(_|\d|\w)(\d|\w){4,19}$/.test(userName)){
            //msg = "";
            if(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(email)){
                //msg = "";
                if(/^(\d|\w){6,20}$/.test(password1)){
                    //msg = "";
                    if(password1 === password2){
                        alert("注册成功");
                    }
                    else{
                        msg = "两次密码不一致";
                    }
                }
                else{
                    msg = "密码格式不对"
                }
            }
            else{
                msg = "邮箱非法";
            }
        }
        else{
            msg = "用户名非法";
        }
        $("#warnMessage").text(msg);
        return false;
    });
});