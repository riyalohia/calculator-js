$(document).ready(function(){
	var q="";
	var upper="";
	var e=0;
	var r=[];
	var sub=[];
	var str="";
	var nm=1;
	$('.write').on('click',function(){
			var tex=$(this).text();
			var d,m;
			q+=tex;
			upper+=tex;
			var qwe=q.split("");
			var res=upper.split("");
			var len=res.length;
				if(res[len-1]=="+"||res[len-1]=="-"||res[len-1]=="/"||res[len-1]=="x")
				{
					
					if(res[len-1]=="+")
					{
						d=upper.replace('+','');
						m=d.split(".");
						if(m.length>2)
						{
							alert("Wrong Number Format");
							q=q.replace(upper,'');
						}

						upper="";
						upper=upper.replace('','+');

					}
					if(res[len-1]=="-")
					{
						d=upper.replace('-','');
						m=d.split(".");
						if(m.length>2)
						{
							alert("Wrong Number Format");
							q=q.replace(upper,'');
						}
						upper="";
						upper=upper.replace('','-');
					}
					if(res[len-1]=="/")
					{
						d=upper.replace('/','');
						m=d.split(".");
						if(m.length>2)
						{
							alert("Wrong Number Format");
							q=q.replace(upper,'');
						}
						upper="";
						upper=upper.replace('','/');
					}
					if(res[len-1]=="x")
					{
						d=upper.replace('x','');
						m=d.split(".");
						if(m.length>2)
						{
							alert("Wrong Number Format");
							q=q.replace(upper,'');
						}
						upper="";
						upper=upper.replace('','x');
					}
					//console.log(upper);
				}
				$("#label").html(upper+"<br><small>"+q+"</small>");
				if(res[len-1]=="+"||res[len-1]=="-"||res[len-1]=="/"||res[len-1]=="x")
				{	
					upper="";
				}
		});
	$('.writeac').on('click',function(){
		upper="";
		q="";
		$("#label").html("");
	});
	$('.writece').on('click',function(){
		q=q.replace(upper,'');
		upper='';
		var v=q.split('');
		var l=v.length;
		q=q.substring(0,l-1);
		$("#label").html(""+"<br><small>"+q+"</small>");
	});
	$('#p').on('click',function(){
		var h=-1;
		var a=q.split("");
		var i,j;
		var t=a.length;

			for(i=0;i<a.length;i++)
		{
			if(isNaN(a[i])==true && a[i]!=".")
			{
				var h=-1,k;
				if(e==0)
				{
					r[e]=q.indexOf(a[i]);
					if(r[e]!=0)
					{
						sub[e]=q.substring(h,r[e]);
					// alert(sub[0]);
						 e++;
					}
					else
					{
						var one,two,three,four;
						if(q.indexOf('+',1)!=-1)
						{
							 one=q.indexOf('+',1);
							alert(one);
						}
						else
						{
							one=Number.POSITIVE_INFINITY;
						}
						if(q.indexOf('-',1)!=-1)
						{
							 two=q.indexOf('-',1);
							alert(two);
						}
						else
						{
							two=Number.POSITIVE_INFINITY;
						}
						if(q.indexOf('*',1)!=-1)
						{
							 three=q.indexOf('*',1);
							alert(three);
						}
						else
						{
							three=Number.POSITIVE_INFINITY;
						}
						if(q.indexOf('/',1)!=-1)
						{
							 four=q.indexOf('/',1);
							alert(four);
						}
						else
						{
							four=Number.POSITIVE_INFINITY;
						}
						var min=Math.min(one,two,three,four);
						//alert(min);
						str=q.substring(1,min);
						//alert(str);
						sub[e]=q.charAt(r[e])+str;
						//alert(sub[e]);
						r[0]=min;
						e++;
					}
					 
				}
				else if(e==1)
				{
					
					r[1]=q.indexOf(a[i],r[0]+1);
					//alert(r[r.length-1]);
					sub[1]=q.substring(r[0]+1,r[1]);
					//alert(r[0]);
					if(q.charAt(r[0])=='-')
					{
						var s=sub[0]-sub[1];
						//alert(s);
						q=q.replace(sub[0]+"-"+sub[1],s);
						 a=q.split("");
						 i=0;
					}
					if(q.charAt(r[0])=='x')
					{
						var s=sub[0]*sub[1];
						//alert(s);
						q=q.replace(sub[0]+"x"+sub[1],s);
						 a=q.split("");
						 i=0;
					}
					if(q.charAt(r[0])=='/')
					{
						var s=sub[0]/sub[1];
						//alert(s);
						q=q.replace(sub[0]+"/"+sub[1],s);
						 a=q.split("");
						 i=0;
					}
					if(q.charAt(r[0])=='+')
					{
						var s=parseFloat(sub[0])+parseFloat(sub[1]);
						//alert(s);
						q=q.replace(sub[0]+"+"+sub[1],s);
						 a=q.split("");
						 i=0;
					}

					e--;
				}
			}
			if(i==a.length-1)
				{
					sub[1]=q.substring(r[0]+1,a.length);
					var ty=sub[1].split('.');
					if(ty.length>2)
					{
						alert("Wrong Number Format");
						//alert(q);
						q=q.replace(sub[1],'');
						upper='';
						$("#label").html(""+"<br><small>"+q+"</small>");
						sub[1]='';
						
					}

					//alert(sub[1]);
					else
					{
						if(q.charAt(r[0])=="-")
					{
						var rest=sub[0]-sub[1];
						//alert(rest);
						$("#label").html(rest);
					}
					if(q.charAt(r[0])=="x")
					{
						var rest=sub[0]*sub[1];
						//alert(rest);
						$("#label").html(rest);
					}
					if(q.charAt(r[0])=="/")
					{
						var rest=sub[0]/sub[1];
						//alert(rest);
						$("#label").html(rest);
					}
					if(q.charAt(r[0])=="+")
					{
						var rest=parseFloat(sub[0])+parseFloat(sub[1]);
						//alert(rest);
						$("#label").html(rest);
					}
					}
					
				}
		}
		
		//console.log(spl);
	});
	});

