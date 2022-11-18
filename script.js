
function btn(){
    
    function btn_full(){
        let btn_normal_full=document.querySelectorAll('.btn-normal-full');
        let btn_danger_full=document.querySelectorAll('.btn-danger-full');
        let btn_warning_full=document.querySelectorAll('.btn-warning-full');
        let btn_default_full=document.querySelectorAll('.btn-default-full');
        let btn_dark_full=document.querySelectorAll('.btn-dark-full');
        let btn_primary_full=document.querySelectorAll('.btn-primary-full');

        if(btn_normal_full){
            let name = btn_normal_full;
            btn_x(name,'green','rgb(212, 252, 212)','rgb(128, 222, 107)');
        }
        
        if(btn_danger_full){
            let name = btn_danger_full;
            btn-btn_x(name,'red','rgb(252, 212, 212)','rgb(222, 107, 107)');
        }

        if(btn_warning_full){
            let name = btn_warning_full;
            btn_x(name,'rgb(227, 220, 0)','rgb(252, 251, 212)','rgb(222, 218, 107)');
        }

        if(btn_default_full){
            let name = btn_default_full;
            btn_x(name,'blue','rgb(212, 215, 252)','rgb(107, 115, 222)');
        }

        if(btn_dark_full){
            let name = btn_dark_full;
            btn_x(name,'rgb(33, 33, 33)','white','gray'); 

        }
        
        if(btn_primary_full){
            let name=btn_primary_full;
            btn_x(name,'white','rgb(62, 62, 62)','gray');

        }

        function btn_x(btnName,color1, color2,color3){
            btnName.forEach(btn =>{
                if(btn.disabled){
                    console.log(btn.disabled);
                    btn.style.margin='5px';
                    btn.style.minWidth= '100px';
                    btn.style.minHeight= '30px';
                    btn.style.borderRadius= '7px';
                    btn.style.outline= 'none';
                    btn.style.border= '2px solid gray'
                }else{
                    btn.style.margin='5px';
                    btn.style.minWidth= '100px';
                    btn.style.minHeight= '30px';
                    btn.style.backgroundColor= color1;
                    btn.style.outline= 'none';
                    btn.style.border= '2px solid'+" "+color1;
                    btn.style.color= 'white';
                if(btnName === btn_primary_full){
                    btn.style.color ='black';
                    btn.style.border= '2px solid black'
                }
                btn.style.borderRadius= '7px';
            btn.onmouseout = function(){
                btn.style.backgroundColor=color1; 
                if(btnName === btn_primary_full){
                    btn.style.color ='black';
                    btn.style.border= '2px solid black';
                    btn.style.outline='0px solid white';
                    
                }else{
                    btn.style.color='white';
                    btn.style.outline='0px solid'+" "+color3;
                }
            };
            btn.onmouseenter = function(){
                btn.style.backgroundColor=color2 
                if(btnName === btn_warning_full){
                    btn.style.color='gray'
                }else{
                    btn.style.color=color1
                };
                btn.style.border='1.5px solid'+" "+color1
            };
            btn.onmousedown = function(){
                btn.style.backgroundColor=color1, 
                btn.style.border= '1.5px solid'+" "+ color1, 
                btn.style.outline='3px solid'+" "+ color3;

                if(btnName === btn_primary_full){
                    btn.style.color ='black';
                    btn.style.border= '2px solid black'
                    
                }else{
                    btn.style.color='white';
                }
                
            };
            btn.onmouseup = function(){
                if(btnName === btn_warning_full){
                    btn.style.color='gray';
                    
                }else{
                    btn.style.color=color1
                };

                
                btn.style.backgroundColor=color2
                
            };
                }
                
            });
            
        }
        
        
    }

    function btn_empty(){
        let btn_normal=document.querySelectorAll('.btn-normal');
        let btn_default=document.querySelectorAll('.btn-default');
        let btn_danger=document.querySelectorAll('.btn-danger');
        let btn_warning=document.querySelectorAll('.btn-warning');
        let btn_black=document.querySelectorAll('.btn-dark');


        if(btn_normal){
            let name = btn_normal;
            btn_x(name,'green','rgb(212, 252, 212)');
        }

        if(btn_default){
            let name=btn_default;
            btn_x(name,'blue','rgb(212, 215, 252)');
        }

        if(btn_danger){
            let name=btn_danger;
            btn_x(name,'red','rgb(252, 212, 212)');
        }

        if(btn_warning){
            let name=btn_warning;
            btn_x(name,'rgb(178, 187, 0)','rgb(252, 251, 212)');
        }

        if(btn_black){
            let name=btn_black;
            btn_x(name,'rgb(33, 33, 33)','rgb(150, 150, 150)');
        }



        
        function btn_x(btnName, color1, color2){
            btnName.forEach(btn =>{
                if(btn.disabled){
                    console.log(btn.disabled);
                    btn.style.margin='5px';
                    btn.style.minWidth= '100px';
                    btn.style.minHeight= '30px';
                    btn.style.borderRadius= '7px';
                    btn.style.outline= 'none';
                    btn.style.border= '2px solid gray'
                }else{
                    btn.style.margin='5px';
                btn.style.minWidth= '100px';
                btn.style.minHeight= '30px';
                btn.style.backgroundColor= 'white';
                btn.style.outline= 'none';
                btn.style.border= '2px solid'+' '+color1;
                btn.style.color= color1;
                btn.style.borderRadius= '7px';
                btn.onmouseout = function(){
                    btn.style.backgroundColor='white';
                };
                btn.onmouseenter = function(){
                    btn.style.backgroundColor=color2;
                };
                btn.onmousedown = function(){
                    btn.style.backgroundColor='white';
                    border= '1.5px solid'+' '+color1;
                };
                btn.onmouseup = function(){
                    btn.style.backgroundColor=color2;
                };
                }
            });
        }

    }

    function btn_sharp(){
        let btn_normal_sharp=document.querySelectorAll('.btn-normal-sharp');
        let btn_default_sharp=document.querySelectorAll('.btn-default-sharp');
        let btn_danger_sharp=document.querySelectorAll('.btn-danger-sharp');
        let btn_warning_sharp=document.querySelectorAll('.btn-warning-sharp');
        let btn_black_sharp=document.querySelectorAll('.btn-dark-sharp'); 

        if(btn_normal_sharp){
            let name = btn_normal_sharp;
            btn_x(name,'green','rgb(212, 252, 212)');
        }

        if(btn_default_sharp){
            let name=btn_default_sharp;
            btn_x(name,'blue','rgb(212, 215, 252)');
        }

        if(btn_danger_sharp){
            let name=btn_danger_sharp;
            btn_x(name,'red','rgb(252, 212, 212)');
        }

        if(btn_warning_sharp){
            let name=btn_warning_sharp;
            btn_x(name,'rgb(178, 187, 0)','rgb(252, 251, 212)');
        }

        if(btn_black_sharp){
            let name=btn_black_sharp;
            btn_x(name,'rgb(33, 33, 33)','rgb(150, 150, 150)');
        }

        function btn_x(btnName, color1, color2){
            btnName.forEach(btn =>{
                if(btn.disabled){
                    console.log(btn.disabled);
                    btn.style.margin='5px';
                    btn.style.minWidth= '100px';
                    btn.style.minHeight= '30px';
                    btn.style.borderRadius= '0px';
                    btn.style.outline= 'none';
                    btn.style.border= '2px solid gray'
                }else
                {
                    btn.style.margin='5px';
                btn.style.minWidth= '100px';
                btn.style.minHeight= '30px';
                btn.style.backgroundColor= 'white';
                btn.style.outline= 'none';
                btn.style.border= '2px solid'+' '+color1;
                btn.style.color= color1;
                btn.style.borderRadius= '0px';
                btn.onmouseout = function(){
                    btn.style.backgroundColor='white';
                };
                btn.onmouseenter = function(){
                    btn.style.backgroundColor=color2;
                };
                btn.onmousedown = function(){
                    btn.style.backgroundColor='white';
                    border= '1.5px solid'+' '+color1;
                };
                btn.onmouseup = function(){
                    btn.style.backgroundColor=color2;
                };
                }
                
            });
        }
    }

    function btn_sharp_full(){
        let btn_normal_sharp_full=document.querySelectorAll('.btn-normal-sharp-full');
        let btn_default_sharp_full=document.querySelectorAll('.btn-default-sharp-full');
        let btn_danger_sharp_full=document.querySelectorAll('.btn-danger-sharp-full');
        let btn_warning_sharp_full=document.querySelectorAll('.btn-warning-sharp-full');
        let btn_black_sharp_full=document.querySelectorAll('.btn-dark-sharp-full');
        let btn_primary_shrp_full=document.querySelectorAll('.btn-primary-sharp-full');

        if(btn_normal_sharp_full){
            let name = btn_normal_sharp_full;
            btn_x(name,'green','rgb(212, 252, 212)','rgb(128, 222, 107)');
        }

        if(btn_default_sharp_full){
            let name=btn_default_sharp_full;
            btn_x(name,'blue','rgb(212, 215, 252)','rgb(107, 115, 222)');
        }

        if(btn_danger_sharp_full){
            let name=btn_danger_sharp_full;
            btn_x(name,'red','rgb(252, 212, 212)','rgb(222, 107, 107)');
        }

        if(btn_warning_sharp_full){
            let name=btn_warning_sharp_full;
            btn_x(name,'rgb(178, 187, 0)','rgb(252, 251, 212)','rgb(222, 218, 107)');
        }

        if(btn_black_sharp_full){
            let name=btn_black_sharp_full;
            btn_x(name,'rgb(33, 33, 33)','rgb(150, 150, 150)','gray');
        }

        if(btn_primary_shrp_full){
            let name = btn_primary_shrp_full;
            btn_x(name,'white','rgb(62, 62, 62)','gray');
        }

        function btn_x(btnName, color1, color2, color3){
            btnName.forEach(btn =>{
                if(btn.disabled){
                    console.log(btn.disabled);
                    btn.style.margin='5px';
                    btn.style.minWidth= '100px';
                    btn.style.minHeight= '30px';
                    btn.style.borderRadius= '0px';
                    btn.style.outline= 'none';
                    btn.style.border= '2px solid gray'
                }else{
                    btn.style.margin='5px';
                btn.style.minWidth= '100px';
                btn.style.minHeight= '30px';
                btn.style.backgroundColor= color1;
                btn.style.outline= 'none';
                
                
                if(btnName === btn_primary_shrp_full){
                    btn.style.color= 'black';
                    btn.style.border= '2px solid black';
                }else{
                    btn.style.color= 'white';
                    btn.style.border= '2px solid'+" "+color1;
                }
                btn.style.borderRadius= '0px';
            btn.onmouseout = function(){
                btn.style.backgroundColor=color1;
                btn.style.outline='0px solid'+" "+color3;
                if(btnName === btn_primary_shrp_full){
                    btn.style.border='2px solid black';
                    btn.style.color='black';
                }else{
                    
                    btn.style.color='white';
                }
            };
            btn.onmouseenter = function(){
                btn.style.backgroundColor=color2 
                if(btnName === btn_warning_sharp_full){
                    btn.style.color='gray'
                }else{
                    btn.style.color=color1
                };
                
                if(btnName === btn_primary_shrp_full){
                    btn.style.border='1.5px solid black';
                }else{
                    btn.style.border='1.5px solid'+" "+color1;
                }
                
            };
            btn.onmousedown = function(){
                btn.style.backgroundColor=color1;
                btn.style.border= '1.5px solid'+" "+ color1; 
                if(btnName === btn_primary_shrp_full){
                    btn.style.color='black';
                }else{
                    btn.style.color='white';
                }
                
                btn.style.outline='3px solid'+" "+ color3;
            };
            btn.onmouseup = function(){
                if(btnName === btn_warning_sharp_full){
                    btn.style.color='gray'
                }else{
                    btn.style.color=color1
                };
                btn.style.backgroundColor=color2
                
            };
                }
                
            });
        }
    }
    let larg_12 = document.querySelectorAll('.larg-12');
    

    /*--------------------------------------------------*/

    
    
    /*--------------------------------------------------*/
    
    larg_12.forEach(div =>{
        div.style.margin='20px 150px auto';
        div.style.padding= '0px';
        div.style.display= 'flex';
        div.style.justifyContent = 'left';
        div.style.flexWrap='wrap';
        
    });

    

    /*------------------------implement functions------------------------*/
    btn_full();
    btn_empty();
    btn_sharp();
    btn_sharp_full();

    
}
function csslib(){
    function btn_full(){
        let btn_normal_full=document.querySelectorAll('.btn-normal-full');
        let btn_danger_full=document.querySelectorAll('.btn-danger-full');
        let btn_warning_full=document.querySelectorAll('.btn-warning-full');
        let btn_default_full=document.querySelectorAll('.btn-default-full');
        let btn_dark_full=document.querySelectorAll('.btn-dark-full');
        let btn_primary_full=document.querySelectorAll('.btn-primary-full');

        if(btn_normal_full){
            let name = btn_normal_full;
            btn_x(name,'green','rgb(212, 252, 212)','rgb(128, 222, 107)');
        }
        
        if(btn_danger_full){
            let name = btn_danger_full;
            btn-btn_x(name,'red','rgb(252, 212, 212)','rgb(222, 107, 107)');
        }

        if(btn_warning_full){
            let name = btn_warning_full;
            btn_x(name,'rgb(227, 220, 0)','rgb(252, 251, 212)','rgb(222, 218, 107)');
        }

        if(btn_default_full){
            let name = btn_default_full;
            btn_x(name,'blue','rgb(212, 215, 252)','rgb(107, 115, 222)');
        }

        if(btn_dark_full){
            let name = btn_dark_full;
            btn_x(name,'rgb(33, 33, 33)','white','gray'); 

        }
        
        if(btn_primary_full){
            let name=btn_primary_full;
            btn_x(name,'white','rgb(62, 62, 62)','gray');

        }

        function btn_x(btnName,color1, color2,color3){
            btnName.forEach(btn =>{
                if(btn.disabled){
                    console.log(btn.disabled);
                    btn.style.margin='5px';
                    btn.style.minWidth= '100px';
                    btn.style.minHeight= '30px';
                    btn.style.borderRadius= '7px';
                    btn.style.outline= 'none';
                    btn.style.border= '2px solid gray'
                }else{
                    btn.style.margin='5px';
                    btn.style.minWidth= '100px';
                    btn.style.minHeight= '30px';
                    btn.style.backgroundColor= color1;
                    btn.style.outline= 'none';
                    btn.style.border= '2px solid'+" "+color1;
                    btn.style.color= 'white';
                if(btnName === btn_primary_full){
                    btn.style.color ='black';
                    btn.style.border= '2px solid black'
                }
                btn.style.borderRadius= '7px';
            btn.onmouseout = function(){
                btn.style.backgroundColor=color1; 
                if(btnName === btn_primary_full){
                    btn.style.color ='black';
                    btn.style.border= '2px solid black';
                    btn.style.outline='0px solid white';
                    
                }else{
                    btn.style.color='white';
                    btn.style.outline='0px solid'+" "+color3;
                }
            };
            btn.onmouseenter = function(){
                btn.style.backgroundColor=color2 
                if(btnName === btn_warning_full){
                    btn.style.color='gray'
                }else{
                    btn.style.color=color1
                };
                btn.style.border='1.5px solid'+" "+color1
            };
            btn.onmousedown = function(){
                btn.style.backgroundColor=color1, 
                btn.style.border= '1.5px solid'+" "+ color1, 
                btn.style.outline='3px solid'+" "+ color3;

                if(btnName === btn_primary_full){
                    btn.style.color ='black';
                    btn.style.border= '2px solid black'
                    
                }else{
                    btn.style.color='white';
                }
                
            };
            btn.onmouseup = function(){
                if(btnName === btn_warning_full){
                    btn.style.color='gray';
                    
                }else{
                    btn.style.color=color1
                };

                
                btn.style.backgroundColor=color2
                
            };
                }
                
            });
            
        }
        
        
    }

    function btn_empty(){
        let btn_normal=document.querySelectorAll('.btn-normal');
        let btn_default=document.querySelectorAll('.btn-default');
        let btn_danger=document.querySelectorAll('.btn-danger');
        let btn_warning=document.querySelectorAll('.btn-warning');
        let btn_black=document.querySelectorAll('.btn-dark');


        if(btn_normal){
            let name = btn_normal;
            btn_x(name,'green','rgb(212, 252, 212)');
        }

        if(btn_default){
            let name=btn_default;
            btn_x(name,'blue','rgb(212, 215, 252)');
        }

        if(btn_danger){
            let name=btn_danger;
            btn_x(name,'red','rgb(252, 212, 212)');
        }

        if(btn_warning){
            let name=btn_warning;
            btn_x(name,'rgb(178, 187, 0)','rgb(252, 251, 212)');
        }

        if(btn_black){
            let name=btn_black;
            btn_x(name,'rgb(33, 33, 33)','rgb(150, 150, 150)');
        }



        
        function btn_x(btnName, color1, color2){
            btnName.forEach(btn =>{
                if(btn.disabled){
                    console.log(btn.disabled);
                    btn.style.margin='5px';
                    btn.style.minWidth= '100px';
                    btn.style.minHeight= '30px';
                    btn.style.borderRadius= '7px';
                    btn.style.outline= 'none';
                    btn.style.border= '2px solid gray'
                }else{
                    btn.style.margin='5px';
                btn.style.minWidth= '100px';
                btn.style.minHeight= '30px';
                btn.style.backgroundColor= 'white';
                btn.style.outline= 'none';
                btn.style.border= '2px solid'+' '+color1;
                btn.style.color= color1;
                btn.style.borderRadius= '7px';
                btn.onmouseout = function(){
                    btn.style.backgroundColor='white';
                };
                btn.onmouseenter = function(){
                    btn.style.backgroundColor=color2;
                };
                btn.onmousedown = function(){
                    btn.style.backgroundColor='white';
                    border= '1.5px solid'+' '+color1;
                };
                btn.onmouseup = function(){
                    btn.style.backgroundColor=color2;
                };
                }
            });
        }

    }

    function btn_sharp(){
        let btn_normal_sharp=document.querySelectorAll('.btn-normal-sharp');
        let btn_default_sharp=document.querySelectorAll('.btn-default-sharp');
        let btn_danger_sharp=document.querySelectorAll('.btn-danger-sharp');
        let btn_warning_sharp=document.querySelectorAll('.btn-warning-sharp');
        let btn_black_sharp=document.querySelectorAll('.btn-dark-sharp'); 

        if(btn_normal_sharp){
            let name = btn_normal_sharp;
            btn_x(name,'green','rgb(212, 252, 212)');
        }

        if(btn_default_sharp){
            let name=btn_default_sharp;
            btn_x(name,'blue','rgb(212, 215, 252)');
        }

        if(btn_danger_sharp){
            let name=btn_danger_sharp;
            btn_x(name,'red','rgb(252, 212, 212)');
        }

        if(btn_warning_sharp){
            let name=btn_warning_sharp;
            btn_x(name,'rgb(178, 187, 0)','rgb(252, 251, 212)');
        }

        if(btn_black_sharp){
            let name=btn_black_sharp;
            btn_x(name,'rgb(33, 33, 33)','rgb(150, 150, 150)');
        }

        function btn_x(btnName, color1, color2){
            btnName.forEach(btn =>{
                if(btn.disabled){
                    console.log(btn.disabled);
                    btn.style.margin='5px';
                    btn.style.minWidth= '100px';
                    btn.style.minHeight= '30px';
                    btn.style.borderRadius= '0px';
                    btn.style.outline= 'none';
                    btn.style.border= '2px solid gray'
                }else
                {
                    btn.style.margin='5px';
                btn.style.minWidth= '100px';
                btn.style.minHeight= '30px';
                btn.style.backgroundColor= 'white';
                btn.style.outline= 'none';
                btn.style.border= '2px solid'+' '+color1;
                btn.style.color= color1;
                btn.style.borderRadius= '0px';
                btn.onmouseout = function(){
                    btn.style.backgroundColor='white';
                };
                btn.onmouseenter = function(){
                    btn.style.backgroundColor=color2;
                };
                btn.onmousedown = function(){
                    btn.style.backgroundColor='white';
                    border= '1.5px solid'+' '+color1;
                };
                btn.onmouseup = function(){
                    btn.style.backgroundColor=color2;
                };
                }
                
            });
        }
    }

    function btn_sharp_full(){
        let btn_normal_sharp_full=document.querySelectorAll('.btn-normal-sharp-full');
        let btn_default_sharp_full=document.querySelectorAll('.btn-default-sharp-full');
        let btn_danger_sharp_full=document.querySelectorAll('.btn-danger-sharp-full');
        let btn_warning_sharp_full=document.querySelectorAll('.btn-warning-sharp-full');
        let btn_black_sharp_full=document.querySelectorAll('.btn-dark-sharp-full');
        let btn_primary_shrp_full=document.querySelectorAll('.btn-primary-sharp-full');

        if(btn_normal_sharp_full){
            let name = btn_normal_sharp_full;
            btn_x(name,'green','rgb(212, 252, 212)','rgb(128, 222, 107)');
        }

        if(btn_default_sharp_full){
            let name=btn_default_sharp_full;
            btn_x(name,'blue','rgb(212, 215, 252)','rgb(107, 115, 222)');
        }

        if(btn_danger_sharp_full){
            let name=btn_danger_sharp_full;
            btn_x(name,'red','rgb(252, 212, 212)','rgb(222, 107, 107)');
        }

        if(btn_warning_sharp_full){
            let name=btn_warning_sharp_full;
            btn_x(name,'rgb(178, 187, 0)','rgb(252, 251, 212)','rgb(222, 218, 107)');
        }

        if(btn_black_sharp_full){
            let name=btn_black_sharp_full;
            btn_x(name,'rgb(33, 33, 33)','rgb(150, 150, 150)','gray');
        }

        if(btn_primary_shrp_full){
            let name = btn_primary_shrp_full;
            btn_x(name,'white','rgb(62, 62, 62)','gray');
        }

        function btn_x(btnName, color1, color2, color3){
            btnName.forEach(btn =>{
                if(btn.disabled){
                    console.log(btn.disabled);
                    btn.style.margin='5px';
                    btn.style.minWidth= '100px';
                    btn.style.minHeight= '30px';
                    btn.style.borderRadius= '0px';
                    btn.style.outline= 'none';
                    btn.style.border= '2px solid gray'
                }else{
                    btn.style.margin='5px';
                btn.style.minWidth= '100px';
                btn.style.minHeight= '30px';
                btn.style.backgroundColor= color1;
                btn.style.outline= 'none';
                
                
                if(btnName === btn_primary_shrp_full){
                    btn.style.color= 'black';
                    btn.style.border= '2px solid black';
                }else{
                    btn.style.color= 'white';
                    btn.style.border= '2px solid'+" "+color1;
                }
                btn.style.borderRadius= '0px';
            btn.onmouseout = function(){
                btn.style.backgroundColor=color1;
                btn.style.outline='0px solid'+" "+color3;
                if(btnName === btn_primary_shrp_full){
                    btn.style.border='2px solid black';
                    btn.style.color='black';
                }else{
                    
                    btn.style.color='white';
                }
            };
            btn.onmouseenter = function(){
                btn.style.backgroundColor=color2 
                if(btnName === btn_warning_sharp_full){
                    btn.style.color='gray'
                }else{
                    btn.style.color=color1
                };
                
                if(btnName === btn_primary_shrp_full){
                    btn.style.border='1.5px solid black';
                }else{
                    btn.style.border='1.5px solid'+" "+color1;
                }
                
            };
            btn.onmousedown = function(){
                btn.style.backgroundColor=color1;
                btn.style.border= '1.5px solid'+" "+ color1; 
                if(btnName === btn_primary_shrp_full){
                    btn.style.color='black';
                }else{
                    btn.style.color='white';
                }
                
                btn.style.outline='3px solid'+" "+ color3;
            };
            btn.onmouseup = function(){
                if(btnName === btn_warning_sharp_full){
                    btn.style.color='gray'
                }else{
                    btn.style.color=color1
                };
                btn.style.backgroundColor=color2
                
            };
                }
                
            });
        }
    }
    let larg_12 = document.querySelectorAll('.larg-12');
    

    /*--------------------------------------------------*/

    
    
    /*--------------------------------------------------*/
    
    larg_12.forEach(div =>{
        div.style.margin='20px 150px auto';
        div.style.padding= '0px';
        div.style.display= 'flex';
        div.style.justifyContent = 'left';
        div.style.flexWrap='wrap';
        
    });

    

    /*------------------------implement functions------------------------*/
    btn_full();
    btn_empty();
    btn_sharp();
    btn_sharp_full();

    
    
}

module.exports.csslib = csslib;