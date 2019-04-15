$(function() {
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');

  $btnCal.click(function(){
    var w = $width.val(),
        h = $height.val();

    var r=new Reactangle(w,h);
        
    $perimeter.val(r.perimeter());
    $area.val(r.area());
              
  });

});
;function rectangle(){
  return{
    'perimeter':function(width,height){
      return 2*(Number(width)+Number(height));
                  
    },
    'area':function(width,height){
      return (Number(width)*Number(height));
                  
    }

  };

}
