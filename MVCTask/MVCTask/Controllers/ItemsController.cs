using Microsoft.AspNetCore.Mvc;
using MVCTask.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MVCTask.Controllers
{
    public class ItemsController : Controller
    {
        private List<StoreItemViewModel> storeItems = null;
        private List<FlowersViewModel> flowerItems = null;
        private FlowerItemViewModel flowers = null;

        public void GetStoreItemsData()
        {
            string host = HttpContext.Request.Host.Value; //localhost:44347
            string imageUrl = String.Format($"https://{host}/images");
            storeItems = new List<StoreItemViewModel>();
            storeItems.Add(new StoreItemViewModel { sNo = 1, itemName = "Fan", price = 1200.00, imageSrc = String.Format($"{imageUrl}/Fan.png") });
            storeItems.Add(new StoreItemViewModel { sNo = 2, itemName = "Mobile", price = 15000.00, imageSrc = String.Format($"{imageUrl}/Mobile.png") });
            storeItems.Add(new StoreItemViewModel { sNo = 3, itemName = "Refridgerator", price = 20000.00, imageSrc = String.Format($"{imageUrl}/Refridgerator.png") });
            storeItems.Add(new StoreItemViewModel { sNo = 4, itemName = "TV", price = 25000.00, imageSrc = String.Format($"{imageUrl}/TV.png") });
            storeItems.Add(new StoreItemViewModel { sNo = 5, itemName = "Washing machine", price = 10000.00, imageSrc = String.Format($"{imageUrl}/Washing machine.png") });
        }

        public void GetFlowersData()
        {
            string host = HttpContext.Request.Host.Value; //localhost:44347
            string flowerImageUrl = String.Format($"https://{host}/flowerimages");
            flowers = new FlowerItemViewModel();
            flowers.selectedValue = 1;
            flowers.flowerList = new List<FlowersViewModel>();
            flowers.flowerList.Add(new FlowersViewModel { id = 1, flowerName = "Rose flower", imageSrc = String.Format($"{flowerImageUrl}/rose.jpg") });
            flowers.flowerList.Add(new FlowersViewModel { id = 2, flowerName = "Multi Color flowers", imageSrc = String.Format($"{flowerImageUrl}/multi-color.jpg") });
            flowers.flowerList.Add(new FlowersViewModel { id = 3, flowerName = "Flower with Butterflies", imageSrc = String.Format($"{flowerImageUrl}/flower-butterfly.jpg") });
            flowers.flowerList.Add(new FlowersViewModel { id = 4, flowerName = "Sun flower", imageSrc = String.Format($"{flowerImageUrl}/chamanthi.jpg") });
            flowers.flowerList.Add(new FlowersViewModel { id = 5, flowerName = "Blue flower", imageSrc = String.Format($"{flowerImageUrl}/blue-flower.jpg") });
        }

        public IActionResult StoreInfo()
        {
            GetStoreItemsData();
            return View(storeItems);
        }

        public IActionResult FlowersInfo()
        {
            GetFlowersData();
            return View(flowers);
        }
    }
}
