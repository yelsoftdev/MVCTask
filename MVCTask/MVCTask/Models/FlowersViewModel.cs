using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MVCTask.Models
{
    public class FlowersViewModel
    {
        [Display(Name = "Id")]
        public int id { get; set; }

        [Display(Name = "Flower")]
        public string flowerName { get; set; }

        [Display(Name = "Image")]
        public string imageSrc { get; set; }
    }

    public class FlowerItemViewModel
    {
        public int selectedValue { get; set; }
        public List<FlowersViewModel> flowerList { get; set; }
    }
}
