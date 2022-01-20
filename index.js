function klik(){

    $("#h1").text("alfri");

}

function prev(){
     var angka1 = {
        "data"   : [
            {
                "id"        : "1",
                "name"      : "John",
                "lastname"  : "Doe",
                "email"     : "l"
            },
            {
                "id"        : "2",
                "name"      : "Jane",
                "lastname"  : "Doe",
                "email"     : "l"
            }
        ]
    }   
    const obj   = JSON.parse(angka1);
    
    const content = 
     "<p>Modulus adalah sisa hasil bagi dari sebuah angka</p> <p>yang dibagi dengan 2. </p> <p>mencari Modulus</p><p>modulus  = angka/2</p>"
    const data = 
                '<div class="col-md-4 col-sm-6">'+ content+' </div>'+
                '<div class="col-md-4 col-sm-6"> my </div>'+
                '<div class="col-md-4 col-sm-6"> world </div>';
    $("#rowContent").text(obj);

}

function modulus(a,b) {
    var angka1 = $("#angka1").val();
    var angka2 = $("#angka2").val();

    // modulus = angka1/angka2
    var modulus = angka1/angka2; // 10/2 = 5
    var hasil = Math.floor(modulus); // 5
    var sisa = angka1-(angka2*hasil); // 10-(5*2) = 0
    if(sisa > 0){
        $("#text").text(angka1+" / "+angka2+" = Modulusnya "+sisa);
    }else{
        $("#text").text('tidak ada sisa');
    }
    return sisa;
}

function whatBill() {
    console.log(this.modulus(10,2));
}
