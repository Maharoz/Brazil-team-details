var urlParams;
var i;
;(function ($) {

	$(document).ready(function () {
        $("li").on("click", function () {       	
            var c = $(this).attr('class');            
            
            $(".Players-body tr").hide();
           
           if(c=="cs"){
           	i=0;

           	 var td0 = $("<td/>").html(i).attr("width", "5%");
            
            var td1 = $("<td/>").html((fixturess[i].match)).attr("width", "25%");
            var td2 = $("<td/>").html((fixturess[i].goals)).attr("width", "25%");
            var td3 = $("<td/>").html((fixturess[i].position)).attr("width", "25%");
            var td4 = $("<td/>").html((fixturess[i].club)).attr("width", "25%");

            $("<tr/>").attr("id", "g" + (i))
                .append([td0, td1, td2, td3, td4])
                .data({
                    "match": fixturess[i].match,
                    "goals": fixturess[i].goals,
                   
                    "t": fixturess[i].club,
                    "d": fixturess[i].position
                })
            
               .appendTo($(".Players-body"));
           }
           else if(c=="fn"){
			i=1;



           	 var td0 = $("<td/>").html(i).attr("width", "5%");
            
            var td1 = $("<td/>").html((fixturess[i].match)).attr("width", "25%");
            var td2 = $("<td/>").html((fixturess[i].goals)).attr("width", "25%");
            var td3 = $("<td/>").html((fixturess[i].position)).attr("width", "25%");
            var td4 = $("<td/>").html((fixturess[i].club)).attr("width", "25%");

            $("<tr/>").attr("id", "g" + (i))
                .append([td0, td1, td2, td3, td4])
                .data({
                    "match": fixturess[i].match,
                    "goals": fixturess[i].goals,
                 
                    "t": fixturess[i].club,
                    "d": fixturess[i].position
                })


              
               .appendTo($(".Players-body"));
           }

                 else if(c=="co"){
			i=2;



           	 var td0 = $("<td/>").html(i).attr("width", "5%");
            
            var td1 = $("<td/>").html((fixturess[i].match)).attr("width", "25%");
            var td2 = $("<td/>").html((fixturess[i].goals)).attr("width", "25%");
            var td3 = $("<td/>").html((fixturess[i].position)).attr("width", "25%");
            var td4 = $("<td/>").html((fixturess[i].club)).attr("width", "25%");

            $("<tr/>").attr("id", "g" + (i))
                .append([td0, td1, td2, td3, td4])
                .data({
                    "match": fixturess[i].match,
                    "goals": fixturess[i].goals,
                  
                    "t": fixturess[i].club,
                    "d": fixturess[i].position
                })

                
             
               .appendTo($(".Players-body"));
           }

              else if(c=="da"){
			i=3;



           	 var td0 = $("<td/>").html(i).attr("width", "5%");
            
            var td1 = $("<td/>").html((fixturess[i].match)).attr("width", "25%");
            var td2 = $("<td/>").html((fixturess[i].goals)).attr("width", "25%");
            var td3 = $("<td/>").html((fixturess[i].position)).attr("width", "25%");
            var td4 = $("<td/>").html((fixturess[i].club)).attr("width", "25%");

            $("<tr/>").attr("id", "g" + (i))
                .append([td0, td1, td2, td3, td4])
                .data({
                    "match": fixturess[i].match,
                    "goals": fixturess[i].goals,
                 
                    "t": fixturess[i].club,
                    "d": fixturess[i].position
                })

                
             
               .appendTo($(".Players-body"));
           }
  else if(c=="al"){
			i=4;



           	 var td0 = $("<td/>").html(i).attr("width", "5%");
            
            var td1 = $("<td/>").html((fixturess[i].match)).attr("width", "25%");
            var td2 = $("<td/>").html((fixturess[i].goals)).attr("width", "25%");
            var td3 = $("<td/>").html((fixturess[i].position)).attr("width", "25%");
            var td4 = $("<td/>").html((fixturess[i].club)).attr("width", "25%");

            $("<tr/>").attr("id", "g" + (i))
                .append([td0, td1, td2, td3, td4])
                .data({
                    "match": fixturess[i].match,
                    "goals": fixturess[i].goals,
                   
                    "t": fixturess[i].club,
                    "d": fixturess[i].position
                })

                
             
               .appendTo($(".Players-body"));
           }


else if(c=="th"){
			i=5;



           	 var td0 = $("<td/>").html(i).attr("width", "5%");
            
            var td1 = $("<td/>").html((fixturess[i].match)).attr("width", "25%");
            var td2 = $("<td/>").html((fixturess[i].goals)).attr("width", "25%");
            var td3 = $("<td/>").html((fixturess[i].position)).attr("width", "25%");
            var td4 = $("<td/>").html((fixturess[i].club)).attr("width", "25%");

            $("<tr/>").attr("id", "g" + (i))
                .append([td0, td1, td2, td3, td4])
                .data({
                    "match": fixturess[i].match,
                    "goals": fixturess[i].goals,
                   
                    "t": fixturess[i].club,
                    "d": fixturess[i].position
                })

                
             
               .appendTo($(".Players-body"));
           }



           else if(c=="mi"){
			i=6;



           	 var td0 = $("<td/>").html(i).attr("width", "5%");
            
            var td1 = $("<td/>").html((fixturess[i].match)).attr("width", "25%");
            var td2 = $("<td/>").html((fixturess[i].goals)).attr("width", "25%");
            var td3 = $("<td/>").html((fixturess[i].position)).attr("width", "25%");
            var td4 = $("<td/>").html((fixturess[i].club)).attr("width", "25%");

            $("<tr/>").attr("id", "g" + (i))
                .append([td0, td1, td2, td3, td4])
                .data({
                    "match": fixturess[i].match,
                    "goals": fixturess[i].goals,
                  
                    "t": fixturess[i].club,
                    "d": fixturess[i].position
                })

                
              
               .appendTo($(".Players-body"));
           }

 else if(c=="fl"){
			i=7;



           	 var td0 = $("<td/>").html(i).attr("width", "5%");
            
            var td1 = $("<td/>").html((fixturess[i].match)).attr("width", "25%");
            var td2 = $("<td/>").html((fixturess[i].goals)).attr("width", "25%");
            var td3 = $("<td/>").html((fixturess[i].position)).attr("width", "25%");
            var td4 = $("<td/>").html((fixturess[i].club)).attr("width", "25%");

            $("<tr/>").attr("id", "g" + (i))
                .append([td0, td1, td2, td3, td4])
                .data({
                    "match": fixturess[i].match,
                    "goals": fixturess[i].goals,
                  
                    "t": fixturess[i].club,
                    "d": fixturess[i].position
                })

                
             
               .appendTo($(".Players-body"));
           }



 else if(c=="ma"){
			i=8;



           	 var td0 = $("<td/>").html(i).attr("width", "5%");
            
            var td1 = $("<td/>").html((fixturess[i].match)).attr("width", "25%");
            var td2 = $("<td/>").html((fixturess[i].goals)).attr("width", "25%");
            var td3 = $("<td/>").html((fixturess[i].position)).attr("width", "25%");
            var td4 = $("<td/>").html((fixturess[i].club)).attr("width", "25%");

            $("<tr/>").attr("id", "g" + (i))
                .append([td0, td1, td2, td3, td4])
                .data({
                    "match": fixturess[i].match,
                    "goals": fixturess[i].goals,
                
                    "t": fixturess[i].club,
                    "d": fixturess[i].position
                })

                
              
               .appendTo($(".Players-body"));
           }



           else if(c=="fa"){
			i=9;



           	 var td0 = $("<td/>").html(i).attr("width", "5%");
            
            var td1 = $("<td/>").html((fixturess[i].match)).attr("width", "25%");
            var td2 = $("<td/>").html((fixturess[i].goals)).attr("width", "25%");
            var td3 = $("<td/>").html((fixturess[i].position)).attr("width", "25%");
            var td4 = $("<td/>").html((fixturess[i].club)).attr("width", "25%");

            $("<tr/>").attr("id", "g" + (i))
                .append([td0, td1, td2, td3, td4])
                .data({
                    "match": fixturess[i].match,
                    "goals": fixturess[i].goals,
                   
                    "t": fixturess[i].club,
                    "d": fixturess[i].position
                })

                
             
               .appendTo($(".Players-body"));
           }


           else if(c=="ne"){
			i=10;



           	 var td0 = $("<td/>").html(i).attr("width", "5%");
            
            var td1 = $("<td/>").html((fixturess[i].match)).attr("width", "25%");
            var td2 = $("<td/>").html((fixturess[i].goals)).attr("width", "25%");
            var td3 = $("<td/>").html((fixturess[i].position)).attr("width", "25%");
            var td4 = $("<td/>").html((fixturess[i].club)).attr("width", "25%");

            $("<tr/>").attr("id", "g" + (i))
                .append([td0, td1, td2, td3, td4])
                .data({
                    "match": fixturess[i].match,
                    "goals": fixturess[i].goals,
                  
                    "t": fixturess[i].club,
                    "d": fixturess[i].position
                })

                             
               .appendTo($(".Players-body"));
           }



                else if(c=="fi"){
			i=11;



           	 var td0 = $("<td/>").html(i).attr("width", "5%");
            
            var td1 = $("<td/>").html((fixturess[i].match)).attr("width", "25%");
            var td2 = $("<td/>").html((fixturess[i].goals)).attr("width", "25%");
            var td3 = $("<td/>").html((fixturess[i].position)).attr("width", "25%");
            var td4 = $("<td/>").html((fixturess[i].club)).attr("width", "25%");

            $("<tr/>").attr("id", "g" + (i))
                .append([td0, td1, td2, td3, td4])
                .data({
                    "match": fixturess[i].match,
                    "goals": fixturess[i].goals,
                  
                    "t": fixturess[i].club,
                    "d": fixturess[i].position
                })

                
             
               .appendTo($(".Players-body"));
           }


             else if(c=="ta"){
			i=12;



           	 var td0 = $("<td/>").html(i).attr("width", "5%");
            
            var td1 = $("<td/>").html((fixturess[i].match)).attr("width", "25%");
            var td2 = $("<td/>").html((fixturess[i].goals)).attr("width", "25%");
            var td3 = $("<td/>").html((fixturess[i].position)).attr("width", "25%");
            var td4 = $("<td/>").html((fixturess[i].club)).attr("width", "25%");

            $("<tr/>").attr("id", "g" + (i))
                .append([td0, td1, td2, td3, td4])
                .data({
                    "match": fixturess[i].match,
                    "goals": fixturess[i].goals,
                  
                    "t": fixturess[i].club,
                    "d": fixturess[i].position
                })

                
              
               .appendTo($(".Players-body"));
           }

            else if(c=="je"){
			i=13;



           	 var td0 = $("<td/>").html(i).attr("width", "5%");
            
            var td1 = $("<td/>").html((fixturess[i].match)).attr("width", "25%");
            var td2 = $("<td/>").html((fixturess[i].goals)).attr("width", "25%");
            var td3 = $("<td/>").html((fixturess[i].position)).attr("width", "25%");
            var td4 = $("<td/>").html((fixturess[i].club)).attr("width", "25%");

            $("<tr/>").attr("id", "g" + (i))
                .append([td0, td1, td2, td3, td4])
                .data({
                    "match": fixturess[i].match,
                    "goals": fixturess[i].goals,
                   
                    "t": fixturess[i].club,
                    "d": fixturess[i].position
                })

                
             
               .appendTo($(".Players-body"));
           }


           else if(c=="do"){
			i=14;



           	 var td0 = $("<td/>").html(i).attr("width", "5%");
            
            var td1 = $("<td/>").html((fixturess[i].match)).attr("width", "25%");
            var td2 = $("<td/>").html((fixturess[i].goals)).attr("width", "25%");
            var td3 = $("<td/>").html((fixturess[i].position)).attr("width", "25%");
            var td4 = $("<td/>").html((fixturess[i].club)).attr("width", "25%");

            $("<tr/>").attr("id", "g" + (i))
                .append([td0, td1, td2, td3, td4])
                .data({
                    "match": fixturess[i].match,
                    "goals": fixturess[i].goals,
                   
                    "t": fixturess[i].club,
                    "d": fixturess[i].position
                })

                
             
               .appendTo($(".Players-body"));
           }

           else if(c=="wi"){
			i=15;

           	 var td0 = $("<td/>").html(i).attr("width", "5%");
            
            var td1 = $("<td/>").html((fixturess[i].match)).attr("width", "25%");
            var td2 = $("<td/>").html((fixturess[i].goals)).attr("width", "25%");
            var td3 = $("<td/>").html((fixturess[i].position)).attr("width", "25%");
            var td4 = $("<td/>").html((fixturess[i].club)).attr("width", "25%");

            $("<tr/>").attr("id", "g" + (i))
                .append([td0, td1, td2, td3, td4])
                .data({
                    "match": fixturess[i].match,
                    "goals": fixturess[i].goals,
                   
                    "t": fixturess[i].club,
                    "d": fixturess[i].position
                })                           
               .appendTo($(".Players-body"));
           }


            else if(c=="fr"){
			i=16;



           	 var td0 = $("<td/>").html(i).attr("width", "5%");
            
            var td1 = $("<td/>").html((fixturess[i].match)).attr("width", "25%");
            var td2 = $("<td/>").html((fixturess[i].goals)).attr("width", "25%");
            var td3 = $("<td/>").html((fixturess[i].position)).attr("width", "25%");
            var td4 = $("<td/>").html((fixturess[i].club)).attr("width", "25%");

            $("<tr/>").attr("id", "g" + (i))
                .append([td0, td1, td2, td3, td4])
                .data({
                    "match": fixturess[i].match,
                    "goals": fixturess[i].goals,
                  
                    "t": fixturess[i].club,
                    "d": fixturess[i].position
                })

                            
               .appendTo($(".Players-body"));
           }

           else if(c=="pa"){
			i=17;



           	 var td0 = $("<td/>").html(i).attr("width", "5%");
            
            var td1 = $("<td/>").html((fixturess[i].match)).attr("width", "25%");
            var td2 = $("<td/>").html((fixturess[i].goals)).attr("width", "25%");
            var td3 = $("<td/>").html((fixturess[i].position)).attr("width", "25%");
            var td4 = $("<td/>").html((fixturess[i].club)).attr("width", "25%");

            $("<tr/>").attr("id", "g" + (i))
                .append([td0, td1, td2, td3, td4])
                .data({
                    "match": fixturess[i].match,
                    "goals": fixturess[i].goals,
                   
                    "t": fixturess[i].club,
                    "d": fixturess[i].position
                })

                
             
               .appendTo($(".Players-body"));
           }

           else if(c=="re"){
			i=18;



           	 var td0 = $("<td/>").html(i).attr("width", "5%");
            
            var td1 = $("<td/>").html((fixturess[i].match)).attr("width", "25%");
            var td2 = $("<td/>").html((fixturess[i].goals)).attr("width", "25%");
            var td3 = $("<td/>").html((fixturess[i].position)).attr("width", "25%");
            var td4 = $("<td/>").html((fixturess[i].club)).attr("width", "25%");

            $("<tr/>").attr("id", "g" + (i))
                .append([td0, td1, td2, td3, td4])
                .data({
                    "match": fixturess[i].match,
                    "goals": fixturess[i].goals,
                  
                    "t": fixturess[i].club,
                    "d": fixturess[i].position
                })

                
               .appendTo($(".Players-body"));
           }

            else if(c=="pe"){
			i=19;



           	 var td0 = $("<td/>").html(i).attr("width", "5%");
            
            var td1 = $("<td/>").html((fixturess[i].match)).attr("width", "25%");
            var td2 = $("<td/>").html((fixturess[i].goals)).attr("width", "25%");
            var td3 = $("<td/>").html((fixturess[i].position)).attr("width", "25%");
            var td4 = $("<td/>").html((fixturess[i].club)).attr("width", "25%");

            $("<tr/>").attr("id", "g" + (i))
                .append([td0, td1, td2, td3, td4])
                .data({
                    "match": fixturess[i].match,
                    "goals": fixturess[i].goals,
                   
                    "t": fixturess[i].club,
                    "d": fixturess[i].position
                })
                           
               .appendTo($(".Players-body"));
           }
            window.scrollTo(0, 700);


        });




        for (i in fixturess) {

        	
           var td0 = $("<td/>").html(i).attr("width", "5%");
            
            var td1 = $("<td/>").html((fixturess[i].match)).attr("width", "25%");
            var td2 = $("<td/>").html((fixturess[i].goals)).attr("width", "25%");
            var td3 = $("<td/>").html((fixturess[i].position)).attr("width", "25%");
            var td4 = $("<td/>").html((fixturess[i].club)).attr("width", "25%");

            $("<tr/>").attr("id", "g" + (i * 1 + 1))
                .append([td0, td1, td2, td3, td4])
                .data({
                    "match": fixturess[i].match,
                    "goals": fixturess[i].goals,                   
                    "t": fixturess[i].club,
                    "d": fixturess[i].position
                })
              
               .appendTo($(".Players-body"));


        }

        });

	})(jQuery);