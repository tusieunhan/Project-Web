$(document).ready(function(){
    $("#ten").blur(function(){
        var regten=/^([A-Z]{1}[a-z]*\s)*([A-Z]{1}[a-z]*)$/;
        var ten = $(this).val();
        if (regten.test(ten)) {
            $("#erten").html("(*)");
        } else {
            $("#erten").html("Chữ đầu viết hoa bạn nha");
        }
    })

    $("#dienthoai").blur(function(){
        var regdienthoai=/^[0-9]{10}$/;
        var dienthoai = $(this).val();
        if (regdienthoai.test(dienthoai)) {
            $("#erdienthoai").html("(*)");
        } else {
            $("#erdienthoai").html("Số điện thoại gồm 10 số");
        }
    })

    $("#diachi").blur(function(){
        var diachi = $(this).val();
        if (diachi == "") {
            $("#erdiachi").html("Không được để trống địa chỉ");
        } else {
            $("#erdiachi").html("(*)");
        }
    })

    $("#email").blur(function(){
        var regemail=/^\w+@[a-zA-Z]{3,}\.com$/;
        var email = $(this).val();
        if (regemail.test(email)) {
            $("#eremail").html("(*)");
        } else {
            $("#eremail").html("Email chưa đúng nha");
        }
    })

    $("#matkhau").blur(function(){
        var regmatkhau=/^(?=.*[A-Za-z])+(?=.*[0-9])(?=.*[#@_-]).{6,}/;
        var matkhau = $(this).val();
        if (regmatkhau.test(matkhau)) {
            $("#ermatkhau").html("(*)");
        } else {
            $("#ermatkhau").html("Mật khẩu gồm : chữ, số, kí tự");
        }
    })

    $("#matkhau2").blur(function(){
        var regmatkhau2= $("#matkhau").val();
        var matkhau2 = $(this).val();
        if (regmatkhau2 == matkhau2 ) {
            $("#ermatkhau2").html("(*)");
        } else {
            $("#ermatkhau2").html("Mật khẩu không giống");
        }
    })
})