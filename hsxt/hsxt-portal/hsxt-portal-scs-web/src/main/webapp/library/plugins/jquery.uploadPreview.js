﻿/*
 * 修改by 万华成
 * 2015-10-16 解决ie6,7,8下兼容性问题 
 * 2016-03-18 提示框统一 ,加了文件大小检测
 * 2016-05-16 ie8不兼容问题修复，但未实现ie8下文件大小检查功能
 * 2016-05-24 ie8下多文件上传显示修复
 * 2016-05-25 safari9或以上预览支持
 * 2016-06-13 修改文件大小的提示语
 */

;eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('s 2i(b,c){m d=1o 1U();d.w=b;3(d.26){m e=[d.4,d.n];c(i,e)}t{d.1x=s(){m a=[d.4,d.n];c(i,a)}}}(s($){1g.23.1D({1G:s(i){i=1g.1D({4:0,n:0,Q:i.Q||"#Q",W:["R","2a","2f","2n","1Q"],1R:0,1T:0,1k:1X,Z:11,27:s(){C 11}},i||{});m j=q;m k=$(q);3(p.A.x.y("O")>=1&&($.o.r=="7.0"||$.o.r=="8.0")){k.1r("<1m 2d=\'1H\' 1y=\'1u\' 1t=\'4:1S;\'>")}m l=$(i.Q);l.u({\'1V\':\'1W\',\'4\':i.4+\'T\',\'n\':i.n+\'T\'});G=s(){m a=l.4();m b=l.n();3(a>0&&b>0){m c=(i.4/a<i.n/b)?i.4/a:i.n/b;3(c<=1){l.4(a*c);l.n(b*c)}t{l.4(a);l.n(b)}m d=(i.4-l.4())*0.5;m e=(i.n-l.n())*0.5}3(i.Z&&p.A.x.y("O")>=1&&($.o.r=="7.0"||$.o.r=="8.0"||$.o.r=="9.0")){l.u(\'L\',\'\');l.17(\'v\').u(\'L\',\'\')}l.2b()};k.2c(s(e){3(q.F){3(!2e("\\.("+i.W.12("|")+")$","i").2h(q.F.2s())){3(13 H.z=="s"){H.z({4:1b,14:\'15\',16:P,18:"图片类型必须是"+i.W.12("，")+"中的一种"})}t{z("图片类型必须是"+i.W.12("，")+"中的一种")}q.F="";C 11}3($.o.1Y&&$.o.r<10){3($.o.r=="6.0"){m b=$("<v />");b.K(\'w\',\'24:///\'+q.F);b.u({"4":i.4+\'T\',"n":i.n+\'T\'});l.V().S(b);G()}t{l.u({1q:"1s:I.J.N(19=1C)"});l.1F(0).1a.E("I.J.N").19="1C";2m{l.1F(0).1a.E(\'I.J.N\').w=1l(k[0]);l.1K().1L()}1M(e){3(13 H.z=="s"){H.z({4:1b,14:\'15\',16:P,18:"无效的图片文件！"})}t{z("无效的图片文件！")}C}k.1N();3(p.A.x.y("O")>=1&&($.o.r=="7.0"||$.o.r=="8.0"||$.o.r=="9.0")){k.1O(\'1m[1y="1u"]\').1P()}Y("G()",1)}}t 3(p.A.x.y("1n")>=1||p.A.x.y("1J")>=1){m b=$("<v />");b.K(\'w\',p.1p.1c(q.B.E(0)));b.u({"1d-1e":"1f","4":i.4,"n":i.n});l.V().u(\'L\',\'\').S(b);Y("G()",1)}t 3($.o.1Z){m c=q.B[0];3(p.1v){m d=1o 1v();d.1x=s(e){m a=$("<v />");a.K(\'w\',e.20.21);a.u({"1d-1e":"1f","4":i.4,"n":i.n});l.V().u(\'L\',\'\').S(a)};d.22(c);Y("G()",1)}t 3(p.1w){m b=$("<v />");b.K(\'w\',p.1w.1c(q.B.E(0)));b.u({"1d-1e":"1f","4":i.4,"n":i.n});l.V().u(\'L\',\'\').S(b);Y("G()",1)}}}m f=$(q)[0],D=\'\';3(f.B&&f.B[0]){D=f.B[0]&&f.B[0].25}t{m g=$(q).1A().1B().17(\'v\')[0];3(!g){D=0}t{D=g.29}}3(i.1h&&D&&(D/(U*U)).1E(2)>i.1h){3(13 H.z=="s"){H.z({4:1b,14:\'15\',16:P,18:"图片大小不能超过"+i.1h+"M"})}t{z("图片大小能不超过"+(D/(U*U)).1E(2)+"M")}i.Z=P;$(q).1A().1B().17(\'v\').K(\'w\',i.1k||\'1i/v/1j.R\');3(p.A.x.y("O")>=1&&($.o.r=="7.0"||$.o.r=="8.0"||$.o.r=="9.0")){l[0].1t.1q="1s:I.J.N(19=2g,w=\'1i/v/1j.R\')";l[0].1a.E("I.J.N").w=i.1k||\'1i/v/1j.R\'}m h=$(q),X;X=h.2j().2k("");h.1r(X);h.2l();X.1G(i);C};i.Z=11})}})})(1g);s 1l(a){3(a){3(p.A.x.y("O")>=1){a.1I();C 1z.2o.2p().1H}t 3(p.A.x.y("1n")>=1||p.A.x.y("1J")){3(a.B){C p.1p.1c(q.B.E(0))}C a.F}C a.F}}s 2q(a){a.1I();1z.2r("28")}',62,153,'|||if|width||||||||||||||||||var|height|browser|window|this|version|function|else|css|img|src|userAgent|indexOf|alert|navigator|files|return|byteSize|item|value|autoScaling|comm|DXImageTransform|Microsoft|attr|display||AlphaImageLoader|MSIE|true|imgDiv|gif|append|px|1024|empty|imgType|newFile|setTimeout|maxed||false|join|typeof|imgClass|tips_i|imgFlag|find|content|sizingMethod|filters|420|createObjectURL|vertical|align|middle|jQuery|maxSize|resources|noImg|imgurl|getPath|input|Firefox|new|URL|filter|after|progid|style|ie8|FileReader|webkitURL|onload|placeholder|document|parent|prev|scale|extend|toFixed|get|uploadPreview|text|select|Chrome|children|hide|catch|blur|next|focus|png|maxwidth|0px|maxheight|Image|overflow|hidden|null|msie|safari|target|result|readAsDataURL|fn|file|size|complete|callback|delete|fileSize|jpeg|show|change|type|RegExp|jpg|image|test|readyImage|clone|val|remove|try|bmp|selection|createRange|clearvalue|execCommand|toLowerCase'.split('|'),0,{}));
