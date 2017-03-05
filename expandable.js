
 $(document).ready(function(){
$(&quot;#fl-expandable&quot;).hide();
$(&quot;#search&quot;).click(function(){
   $(&quot;#outer-wrapper&quot;).animate({&quot;opacity&quot;: &quot;0.4&quot;}, &quot;500&quot;);
   $(&quot;#footer-wrapper&quot;).animate({&quot;opacity&quot;: &quot;0.4&quot;}, &quot;500&quot;);
  $(&quot;#fl-expandable&quot;).fadeToggle(500);
$(&quot;#search&quot;).hide();
 $(&quot;.minus&quot;).show();
   $(&quot;.minus&quot;).click(function(){
     $(&quot;#fl-expandable&quot;).fadeOut(500);
$(&quot;.minus&quot;).hide();
$(&quot;#search&quot;).show();
   $(&quot;#outer-wrapper&quot;).animate({&quot;opacity&quot;: &quot;1&quot;}, &quot;500&quot;);
   $(&quot;#footer-wrapper&quot;).animate({&quot;opacity&quot;: &quot;1&quot;}, &quot;500&quot;);

   });
});
    });
