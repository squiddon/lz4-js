var A=!0,F=null,O=!1;((function(vb){function wb(a){eval.call(F,a)}function Y(a){b.print(a+":\n"+Error().stack);throw"Assertion: "+a}function q(a,e){a||Y("Assertion failed: "+e)}function xb(a){try{var e=eval("_"+a)}catch(g){try{e=Pb.Module["_"+a]}catch(b){}}q(e,"Cannot call unknown function "+a+" (perhaps LLVM optimizations or closure removed it?)");return e}function yb(a,e,g,b){function c(a,e){if("string"==e){if(a===F||void 0===a||0===a){return 0}d||(d=h.B());var g=h.t(a.length+1);zb(a,g);return g}return"array"==e?(d||(d=h.B()),g=h.t(a.length),Ab(a,g),g):a}var d=0,f=0,b=b?b.map((function(a){return c(a,g[f++])})):[];a=a.apply(F,b);"string"==e?e=Bb(a):(q("array"!=e),e=a);d&&h.Z(d);return e}function Cb(a,e,g){g=g||"i8";"*"===g.charAt(g.length-1)&&(g="i32");switch(g){case"i1":f[a]=e;break;case"i8":f[a]=e;break;case"i16":T[a>>1]=e;break;case"i32":v[a>>2]=e;break;case"i64":Ua=[e>>>0,Math.min(Math.floor(e/4294967296),4294967295)];v[a>>2]=Ua[0];v[a+4>>2]=Ua[1];break;case"float":ga[a>>2]=e;break;case"double":va[B>>3]=e;v[a>>2]=v[B>>2];v[a+4>>2]=v[B+4>>2];break;default:Y("invalid type for setValue: "+g)}}function I(a,e,g,b){var c,d;"number"===typeof a?(c=A,d=a):(c=O,d=a.length);var f="string"===typeof e?e:F,g=g==wa?b:[Qb,h.t,h.C][void 0===g?U:g](Math.max(d,f?1:e.length));if(c){return Va(g,0,d),g}for(c=0;c<d;){var u=a[c];"function"===typeof u&&(u=h.oa(u));b=f||e[c];0===b?c++:("i64"==b&&(b="i32"),Cb(g+c,u,b),c+=h.q(b))}return g}function Bb(a,e){for(var g=new h.u,b="undefined"==typeof e,d="",f=0,ub;;){ub=c[a+f];if(b&&0==ub){break}d+=g.S(ub);f+=1;if(!b&&f==e){break}}return d}function xa(a){for(;0<a.length;){var e=a.shift(),g=e.ma;"number"===typeof g?void 0===e.m?h.n("v",g):h.n("vi",g,[e.m]):g(void 0===e.m?F:e.m)}}function R(a,e,g){a=(new h.u).T(a);g&&(a.length=g);e||a.push(0);return a}function zb(a,e,g){a=R(a,g);for(g=0;g<a.length;){f[e+g]=a[g],g+=1}}function Ab(a,e){for(var g=0;g<a.length;g++){f[e+g]=a[g]}}function Db(a){K++;b.monitorRunDependencies&&b.monitorRunDependencies(K);a?(q(!S[a]),S[a]=1,P===F&&"undefined"!==typeof setInterval&&(P=setInterval((function(){var a=O,g;for(g in S){a||(a=A,b.c("still waiting on run dependencies:")),b.c("dependency: "+g)}a&&b.c("(end of list)")}),6e3))):b.c("warning: run dependency added without ID")}function Eb(a){K--;b.monitorRunDependencies&&b.monitorRunDependencies(K);a?(q(S[a]),delete S[a]):b.c("warning: run dependency removed without ID");0==K&&(P!==F&&(clearInterval(P),P=F),!Fb&&Wa&&ya())}function Va(a,e,g){if(20<=g){for(g=a+g;a%4;){f[a++]=e}0>e&&(e+=256);for(var a=a>>2,b=g>>2,c=e|e<<8|e<<16|e<<24;a<b;){v[a++]=c}for(a<<=2;a<g;){f[a++]=e}}else{for(;g--;){f[a++]=e}}}function Qb(a){ptr=h.C(a+8);return ptr+8&4294967288}function Gb(a,e,g,b){var y=0,H=w;w=w+16384|0;Va(H,0,16384);var h=a+g|0,u=a+(g-12)|0,k=e+b|0,r=13>(g|0);a:do{if(r){var m=a,i=e}else{var n=a,p=a+(g-5)|0,s=a+(g-8)|0,j=a+(g-6)|0,x=e,ma=a;b:for(;;){for(var q=ma+1|0,t=q,jb=q,l=67,C=c[t]|c[t+1]<<8|c[t+2]<<16|c[t+3]<<24|0;;){var z=(l>>6)+jb|0;if(z>>>0>u>>>0){m=ma;i=x;break a}var D=z,G=c[D]|c[D+1]<<8|c[D+2]<<16|c[D+3]<<24|0,E=((-1640531535*C|0)>>>19<<1)+H|0,B=a+za[E>>1]|0;T[E>>1]=jb-n&65535;var sb=B,I=jb;if((c[sb]|c[sb+1]<<8|c[sb+2]<<16|c[sb+3]<<24|0)==(c[I]|c[I+1]<<8|c[I+2]<<16|c[I+3]<<24|0)){var kb=jb,tb=B;break}else{jb=z,l=l+1|0,C=G}}for(;kb>>>0>ma>>>0&tb>>>0>a>>>0;){var K=kb-1|0,Hb=tb-1|0;if(f[K]<<24>>24==f[Hb]<<24>>24){kb=K,tb=Hb}else{break}}var Ib=kb,Jb=ma,ha=Ib-Jb|0,X=x+1|0;if(((ha>>8)+x+ha+9|0)>>>0>k>>>0){var $=0,y=53;break}if(14<(ha|0)){f[x]=-16;var Y=ha-15|0;if(254<(Y|0)){var U=Ib-270-Jb|0,aa=Math.floor((U>>>0)/255);Va(X,-1,aa+1|0);var Xa=U+ -255*aa|0,Z=aa+(x+2)|0}else{Xa=Y,Z=X}f[Z]=Xa&255;var Ya=Z+1|0}else{f[x]=ha<<4&255,Ya=X}for(var R=Ya+ha|0,na=ma,Aa=Ya;;){var oa=na,pa=Aa;d=c[oa]|c[oa+1]<<8|c[oa+2]<<16|c[oa+3]<<24|0;f[pa]=d&255;d>>=8;f[pa+1]=d&255;d>>=8;f[pa+2]=d&255;d>>=8;f[pa+3]=d&255;var Ba=na+4|0,ia=Aa+4|0;d=c[Ba]|c[Ba+1]<<8|c[Ba+2]<<16|c[Ba+3]<<24|0;f[ia]=d&255;d>>=8;f[ia+1]=d&255;d>>=8;f[ia+2]=d&255;d>>=8;f[ia+3]=d&255;var Ca=Aa+8|0;if(Ca>>>0<R>>>0){na=na+8|0,Aa=Ca}else{var qa=kb,ba=R,ja=x,ra=tb;break}}for(;;){var S=ba;d=qa-ra&65535;f[S]=d&255;d>>=8;f[S+1]=d&255;for(var Da=ba+2|0,sa=qa+4|0,L=sa,Ea=ra;;){var ta=Ea+4|0;if(L>>>0>=s>>>0){y=27;break}var ua=ta,Za=c[ua]|c[ua+1]<<8|c[ua+2]<<16|c[ua+3]<<24|0,M=L,Fa=c[M]|c[M+1]<<8|c[M+2]<<16|c[M+3]<<24|0;if((Za|0)==(Fa|0)){L=L+4|0,Ea=ta}else{y=26;break}}if(26==y){var y=0,Q=L+v[((125613361*((Fa^Za)&-(Fa^Za))|0)>>>27<<2)+5242912>>2]|0}else{if(27==y){y=0;if(L>>>0<j>>>0){var Ga=ta,$a=L;if((ca=c[Ga]|c[Ga+1]<<8,ca<<16>>16)<<16>>16!=(ca=c[$a]|c[$a+1]<<8,ca<<16>>16)<<16>>16){var V=L,Ha=ta}else{V=L+2|0,Ha=Ea+6|0}}else{V=L,Ha=ta}Q=V>>>0<p>>>0?f[Ha]<<24>>24==f[V]<<24>>24?V+1|0:V:V}}var J=Q,P=sa,Ia=J-P|0;if(((Ia>>8)+ba+8|0)>>>0>k>>>0){$=0;y=54;break b}var da=f[ja];if(14<(Ia|0)){f[ja]=da+15&255;var Ja=Ia-15|0;if(509<(Ja|0)){for(var lb=J-525-P|0,mb=Math.floor((lb>>>0)/510),ab=lb+ -510*mb|0,ga=mb<<1,bb=Ja,Ka=Da;;){f[Ka]=-1;f[Ka+1|0]=-1;var nb=bb-510|0;if(509<(nb|0)){bb=nb,Ka=Ka+2|0}else{break}}var cb=ab,db=ga+(ba+4)|0}else{cb=Ja,db=Da}if(254<(cb|0)){f[db]=-1;var eb=db+1|0,La=cb-255|0}else{eb=db,La=cb}f[eb]=La&255;var ka=eb+1|0}else{f[ja]=(da&255)+Ia&255,ka=Da}if(Q>>>0>u>>>0){m=Q;i=ka;break a}var Ma=Q-2|0,la=Ma;T[H+((-1640531535*(c[la]|c[la+1]<<8|c[la+2]<<16|c[la+3]<<24)|0)>>>19<<1)>>1]=Ma-n&65535;var W=Q,ob=((-1640531535*(c[W]|c[W+1]<<8|c[W+2]<<16|c[W+3]<<24)|0)>>>19<<1)+H|0,ea=a+za[ob>>1]|0;T[ob>>1]=J-n&65535;var Na=ea;if((c[Na]|c[Na+1]<<8|c[Na+2]<<16|c[Na+3]<<24|0)!=(c[W]|c[W+1]<<8|c[W+2]<<16|c[W+3]<<24|0)){x=ka;ma=Q;continue b}f[ka]=0;qa=Q;ba=ka+1|0;ja=ka;ra=ea}}if(53==y||54==y){return w=H,$}}}while(0);var Oa=m,N=h-Oa|0,pb=N+1|0,fb=N-15|0;if((i+pb+Math.floor(((N+240|0)>>>0)/255)|0)>>>0>k>>>0){return $=0,w=H,$}if(14<(N|0)){f[i]=-16;var Pa=i+1|0;if(254<(fb|0)){var qb=h-270-Oa|0,gb=Math.floor((qb>>>0)/255);Va(Pa,-1,gb+1|0);var fa=qb+ -255*gb|0,hb=gb+(i+2)|0}else{fa=fb,hb=Pa}f[hb]=fa&255;var ib=hb}else{f[i]=N<<4&255,ib=i}rb(ib+1|0,m,N);$=ib+pb-e|0;w=H;return $}function Kb(a,e,g,b){var y=0,H=w;w=w+16384|0;for(var h=H>>2,u=h+4096;h<u;h++){v[h]=0}var k=a+g|0,r=g-12|0,m=a+r|0,i=e+b|0,n=13>(g|0);a:do{if(n){var p=a,s=e}else{var j=a;v[H+((-1640531535*(c[j]|c[j+1]<<8|c[j+2]<<16|c[j+3]<<24)|0)>>>20<<2)>>2]=a;if(2>(r|0)){p=a,s=e}else{var x=a+(g-5)|0,ma=a+(g-8)|0,q=a+(g-6)|0,t=e,l=a,C=a+2|0;b:for(;;){for(var I=l+1|0,z=I,D=c[z]|c[z+1]<<8|c[z+2]<<16|c[z+3]<<24|0,G=I,E=68,B=C;;){var K=B,X=c[K]|c[K+1]<<8|c[K+2]<<16|c[K+3]<<24|0,Y=((-1640531535*D|0)>>>20<<2)+H|0,U=v[Y>>2];v[Y>>2]=G;if(U>>>0>=(G-65535|0)>>>0){var R=U,S=G;if((c[R]|c[R+1]<<8|c[R+2]<<16|c[R+3]<<24|0)==(c[S]|c[S+1]<<8|c[S+2]<<16|c[S+3]<<24|0)){var P=G,T=U;break}}var ha=(E>>6)+B|0;if(ha>>>0>m>>>0){p=l;s=t;break a}else{D=X,G=B,E=E+1|0,B=ha}}for(;P>>>0>l>>>0&T>>>0>a>>>0;){var ga=P-1|0,$=T-1|0;if(f[ga]<<24>>24==f[$]<<24>>24){P=ga,T=$}else{break}}var va=P,wa=l,aa=va-wa|0,Xa=t+1|0;if(((aa>>8)+t+aa+9|0)>>>0>i>>>0){var Z=0,y=109;break}if(14<(aa|0)){f[t]=-16;var Ya=aa-15|0;if(254<(Ya|0)){var za=va-270-wa|0,na=Math.floor((za>>>0)/255);Va(Xa,-1,na+1|0);var Aa=za+ -255*na|0,oa=na+(t+2)|0}else{Aa=Ya,oa=Xa}f[oa]=Aa&255;var pa=oa+1|0}else{f[t]=aa<<4&255,pa=Xa}for(var Ba=pa+aa|0,ia=l,Ca=pa;;){var qa=ia,ba=Ca;d=c[qa]|c[qa+1]<<8|c[qa+2]<<16|c[qa+3]<<24|0;f[ba]=d&255;d>>=8;f[ba+1]=d&255;d>>=8;f[ba+2]=d&255;d>>=8;f[ba+3]=d&255;var ja=ia+4|0,ra=Ca+4|0;d=c[ja]|c[ja+1]<<8|c[ja+2]<<16|c[ja+3]<<24|0;f[ra]=d&255;d>>=8;f[ra+1]=d&255;d>>=8;f[ra+2]=d&255;d>>=8;f[ra+3]=d&255;var Ra=Ca+8|0;if(Ra>>>0<Ba>>>0){ia=ia+8|0,Ca=Ra}else{var Da=P,sa=Ba,L=t,Ea=T;break}}for(;;){var ta=sa;d=Da-Ea&65535;f[ta]=d&255;d>>=8;f[ta+1]=d&255;for(var ua=sa+2|0,Za=Da+4|0,M=Za,Fa=Ea;;){var Q=Fa+4|0;if(M>>>0>=ma>>>0){y=79;break}var Ga=Q,$a=c[Ga]|c[Ga+1]<<8|c[Ga+2]<<16|c[Ga+3]<<24|0,V=M,Ha=c[V]|c[V+1]<<8|c[V+2]<<16|c[V+3]<<24|0;if(($a|0)==(Ha|0)){M=M+4|0,Fa=Q}else{y=78;break}}if(78==y){var y=0,J=M+v[((125613361*((Ha^$a)&-(Ha^$a))|0)>>>27<<2)+5242912>>2]|0}else{if(79==y){y=0;if(M>>>0<q>>>0){var Sa=Q,Ia=M;if((ca=c[Sa]|c[Sa+1]<<8,ca<<16>>16)<<16>>16!=(ca=c[Ia]|c[Ia+1]<<8,ca<<16>>16)<<16>>16){var da=M,Ja=Q}else{da=M+2|0,Ja=Fa+6|0}}else{da=M,Ja=Q}J=da>>>0<x>>>0?f[Ja]<<24>>24==f[da]<<24>>24?da+1|0:da:da}}var lb=J,mb=Za,ab=lb-mb|0;if(((ab>>8)+sa+8|0)>>>0>i>>>0){Z=0;y=108;break b}var Ta=f[L];if(14<(ab|0)){f[L]=Ta+15&255;var bb=ab-15|0;if(509<(bb|0)){for(var Ka=lb-525-mb|0,nb=Math.floor((Ka>>>0)/510),cb=Ka+ -510*nb|0,db=nb<<1,eb=bb,La=ua;;){f[La]=-1;f[La+1|0]=-1;var ka=eb-510|0;if(509<(ka|0)){eb=ka,La=La+2|0}else{break}}var Ma=cb,la=db+(sa+4)|0}else{Ma=bb,la=ua}if(254<(Ma|0)){f[la]=-1;var W=la+1|0,ob=Ma-255|0}else{W=la,ob=Ma}f[W]=ob&255;var ea=W+1|0}else{f[L]=(Ta&255)+ab&255,ea=ua}if(J>>>0>m>>>0){p=J;s=ea;break a}var Na=J-2|0,Oa=Na;v[H+((-1640531535*(c[Oa]|c[Oa+1]<<8|c[Oa+2]<<16|c[Oa+3]<<24)|0)>>>20<<2)>>2]=Na;var N=J,pb=((-1640531535*(c[N]|c[N+1]<<8|c[N+2]<<16|c[N+3]<<24)|0)>>>20<<2)+H|0,fb=v[pb>>2];v[pb>>2]=J;if(fb>>>0<=(J-65536|0)>>>0){break}var Pa=fb;if((c[Pa]|c[Pa+1]<<8|c[Pa+2]<<16|c[Pa+3]<<24|0)!=(c[N]|c[N+1]<<8|c[N+2]<<16|c[N+3]<<24|0)){break}f[ea]=0;Da=J;sa=ea+1|0;L=ea;Ea=fb}var qb=J+2|0;if(qb>>>0>m>>>0){p=J;s=ea;break a}else{t=ea,l=J,C=qb}}if(108==y||109==y){return w=H,Z}}}}while(0);var gb=p,fa=k-gb|0;if((1-e+s+Math.floor(((fa+240|0)>>>0)/255)+fa|0)>>>0>b>>>0){return Z=0,w=H,Z}if(14<(fa|0)){f[s]=-16;var hb=fa-15|0,ib=s+1|0;if(254<(hb|0)){var Ua=k-270-gb|0,xa=Math.floor((Ua>>>0)/255);Va(ib,-1,xa+1|0);var Wa=Ua+ -255*xa|0,ya=xa+(s+2)|0}else{Wa=hb,ya=ib}f[ya]=Wa&255;var Qa=ya}else{f[s]=fa<<4&255,Qa=s}rb(Qa+1|0,p,fa);Z=fa+(Qa+1)-e|0;w=H;return Z}function rb(a,e,g){if(0==((e^a)&3|0)){var b=0==(g|0),c=0==(a&3|0)|b;a:do{if(c){var d=g,h=a,u=e,k=b}else{for(var r=g,m=a,i=e;;){var n=i+1|0,p=m+1|0;f[m]=f[i];r=r-1|0;m=0==(r|0);if(0==(p&3|0)|m){d=r;h=p;u=n;k=m;break a}else{m=p,i=n}}}}while(0);if(k){return a}g=h;e=3<d>>>0;a:do{if(e){h=d;k=g;for(n=u;;){if(b=n+4|0,c=k+4|0,v[k>>2]=v[n>>2],h=h-4|0,3<h>>>0){k=c,n=b}else{var s=h,j=c,x=b;break a}}}else{s=d,j=g,x=u}}while(0);d=x}else{d=e,j=a,s=g}if(0==(s|0)){return a}for(;!(f[j]=f[d],s=s-1|0,0==(s|0));){j=j+1|0,d=d+1|0}return a}function Lb(a,e,g,b){var y=0,h=a+g|0,j=e+b|0,u=0<(g|0);a:do{if(u){var b=e+(b-8)|0,g=a+(g-8)|0,u=e,k=a;b:for(;;){var r=k+1|0,k=c[k],m=k>>>4,i=15==(m|0);c:do{if(i){if(r>>>0<h>>>0){for(var n=15,p=r;;){var s=p+1|0,p=f[p],n=(p&255)+n|0;if(s>>>0<h>>>0&-1==p<<24>>24){p=s}else{l=s;x=n;break c}}}else{var l=r,x=15}}else{l=r,x=m}}while(0);r=u+x|0;if(r>>>0>b>>>0){y=132;break}if((l+x|0)>>>0>g>>>0){y=132;break}else{n=l,m=u}for(;;){var q=n,i=m;d=c[q]|c[q+1]<<8|c[q+2]<<16|c[q+3]<<24|0;f[i]=d&255;d>>=8;f[i+1]=d&255;d>>=8;f[i+2]=d&255;d>>=8;f[i+3]=d&255;q=n+4|0;i=m+4|0;d=c[q]|c[q+1]<<8|c[q+2]<<16|c[q+3]<<24|0;f[i]=d&255;d>>=8;f[i+1]=d&255;d>>=8;f[i+2]=d&255;d>>=8;f[i+3]=d&255;q=m+8|0;if(q>>>0<r>>>0){n=n+8|0,m=q}else{break}}i=r;p=i-q|0;m=p+(n+8)|0;m=x-((ca=c[m]|c[m+1]<<8,ca<<16>>16)&65535)|0;s=u+m|0;n=p+(n+10)|0;if(s>>>0<e>>>0){var w=n;break}k&=15;p=15==(k|0);c:do{if(p){for(var t=n,C=15;;){if(t>>>0>=h>>>0){var B=t,E=C;break c}var z=t+1|0,t=f[t],C=(t&255)+C|0;if(-1==t<<24>>24){t=z}else{B=z;E=C;break c}}}else{B=n,E=k}}while(0);4>(i-s|0)?(f[r]=f[s],f[x+(u+1)|0]=f[m+(u+1)|0],f[x+(u+2)|0]=f[m+(u+2)|0],f[x+(u+3)|0]=f[m+(u+3)|0],i=x+(u+4)|0,k=m+4|0,m=k=u+(k-v[(i-(u+k)<<2)+5242880>>2])|0,s=i,d=c[m]|c[m+1]<<8|c[m+2]<<16|c[m+3]<<24|0,f[s]=d&255,d>>=8,f[s+1]=d&255,d>>=8,f[s+2]=d&255,d>>=8,f[s+3]=d&255,m=i):(k=s,i=r,d=c[k]|c[k+1]<<8|c[k+2]<<16|c[k+3]<<24|0,f[i]=d&255,d>>=8,f[i+1]=d&255,d>>=8,f[i+2]=d&255,d>>=8,f[i+3]=d&255,k=m+(u+4)|0,m=x+(u+4)|0);i=m+E|0;s=i>>>0>b>>>0;c:do{if(s){if(i>>>0>j>>>0){w=B;break b}else{n=k,p=m}for(;;){var D=n,G=p;d=c[D]|c[D+1]<<8|c[D+2]<<16|c[D+3]<<24|0;f[G]=d&255;d>>=8;f[G+1]=d&255;d>>=8;f[G+2]=d&255;d>>=8;f[G+3]=d&255;D=n+4|0;G=p+4|0;d=c[D]|c[D+1]<<8|c[D+2]<<16|c[D+3]<<24|0;f[G]=d&255;d>>=8;f[G+1]=d&255;d>>=8;f[G+2]=d&255;d>>=8;f[G+3]=d&255;D=p+8|0;G=n+8|0;if(D>>>0<b>>>0){n=G,p=D}else{break}}n=D>>>0<i>>>0;d:do{if(n){p=D;for(z=G;;){if(t=p+1|0,f[p]=f[z],(t|0)==(i|0)){break d}else{p=t,z=z+1|0}}}}while(0);if((i|0)==(j|0)){w=B;break b}}else{n=k;for(p=m;;){if(z=n,t=p,d=c[z]|c[z+1]<<8|c[z+2]<<16|c[z+3]<<24|0,f[t]=d&255,d>>=8,f[t+1]=d&255,d>>=8,f[t+2]=d&255,d>>=8,f[t+3]=d&255,z=n+4|0,t=p+4|0,d=c[z]|c[z+1]<<8|c[z+2]<<16|c[z+3]<<24|0,f[t]=d&255,d>>=8,f[t+1]=d&255,d>>=8,f[t+2]=d&255,d>>=8,f[t+3]=d&255,p=p+8|0,p>>>0<i>>>0){n=n+8|0}else{break c}}}}while(0);if(B>>>0<h>>>0){u=i,k=B}else{k=i;break a}}do{if(132==y){if(r>>>0>j>>>0){w=l}else{if((l+x|0)!=(h|0)){w=l}else{rb(u,l,x);k=r;break a}}}}while(0);return a=a-w|0}k=e}while(0);return k-e|0}function ya(a){function e(){var e=0;Fb=A;b._main&&(xa(Rb),e=b.I(a),b.noExitRuntime||(xa(Sb),Tb.print()));if(b.postRun){for("function"==typeof b.postRun&&(b.postRun=[b.postRun]);0<b.postRun.length;){b.postRun.pop()()}}return e}a=a||b.arguments;if(0<K){return b.c("run() called, but dependencies remain, so not running"),0}if(b.preRun){"function"==typeof b.preRun&&(b.preRun=[b.preRun]);var g=b.preRun;b.preRun=[];for(var c=g.length-1;0<=c;c--){g[c]()}if(0<K){return 0}}return b.setStatus?(b.setStatus("Running..."),setTimeout((function(){setTimeout((function(){b.setStatus("")}),1);e()}),1),0):e()}var b={TOTAL_MEMORY:25165824};try{this.Module=b}catch(Ub){this.Module=b={}}var X="object"===typeof process&&"function"===typeof require,E="object"===typeof window,l="function"===typeof importScripts,Mb=!E&&!X&&!l;if(X){b.print=(function(a){process.stdout.write(a+"\n")});b.printErr=(function(a){process.stderr.write(a+"\n")});var Nb=require("fs"),Ob=require("path");b.read=(function(a){var a=Ob.normalize(a),e=Nb.readFileSync(a).toString();!e&&a!=Ob.resolve(a)&&(a=path.join(__dirname,"..","src",a),e=Nb.readFileSync(a).toString());return e});b.load=(function(a){wb(read(a))});b.arguments||(b.arguments=process.argv.slice(2))}Mb&&(b.print=print,"undefined"!=typeof printErr&&(b.printErr=printErr),b.read="undefined"!=typeof read?read:(function(a){snarf(a)}),b.arguments||("undefined"!=typeof scriptArgs?b.arguments=scriptArgs:"undefined"!=typeof arguments&&(b.arguments=arguments)));E&&!l&&(b.print||(b.print=(function(a){console.log(a)})),b.printErr||(b.printErr=(function(a){console.log(a)})));if(E||l){b.read=(function(a){var e=new XMLHttpRequest;e.open("GET",a,O);e.send(F);return e.responseText}),b.arguments||"undefined"!=typeof arguments&&(b.arguments=arguments)}l&&(b.print||(b.print=(function(){})),b.load=importScripts);if(!l&&!E&&!X&&!Mb){throw"Unknown runtime environment. Where are we?"}"undefined"==!b.load&&b.read&&(b.load=(function(a){wb(b.read(a))}));b.print||(b.print=(function(){}));b.printErr||(b.printErr=b.print);b.arguments||(b.arguments=[]);b.print=b.print;b.c=b.printErr;b.preRun||(b.preRun=[]);b.postRun||(b.postRun=[]);var h={B:(function(){return w}),Z:(function(a){w=a}),la:(function(a,e){e=e||4;if(1==e){return a}if(isNumber(a)&&isNumber(e)){return Math.ceil(a/e)*e}if(isNumber(e)&&isPowerOfTwo(e)){var g=log2(e);return"(((("+a+")+"+(e-1)+")>>"+g+")<<"+g+")"}return"Math.ceil(("+a+")/"+e+")*"+e}),M:(function(a){return a in h.F||a in h.D}),N:(function(a){return"*"==a[a.length-1]}),O:(function(a){return isPointerType(a)?O:/^\[\d+\ x\ (.*)\]/.test(a)||/<?{ ?[^}]* ?}>?/.test(a)?A:"%"==a[0]}),F:{i1:0,i8:0,i16:0,i32:0,i64:0},D:{"float":0,"double":0},k:0,i:1,j:2,ga:(function(a,e,g,b){var c,d=Math.pow(2,b)-1;if(32>b){switch(g){case h.k:c=[a<<b,e<<b|(a&d<<32-b)>>>32-b];break;case h.i:c=[(a>>>b|(e&d)<<32-b)>>0>>>0,e>>b>>>0];break;case h.j:c=[(a>>>b|(e&d)<<32-b)>>>0,e>>>b]}}else{if(32==b){switch(g){case h.k:c=[0,a];break;case h.i:c=[e,0>(e|0)?d:0];break;case h.j:c=[e,0]}}else{switch(g){case h.k:c=[0,a<<b-32];break;case h.i:c=[e>>b-32>>>0,0>(e|0)?d:0];break;case h.j:c=[e>>>b-32,0]}}}v[B>>2]=c[0];v[B+4>>2]=c[1]}),va:(function(a,e){return(a|0|e|0)+4294967296*(Math.round(a/4294967296)|Math.round(e/4294967296))}),ea:(function(a,e){return((a|0)&(e|0))+4294967296*(Math.round(a/4294967296)&Math.round(e/4294967296))}),Fa:(function(a,e){return((a|0)^(e|0))+4294967296*(Math.round(a/4294967296)^Math.round(e/4294967296))}),q:(function(a){if(1==h.e){return 1}var e={"%i1":1,"%i8":1,"%i16":2,"%i32":4,"%i64":8,"%float":4,"%double":8}["%"+a];e||("*"==a.charAt(a.length-1)?e=h.e:"i"==a[0]&&(a=parseInt(a.substr(1)),q(0==a%8),e=a/8));return e}),ra:(function(a){return Math.max(h.q(a),h.e)}),J:(function(a,e){var g={};return e?a.filter((function(a){return g[a[e]]?O:g[a[e]]=A})):a.filter((function(a){return g[a]?O:g[a]=A}))}),set:(function(){for(var a="object"===typeof arguments[0]?arguments[0]:arguments,e={},g=0;g<a.length;g++){e[a[g]]=0}return e}),H:(function(a){a.b=0;a.g=0;var e=[],g=-1;a.z=a.o.map((function(b){var c;if(h.M(b)||h.N(b)){b=c=h.q(b)}else{if(h.O(b)){c=Types.types[b].b,b=Types.types[b].g}else{throw"Unclear type in struct: "+b+", in "+a.Q+" :: "+dump(Types.types[a.Q])}}b=a.wa?1:Math.min(b,h.e);a.g=Math.max(a.g,b);b=h.f(a.b,b);a.b=b+c;0<=g&&e.push(b-g);return g=b}));a.b=h.f(a.b,a.g);0==e.length?a.w=a.b:1==h.J(e).length&&(a.w=e[0]);a.ta=1!=a.w;return a.z}),L:(function(a,e,g){var b,c;if(e){g=g||0;b=("undefined"===typeof Types?h.Ca:Types.types)[e];if(!b){return F}if(b.o.length!=a.length){return printErr("Number of named fields must match the type for "+e+": possibly duplicate struct names. Cannot return structInfo"),F}c=b.z}else{b={o:a.map((function(a){return a[0]}))},c=h.H(b)}var d={ca:b.b};e?a.forEach((function(a,e){if("string"===typeof a){d[a]=c[e]+g}else{var f,j;for(j in a){f=j}d[f]=h.L(a[f],b.o[e],c[e])}})):a.forEach((function(a,e){d[a[1]]=c[e]}));return d}),n:(function(a,e,b){return b&&b.length?Qa[e].apply(F,b):Qa[e]()}),da:(function(a,e){q(e);var b=Qa,c=b.length;b.push(a);b.push(0);return c}),d:(function(a){h.d.s||(h.d.s={});h.d.s[a]||(h.d.s[a]=1,b.c(a))}),p:{},na:(function(a,e){q(e);h.p[a]||(h.p[a]=(function(){h.n(e,a,arguments)}));return h.p[a]}),u:(function(){var a=[],e=0;this.S=(function(b){b&=255;e&&(a.push(b),e--);if(0==a.length){if(128>b){return String.fromCharCode(b)}a.push(b);e=191<b&&224>b?1:2;return""}if(0<e){return""}var b=a[0],c=a[1],d=a[2],b=191<b&&224>b?String.fromCharCode((b&31)<<6|c&63):String.fromCharCode((b&15)<<12|(c&63)<<6|d&63);a.length=0;return b});this.T=(function(a){for(var a=unescape(encodeURIComponent(a)),b=[],e=0;e<a.length;e++){b.push(a.charCodeAt(e))}return b})}),t:(function(a){var b=w;w=w+a|0;w=w+3>>2<<2;return b}),C:(function(a){var b=C;C=C+a|0;C=C+3>>2<<2;C>=Ra&&Y("Cannot enlarge memory arrays. Either (1) compile with -s TOTAL_MEMORY=X with X higher than the current value, (2) compile with ALLOW_MEMORY_GROWTH which adjusts the size at runtime but prevents some optimizations, or (3) set Module.TOTAL_MEMORY before the program runs.");return b}),f:(function(a,b){return Math.ceil(a/(b?b:4))*(b?b:4)}),sa:(function(a,b,c){return c?(a>>>0)+4294967296*(b>>>0):(a>>>0)+4294967296*(b|0)}),e:4,ba:0},Tb={G:0,v:0,Ba:{},ua:(function(a,b){b||(this.v++,this.v>=this.G&&Y("\n\nToo many corrections!"))}),print:(function(){})},ca,d,Ua,Pb=this;b.ccall=(function(a,b,c,d){return yb(xb(a),b,c,d)});b.cwrap=(function(a,b,c){var d=xb(a);return(function(){return yb(d,b,c,Array.prototype.slice.call(arguments))})});b.setValue=Cb;b.getValue=(function(a,b){b=b||"i8";"*"===b.charAt(b.length-1)&&(b="i32");switch(b){case"i1":return f[a];case"i8":return f[a];case"i16":return T[a>>1];case"i32":return v[a>>2];case"i64":return v[a>>2];case"float":return ga[a>>2];case"double":return v[B>>2]=v[a>>2],v[B+4>>2]=v[a+4>>2],va[B>>3];default:Y("invalid type for setValue: "+b)}return F});var U=2,wa=3;b.ALLOC_NORMAL=0;b.ALLOC_STACK=1;b.ALLOC_STATIC=U;b.ALLOC_NONE=wa;b.allocate=I;b.Pointer_stringify=Bb;b.Array_stringify=(function(a){for(var b="",c=0;c<a.length;c++){b+=String.fromCharCode(a[c])}return b});var f,c,T,za,v,ga,va,w,C,X=b.TOTAL_STACK||5242880,Ra=b.TOTAL_MEMORY||16777216;q(!!Int32Array&&!!Float64Array&&!!(new Int32Array(1)).subarray&&!!(new Int32Array(1)).set,"Cannot fallback to non-typed array case: Code is too specialized");l=new ArrayBuffer(Ra);f=new Int8Array(l);T=new Int16Array(l);v=new Int32Array(l);c=new Uint8Array(l);za=new Uint16Array(l);E=new Uint32Array(l);ga=new Float32Array(l);va=new Float64Array(l);v[0]=255;q(255===c[0]&&0===c[3],"Typed arrays 2 must be run on a little-endian system");b.HEAP=void 0;b.HEAP8=f;b.HEAP16=T;b.HEAP32=v;b.HEAPU8=c;b.HEAPU16=za;b.HEAPU32=E;b.HEAPF32=ga;b.HEAPF64=va;w=h.f(1);var E=X,B=h.f(I(12,"i8",1),8);q(0==B%8);C=E;q(C<Ra);I(R("(null)"),"i8",1);var Rb=[],Sb=[];b.String_len=(function(a){for(var b=a;f[b++];){}return b-a-1});b.intArrayFromString=R;b.intArrayToString=(function(a){for(var b=[],c=0;c<a.length;c++){var d=a[c];255<d&&(d&=255);b.push(String.fromCharCode(d))}return b.join("")});b.writeStringToMemory=zb;b.writeArrayToMemory=Ab;var K=0,S={},Fb=O,P=F;b.addRunDependency=Db;b.removeRunDependency=Eb;b.preloadedImages={};b.preloadedAudios={};q(C==E);q(E==X);C+=160;q(C<Ra);I([0,0,0,0,3,0,0,0,2,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0],wa,5242880);I([0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,3,0,0,0,1,0,0,0,3,0,0,0,0,0,0,0,3,0,0,0,2,0,0,0,2,0,0,0,1,0,0,0,3,0,0,0,2,0,0,0,0,0,0,0,1,0,0,0,3,0,0,0,3,0,0,0,1,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,3,0,0,0,1,0,0,0,2,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0],["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0],wa,5242912);var j={a:{Y:F,A:O,paused:O,xa:[],pause:(function(){j.a.A=A}),W:(function(){j.a.paused&&(j.a.paused=O,j.a.Y());j.a.A=O}),updateStatus:(function(){if(b.setStatus){var a=b.statusMessage||"Please wait...",e=j.a.ya,c=j.a.ka;e?e<c?b.setStatus(a+" ("+(c-e)+"/"+c+")"):b.setStatus(a):b.setStatus("")}})},R:O,P:[],Ea:[],ja:(function(){function a(a){return{jpg:"image/jpeg",png:"image/png",bmp:"image/bmp",ogg:"audio/ogg",wav:"audio/wav",mp3:"audio/mpeg"}[a.substr(-3)]}if(!j.K){j.K=A;try{new Blob,j.h=A}catch(e){j.h=O,console.log("warning: no blob constructor, cannot create blobs with mimetypes")}j.BlobBuilder="undefined"!=typeof MozBlobBuilder?MozBlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:!j.h?console.log("warning: no BlobBuilder"):F;j.l="undefined"!=typeof window?window.URL?window.URL:window.webkitURL:console.log("warning: cannot create object URLs");b.preloadPlugins||(b.preloadPlugins=[]);b.preloadPlugins.push({canHandle:(function(a){return a.substr(-4)in{".jpg":1,".png":1,".bmp":1}}),handle:(function(e,c,d,f){var l=F;if(j.h){try{l=new Blob([e],{type:a(c)})}catch(u){h.d("Blob constructor present but fails: "+u+"; falling back to blob builder")}}l||(l=new j.BlobBuilder,l.append((new Uint8Array(e)).buffer),l=l.getBlob());var k=j.l.createObjectURL(l);q("string"==typeof k,"createObjectURL must return a url as a string");var r=new Image;r.onload=(function(){q(r.complete,"Image "+c+" could not be decoded");var a=document.createElement("canvas");a.width=r.width;a.height=r.height;a.getContext("2d").drawImage(r,0,0);b.preloadedImages[c]=a;j.l.revokeObjectURL(k);d&&d(e)});r.onerror=(function(){console.log("Image "+k+" could not be decoded");f&&f()});r.src=k})});b.preloadPlugins.push({canHandle:(function(a){return a.substr(-4)in{".ogg":1,".wav":1,".mp3":1}}),handle:(function(e,c,d,f){function h(a){k||(k=A,b.preloadedAudios[c]=a,d&&d(e))}function l(){k||(k=A,b.preloadedAudios[c]=new Audio,f&&f())}var k=O;if(j.h){try{var r=new Blob([e],{type:a(c)})}catch(m){return l()}r=j.l.createObjectURL(r);q("string"==typeof r,"createObjectURL must return a url as a string");var i=new Audio;i.addEventListener("canplaythrough",(function(){h(i)}),O);i.onerror=(function(){if(!k){console.log("warning: browser could not fully decode audio "+c+", trying slower base64 approach");for(var a="",b=0,d=0,f=0;f<e.length;f++){b=b<<8|e[f];for(d+=8;6<=d;){var j=b>>d-6&63,d=d-6,a=a+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[j]}}2==d?(a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(b&3)<<4],a+="=="):4==d&&(a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(b&15)<<2],a+="=");i.src="data:audio/x-"+c.substr(-3)+";base64,"+a;h(i)}});i.src=r;setTimeout((function(){h(i)}),1e4)}else{return l()}})})}}),ha:(function(a,e,c){try{var d=a.getContext(e?"experimental-webgl":"2d");if(!d){throw":("}}catch(f){return b.print("Could not create canvas - "+f),F}e&&(a.style.backgroundColor="black",a.addEventListener("webglcontextlost",(function(){alert("WebGL context lost. You will need to reload the page.")}),O));c&&(b.ia=d,b.Da=e,j.P.forEach((function(a){a()})));return d}),r:(function(){function a(){var a=O;if((document.webkitFullScreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.mozFullscreenElement||document.fullScreenElement||document.fullscreenElement)===c){c.U=c.requestPointerLock||c.mozRequestPointerLock||c.webkitRequestPointerLock,c.U(),a=A}if(b.onFullScreen){b.onFullScreen(a)}}function e(){j.R=document.pointerLockElement===c||document.mozPointerLockElement===c||document.webkitPointerLockElement===c}var c=b.canvas;document.addEventListener("fullscreenchange",a,O);document.addEventListener("mozfullscreenchange",a,O);document.addEventListener("webkitfullscreenchange",a,O);document.addEventListener("pointerlockchange",e,O);document.addEventListener("mozpointerlockchange",e,O);document.addEventListener("webkitpointerlockchange",e,O);c.r=c.requestFullScreen||c.mozRequestFullScreen||(c.webkitRequestFullScreen?(function(){c.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)}):F);c.r()}),requestAnimationFrame:(function(a){window.requestAnimationFrame||(window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||window.setTimeout);window.requestAnimationFrame(a)}),pa:(function(a){return a.movementX||a.mozMovementX||a.webkitMovementX||0}),qa:(function(a){return a.movementY||a.mozMovementY||a.webkitMovementY||0}),aa:(function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,A);d.responseType="arraybuffer";d.onload=(function(){200==d.status?b(d.response):c()});d.onerror=c;d.send(F)}),fa:(function(a,b,c,d){j.aa(a,(function(c){q(c,'Loading data file "'+a+'" failed (no arrayBuffer).');b(new Uint8Array(c));d||Eb("al "+a)}),(function(){if(c){c()}else{throw'Loading data file "'+a+'" failed.'}}));d||Db("al "+a)}),V:[],$:(function(){var a=b.canvas;j.V.forEach((function(b){b(a.width,a.height)}))}),Aa:(function(a,c,d){var f=b.canvas;f.width=a;f.height=c;d||j.$()})};b.requestFullScreen=(function(){j.r()});b.requestAnimationFrame=(function(a){j.requestAnimationFrame(a)});b.pauseMainLoop=(function(){j.a.pause()});b.resumeMainLoop=(function(){j.a.W()});var Qa=[0,0];Gb.X=1;Kb.X=1;b._LZ4_compress=(function(a,b,c){return 65547>(c|0)?Gb(a,b,c,c+((c|0)/255&-1)+16|0):Kb(a,b,c,c+((c|0)/255&-1)+16|0)});b._memcpy=rb;rb.X=1;b._LZ4_uncompress_unknownOutputSize=Lb;Lb.X=1;b.I=(function(a){function c(){for(var a=0;3>a;a++){f.push(0)}}var d=a.length+1,f=[I(R("/bin/this.program"),"i8",U)];c();for(var h=0;h<d-1;h+=1){f.push(I(R(a[h]),"i8",U)),c()}f.push(0);f=I(f,"i32",U);return b._main(d,f,0)});b.run=b.za=ya;if(b.preInit){for("function"==typeof b.preInit&&(b.preInit=[b.preInit]);0<b.preInit.length;){b.preInit.pop()()}}xa([]);var Wa=A;b.noInitialRun&&(Wa=O);Wa&&ya();var Sa=b.allocate(8388608,"i8",b.ALLOC_STATIC),Ta=b.allocate(8388608,"i8",b.ALLOC_STATIC);vb.compress=(function(a){if(8388608<a.length){throw Error("source length out of bounds")}var c,d=a.length,f=b.HEAPU8;for(c=0;c<d;c++){f[Sa+c]=a[c]}d=b._LZ4_compress(Sa,Ta,d);a=new a.constructor(d);for(c=0;c<d;c++){a[c]=f[Ta+c]}return a});vb.uncompress=(function(a){if(8388608<a.length){throw Error("source length out of bounds")}var c,d=a.length,f=b.HEAPU8,h;for(c=0;c<d;c++){f[Sa+c]=a[c]}d=b._LZ4_uncompress_unknownOutputSize(Sa,Ta,d,8388608);if(0<d){h=new a.constructor(d);for(c=0;c<d;c++){h[c]=f[Ta+c]}}a=h;if(!a){throw Error("decompression error")}return a})}))("undefined"===typeof exports?this.lz4={}:exports)



