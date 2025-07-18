function fun4(){
    document.getElementById("ticket").style.display="flex";
    document.getElementsByClassName("theaters")[0].style.display="none";
    document.getElementById("mve").style.display="none";
    document.getElementsByClassName("parents")[0].style.marginTop="-18%";
    document.getElementsByClassName("parents")[0].style.marginLeft="-7%";
}
function fun6(){
    // document.getElementById("payment1").style.display="block";
    document.getElementById("ticket").style.display="none";
    document.getElementById("payment1").style.display="flex";
    document.getElementById("payment1").style.marginTop="0";
}
// function fun5(){
//     document.getElementsByClassName("places")[0].style.display="block";
// }
// function cl(){
//     document.getElementsByClassName("places")[0].style.display="none";
//     console.log("as");
// }

function fun7(){
    // document.getElementById("gpay_main").style.display="block";
    document.getElementById("payment1").style.display="none";
    document.getElementById("gpay_main").style.display="flex";
    document.getElementById("gpay_main").style.marginTop="0";
}
function fun9(){
    document.getElementById("gpay_main").style.display="none";
    document.getElementById("rrr_main").style.display="flex";
    document.getElementById("rrr_main").style.marginTop="0";
    // document.getElementById("payment1").style.display="none";
}

function fun8(){
    document.getElementById("payment1").style.display="none";
    document.getElementById("gpay_main1").style.display="flex";
    document.getElementById("gpay_main1").style.marginTop="0";
    
}
function fun10(){
    document.getElementById("gpay_main1").style.display="none";
    document.getElementById("rrr_main").style.display="flex";
    document.getElementById("rrr_main").style.marginTop="0";

}

function fun11(){
    document.getElementById("payment1").style.display="none";
    document.getElementById("gpay_main2").style.display="flex";
    document.getElementById("gpay_main2").style.marginTop="0";
}
function fun12(){
   
    document.getElementById("gpay_main2").style.display="none";
    document.getElementById("rrr_main").style.display="flex";
    document.getElementById("rrr_main").style.marginTop="0";
}

function fun13(){
    document.getElementById("payment1").style.display="none";
    document.getElementById("gpay_main3").style.display="flex";
    document.getElementById("gpay_main3").style.marginTop="0";
}
function fun14(){
    document.getElementById("gpay_main3").style.display="none";
    document.getElementById("rrr_main").style.display="flex";
    document.getElementById("rrr_main").style.marginTop="0";

}

function fun15(){
    document.getElementById("payment1").style.display="none";
    document.getElementById("gpay_main4").style.display="flex";
    document.getElementById("gpay_main4").style.marginTop="0";

}
function fun16(){
    document.getElementById("gpay_main4").style.display="none";
    document.getElementById("rrr_main").style.display="flex";
    document.getElementById("rrr_main").style.marginTop="0";

}
function fun17(){
    document.getElementById("payment1").style.display="none";
    document.getElementById("gpay_main5").style.display="flex";
    document.getElementById("gpay_main5").style.marginTop="0";

}

function fun18(){
    document.getElementById("gpay_main5").style.display="none";
    document.getElementById("rrr_main").style.display="flex";
    document.getElementById("rrr_main").style.marginTop="0";

}

function fun19(){
    document.getElementById("ticket").style.display="block";
    document.getElementById("payment1").style.display="none";
}

function fun20(){
    document.getElementById("gpay_main").style.display="none";
    document.getElementById("payment1").style.display="flex";

}
function fun21(){
    document.getElementById("ticket").style.display="none";
    document.getElementById("mve").style.display="flex";
    document.getElementsByClassName("theaters")[0].style.display="flex";
}

//paytm
document.getElementsByClassName("g_pay")[2].addEventListener("submit", function(event) {
    event.preventDefault()
    var a = document.getElementById('gpay_i2');
    var b = document.getElementById('gpay_i3');
    if (a.value !== '' && b.value !== '') {
        alert("Payment Successful");
        document.getElementById("gpay_main2").style.display="none";
        document.getElementById("rrr_main").style.display="flex";
        document.getElementById("rrr_main").style.marginTop="100px";
    }
 });
//gpay
document.getElementsByClassName("g_pay")[0].addEventListener("submit", function(event) {
    event.preventDefault()
    var c = document.getElementById('gpay_i4');
    if(c.value !='')
    {
    if (c.value.length != 10) {
        alert("Enter valid mobile number");
    }
    else {
        alert("Payment Successful");
        document.getElementById("gpay_main").style.display="none";
        document.getElementById("rrr_main").style.display="flex";
        document.getElementById("rrr_main").style.marginTop="100px";
        
        
    }
}  
 });
//phonepe
document.getElementsByClassName("g_pay")[1].addEventListener("submit", function(event) {
    event.preventDefault()
    var d = document.getElementById('gpay_i5');
    var e = document.getElementById('gpay_i6');
    if (d.value != '' && e.value != '') {
        alert("Payment Successful");
        // window.location.href = './rrr-ticket.html'
        document.getElementById("gpay_main1").style.display="none";
        document.getElementById("rrr_main").style.display="flex";
        document.getElementById("rrr_main").style.marginTop="100px";
    }
 });
//amazonpay
document.getElementsByClassName("g_pay")[3].addEventListener("submit", function(event) {
    event.preventDefault()
    var f = document.getElementById('gpay_i7');
    var g = document.getElementById('gpay_i8');
    if (f.value != '' && g.value != '') {
        alert("Payment Successful");
        document.getElementById("gpay_main3").style.display="none";
        document.getElementById("rrr_main").style.display="flex";
        document.getElementById("rrr_main").style.marginTop="100px";
    }
    
 });
// //cred
document.getElementsByClassName("g_pay")[4].addEventListener("submit", function(event) {
    event.preventDefault()
    var h = document.getElementById('gpay_i9');
    var i = document.getElementById('gpay_i10');
    if (h.value != '' && i.value != '') {
        alert("Payment Successful");
        document.getElementById("gpay_main4").style.display="none";
    document.getElementById("rrr_main").style.display="flex";
    document.getElementById("rrr_main").style.marginTop="100px";

        
    }
    
 });

// //bhim
document.getElementsByClassName("g_pay")[5].addEventListener("submit", function(event) {
    event.preventDefault()
    var j = document.getElementById('gpay_i11');
    var k = document.getElementById('gpay_i12');
    if (j.value != '' && k.value != '') {
        alert("Payment Successful");
        document.getElementById("gpay_main5").style.display="none";
        document.getElementById("rrr_main").style.display="flex";
        document.getElementById("rrr_main").style.marginTop="100px";
    }
    
 });

