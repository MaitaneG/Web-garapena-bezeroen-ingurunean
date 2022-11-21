using Adibidea.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Adibidea.Controllers
{
    public class AgendaController : Controller
    {
        // GET: AgendaController
        public ActionResult Index()
        {
            return View();
        }

        // GET: AgendaController/Details/5
        public ActionResult Details() { 
            Kontaktua kontaktua = new Kontaktua("13456765", "izaskun", "Kortabitarte"); 
            kontaktua.Emaila = "ikortabitarte@uni.eus"; return View(kontaktua); 
        }

        // GET: AgendaController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: AgendaController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: AgendaController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: AgendaController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: AgendaController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: AgendaController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
