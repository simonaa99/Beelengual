$( function() {
  $( "#accordion" ).accordion();
  } )

  $( function() {
      $( "#datepicker" ).datepicker();
    } )

$(() => {
    $(".form-section2").hide();
  })

$(function () {
  $(".form-section3").hide();
})

$(function () {
  $(".form-section4").hide();
})

function daLiStringSadrziBroj(tekst){
  let i = 0;
  while(tekst[i]!=null){
    if(tekst[i]>='0' && tekst[i]<='9') {
      return true;
    }
    else
    {
      i++;
    }
  }
  return false; 
}

function daLiJeStringBroj(tekst) {
  let i =1;
  while(tekst[i]!=null) {

    if(tekst[i] >= '0' && tekst[i] <= '9') {
      i++;
    } else {
      return false;
    }

  }
  return true;
}

function validacija1() {
 const ime = document.getElementById("name").value;
 const prezime = document.getElementById("surname").value;
 const email = document.getElementById("email").value;
 const broj = document.getElementById("phone").value;

  if(ime===null || daLiStringSadrziBroj(ime)==true || ime==="") {
    alert("Pogresno ste uneli ime!")
    document.getElementById("name").value = null;
    return 0;
  }

  if(prezime===null || daLiStringSadrziBroj(prezime)==true || prezime==="") {
    alert("Pogresno ste uneli prezime!");
    document.getElementById("surname").value = null;
    return 0;
  }

  const emailPatern = /\S+@\S+\.\S+/;
  if(emailPatern.test(email)==false) {
    alert("Pogresno ste uneli email!");
    document.getElementById("email").value = null;
    return 0;
  }

  if(broj.startsWith("+3816")==false || broj == null || daLiJeStringBroj(broj)==false) {
    alert("Pogresno ste uneli broj!");
    document.getElementById("phone").value = null;
    return 0;
  }

  return 1;
}

$("#btn1").click(function(){
  if(validacija1()) {
    $(".form-section2").show();
  }
  }
)

function validacija2() {
  
  let kursevi = document.getElementsByName("course");

  if(kursevi[0].checked==false && kursevi[1].checked == false) {
    alert("Morate cekirati polje!");
    return 0;
  }
  
  if(kursevi[0].checked) {
    return 1;
  } else {
    return 2;
  }
}

$("#btn2").click(function(){
  if(validacija2()==1) {
    $(".form-section3").show();
    $("#adultslist").hide();
  } else
  if(validacija2()==2) {
    $(".form-section3").show();
    $("#kidslist").hide();
  }
  }
)

$("#btn3").click(function(){
    $(".form-section4").show();
  }
)

function validacija3() {
  let danas = new Date();
  
  const datumPrijave = $("#datepicker").datepicker('getDate');
  
  if(danas >= datumPrijave){
        alert("Mozete birati samo datume za naredni period!");
        return 0;
  }
  return 1;
}


$(".btn2").click(function(){
  if(validacija3()) {
    let odgovor = confirm("Da li ste sigurni da zelite da se prijavite?");
    if(odgovor) {
      alert("Uspesno ste se prijavili!") 
    } else {
      location.reload();
    }
  }
}
)


