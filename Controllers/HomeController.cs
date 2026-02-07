using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MyHobby.Models;

namespace MyHobby.Controllers;

public class HomeController : Controller
{
    // Change this to whatever you want to charge per hour
    private const decimal HourlyRate = 45m;

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Calculator()
    {
        ViewBag.HourlyRate = HourlyRate;
        return View();
    }
}
