

    //ekmek checkboxını her zaman işaretli hale getirdik
 document.getElementById("ekmek").checked = true;
    const checkbox = document.getElementById('ekmek')

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    document.getElementById("ekmek").checked = true;
  } else {
    document.getElementById("ekmek").checked = true;
  }
})
   


     var btn=document.getElementById("btnHesap"); 
     btn.onclick=async function(){ //butona basılınca
        this.disabled=true;
                    btnHesap.value='GÖNDERİLİYOR...';
  
     
     
      //this.disabled=true;
         //   btnHesap.value='Gönderiliyor...';
      //butona basılınca fonksiyon çalışır
      //checbox değeri 1 ise value değerini çek
        var veriler=[document.getElementById("c1").checked?'1':'0',document.getElementById("c2").checked?'1':'0',  //checkbox verileri çekildi
                    document.getElementById("c3").checked?'1':'0'," 0 "," 0 ", //köfte ve tavuk için şimdilik 0 yazdık
                    document.getElementById("c6").checked?'1':'0',document.getElementById("c7").checked?'1':'0',
                    document.getElementById("c8").checked?'1':'0',"1"]//ekmek değeri her zaman olmak zorunda olduğu için 1 aldık ;

        var stok=[document.getElementById("c1").value,document.getElementById("c2").value,  //value stok  verileri çekildi
                    document.getElementById("c3").value,document.getElementById("c4").value,
                    document.getElementById("c5").value,
                    document.getElementById("c6").value,document.getElementById("c7").value,
                    document.getElementById("c8").value,document.getElementById("ekmek").value] ;

         
        //stok kontrolü


                    if(true){
                    document.getElementById("yaz").innerHTML = "STOK KONTROLÜ YAPILIYOR...(3 SANİYE)";
                     await sleep(3000);
                     document.getElementById("yaz").innerHTML = "   ";
                    
                    }
  

        var i=0;


        for(i;i<stok.length;i++){
          if(stok[i]==0){
            
           
              this.disabled=true;
           btnHesap.value='STOK TÜKENDİ';
           return  document.getElementById("yaz").innerHTML = "STOKTA EKSİK VAR.SİPARİŞ OLUŞTURULAMAZ!";
   
           //sonlandır

          }


        }
      

             //stok yeterli is siparisi al
                 //sipariş alındı(1 saniye)
                   if(true){
                    document.getElementById("yaz").innerHTML = "Stok yeterli.Siparişiniz alındı.";
                     await sleep(1000);
                        this.disabled=true;
                    btnHesap.value='Siparisiniz alındı';
                    document.getElementById("yaz").innerHTML = "   ";
                    
                    }

         
            

          //asenkron çalışma 3,4,5 bölümler için
          if(document.getElementById("sec").options.namedItem("tavuk").id==sec.options[sec.selectedIndex].id){  //tavuk seçildiyse veriler dizisinde yerini stoktan o kadar azaltmak için 1 yazılır.Yoksa zaten dizide olan 0 değeri kalır.
               //tavuk 3 saniy
              veriler[3]=1;  //1 ise güncelleme yapar dizide ve ileride stoktan çıkarır.

                if(true){

                    document.getElementById("yaz").innerHTML = "TAVUK PİŞİYOR...";
                     await sleep(3000);
                      

                    
                     document.getElementById("yaz").innerHTML = "TAVUK PİŞTİ VE HAMBURGERE EKLENDİ. +"; 
                   
                }
              
          } else if (document.getElementById("sec").options.namedItem("c5").id==sec.options[sec.selectedIndex].id)  {  //köfte seçildiyse else kısmını çalıştırır.
              veriler[4]=1;
               await sleep(2000);

                    document.getElementById("yaz").innerHTML = "KÖFTE  PİŞİYOR(AZ PİŞMİŞ)...2 saniye";
                    
                     
                   document.getElementById("yaz").innerHTML = "KÖFTE PİŞTİ VE HAMBURGERE EKLENDİ. +"; 
                
          }else if (document.getElementById("sec").options.namedItem("2").id==sec.options[sec.selectedIndex].id)  {  //köfte seçildiyse else kısmını çalıştırır.
              veriler[4]=1;

                    document.getElementById("yaz").innerHTML = "KÖFTE  PİŞİYOR(ORTA PİŞMİŞ)...3 saniye";
                     await sleep(3000);
                   
                   document.getElementById("yaz").innerHTML = "KÖFTE PİŞTİ VE HAMBURGERE EKLENDİ. +"; 
                 
          }else if (document.getElementById("sec").options.namedItem("3").id==sec.options[sec.selectedIndex].id)  {  //köfte seçildiyse else kısmını çalıştırır.
              veriler[4]=1;

                    document.getElementById("yaz").innerHTML = "KÖFTE  PİŞİYOR(ÇOK PİŞMİŞ)...4 saniye";
                     await sleep(4000);//senkron çalışmaları lazım.yani sırayla
                   
                   document.getElementById("yaz").innerHTML = "KÖFTE PİŞTİ VE HAMBURGERE EKLENDİ. +"; 
                 
          }

        
          
 var a=0;
             for(a=0;a<stok.length;a++){
             //siparişte istenen malzemeler stoktan azaltılır.
              stok[a]=stok[a]-veriler[a]; //veriler dizisinde 1 ve 0 larla checkbox değerini tutuyorduk zaten.Stoğu güncelledik
              }

console.log(veriler);//kontrol

                      //stoğun yeni değerini value ye yolluyoruz.Value değerleri güncellendi.
            
              document.getElementById("c1").value=stok[0];  document.getElementById("c2").value=stok[1];
              document.getElementById("c3").value=stok[2];   document.getElementById("c4").value=stok[3];
              document.getElementById("c5").value=stok[4];    document.getElementById("c6").value=stok[5];
              document.getElementById("c7").value=stok[6];      document.getElementById("c8").value=stok[7];
               document.getElementById("ekmek").value=stok[8];

console.log(stok);//kontrol

              if(true){//yeni stok değerlerini ekrana yazdırma işlemi
                     document.getElementById("ekm").innerHTML = ("EKMEK:" +"<br>"+ " " + stok[8] ); document.getElementById("7").innerHTML = ("COLA:" + " " + stok[7] );
                      document.getElementById("6").innerHTML = ("PATATES:" + " " + stok[6] ); document.getElementById("5").innerHTML = ("DOMATES:" + " " + stok[5] );
                       document.getElementById("4").innerHTML = ("KÖFTE:" + " " + stok[4] ); document.getElementById("B").innerHTML = ("TAVUK:" + " " + stok[3] );
                      document.getElementById("A").innerHTML = ("SOĞAN:" + " " + stok[2] ); document.getElementById("1").innerHTML = ("SOS:" + " " + stok[1] );
                       document.getElementById("0").innerHTML = ("MARUL,TURŞU:" + " " + stok[0] );
                      
               }


//6.adım :sosları ve ürünleri tepsiye koy (1 saniye) -3,4,5 bitti 6. adım başlayabilir
 //assenkron yani aynı anda çalışacaklar fonsiyon içindekiler.
 malzemeler(veriler);
 await sleep( 5000);  
 end(veriler);


}//function end


 function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}

 function sleepp(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}

