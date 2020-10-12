
            $(window).scroll(function(){
                var scTop = $(window).scrollTop();           
                if(scTop>=200) {
                    $("#gnb").addClass("on");
                } else {
                    $("#gnb").removeClass("on");
                }
            });
