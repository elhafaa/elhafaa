
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
$(document).on("click", ".product", function () {
    
    var id = event.target.id.match(/\d+/g);
    
    var productid = "#mainheader" + id[0];
    var imageid = "#mainimage" + id[0];
  
    var titleheader = $(productid).text();
    var imageheader = $(imageid).attr('src');
   var email = "";
   var gotten = "";
   var NAMES = ["TyreseMcdermott","TahliaGlass","BarneyDowling","DominiqueSolomon","Amy-LeighBeck","RiazVilla","MontelFerguson","MikaelaBonner","KaylenDeacon","AbigayleSpears","KaleemDevlin","IrfanPhelps","KelisBurrows","MauriceRoberts","SamuelPaine","ManhaSearle","AnnieSchneider","BjornBurgess","EmilioRennie","ImaniGreenwood","RitchieCarter","CharmaineBurch","SumayaMcconnell","HuzaifahCantu","MasumaSwanson","JadineDudley","AmaliaWheatley","KaydanMayo","Elsie-MaeChristie","ReginaBusby","MaryamLaing","Jamie-LeighClarkson","MahiraMontoya","EboniGalindo","HaleemaBartlett","CheyanneGutierrez","TheodoreCherry","TinaKennedy","BerniceLamb","TashaChamberlain","NayaKramer","NikolasBaxter","BrentBrewer","Elsie-MayPuckett","KajetanCunningham","HeatherDunn","TonyaMarsh","AllanGolden","TannerMonaghan","RamiMueller","KhloeHull","PortiaJuarez","Sammy-JoNorton","StuartCullen","AneesHines","ShivReeves","TayyabWalker","MylahKenny","JerryBradshaw","PhoebeAhmed","MargotWelch","EllesseDodd","EttaYork","ConnieGibson","OmarStanton","BaileyRichardson","LaurenNeal","BrettDavid","CaydenPennington","FranciszekTait","HarmonyJohnson","StacyWynn","NishatTomlinson","HusnainOwens","SumayyaCalhoun","AnisahMoon","AmalieMedrano","SakinaWashington","MilanaSchofield","McauleyDunkley","AdalineDavila","MarlieBurn","AydaDevine","ZayyanDrake","ShivamKnox","Ella-RoseBrandt","TheiaCaldwell","ArielSamuels","XenaDickens","AmiBloggs","KaydonCooke","NikkitaChurchill","TaineCarr","DarciSmall","LouiseRowe","TaliahSalinas","SheldonFord","RobbieDolan","HanifaJohns","RebecaChester"];
    
   email = NAMES[Math.floor(Math.random()*NAMES.length)].toLowerCase() + getRandomInt(getRandomInt(0,1000),getRandomInt(1000,4000)) + 'gmail.com';
    
     $(".modal-header #title-modal").text( titleheader );
    $(".modal-body #img-modal").attr("src",imageheader);
    $(".modal-body #email-modal").text(email);
    $('#accs-modal').modal('show');
   
    
});

function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

const linkOfTheWebsiteUserCame = document.referrer;

if(linkOfTheWebsiteUserCame) {
  var password = generatePassword();
        
  $("#pwdacc").text(password);
}   
  else {
    $("#emailacc").text("من فضلك قم باتمام عملية التحقق قبل زيارة هذه الصفحة");
  }
  
// product1
// mainheader1
//mainimage1