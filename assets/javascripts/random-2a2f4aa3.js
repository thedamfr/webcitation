(function(){var t;t=function(){return $.get("quotes.json",function(t){var r,e,n,a,i;return n=t,a=Math.floor(Math.random()*n.length),r=n[a],$("#js-author").html(r.author),$("#js-title").html(r.title),""!==r.twitter&&(e='<a href="http://twitter.com/'+r.twitter+'">@'+r.twitter+"</a>",$("#js-twitter").append(e)),""!==r.url&&(i='<a href="'+r.url+'">Site internet</a>',$("#js-url").append(i)),$("#js-content").fadeIn()})},$(function(){return t()})}).call(this);