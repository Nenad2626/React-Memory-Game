import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/css/App.css';

let intervalId;
let red="crimson";
let blue="deepskyblue";
let green="olivedrab";
let white="white";
let deci=0;
let dr=15;
let advance=0;

let o1=[0,25,29];
let o2=[8,15,24];
let o3=[4,16,22];

let o4=[2,10,15,20,27];
let o5=[6,9,12,16,17];
let o6=[11,12,13,21,22];

let o7=[0,10,14,18,19,25,29];
let o8=[3,13,18,22,24,26,27];
let o9=[9,15,19,21,23,25,26];

let o10=[6,10,12,14,18,20,21,22,23];
let o11=[0,1,11,12,15,16,18,20,24];
let o12=[1,2,3,4,14,18,22,26,28];

let o13=[0,2,4,6,8,10,12,14,16,18,20,22];
let o14=[1,3,5,8,11,14,17,20,23,25,27,29];
let o15=[1,2,3,6,7,8,9,11,14,17,20,23];

let colorsMatch=[];

class Express extends React.Component {

constructor(props)  {
super(props);

this.state={

engine: "",
added: deci,
level: dr,
words: "",
dnb: "",
asd: "",
upgraded: advance,
model: ""

}

this.fragileColors=this.fragileColors.bind(this);
this.gameStart=this.gameStart.bind(this);
this.gameCheck=this.gameCheck.bind(this);

}

clickOne()  {

this.setState({

engine: red,
added: deci=1

});

}

clickTwo()  {

this.setState({
   
engine: blue,
added: deci=2
   
 });
   
}

clickThree()  {

this.setState({
      
engine: green,
added: deci=3
      
});
      
}

clickFour()  {

  this.setState({
        
  engine: white,
  added: deci=0
        
  });
        
  }
  

fragileColors() {

let all=document.querySelectorAll(".wall");

this.setState({

asd: "MEMORIZE 3 RED COLORS"
  
})

for(let i=0; i < all.length; i++)  {

all[i].style.background=blue;

}

for(let m=0; m < o1.length; m++)  {

all[o1[m]].style.background=red;

}


}


gameStart()  {

const {level}=this.state;     

this.setState({

level: level-1

})

if(this.state.level < 10)  {

this.setState({

dnb: "0"
    
})

} else {

this.setState({

dnb: ""
    
 })

}

let all=document.querySelectorAll(".wall");     

if(this.state.level===0)  {
    
clearInterval(intervalId);                 

for(let b=0; b < all.length; b++)  {
                                      
all[b].style.background="white";
                                                
  }
                
 }

}
 


gameCheck() {

let all=document.querySelectorAll(".wall");
let allOver=document.querySelector(".allOver");

  if(this.state.asd==="MEMORIZE 3 RED COLORS" && 
    o1.every(index => all[index].style.background===red) && colorsMatch.length===3) {

  this.setState({
  
  dnb: "",
  level: dr=15,
  upgraded: advance=1,
  asd: "MEMORIZE 3 BLUE COLORS",
  added: deci=0
  
  })
  
  for(let dd=0; dd < all.length; dd++)  {
  
  all[dd].style.background=green;
  
    }
  
  for(let x=0; x < o2.length; x++)  {
  
  all[o2[x]].style.background=blue;
  
    }
  
   }
    
    if(this.state.asd==="MEMORIZE 3 BLUE COLORS" && 
       o2.every(index => all[index].style.background===blue) && colorsMatch.length===3)  {
      
    this.setState({
    
    dnb: "",
    level: dr=15,
    upgraded: advance=1,
    asd: "MEMORIZE 3 GREEN COLORS",
    added: deci=0
    
    })
    
    for(let dd=0; dd < all.length; dd++)  {
    
    all[dd].style.background=red;
    
      }
    
    for(let x=0; x < o3.length; x++)  {
    
    all[o3[x]].style.background=green;
    
      }
    
     }
    

    
    if(this.state.asd==="MEMORIZE 3 GREEN COLORS" && 
      o3.every(index => all[index].style.background===green) && colorsMatch.length===3)  {
       
    this.setState({
    
    dnb: "",
    level: dr=15,
    upgraded: advance=1,
    asd: "MEMORIZE 5 RED COLORS",
    added: deci=0
    
    })
    
    for(let dd=0; dd < all.length; dd++)  {
    
    all[dd].style.background=blue;
    
      }
    
    for(let x=0; x < o4.length; x++)  {
    
    all[o4[x]].style.background=red;
    
      }
    
     }

      
     if(this.state.asd==="MEMORIZE 5 RED COLORS" && 
     o4.every(index => all[index].style.background===red) && colorsMatch.length===5)  {
         
      this.setState({
      
      dnb: "",
      level: dr=15,
      upgraded: advance=1,
      asd: "MEMORIZE 5 BLUE COLORS",
      added: deci=0
      
      })
      
      for(let dd=0; dd < all.length; dd++)  {
      
      all[dd].style.background=green;
      
        }
      
      
      for(let x=0; x < o5.length; x++)  {
      
      all[o5[x]].style.background=blue;
      
        }
      
       }
      

        
       if(this.state.asd==="MEMORIZE 5 BLUE COLORS" && 
       o5.every(index => all[index].style.background===blue) && colorsMatch.length===5)  {
          
        this.setState({
        
        dnb: "",
        level: dr=15,
        upgraded: advance=1,
        asd: "MEMORIZE 5 GREEN COLORS",
        added: deci=0
        
        })
        
        for(let dd=0; dd < all.length; dd++)  {
        
        all[dd].style.background=red;
        
          }
        
        for(let x=0; x < o6.length; x++)  {
        
        all[o6[x]].style.background=green;
        
          }
        
         }
           
         if(this.state.asd==="MEMORIZE 5 GREEN COLORS" && 
         o6.every(index => all[index].style.background===green) && colorsMatch.length===5)  {
            
          this.setState({
          
          dnb: "",
          level: dr=15,
          upgraded: advance=1,
          asd: "MEMORIZE 7 RED COLORS",
          added: deci=0
          
          })
          
          for(let dd=0; dd < all.length; dd++)  {
          
          all[dd].style.background=blue;
          
            }
          
          for(let x=0; x < o7.length; x++)  {
          
          all[o7[x]].style.background=red;
          
            }
          
           }
                     
           if(this.state.asd==="MEMORIZE 7 RED COLORS" && 
           o7.every(index => all[index].style.background===red) && colorsMatch.length===7)  {
              
            this.setState({
              
            dnb: "",
            level: dr=15,
            upgraded: advance=1,
            asd: "MEMORIZE 7 BLUE COLORS",
            added: deci=0
            
            })
            
            for(let dd=0; dd < all.length; dd++)  {
            
            all[dd].style.background=green;
            
              }
            
            for(let x=0; x < o8.length; x++)  {
            
            all[o8[x]].style.background=blue;
            
              }
            
             }
              
             if(this.state.asd==="MEMORIZE 7 BLUE COLORS" && 
             o8.every(index => all[index].style.background===blue) && colorsMatch.length===7)  {
                
              this.setState({
              
              dnb: "",
              level: dr=15,
              upgraded: advance=1,
              asd: "MEMORIZE 7 GREEN COLORS",
              added: deci=0
              
              })
              
              for(let dd=0; dd < all.length; dd++)  {
              
              all[dd].style.background=red;
              
                }
              
              for(let x=0; x < o9.length; x++)  {
              
              all[o9[x]].style.background=green;
              
                }
              
               }

                
          if(this.state.asd==="MEMORIZE 7 GREEN COLORS" && 
           o9.every(index => all[index].style.background===green) && colorsMatch.length===7)  { 
           
         this.setState({
         
         dnb: "",
         level: dr=15,
         upgraded: advance=1,
         asd: "MEMORIZE 9 RED COLORS",
         added: deci=0
         
         })
         
         for(let dd=0; dd < all.length; dd++)  {
         
         all[dd].style.background=blue;
         
           }
         
         for(let x=0; x < o10.length; x++)  {
         
         all[o10[x]].style.background=red;
         
           }
         
          }

                  
    if(this.state.asd==="MEMORIZE 9 RED COLORS" && 
    o10.every(index => all[index].style.background===red) && colorsMatch.length===9)  {
     
   this.setState({
   
   dnb: "",
   level: dr=15,
   upgraded: advance=1,
   asd: "MEMORIZE 9 BLUE COLORS",
   added: deci=0
   
   })
   
   for(let dd=0; dd < all.length; dd++)  {
   
   all[dd].style.background=green;
   
     }
   
   for(let x=0; x < o11.length; x++)  {
   
   all[o11[x]].style.background=blue;
   
     }
   
    }
   
  
                    
    if(this.state.asd==="MEMORIZE 9 BLUE COLORS" && 
    o11.every(index => all[index].style.background===blue) && colorsMatch.length===9)  {
     
   this.setState({
   
   dnb: "",
   level: dr=15,
   upgraded: advance=1,
   asd: "MEMORIZE 9 GREEN COLORS",
   added: deci=0
   
   })
   
   for(let dd=0; dd < all.length; dd++)  {
   
   all[dd].style.background=red;
   
     }
   
   for(let x=0; x < o12.length; x++)  {
   
   all[o12[x]].style.background=green;
   
     }
   
    }
                     
    if(this.state.asd==="MEMORIZE 9 GREEN COLORS" && 
    o12.every(index => all[index].style.background===green) && colorsMatch.length===9)  {
     
   this.setState({
   
   dnb: "",
   level: dr=15,
   upgraded: advance=1,
   asd: "MEMORIZE 12 RED COLORS",
   added: deci=0
   
   })
   
   for(let dd=0; dd < all.length; dd++)  {
   
   all[dd].style.background=blue;
   
     }
   
   for(let x=0; x < o13.length; x++)  {
   
   all[o13[x]].style.background=red;
   
     }
   
    }
                        
  if(this.state.asd==="MEMORIZE 12 RED COLORS" && 
    o13.every(index => all[index].style.background===red) && colorsMatch.length===12)  {


   this.setState({
   
   dnb: "",
   level: dr=15,
   upgraded: advance=1,
   asd: "MEMORIZE 12 BLUE COLORS",
   added: deci=0
   
   })
   
   for(let dd=0; dd < all.length; dd++)  {
   
   all[dd].style.background=green;
   
     }
   
   for(let x=0; x < o14.length; x++)  {
   
   all[o14[x]].style.background=blue;
   
     }
   
    }
                          
    if(this.state.asd==="MEMORIZE 12 BLUE COLORS" && 
    o14.every(index => all[index].style.background===blue) && colorsMatch.length===12)  {

                    
      this.setState({
                  
        dnb: "",
        level: dr=15,
        upgraded: advance=1,
        asd: "MEMORIZE 12 GREEN COLORS",
        added: deci=0
                  
          })
                  
          for(let dd=0; dd < all.length; dd++)  {
                  
              all[dd].style.background=red;
                  
          }
                  
                  
          for(let x=0; x < o15.length; x++)  {
                  
            all[o15[x]].style.background=green;
                  
          }
                  
                
            }
                              
            if(this.state.asd==="MEMORIZE 12 GREEN COLORS" && 
            o15.every(index => all[index].style.background===green) && colorsMatch.length===12)  {
        
             
          allOver.style.fontSize="45px";    

          this.setState({
           
          dnb: "0",
          level: dr=0,
          upgraded: advance=1,
          asd: "",
          added: deci=0,
          model: "CONGRATS YOU ARE TRUE WINNER.SEE YOU IN NEW ADVENTURE VERY SOON."

          });    
                    
          for(let dd=0; dd < all.length; dd++)  {
            
              all[dd].style.border="initial";
              all[dd].style.background="initial";
              
          }
                  
                
            }
    

}

componentDidMount() {

this.fragileColors();

  let all=document.querySelectorAll(".wall");
  
  for(let i=0; i < all.length; i++)  {
  
  all[i].addEventListener("click",gameColor);
  
  }

  function gameColor()  {

for(let i=0; i < all.length; i++)  {

if(all[i]===this)  {

colorsMatch.push(i);
console.log(colorsMatch);

 }

}

  if(deci===0)  {
  
    for(let i=0; i < all.length; i++)  {

      all[i].style.background=white;

    }   


  colorsMatch=[];

  } 

  if(deci===1)  {
  
  this.style.background=red;

  } 
  
  if(deci===2)  {
  
  this.style.background=blue;
  
   } 
  
   if(deci===3)  {
  
  this.style.background=green;
  
   } 
  
  }

}


componentDidUpdate() {

if(this.state.level===15)  {

intervalId=setInterval(this.gameStart, 1000);
colorsMatch=[];

  } 


}

render() {

return(

<div className="team">

<div className="field one" onClick={this.clickOne.bind(this)}></div>
<div className="field two" onClick={this.clickTwo.bind(this)}></div>
<div className="field three" onClick={this.clickThree.bind(this)}></div>
<div className="field four" onClick={this.clickFour.bind(this)}></div>

<div className="pocket">

<h2 className="allOver">{this.state.model}</h2>
<div className="wall"></div>
<div className="wall"></div>
<div className="wall"></div>
<div className="wall"></div>
<div className="wall"></div>
<div className="wall"></div>
<div className="wall"></div>
<div className="wall"></div>
<div className="wall"></div>
<div className="wall"></div>
<div className="wall"></div>
<div className="wall"></div>
<div className="wall"></div>
<div className="wall"></div>
<div className="wall"></div>
<div className="wall"></div>
<div className="wall"></div>
<div className="wall"></div>
<div className="wall"></div>
<div className="wall"></div>
<div className="wall"></div>
<div className="wall"></div>
<div className="wall"></div>
<div className="wall"></div>
<div className="wall"></div>
<div className="wall"></div>
<div className="wall"></div>
<div className="wall"></div>
<div className="wall"></div>
<div className="wall"></div>

</div>

<h3 className="whichColor">{this.state.asd}</h3>
<h1 className="continue">00:{this.state.dnb}{this.state.level}</h1>
<button onClick={this.gameCheck}>CHECK</button>

</div>

)

}


}

let division=document.getElementById("root");

ReactDOM.render(

<Express />, division

);





export default Express;