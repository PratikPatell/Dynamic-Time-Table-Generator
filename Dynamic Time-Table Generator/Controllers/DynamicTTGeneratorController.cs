using Dynamic_Time_Table_Generator.Models;
using Microsoft.AspNetCore.Mvc;

namespace Dynamic_Time_Table_Generator.Controllers
{
    public class DynamicTTGeneratorController : Controller
    {
        public IActionResult DynamicTTGenerator()
        {
            return View();
        }
        [HttpPost]
        public ActionResult DynamicTTGenerator(TTGeneratorModel timeTableGeneratorModel)
        {
            if (ModelState.IsValid)
            {
                timeTableGeneratorModel.HoursForWeek = timeTableGeneratorModel.WorkingDays * timeTableGeneratorModel.SubjectPerDay;
                SubjectAndHoursViewModel subjectAndHoursViewModel = new SubjectAndHoursViewModel();
                subjectAndHoursViewModel.WorkingDays = timeTableGeneratorModel.WorkingDays;
                subjectAndHoursViewModel.SubjectPerDay = timeTableGeneratorModel.SubjectPerDay;
                subjectAndHoursViewModel.TotalSubject = timeTableGeneratorModel.TotalSubject;
                subjectAndHoursViewModel.HoursForWeek = timeTableGeneratorModel.HoursForWeek;
                return RedirectToAction("SubjectAndHours", subjectAndHoursViewModel);
            }
                return View();
        }
        public IActionResult SubjectAndHours(SubjectAndHoursViewModel subjectAndHoursViewModel)
        {
            return View(subjectAndHoursViewModel);
        }

    }
}
