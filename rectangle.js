$(function(){
  var $width=$('#width'),
      $height=$('#height'),
      $btnCal=$('#calculate'),
      $perimeter=$('#perimeter'),
      $area=$('#area');

$btnCal.click(function(){
  var w=Number($width.val()),
      h=Number($height.val());

  var p=(w+h)*2,
      a=w*h;

  $perimeter.val(p);
  $area.val(a);
});
});
