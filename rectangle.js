$(function(){
  //get dom element
  var width=$("#width"),
      height=$("#height"),
      calc=$("#calc"),
      p=$("#p"),
      area=$("#area");
  function roundFractional(x,n){
    return Math.round(x*Math.pow(10,n))/Math.pow(10,n);
  }
  calc.click(()=>{
    var w=Number(width.val());
    var h=Number(height.val());

    var c=(w+h)*2;
    var s=w*h;
    p.val(roundFractional(c,1))
    area.val(roundFractional(s,2))
  })
})
