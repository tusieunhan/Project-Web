$(document).ready(function(){
    $("#them").click(function(){
        var sotien = soluong * sotien;
        var soluong = parseInt("<input type = 'nummber' value = '1'>");
        var gia = parseInt("83,000,000");
        var ten = "EOS R (RF24-105mm f/4L IS USM)";
        var hinh = "<img src ='../img/EOS-R/0307b69a151447c8b95970f0fbc5c4aa_EOS+R+Kit+Front+Slant.png'>";
        var check = "<input type = 'checkbox'>";
        var trnew = "<tr> <td>"+check+"</td> <td>"+hinh+"</td> <td>"+ten+"</td> <td>"+gia+"</td> <td>"+soluong+"</td> <td>"+sotien+"</td> </tr>";
        $("#table-giohang").append(trnew);
    })
})