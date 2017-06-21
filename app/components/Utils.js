const monthNames = {
  TR : ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],
}

module.exports = {
  date : {
    getMonthName : function(month, lang="TR"){
      return monthNames[lang][month];
    },

  }
}
