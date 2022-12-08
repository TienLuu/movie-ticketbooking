function formatDate(string) {
   const date = new Date(string);
   const objectDate = {
      dayName: "",
      day: "",
      month: "",
      year: "",
      timeStart: "",
      timeEnd: "",
   };

   const day = date.getDay();
   let hoursStart = date.getHours();
   let hoursEnd = hoursStart + 2;
   let minutes = date.getMinutes();

   if (minutes < 10) {
      minutes = "0" + minutes;
   }

   if (hoursStart < 10) {
      hoursStart = "0" + hoursStart;
   }

   if (hoursEnd < 10) {
      hoursEnd = "0" + hoursEnd;
   }

   objectDate.day = date.getDate();
   objectDate.month = date.getMonth() + 1;
   objectDate.year = date.getFullYear();
   objectDate.timeStart = hoursStart + ":" + minutes;
   objectDate.timeEnd = hoursEnd + ":" + minutes;

   switch (day) {
      case 0:
         objectDate.dayName = "Chủ nhật";
         break;
      case 1:
         objectDate.dayName = "Thứ hai";
         break;
      case 2:
         objectDate.dayName = "Thứ ba";
         break;
      case 3:
         objectDate.dayName = "Thứ tư";
         break;
      case 4:
         objectDate.dayName = "Thứ năm";
         break;
      case 5:
         objectDate.dayName = "Thứ sáu";
         break;
      case 6:
         objectDate.dayName = "Thứ bảy";
         break;
      default:
         return;
   }

   return objectDate;
}

export default formatDate;
