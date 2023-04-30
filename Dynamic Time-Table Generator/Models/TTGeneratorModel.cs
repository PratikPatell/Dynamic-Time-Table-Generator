using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Dynamic_Time_Table_Generator.Models
{
    public class TTGeneratorModel
    {
        [Required]
        [Range(1, 7)]
        [DisplayName("No. Of Working Days")]
        public int WorkingDays { get; set; }
        [Required]
        [Range(1, 9)]
        [DisplayName("No. Of Subject Per Day")]
        public int SubjectPerDay { get; set; }

        [Required]
        [Range(1, 10)]
        [DisplayName("No. Of Total Subject")]
        public int TotalSubject { get; set; }

        
        [DisplayName("No. Of Total hours for week")]
        public int HoursForWeek { get; set; }

    }
    public class SubjectAndHoursViewModel : TTGeneratorModel
    {
        public List<SubjectAndHours> SubjectAndHours { get; set; }
    }

public class SubjectAndHours 
    {
       public string Subject { get; set; }
       public string Hours { get; set; }
    }
}