function grade_point(){
    var a=document.getElementById("text1").value;
    var b=document.getElementById("text2").value;
    var c=document.getElementById("text3").value;
  
    
    var result=((a*3)+(b*3)+(c*3))/9 ;

if(c==0 || a==0|| b==0){
    document.getElementById("result2").innerHTML="Atlist one subject is Fail";

}else{

        if(result==4){
            document.getElementById("result2").innerHTML="A+ Excellent";
        }
        else if(result>=3.50 && result<4){
            document.getElementById("result2").innerHTML="B+ Very Good";
        }
        else if(result>=3.00 && result<3.50){
            document.getElementById("result2").innerHTML="B Very good";
        }
        else if(result>=2.50 && result<3.00){
            document.getElementById("result2").innerHTML="C+ Good";
        }
        else if(result >=2.00 && result<2.50){
            document.getElementById("result2").innerHTML="C  Good";
        } else if(result<2 && result>1){
            document.getElementById("result2").innerHTML= "D+ Pass ";
           
        }
        else if(result<1){
            document.getElementById("result2").innerHTML="D pass";

        }
        else if(result>4){
            document.getElementById("result2").innerHTML="Undefined";

        }
    

    }
   
}


// crud implementation........

function create(){
    var x=document.getElementById("text5").value;
   var a=[4,5];
   var y=a.push(x);
   document.getElementById("result5").innerHTML=a;
}



