let counters= document.querySelectorAll(".counter");

counters.forEach((counter) =>
{
   counter.innerHTML= 0;

   const increment= () =>
   {
      let count= +counter.getAttribute("data-target");
      let startCount= +counter.innerHTML;

      let updateBy= count/100;

      if(startCount < count)
      {
         counter.innerHTML= `${startCount + updateBy}`;
         setTimeout(increment, 10);
      }
      else
      {
         counter.innerHTML= count;
      }

   }

   increment();
})