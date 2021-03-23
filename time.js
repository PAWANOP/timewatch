const showtime=()=>{
  let date = new Date();
  let h =date.getHours();
  let m =date.getMinutes();
  let s= date.getSeconds();

  let session="AM";

  if (h==0) {
      h= 11;
  }

  if (h>12) {
    h = h-12;
    session="PM";
  }

  // h=(h>12) ? "0"+ h:h;
  // m=(m>12) ? "0"+ m:m;
  // s=(s>12) ? "0"+ s:s;

   let time =`${h}:${m}:${s} ${session}`;

   document.getElementById('clockdisplay').innerText=time;
   document.getElementById('clockdisplay').textContent=time;

   setTimeout(showtime,100);

}


showtime();