async function  malzemeler(veriler){



 if(veriler[0]==1){
  document.getElementById("marul").innerHTML = "Marul ve turşu Eklendi" ;
 
     //aynı anda çalışmaya başlıyorlar 3,4,5 bölümler
 
}


    if(veriler[2]==1){
      document.getElementById("sogan").innerHTML = "Soğan Eklendi" ;
    
 }


    if(veriler[5]==1){
     document.getElementById("domates").innerHTML = "Domates  Eklendi" ;
       
          
         
              }
  
   
    if(veriler[7]==1){
      await sleep(1000);
    document.getElementById("cola").innerHTML = "İçecek Hazır" ;
     
       
        
              }


    
    if(veriler[6]==1){

        setTimeout( document.getElementById("patates").innerHTML = "Patatesler Hazır...",5000) ;
     
      };

       



}

async function  end(veriler){

      document.getElementById("marul").innerHTML = "   ";
      document.getElementById("sogan").innerHTML = "   ";
      document.getElementById("domates").innerHTML = "   ";
      document.getElementById("patates").innerHTML = "   ";
      document.getElementById("cola").innerHTML = "   ";
      
document.getElementById("yaz").innerHTML = "   ";
if(veriler[1]==1){  //SIRAYLA ÇALIŞMAK ZORUNDA
        document.getElementById("yaz").innerHTML = "ÜRÜNLER VE SOSLAR SERVİS TEPSİSİNE KOYULDU)";
        await sleep(1000); //BU İŞLEM BİTMEDEN DİĞERİNE GEÇİLEMEZ
        document.getElementById("yaz").innerHTML = " MÜŞTERİYE SERVİS EDİLDİ.  ";

}else{
         await sleep(1000);
        document.getElementById("yaz").innerHTML = "ÜRÜNLER SERVİS TEPSİSİNE KOYULDU.";
        await sleep(1000); //BU İŞLEM BİTMEDEN DİĞERİNE GEÇİLEMEZ
        document.getElementById("yaz").innerHTML = "MÜŞTERİYE SERVİS EDİLDİ.";
           await sleep(1000)

}
      
           document.getElementById("c1").checked = false; //checkbox işaretleri kaldırılır.
            document.getElementById("c2").checked = false;
             document.getElementById("c3").checked = false; document.getElementById("c6").checked = false;
              document.getElementById("c4").checked = false; document.getElementById("c7").checked = false;
               document.getElementById("c5").checked = false; document.getElementById("c8").checked = false;

       

          btnHesap.disabled=false;
           btnHesap.value='submit';


          }
  



    