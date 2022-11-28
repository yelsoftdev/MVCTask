using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MVCTask.Models
{
    public class StoreItemViewModel
    {
        [Display(Name = "S.No")]
        public int sNo { get; set; }

        [Display(Name = "Item")]
        public string itemName { get; set; }

        [Display(Name = "Price")]
        public double price { get; set; }

        [Display(Name = "Image")]
        public string imageSrc { get; set; }
    }
}
